$('body').on('ed_send_data', function (evt) {
    $.getJSON('config.json', function (json_content) {

        var stage = $(evt.sym.getComposition().getStage().ele);
        stage.prop('ed_json_property_object', json_content);

        console.log(json_content);

        $.each(json_content.preguntas, function (pos, json_palabra) {
            //console.log("SHOW ME THE POS " + pos + " _space_ " + json_palabra.ed_palabra);

            var element = $("<input/>", {
                type: "text"
            });
            element.css({
                width: evt.sym.$('text_' + (pos)).find('p').css("width"),
                height: evt.sym.$('text_' + (pos)).find('p').css("height"),
                //"font-family" : "",
                "text-align": "center"
            });

            evt.sym.$('text_' + (pos)).html(element);
        });


        parent.$(parent.document).trigger({
            type: 'EDGE_Plantilla_creationComplete',
            sym: evt.sym
        });

    });
});


$('body').on('EDGE_Recurso_sendPreviousData', function (evt)
{
    var stage = $(evt.sym.getComposition().getStage().ele);

    if (typeof (evt.previous_data) !== "undefined")
    {
        //console.log(evt.previous_data);
        $.each(evt.previous_data, function (key, value) {
            evt.sym.$('text_' + (key)).find('input').val(value);
        });
    }

    if (evt.block)
    {
        //Debe bloquear la actividad
        stage.prop('ed_blocked', true);
        block_every_text(evt.sym);
    }
    else
    {
        //nada
    }

    if (typeof (evt.attempts) !== "undefined")
    {
        stage.prop('ed_attemps', evt.attempts);
        //console.log(evt.attempts);
    }

});

function block_every_text(sym)
{
    var json_stage = $(sym.getComposition().getStage().ele).prop('ed_json_property_object');
    
    $.each(json_stage.preguntas, function(key){
        sym.$('text_' + (key)).find('input[type="text"]').prop('readonly', 'readonly');
        sym.$('text_' + (key)).find('input[type="text"]').attr('readonly', 'readonly');
    });
}

$('body').on('ed_check_activity', function (evt) {

    var stage = $(evt.sym.getComposition().getStage().ele);
    var json_stage = stage.prop("ed_json_property_object");
    var activity_score = 0;

    var retorno_datos = {type: "EDGE_Plantilla_submitApplied", interactionType: "fill-in"};
    retorno_datos.answer = {};
    retorno_datos.position_which_is_right = {};
    retorno_datos.correct_anserws = json_stage.preguntas;

    if (stage.prop('ed_blocked')) {
        return;
    }



    $.each(json_stage.preguntas, function (i, value) {
        //retorno_datos.correct_anserws[i] = json_stage.preguntas[i].ed_palabra;
        retorno_datos.answer[i] = evt.sym.$('text_' + (i)).find('input[type="text"]').val();
        //console.log(json_stage.preguntas[i]);
        if (evt.sym.$('text_' + (i)).find('input[type="text"]').val() === json_stage.preguntas[i]) {
            //console.info("This is correct");
            activity_score = activity_score + 1;
            retorno_datos.position_which_is_right[i] = true;
        } else {
            //No debe sumar puntos si su respuesta es incorrecta
            //console.info("This is INCORRECT");
            retorno_datos.position_which_is_right[i] = false;
        }
    });


    var division = activity_score / json_stage.preguntas.length;
    var multiplicacion = Math.round(division * 100);

    retorno_datos.evt = evt;
    retorno_datos.json = json_stage;
    retorno_datos.user_score = multiplicacion;
    retorno_datos.minimun_score = json_stage.feedback.config_score.min_score_user;
    
    if(retorno_datos.user_score >= retorno_datos.minimun_score){
        retorno_datos.results = "correct";
    }else{
        retorno_datos.results = "incorrect";
    }
    
    //console.log(retorno_datos);

    parent.$(parent.document).trigger(retorno_datos);
    //return retorno_datos;
});