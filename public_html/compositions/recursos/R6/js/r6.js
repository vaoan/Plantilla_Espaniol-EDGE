/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




/************************** Eventos de prueba *****************************/



/******************** Eventos de respuesta PLANTILLA **********************/

$("body").on("EDGE_Recurso_sendPreviousData", function (evt) {
    var stage = $(evt.sym.getComposition().getStage().ele);
    stage.prop("ed_attempts", evt.attempts);
});

$("body").on("EDGE_Recurso_postSubmitApplied", function (evt) {
    var stage = $(evt.sym.getComposition().getStage().ele);
    stage.prop("ed_attempts", evt.attempts);
});

/********************** Eventos interno de Actividad **********************/

$("body").on("EDGE_Plantilla_StartTimer", function (evt) {
    startTimer(evt.sym);
});

$("body").on("EDGE_Container_loaded", function (evt) {
    var stage = $(evt.sym.getComposition().getStage().ele);
    var identify = stage.prop("ed_identify");

    inicializarTimer(evt.sym);

    var objEvt = {
        type: "EDGE_Plantilla_creationComplete",
        sym: evt.sym,
        identify: identify
    };

    send_interactions(identify, objEvt, "created");
});

/********************* Eventos de ENVIO a la PLANTILLA ********************/

$("body").on("EDGE_Actividad_Submit", function (evt) {
    var stage = $(evt.sym.getComposition().getStage().ele);
    var identify = stage.prop("ed_identify");
    stopTimer(evt.sym);

    var result = check_every_answer();

    var objEvt = {
        type: "EDGE_Plantilla_submitApplied",
        interactionType: "other",
        question: "R6",
        answer: EDGE_Plantilla.temp_scorm,
        results: result,
        attempts: stage.prop("ed_attempts"),
        attempts_limit: EDGE_Plantilla.config.default.limit_attemps,
        timer: evt.timer,
        sym: evt.sym,
        identify: identify
    };

    $("body").trigger(objEvt);
});

function check_every_answer() {
    var boolRespuesta = false;

    $.each(EDGE_Plantilla.config.default.default_page, function (key, value) {
        var pagina = EDGE_Plantilla.config.paginas[value];
        var stage = EDGE_Plantilla.config.paginas[value].stage;


        $("iframe", buscar_sym(EDGE_Plantilla.plantilla_sym, pagina.sym, true))[0]
                .contentWindow.$("body").trigger({type: "EDGE_Recurso_Submit", sym: stage});
    });

    $.each(EDGE_Plantilla.temp_scorm, function (key, value) {

    });

    return boolRespuesta ? "correct" : "incorrect";
}

function reload_pages() {
    if (typeof EDGE_Plantilla.config.default.default_page === "string") {
        mostrar_pagina(EDGE_Plantilla.config.default.default_page);
    } else {
        $.each(EDGE_Plantilla.config.default.default_page, function (key, value) {
            mostrar_pagina(value);
        });
    }

    EDGE_Plantilla.debug ? console.log("****************** ENDED RELOAD ********************") : false;
}
