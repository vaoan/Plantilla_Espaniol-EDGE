/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {

    /************************** Eventos de prueba *****************************/

    $("body").on("EDGE_Plantilla_creationComplete", function (evt) {
        var objEvt = {
            type: "EDGE_Recurso_sendPreviousData",
            previous_data: read_interactions(evt.identify),
            sym: evt.sym,
            block: false,
            attempts: 0
        };

        objEvt = merge_options(objEvt, read_extra_data(evt));
        send_interactions(evt.identify, objEvt, "created");
    });

    $("body").on("EDGE_Plantilla_submitApplied", function (evt) {
        var objEvt = {
            type: "EDGE_Recurso_postSubmitApplied",
            sym: evt.sym,
            block: false,
            attempts: 0
        };
    });

    /******************** Eventos de respuesta PLANTILLA **********************/

    $("body").on("EDGE_Recurso_sendPreviousData", function (evt) {

    });

    $("body").on("EDGE_Recurso_postSubmitApplied", function (evt) {

    });

    /********************** Eventos interno de Actividad **********************/

    $("body").on("EDGE_Plantilla_StartTimer", function (evt) {
        startTimer(evt.sym);
    });

    $("body").on("EDGE_Container_loaded", function (evt) {
        var stage = $(evt.sym.getComposition().getStage().ele);
        var identify = stage.prop("ed_identify");
        inicializarTimer(evt.sym);
        $("body").trigger({
            type: "EDGE_Plantilla_creationComplete",
            sym: evt.sym,
            identify: identify
        });
    });

    /********************* Eventos de ENVIO a la PLANTILLA ********************/

    $("body").on("EDGE_Actividad_Submit", function (evt) {
        var stage = $(evt.sym.getComposition().getStage().ele);
        var identify = stage.prop("ed_identify");
        stopTimer(evt.sym);

        var objEvt = {
            type: "EDGE_Plantilla_submitApplied",
            interactionType: "other",
            question: "R6",
            answer: EDGE_Plantilla.temp_scorm,
            results: resultado,
            attempts: intentos_previos,
            attempts_limit: EDGE_Plantilla.config.default.limit_attemps,
            timer: timerObj,
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
})();