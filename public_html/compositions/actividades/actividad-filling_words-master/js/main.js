$('body').on('ed_send_data', function (evt) {
    $.getJSON('config.json', function (json_content) {

        var stage = $(evt.sym.getComposition().getStage().ele);
        stage.prop('ed_json_property_object', json_content);

        $.each(json_content.preguntas, function (pos, json_palabra) {
            //console.log("SHOW ME THE POS " + pos + " _space_ " + json_palabra.ed_palabra);

            var element = $("<input/>", {
                type: "text"
            });
            element.css({
                width: evt.sym.$('text_' + (pos + 1)).find('p').css("width"),
                height: evt.sym.$('text_' + (pos + 1)).find('p').css("height"),
                //"font-family" : "",
                "text-align": "center"
            });

            evt.sym.$('text_' + (pos + 1)).html(element);
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
        for (var i = evt.previous_data.length - 1; i >= 0; i--)
        {
            evt.sym.$('text_' + (i + 1)).find('input').val("" + evt.previous_data[i]);
        }
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
    for (var i = json_stage.preguntas.length - 1; i >= 0; i--)
    {
        sym.$('text_' + (i + 1)).find('input[type="text"]').prop('readonly', 'readonly');
        sym.$('text_' + (i + 1)).find('input[type="text"]').attr('readonly', 'readonly');
    }
}

$('body').on('ed_check_activity', function (evt) {

    var stage = $(evt.sym.getComposition().getStage().ele);
    var json_stage = stage.prop("ed_json_property_object");
    var activity_score = 0;

    var retorno_datos = {type: "EDGE_Plantilla_submitApplied"};
    retorno_datos.user_answer = [];
    retorno_datos.position_which_is_right = [];
    retorno_datos.correct_anserws = json_stage.preguntas;

    if (stage.prop('ed_blocked')) {
        return;
    }

    for (var i = json_stage.preguntas.length - 1; i >= 0; i--) {
        retorno_datos.correct_anserws[i] = json_stage.preguntas[i].ed_palabra;
        retorno_datos.user_answer[i] = evt.sym.$('text_' + (i + 1)).find('input[type="text"]').val();
        //console.log(json_stage.preguntas[i]);
        if (evt.sym.$('text_' + (i + 1)).find('input[type="text"]').val() === json_stage.preguntas[i]) {
            //console.info("This is correct");
            activity_score = activity_score + 1;
            retorno_datos.position_which_is_right[i] = true;
        } else {
            //No debe sumar puntos si su respuesta es incorrecta
            //console.info("This is INCORRECT");
            retorno_datos.position_which_is_right[i] = false;
        }
    }

    division = activity_score / json_stage.preguntas.length;
    multiplicacion = Math.round(division * 100);

    retorno_datos.evt = evt;
    retorno_datos.json = json_stage;
    retorno_datos.user_score = multiplicacion;
    retorno_datos.minimun_score = json_stage.feedback.config_score.min_score_user;


    //Revisar si el puntaje del usuario es suficiente para pasar.
    if (multiplicacion >= json_stage.feedback.config_score.min_score_user) {
        $.each(json_stage.feedback.correcto, function (pos, item) {
            if (multiplicacion > parseInt(pos)) {
                retorno_datos.feedback = item;
                return false;
            } else {
                console.error("No se encontró retroalimentación válida ", multiplicacion);
            }
        });
    } else {
        //If de intentos.
        /*var intentos_usuario = stage.prop('ed_attemps',evt.attempts);
         if (typeof(json_stage.feedback.attempts[intentos_usuario]) != "undefined") {
         retorno_datos.feedback = json_stage.feedback.attempts[intentos_usuario];
         intentos_usuario = intentos_usuario + 1;
         evt.sym.$("contenedor_padre").prop('ed_user_attemps', intentos_usuario);
         $.each(json_stage.words, function(pos, json_word) {
         position_array[pos] = json_word.word;
         });
         for (var i = position_array.length - 1; i >= 0; i--) {
         j = Math.floor(Math.random() * (i + 1));
         temp = position_array[i];
         position_array[i] = position_array[j];
         position_array[j] = temp;
         $("ul#list_sort li:nth-child(" + (i + 1) + ")", evt.sym.$('contenedor_padre')).html(position_array[i]);
         }
         } else {
         $.each(json_stage.feedback.incorrecto, function(pos, item) {
         console.log(multiplicacion + " " + parseInt(pos))
         if (multiplicacion >= parseInt(pos)) {
         retorno_datos.feedback = item;
         return false;
         } else {
         console.error("No se encontró retroalimentación inválida ", multiplicacion);
         }
         });
         }*/
    }
    //console.log(retorno_datos);

    parent.$(parent.document).trigger(retorno_datos);
    //return retorno_datos;
});