$('body').on('ed_init_data', function (evt) {
    $.getJSON('json/config.json', function (json_content) {

        var stage = $(evt.sym.getComposition().getStage().ele);
        stage.prop('ed_json_property_object', json_content);

        console.log(json_content);

        

        parent.$(parent.document).trigger({
            type: 'EDGE_Plantilla_creationComplete',
            sym: evt.sym
        });

    });
});


$('body').on('EDGE_Recurso_sendPreviousData EDGE_Recurso_postSubmitApplied', function (evt)
{
    console.log("EVENTO!!!!", evt);
    var stage = $(evt.sym.getComposition().getStage().ele);

    if (!isEmpty(evt.previous_data))
    {
        //console.log(evt.previous_data);
        $.each(evt.previous_data, function (key, value) {
            evt.sym.$('text_' + (key)).find('input').val(value);
        });
    }

    if (!isEmpty(evt.block))
    {
        //Debe bloquear la actividad
        if (evt.block) {
            stage.prop('ed_blocked', true);
            block_every_text(evt.sym);
        }
    }

    stage.prop('ed_attempts', evt.attempts);

});

function block_every_text(sym)
{
    var json_stage = $(sym.getComposition().getStage().ele).prop('ed_json_property_object');

    $.each(json_stage.preguntas, function (key) {
        sym.$('text_' + (key)).find('input[type="text"]').prop('readonly', 'readonly');
        sym.$('text_' + (key)).find('input[type="text"]').attr('readonly', 'readonly');
    });
}

$('body').on('ed_check_activity', function (evt) {

    var stage = $(evt.sym.getComposition().getStage().ele);
    var json_stage = stage.prop("ed_json_property_object");

    var retorno_datos = {
        type: "EDGE_Plantilla_submitApplied",
        interactionType: "fill-in",
        sym: evt.sym,
        correct_anserws: json_stage.preguntas,
        answer: {},
        position_which_is_right: {},
        attempts: stage.prop("ed_attempts"),
        json: json_stage
    };

    if (stage.prop('ed_blocked')) {
        return;
    }

    var preguntas = 0;
    var correctas = 0;

    $.each(json_stage.preguntas, function (i, value) {
        //retorno_datos.correct_anserws[i] = json_stage.preguntas[i].ed_palabra;
        retorno_datos.answer[i] = evt.sym.$('text_' + (i)).find('input[type="text"]').val();
        preguntas++;
        //console.log(json_stage.preguntas[i]);
        if (evt.sym.$('text_' + (i)).find('input[type="text"]').val() === json_stage.preguntas[i].ed_palabra) {
            //console.info("This is correct");
            retorno_datos.position_which_is_right[i] = true;
            correctas++;
        } else {
            //No debe sumar puntos si su respuesta es incorrecta
            //console.info("This is INCORRECT");
            retorno_datos.position_which_is_right[i] = false;
        }
    });


    var division = correctas / preguntas;
    var multiplicacion = Math.round(division * 100);

    retorno_datos.user_score = multiplicacion;
    retorno_datos.minimun_score = json_stage.feedback.config_score.min_score_user;


    if (retorno_datos.user_score >= retorno_datos.minimun_score) {
        retorno_datos.results = "correct";
    } else {
        retorno_datos.results = "incorrect";
    }

    //console.log(retorno_datos);

    parent.$(parent.document).trigger(retorno_datos);
    //return retorno_datos;
});