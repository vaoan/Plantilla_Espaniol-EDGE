/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




/************************** Eventos de inicializado *****************************/

$("body").on("EDGE_Recurso_promiseCreated", function (evt) {
    inicializar(evt.sym);
});

function inicializar(sym) {
    //inicializarTimer(sym);

    console.log("INTERACTION UTILITIES CREATED");
    //parent.$(parent.document).trigger(objEvt);
    
    objEvt = {
        type: "EDGE_Container_loaded",
        sym: sym
    };
    
    $("body").trigger(objEvt);
}

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

    if (!isEmpty(evt.timer)) {

    }

    send_interactions(identify, objEvt, result);
});

function check_every_answer() {
    $.each(EDGE_Plantilla.config.default.default_page, function (key, value) {
        var pagina = EDGE_Plantilla.config.paginas[value];
        var stage = EDGE_Plantilla.config.paginas[value].stage;

        $("iframe", buscar_sym(EDGE_Plantilla.plantilla_sym, pagina.sym, true))[0]
                .contentWindow.$("body").trigger({type: "EDGE_Recurso_Submit", sym: stage});
    });

    var respuestas = {};
    var result = "correct";

    $.each(EDGE_Plantilla.config.default.default_page, function (key, value) {
        var page_respuestas = {};
        var pagina = EDGE_Plantilla.config.paginas[value];
        if (pagina.type === "actividad") {
            $.each(EDGE_Plantilla.temp_scorm, function (i, valor) {
                if (i.startsWith(pagina.recurso)) {
                    if (valor.estado === "correct") {
                        page_respuestas[i] = "correct";
                    } else {
                        page_respuestas[i] = "incorrect";
                        result = "incorrect";
                    }
                }
            });
        }

        if (isEmpty(page_respuestas)) {
            page_respuestas[pagina.recurso + "0000"] = "incorrect";
        }

        respuestas = merge_options(respuestas, page_respuestas);
    });

    return respuestas;
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
