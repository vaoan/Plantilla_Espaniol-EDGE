$('body').on('EDGE_Recurso_promiseCreated', function(evt)
{
    ed_send_data(evt.sym);
});

var outer_stage;

function ed_send_data(sym)
{
    $.getJSON('config.json', function(json_content) {

        var stage = $(sym.getComposition().getStage().ele);
        outer_stage = $(sym.getComposition().getStage().ele);
        stage.prop('ed_json_property_object', json_content);
        stage.prop('ed_user_attempts',json_content.attempts);
        stage.prop('ed_sym',sym);

        $.each(json_content.palabras_a_escribir, function(pos, json_palabra) {

            var element = $("<input/>", {
                type: "text"
            });
            element.css(stage.prop('ed_json_property_object').css_config);
            element.css({
                width: sym.$('text_' + (pos + 1)).find('p').css("width"),
                height: sym.$('text_' + (pos + 1)).find('p').css("height")
            });

            sym.$('text_' + (pos + 1)).html(element);
        });

        parent.$(parent.document).trigger({
            type: 'EDGE_Plantilla_creationComplete',
            sym: sym,
            identify: stage.prop('ed_identify')
        });

        $('input[type="text"]').attr("onkeyup","send_on_change()");

        if(sym.$("btn_submit").length>0)
        {
            sym.getSymbol("btn_submit").play("desactivado");            
        }

        stage.prop('ed_blocked',true);
    });    
}

function send_on_change()
{
    var sym = outer_stage.prop('ed_sym');
    var json_content = outer_stage.prop("ed_json_property_object");
    var retorno_datos = {};
    retorno_datos.attempts_to = outer_stage.prop('ed_user_attempts');
    retorno_datos.user_answer = [];
    retorno_datos.position_which_is_right = [];
    retorno_datos.correct_answers = json_content.palabras_a_escribir;
    retorno_datos.isReady = true;

    for (var i = json_content.palabras_a_escribir.length - 1; i >= 0; i--)
    {
        retorno_datos.user_answer[i] = sym.$('text_' + (i + 1)).find('input[type="text"]').val();
        for (var j = json_content.palabras_a_escribir[i].ed_palabra.length - 1; j >= 0; j--)
        {
            if (sym.$('text_' + (i + 1)).find('input[type="text"]').val() == json_content.palabras_a_escribir[i].ed_palabra[j])
            {
                retorno_datos.position_which_is_right[i] = true;
                retorno_datos.final_stage = "correct";
                break;
            }
            else
            {
                retorno_datos.position_which_is_right[i] = false;
                retorno_datos.final_stage = "incorrect";
            }
        };
    }
    retorno_datos.sym = sym; 
    retorno_datos.json = json_content;

    for (var i = json_content.palabras_a_escribir.length - 1; i >= 0; i--)
    {
        console.log(retorno_datos.user_answer);
        if(retorno_datos.user_answer.length == json_content.palabras_a_escribir.length)
        {
            if(retorno_datos.user_answer[i] == "")
            {
                retorno_datos.isReady = false;
                break;
            }
        }
    };

    if(retorno_datos.isReady == true)
    {
        if(sym.$("btn_submit").length>0)
        {
            sym.getSymbol("btn_submit").playReverse("normal");
        }

        outer_stage.prop('ed_blocked',false);        
    }
    else
    {
        if(sym.$("btn_submit").length>0)
        {
            sym.getSymbol("btn_submit").play("desactivado");
        }

        outer_stage.prop('ed_blocked',false);
    }

    parent.$(parent.document).trigger(
    {
        type: "EDGE_Plantilla_onChange",
        interactionType: "fill-in",
        json: json_content,
        answer: retorno_datos.user_answer,
        results: retorno_datos.final_stage,
        position_which_is_right: retorno_datos.position_which_is_right,
        attempts: retorno_datos.attempts_to,
        attempts_limit: json_content.attempts,
        isReady: retorno_datos.isReady,
        sym: outer_stage.prop('ed_sym'),
        identify: outer_stage.prop("ed_identify")
    });
}


$('body').on("EDGE_Plantilla_creationComplete", function (evt)
{
    //Contenido de prueba
    /*$('body').trigger({
        type: "EDGE_Recurso_onChange",
        attempts: 2,
        sym: evt.sym,
        submit_block: "activado"
        block: true,
        previous_data: ["value_2", "value_1_2", "ok"],        
        show_answers: false,        
        identify: {}        
    });*/
});

$('body').on('EDGE_Recurso_sendPreviousData EDGE_Recurso_postSubmitApplied EDGE_Recurso_onChange',function(evt)
{
    console.log(evt);
    var stage = $(evt.sym.getComposition().getStage().ele);
    var json_content = stage.prop('ed_json_property_object');

    if(typeof(evt.previous_data) != "undefined")
    {
        for (var i = evt.previous_data.length - 1; i >= 0; i--)
        {
            evt.sym.$('text_' + (i + 1)).find('input').val(""+evt.previous_data[i]);            
        };
    }

    if(evt.block)
    {
        //Debe bloquear la actividad
        stage.prop('ed_blocked',true);
        block_every_text(evt.sym);
    }

    if(typeof(evt.attempts) != "undefined")
    {
        stage.prop('ed_user_attempts',evt.attempts);
    }

    if(evt.reset)
    {
        for (var i = json_content.palabras_a_escribir.length - 1; i >= 0; i--)
        {  
            evt.sym.$('text_' + (i + 1)).find('input[type="text"]').val("");
        }
    }

    if(evt.show_answers)
    {
        for (var i = json_content.palabras_a_escribir.length - 1; i >= 0; i--)
        {  
            evt.sym.$('text_' + (i + 1)).find('input[type="text"]').val(""+json_content.palabras_a_escribir[i].ed_palabra[0]);
        }
    }

    switch(evt.submit_block)
    {
        case "desactivado":
            try
            {
                if(sym.$("btn_submit").length>0)
                {
                    evt.sym.getSymbol("btn_submit").play("desactivado");                    
                }

                outer_stage.prop('ed_blocked',true);
            }
            catch(err)
            {
                //console.log(err);
            }            
            break;
        case "activado":          
            try
            {
                if(sym.$("btn_submit").length>0)
                {
                    evt.sym.getSymbol("btn_submit").playReverse("normal");
                }

                outer_stage.prop('ed_blocked',false);
            }
            catch(err)
            {
                //alert(err);
            }
            break;
        default:          
            console.error("Está en default");
    }
});

function block_every_text(sym)
{
    var json_stage = $(sym.getComposition().getStage().ele).prop('ed_json_property_object');
    for (var i = json_stage.palabras_a_escribir.length - 1; i >= 0; i--)
    {
        sym.$('text_'+(i+1)).find('input[type="text"]').prop('readonly','readonly');
        sym.$('text_'+(i+1)).find('input[type="text"]').attr('readonly','readonly');
    }
}

function EDGE_Recurso_Submit(sym)
{
    $('body').trigger({
        type: 'EDGE_Recurso_Submit',
        sym: sym
    });
}

$('body').on('EDGE_Recurso_Submit', function(evt)
{
    do_submit(evt.sym);
});

function do_submit(sym)
{
    var stage = $(sym.getComposition().getStage().ele);
    var json_content = stage.prop("ed_json_property_object");
    var retorno_datos = {};
    retorno_datos.attempts_to = stage.prop('ed_user_attempts');
    retorno_datos.user_answer = [];
    retorno_datos.position_which_is_right = [];
    retorno_datos.correct_answers = json_content.palabras_a_escribir;
    retorno_datos.isReady = true;

    if (stage.prop('ed_blocked')) {
        return;
    }
    console.log("After this");
    for (var i = json_content.palabras_a_escribir.length - 1; i >= 0; i--)
    {          
        if(sym.$('text_' + (i + 1)).find('input[type="text"]').val() != "")
        {
            retorno_datos.user_answer[i] = sym.$('text_' + (i + 1)).find('input[type="text"]').val();
        }
        
        for (var j = json_content.palabras_a_escribir[i].ed_palabra.length - 1; j >= 0; j--)
        {
            if (sym.$('text_' + (i + 1)).find('input[type="text"]').val() == json_content.palabras_a_escribir[i].ed_palabra[j])
            {
                retorno_datos.position_which_is_right[i] = true;
                retorno_datos.final_stage = "correct";
                break;
            }
            else
            {
                retorno_datos.position_which_is_right[i] = false;
                retorno_datos.final_stage = "incorrect";
            }
        };
    }
    retorno_datos.sym = sym; 
    retorno_datos.json = json_content;

    for (var i = json_content.palabras_a_escribir.length - 1; i >= 0; i--)
    {
        if(retorno_datos.user_answer.length == json_content.palabras_a_escribir.length)
        {
            if(retorno_datos.user_answer[i] == "")
            {
                retorno_datos.isReady = false;
                break;
            }
        }
    };

    var ed_obj_evt = 
    {
        type: "EDGE_Plantilla_submitApplied",
        interactionType: "fill-in",
        json: json_content,
        answer: retorno_datos.user_answer,
        isReady: retorno_datos.isReady,
        results: retorno_datos.final_stage,
        position_which_is_right: retorno_datos.position_which_is_right,
        attempts: retorno_datos.attempts_to,
        attempts_limit: json_content.attempts,
        sym: sym,
        identify: stage.prop("ed_identify")
    };
    parent.$(parent.document).trigger(ed_obj_evt);
    return retorno_datos;
}