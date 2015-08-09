/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global EC */

//<editor-fold defaultstate="collapsed" desc="Global values">
EDGE_Plantilla = {
    allow_popups: true,
    play_general_sound: true,
    plantilla_sym: null,
    debug: true,
    base_audio: new Audio('sounds/snap.mp3'),
    config: null,
    popup_on_show: null,
    recurso_on_show: null,
    portada_on_show: null,
    basic_contenedor_name: {
        "contenedor": ["contenedor_home"],
        "base_contenedor": ["back_contenedor_home"]
    },
    basic_contenedor_popup: ["overlay", "container_overlay"],
    basic_contenedor_portada: ["contenedor_portada"],
    button_menutools: {
        fullscreen: "btn_full",
        creditos: "btn_creditos",
        ayuda: "btn_ayuda",
        audio: "btn_audio",
        info: "btn_info",
        accesibilidad: "btn_accesibilidad"
    },
    button_nav: {
        R1: {
            "button": ["btnR_1"],
            "image": ["rec_1"]
        },
        R2: {
            "button": ["btnR_2"],
            "image": ["rec_2"]
        },
        R3: {
            "button": ["btnR_3"],
            "image": ["rec_3"]
        },
        R4: {
            "button": ["btnR_4"],
            "image": ["rec_4"]
        },
        R5: {
            "button": ["btnR_5"],
            "image": ["rec_5"]
        },
        R6: {
            "button": ["btnR_6"],
            "image": ["rec_6"]
        },
        R7: {
            "button": ["btnR_7"],
            "image": ["rec_7"]
        },
        learning: {
            "button": ["btn_puntoApren"],
            "image": ["punto_A"]
        },
        vocabulario: {
            "button": ["btn_vocabulario2"],
            "image": ["vocabulario"]
        }
    },
    temp_scorm: {
    },
    temp_scorm_suspendData: {
    }

};
ion.sound({
    sounds: [
        {
            name: "snap"
        },
        {
            name: "button_click",
            volume: 0.2
        },
        {
            name: "staple_gun",
            volume: 0.3,
            preload: false
        }
    ],
    volume: 0.51,
    path: "sounds/",
    preload: true
});
//</editor-fold>

(function () {

    //<editor-fold defaultstate="collapsed" desc="Handle windows">
    function handle_popup(boolShow) {
        var sym = EDGE_Plantilla.plantilla_sym;
        var copy = EDGE_Plantilla.basic_contenedor_popup;
        var temp_arr = [];

        $.each(copy, function (index, value) {
            temp_arr.push(value);
            var sym_element = buscar_sym(sym, temp_arr, true);

            EDGE_Plantilla.debug ? console.log("HANDLE", sym_element) : false;
            if (boolShow) {
                sym_element.show();
            } else {
                sym_element.hide();
            }
            EDGE_Plantilla.debug ? console.log("COPY contenedor pop", index) : false;
        });
    }

    function handle_portada(boolShow) {
        var sym = EDGE_Plantilla.plantilla_sym;
        var copy = EDGE_Plantilla.basic_contenedor_portada;
        var temp_arr = [];

        $.each(copy, function (index, value) {
            temp_arr.push(value);
            var sym_element = buscar_sym(sym, temp_arr, true);

            EDGE_Plantilla.debug ? console.log("HANDLE", sym_element) : false;
            if (boolShow) {
                sym_element.show();
            } else {
                sym_element.hide();
            }
            EDGE_Plantilla.debug ? console.log("COPY contenedor PORTADA", index) : false;
        });
    }

    function handle_style_nav(boolShow) {
        var sym = EDGE_Plantilla.plantilla_sym;

        $.each(EDGE_Plantilla.button_nav, function (index, valor) {
            $.each(valor, function (key, value) {
                var sym_element;
                if (typeof value !== "string") {
                    sym_element = buscar_sym(sym, value, true);
                } else {
                    sym_element = sym.$(value);
                }
                //console.log("STYLE NAV", sym_element, boolShow);

                if (boolShow) {
                    sym_element.show();
                } else {
                    sym_element.hide();
                }
            });
        });

        $.each(EDGE_Plantilla.basic_contenedor_name, function (key, value) {
            var sym_contenedor = buscar_sym(sym, value, true);
            if (boolShow) {
                sym_contenedor.show();
            } else {
                sym_contenedor.hide();
            }
        });
    }
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="Mostrar datos">
    function mostrar_pagina(strPagina, objRetro) {
        //EDGE_Plantilla.config
        var sym = EDGE_Plantilla.plantilla_sym;
        EDGE_Plantilla.debug ? console.log(strPagina) : false;
        var sym_contenedor = null;

        if (!EDGE_Plantilla.config.paginas.hasOwnProperty(strPagina)) {
            console.error(strPagina, EDGE_Plantilla.config.paginas, "PAGINA No encontrado");
            return false;
        }
        var pagina = EDGE_Plantilla.config.paginas[strPagina];
        EDGE_Plantilla.debug ? console.log(pagina) : false;

        if (!isEmpty(pagina.symbols)) {
            if (!isEmpty(objRetro)) {
                $.each(objRetro, function (index, value) {
                    if (!pagina.symbols.hasOwnProperty(index)) {
                        delete pagina.symbols[index];
                    }
                });
            }
        } else {
            objRetro = null;
        }

        EDGE_Plantilla.debug ? console.log("START DETECTING", EDGE_Plantilla) : false;

        switch (pagina.type) {
            case "portada":
                if(!EDGE_Plantilla.allow_popups) return;
                handle_style_nav(false);
                if(!isEmpty(pagina.sym)){
                    sym_contenedor = buscar_sym(sym, pagina.sym);
                }else{
                    sym_contenedor = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_portada);
                }
                EDGE_Plantilla.portada_on_show = pagina;
                handle_portada(true);
                break;
            case "popup_mini":
            case "popup_full":
                if(!EDGE_Plantilla.allow_popups) return;
                if(!isEmpty(pagina.sym)){
                    sym_contenedor = buscar_sym(sym, pagina.sym);
                }else{
                    sym_contenedor = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_popup);
                }
                EDGE_Plantilla.popup_on_show = pagina;
                handle_popup(true);
                break;
            default:
                if(!isEmpty(pagina.sym)){
                    sym_contenedor = buscar_sym(sym, pagina.sym);
                }else{
                    sym_contenedor = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_name.contenedor);
                }
                EDGE_Plantilla.recurso_on_show = pagina;
                break;
        }

        EDGE_Plantilla.debug ? console.log("SYM de carga GENERAL", sym_contenedor, pagina) : false;

        EDGE_Plantilla.debug ? console.log(strPagina, objRetro, pagina) : false;

        EDGE_Plantilla.debug ? console.log(EDGE_Plantilla.config.default.url_pages + pagina.url, sym_contenedor) : false;

        // Load Third Composition and inject data
        var promise = EC.loadComposition(EDGE_Plantilla.config.default.url_pages + pagina.url,
                sym_contenedor);

        promise.done(function (comp) {
            var stage = comp.getStage();
            $(stage.ele).prop("ed_identify", pagina);
            //console.log(stage);
            if (!isEmpty(objRetro)) {
                $.each(objRetro, function (index, value) {
                    var arrSymSearch = pagina.symbols[index];
                    var symFound = buscar_sym(stage, arrSymSearch);
                    console.log(typeof value);
                    if (typeof value === "string") {
                        $(symFound.ele).find("p").text(value);
                    }
                });
            }
        });

    }
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="generic functions">
    function getRemote() {
        return $.ajax({
            type: "GET",
            dataType: "json",
            url: "json/config.json",
            async: false
        });
    }

    function play_buttons(evt) {
        if (EDGE_Plantilla.play_general_sound) {
            var temp = EDGE_Plantilla.base_audio.cloneNode();
            temp.play("snap");
        }
    }

    function fullscreen() {
        if ($.fullscreen.isFullScreen()) {
            $.fullscreen.exit();
        } else {
            $("html").fullscreen();
        }
    }

    function buscar_sym(sym, arrSymSearch, boolJQUERY) {
        var temp = sym;
        $.each(arrSymSearch, function (index, value) {
            //EDGE_Plantilla.debug ? console.log(temp, index, value, arrSymSearch) : false;

            if (!isEmpty(boolJQUERY) && index === arrSymSearch.length - 1) {
                temp = temp.$(value);
            } else {
                temp = temp.getSymbol(value);
            }

        });
        //EDGE_Plantilla.debug ? console.log(temp, arrSymSearch, boolJQUERY) : false;
        return temp;
    }

    $("body").on("EDGE_Container_loaded", function (evt) {
        EDGE_Plantilla.plantilla_sym = evt.sym;
        EDGE_Plantilla.config = getRemote().responseJSON;

        var url = $(location).attr('href');

        EDGE_Plantilla.config.default.url_pages = url.substring(0, url.lastIndexOf('/')) + "/" + EDGE_Plantilla.config.default.url_pages;
        /*
        document.body.style.background = "url(http://www.globalasia.com/wp-content/uploads/2014/03/malaga.jpg) 50% 50% / cover no-repeat gray";
        $("body").css({
            "background-size": "cover",
            "background-repeat": "no-repeat",
            "background-position": "center center"
        });
        
        //*/
        
        if(typeof EDGE_Plantilla.config.default.default_page === "string"){
            mostrar_pagina(EDGE_Plantilla.config.default.default_page);
        }else{
            $.each(EDGE_Plantilla.config.default.default_page, function(key, value){
                mostrar_pagina(value);
            });
        }
        
        EDGE_Plantilla.debug ? console.log("****************** ENDED LOAD ********************") : false;

        //EDGE_Plantilla.debug ? console.log(EDGE_Plantilla.config) : false;
    });

    $(document).on("EDGE_Plantilla_ClosePopup", function (evt) {
        play_buttons();
        handle_popup(false);
        EDGE_Plantilla.debug ? console.log("close") : false;
        EDGE_Plantilla.popup_on_show = null;
    });

    $(document).on("EDGE_Plantilla_ClosePortada", function (evt) {
        var pagina = EDGE_Plantilla.portada_on_show;
        play_buttons();
        handle_portada(false);
        handle_style_nav(true);
        EDGE_Plantilla.debug ? console.log("close") : false;
        EDGE_Plantilla.popup_on_show = null;

        if (!isEmpty(pagina.al_cerrar)) {
            !isEmpty(pagina.al_cerrar.cargar) ?
                    mostrar_pagina(pagina.al_cerrar.cargar) : false;
            !isEmpty(pagina.al_cerrar.click) ?
                    console.log(evt.sym.$(pagina.al_cerrar.click)) : false;
        }

        //console.log("MOSTRAR CLICK ",evt.sym.getSymbol(EDGE_Plantilla.button_nav.R2));
        //evt.sym.$(EDGE_Plantilla.button_nav.R2).click();
    });
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="Controles de la plantilla">
    $("body").on("EDGE_Self_Plantilla_ClickMenuTools", function (evt) {
        EDGE_Plantilla.debug ? console.log(evt) : false;
        EDGE_Plantilla.debug ? console.log(evt.evt.currentTarget.id) : false;
        switch (evt.evt.currentTarget.id) {
            case "Stage_" + EDGE_Plantilla.button_menutools.fullscreen:
                fullscreen();
                break;
            case "Stage_" + EDGE_Plantilla.button_menutools.creditos:
                mostrar_pagina("creditos");
                break;
            case "Stage_" + EDGE_Plantilla.button_menutools.ayuda:
                mostrar_pagina("ayudas");
                break;
            case "Stage_" + EDGE_Plantilla.button_menutools.audio:
                EDGE_Plantilla.play_general_sound = !EDGE_Plantilla.play_general_sound;
                break;
            case "Stage_" + EDGE_Plantilla.button_menutools.info:
                mostrar_pagina("info");
                break;
            case "Stage_" + EDGE_Plantilla.button_menutools.accesibilidad:
                mostrar_pagina("muy_bien", {mensaje: "¡Esto está BIEN!", titulo: "Excelente"});
                break;
        }

        play_buttons(evt);
    });

    $("body").on("EDGE_Self_Plantilla_ClickNav", function (evt) {
        EDGE_Plantilla.debug ? console.log(evt) : false;
        EDGE_Plantilla.debug ? console.log(evt.evt.currentTarget.id) : false;
        switch (evt.evt.currentTarget.id) {
            case "Stage_" + EDGE_Plantilla.button_nav.R1.button:
                mostrar_pagina("1");
                break;
            case "Stage_" + EDGE_Plantilla.button_nav.R2.button:
                mostrar_pagina("2");
                break;
            case "Stage_" + EDGE_Plantilla.button_nav.R3.button:
                mostrar_pagina("3");
                break;
            case "Stage_" + EDGE_Plantilla.button_nav.R4.button:
                mostrar_pagina("4");
                break;
            case "Stage_" + EDGE_Plantilla.button_nav.R5.button:
                mostrar_pagina("5");
                break;
            case "Stage_" + EDGE_Plantilla.button_nav.R6.button:
                mostrar_pagina("6");
                break;
            case "Stage_" + EDGE_Plantilla.button_nav.R7.button:
                mostrar_pagina("7");
                break;
            default:
                break;
        }
        play_buttons(evt);
    });
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="RECURSOS Y POPUPS">

    /* El POPUP envía un evento a la plantilla informando que ya está creado 
     * y está listo para recibir su estado inicial
     */
    $(document).on("EDGE_Plantilla_CreationCompletePop", function (evt) {
        EDGE_Plantilla.debug ? console.log("listen") : false;
        var popup = EDGE_Plantilla.popup_on_show;
        var sym = EDGE_Plantilla.plantilla_sym;

        var sym_contenedor;

        switch (popup.type) {
            case "portada":
            case "popup_mini":
            case "popup_full":
                sym_contenedor = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_popup);
                break;
            default:
                console.error(popup.type, "POPUP tipo incorrecto");
                return false;
                break;
        }

        EDGE_Plantilla.debug ? console.log(sym_contenedor) : false;

        $('iframe', sym_contenedor.ele)[0].contentWindow.$('body').trigger({
            type: 'EDGE_PopUp_CreationResponse',
            sym: evt.sym,
            identify: EDGE_Plantilla.popup_on_show
        });
    });
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="Actividades CREATED">
    /* El recurso envía un evento a la plantilla informando que ya está creado 
     * y está listo para recibir su estado inicial
     */
    $(document).on("EDGE_Plantilla_creationComplete", function (evt) {
        //var temp_pagina = EDGE_Plantilla.recurso_on_show;
        EDGE_Plantilla.debug ? console.log(evt) : false;
        if(!isEmpty(evt.identify)){
            EDGE_Plantilla.recurso_on_show = evt.identify;
        }

        switch (EDGE_Plantilla.recurso_on_show.actividad) {
            case "drag_drop":
                drag_drop_toscano_created(evt);
                break;
            case "drag_drop_many":
                drag_drop_toscano_created(evt);
                break;
            case "pick_many":
                pick_many_toscano_created(evt);
                break;
            case "filling_blanks":
                filling_blanks_santiago_created(evt);
                break;
            default:
                console.error("Creation inexistente", EDGE_Plantilla.recurso_on_show.actividad);
                break;
        }
    });

    function filling_blanks_santiago_created(evt) {
        var sym = EDGE_Plantilla.plantilla_sym;
        var sym_contenedor = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_name.contenedor);

        var objEvt = {
            type: "EDGE_Recurso_sendPreviousData",
            previous_data: read_interactions(EDGE_Plantilla.recurso_on_show),
            sym: evt.sym,
            block: false,
            attempts: 0
        };

        objEvt = merge_options(objEvt, read_extra_data());

        //console.log(objEvt);

        send_interactions(EDGE_Plantilla.recurso_on_show, objEvt, "created");
    }

    function drag_drop_toscano_created(evt) {
        var sym = EDGE_Plantilla.plantilla_sym;
        var sym_contenedor = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_name.contenedor);

        EDGE_Plantilla.debug ? console.log(evt) : false;
        //EDGE_Plantilla.debug ? console.log($('iframe', sym_contenedor.ele)[0], sym_contenedor) : false;

        // previous_data debe ser interpretado del scorm

        var objEvt = {
            type: "EDGE_Recurso_sendPreviousData",
            block: false,
            previous_data: read_interactions(EDGE_Plantilla.recurso_on_show),
            attempts: 0,
            sym: evt.sym
        };

        objEvt = merge_options(objEvt, read_extra_data());

        if (objEvt.block) {
            objEvt.show_answers = true;
        }

        send_interactions(EDGE_Plantilla.recurso_on_show, objEvt, "created");
    }

    function pick_many_toscano_created(evt) {
        var sym = EDGE_Plantilla.plantilla_sym;
        var sym_contenedor = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_name.contenedor);

        EDGE_Plantilla.debug ? console.log(evt) : false;
        //EDGE_Plantilla.debug ? console.log($('iframe', sym_contenedor.ele)[0], sym_contenedor) : false;

        var objEvt = {
            type: "EDGE_Recurso_sendPreviousData",
            block: false,
            previous_data: read_interactions(EDGE_Plantilla.recurso_on_show),
            attempts: 0,
            sym: evt.sym
        };
        objEvt = merge_options(objEvt, read_extra_data());

        if (objEvt.block) {
            objEvt.show_answers = true;
        }

        send_interactions(EDGE_Plantilla.recurso_on_show, objEvt, "created");
    }
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="Actividades SUBMIT">

    /* El recurso ha enviado una petición de Submit, la plantilla debe decidir
     * que hacer con este request y enviarle una respuesta para que reaccione
     */
    $(document).on("EDGE_Plantilla_submitApplied", function (evt) {
        //var temp_pagina = EDGE_Plantilla.recurso_on_show;
        EDGE_Plantilla.debug ? console.log(evt) : false;
        switch (EDGE_Plantilla.recurso_on_show.actividad) {
            case "drag_drop":
                drag_drop_toscano_submit(evt);
                break;
            case "drag_drop_many":
                drag_drop_toscano_submit(evt);
                break;
            case "pick_many":
                pick_many_toscano_submit(evt);
                break;
            case "filling_blanks":
                filling_blanks_santiago_submit(evt);
                break;
        }
    });

    function filling_blanks_santiago_submit(evt) {
        var strRetro = null;

        if (evt.attempts >= evt.attempts_limit) {
            return false;
        }

        var objEvt = {type: "EDGE_Recurso_postSubmitApplied", sym: evt.sym};

        if (!isEmpty(evt.timer) && evt.timer.time_out) {
            delete evt.timer.time_out;
            strRetro = isEmpty(strRetro) ? "timeout" : strRetro;
            var timer = {reset_timer: true};
            objEvt = merge_options(objEvt, {timer: timer});
        } else {
            if (!check_answers(evt)) {
                strRetro = isEmpty(strRetro) ? "complete_all" : strRetro;
                evt.results = "neutral";
                EDGE_Plantilla.debug ? console.log("RESPUESTAS VACIAS ENCONTRADAS, DEBE LLENAR TODO PARA PODER ENVIAR", evt.results) : false;
            }
        }

        if (evt.results === "correct") {
            EDGE_Plantilla.debug ? console.log("RESPUESTAS CORRECTAS") : false;
            objEvt = merge_options(objEvt, {
                block: true,
                show_answers: false,
                attempts: evt.attempts
            });
            strRetro = isEmpty(strRetro) ? "correct" : strRetro;

        } else if (evt.results === "incorrect") {
            if (!isEmpty(evt.timer)) {
                var timer = {reset_timer: true};
                objEvt = merge_options(objEvt, {timer: timer});
            }
            EDGE_Plantilla.debug ? console.log("RESPUESTAS INCORRECTAS") : false;
            var attemps = attemps_answer(evt);
            objEvt = merge_options(objEvt, attemps);
            strRetro = isEmpty(strRetro) || objEvt.show_answers ? "incorrect" : strRetro;
        }

        retroalimentacion(strRetro);
        save_extra_data(objEvt);
        upload_interaction(evt.json.preguntas, evt.answer, evt.position_which_is_right);
        send_interactions(EDGE_Plantilla.recurso_on_show, objEvt, evt.results);
    }

    function drag_drop_toscano_submit(evt) {
        var strRetro = null;

        if (evt.attempts >= evt.attempts_limit) {
            return false;
        }

        var objEvt = {type: "EDGE_Recurso_postSubmitApplied", sym: evt.sym};

        if (!isEmpty(evt.timer) && evt.timer.time_out) {
            delete evt.timer.time_out;
            strRetro = isEmpty(strRetro) ? "timeout" : strRetro;
            var timer = {reset_timer: true};
            objEvt = merge_options(objEvt, {timer: timer});
        } else {
            if (!check_answers(evt)) {
                strRetro = isEmpty(strRetro) ? "complete_all" : strRetro;
                evt.results = "neutral";
                EDGE_Plantilla.debug ? console.log("RESPUESTAS VACIAS ENCONTRADAS, DEBE LLENAR TODO PARA PODER ENVIAR", evt.results) : false;
            }
        }

        if (evt.results === "correct") {
            EDGE_Plantilla.debug ? console.log("RESPUESTAS CORRECTAS", evt.results) : false;
            objEvt = merge_options(objEvt, {
                block: true,
                show_answers: false,
                attempts: evt.attempts
            });
            if (!isEmpty(evt.timer)) {
                objEvt = merge_options(objEvt, {timer: evt.timer});
            }
            strRetro = isEmpty(strRetro) ? "correct" : strRetro;

        } else if (evt.results === "incorrect") {
            if (!isEmpty(evt.timer)) {
                var timer = {reset_timer: true};
                objEvt = merge_options(objEvt, {timer: timer});
            }
            EDGE_Plantilla.debug ? console.log("RESPUESTAS INCORRECTAS", evt.results) : false;
            var attemps = attemps_answer(evt);
            objEvt = merge_options(objEvt, attemps);
            strRetro = isEmpty(strRetro) || objEvt.show_answers ? "incorrect" : strRetro;
        }


        retroalimentacion(strRetro);
        save_extra_data(objEvt);
        upload_interaction(evt.question, evt.answer, evt.results, evt.interactionType);

        send_interactions(EDGE_Plantilla.recurso_on_show, objEvt, evt.results);
    }

    function pick_many_toscano_submit(evt) {
        //var sym = EDGE_Plantilla.plantilla_sym;
        //var sym_contenedor = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_name.contenedor);
        var strRetro = null;

        if (evt.attempts >= evt.attempts_limit) {
            return false;
        }

        var objEvt = {type: "EDGE_Recurso_postSubmitApplied", sym: evt.sym};

        if (!isEmpty(evt.timer) && evt.timer.time_out) {
            delete evt.timer.time_out;
            strRetro = isEmpty(strRetro) ? "timeout" : strRetro;
            var timer = {reset_timer: true};
            objEvt = merge_options(objEvt, {timer: timer});
        } else {
            if (!check_answers(evt)) {
                strRetro = isEmpty(strRetro) ? "complete_all" : strRetro;
                evt.results = "neutral";
                EDGE_Plantilla.debug ? console.log("RESPUESTAS VACIAS ENCONTRADAS, DEBE LLENAR TODO PARA PODER ENVIAR", evt.results) : false;
            }
        }

        if (evt.results === "correct") {
            EDGE_Plantilla.debug ? console.log("RESPUESTAS CORRECTAS") : false;
            objEvt = merge_options(objEvt, {
                block: true,
                show_answers: false,
                attempts: evt.attempts
            });
            strRetro = isEmpty(strRetro) ? "correct" : strRetro;

        } else if (evt.results === "incorrect") {
            if (!isEmpty(evt.timer)) {
                var timer = {reset_timer: true};
                objEvt = merge_options(objEvt, {timer: timer});
            }
            EDGE_Plantilla.debug ? console.log("RESPUESTAS INCORRECTAS") : false;
            var attemps = attemps_answer(evt);
            objEvt = merge_options(objEvt, attemps);
            strRetro = isEmpty(strRetro) || objEvt.show_answers ? "incorrect" : strRetro;
        }

        retroalimentacion(strRetro);
        save_extra_data(objEvt);
        upload_interaction(evt.question, evt.answer, evt.results, evt.interactionType);
        send_interactions(EDGE_Plantilla.recurso_on_show, objEvt, evt.results);
    }
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="Check data Actividades">
    function check_answers(evt) {
        var is_empty = false;
        if (!isEmpty(evt.answer)) {
            $.each(evt.answer, function (index, value) {
                //console.log(isEmpty(value));
                if (isEmpty(value)) {

                    //mostrar_pagina("med_estrella");
                    is_empty = true;
                    return false;
                }
            });
        } else {
            is_empty = true;
        }


        if (is_empty) {
            return false;
        }

        return true;
    }

    function retroalimentacion(strRetroalimentacion, objTextInject) {
        EDGE_Plantilla.debug ? console.log("Retroalimentacion", strRetroalimentacion, objTextInject) : false;
    }

    function send_interactions(pagina, objEvt, results) {
        
        var sym_contenedor;
        
        if(!isEmpty(pagina.sym)){
            sym_contenedor = buscar_sym(EDGE_Plantilla.plantilla_sym, pagina.sym);
        }else{
            sym_contenedor = buscar_sym(EDGE_Plantilla.plantilla_sym, EDGE_Plantilla.basic_contenedor_name.contenedor);
        }

        switch (results) {
            case "correct":
            case "incorrect":
            case "created":
                EDGE_Plantilla.debug ? console.log("EVENT TO SEND", objEvt, sym_contenedor) : false;
                $('iframe', sym_contenedor.ele)[0].contentWindow.$('body').trigger(objEvt);
                break;
            default :
                break;
        }

    }

    function attemps_answer(evt) {
        var this_block = false;
        var this_show_answers = false;
        var intentos = evt.attempts + 1;
        var objAttemps = {};

        if (intentos >= evt.attempts_limit) {
            this_block = true;
            this_show_answers = true;
            //objAttemps = merge_options(objAttemps, {results: "incorrect"});
        }

        objAttemps = merge_options(objAttemps, {
            block: this_block,
            show_answers: this_show_answers,
            attempts: intentos
        });
        return objAttemps;
    }
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="DB Data Actividades">
    function upload_interaction(json_data, answers, estado_answers, typeInteraction) {
        var pagina = EDGE_Plantilla.recurso_on_show;
        if (isEmpty(pagina.recurso)) {
            console.error("DESEA GUARDAR UNA INTERACIÖN SIN UN RECURSO ASOCIADO...", pagina);
            return;
        }

        typeInteraction = isEmpty(typeInteraction) ? "other" : typeInteraction;

        var id_interaction = pagina.recurso + "000";
        var interactions = {};
        EDGE_Plantilla.debug ? console.log("Trying to upload interactions", json_data, pagina) : false;

        if (!isEmpty(pagina.interaction)) {
            if (pagina.interaction.ALL) {
                var estado;
                if (typeof estado_answers !== "string") {
                    estado = estado_answers ? "correct" : "incorrect";
                }

                interactions[id_interaction + "0"] = {
                    pregunta: json_data,
                    respuesta: answers,
                    estado: estado_answers,
                    type: typeInteraction
                };
            } else {
                $.each(answers, function (key, value) {
                    var estado;
                    if (typeof estado_answers !== "string") {
                        estado = estado_answers[key] ? "correct" : "incorrect";
                    }
                    //console.log("upload interactions", key);
                    interactions[id_interaction + key] = {
                        pregunta: json_data[key].pregunta,
                        estado: estado,
                        type: typeInteraction,
                        respuesta: value//JSON.stringify(value)
                    };
                });

            }
        }
        EDGE_Plantilla.temp_scorm = merge_options(EDGE_Plantilla.temp_scorm, interactions);
        EDGE_Plantilla.debug ? console.log("UPLOADING interactions", interactions, pagina, EDGE_Plantilla.temp_scorm) : false;

    }

    function read_interactions() {
        var pagina = EDGE_Plantilla.recurso_on_show;
        //EDGE_Plantilla.debug ? console.log("READING interactions", pagina.recurso) : false;
        var id_interaction = pagina.recurso + "000";
        var objData = {};

        $.each(EDGE_Plantilla.temp_scorm, function (key, value) {
            if (key.startsWith(id_interaction)) {
                objData[key.substring(id_interaction.length, key.length)] = value.respuesta;
            }
        });

        if (!isEmpty(objData)) {
            if (pagina.interaction.ALL) {
                objData = objData[0];
            }
        }

        EDGE_Plantilla.debug ? console.log("READ interactions", objData) : false;

        return objData;
    }

    function save_extra_data(objData) {
        var pagina = EDGE_Plantilla.recurso_on_show;
        var id_interaction = pagina.recurso;
        var interaction = {};

        EDGE_Plantilla.debug ?
                console.log("READING extradata", objData) : false;

        var arrObjNeedKeys = [
            "attempts", "block", "timer"
        ];

        var objTrueData = {};

        $.each(arrObjNeedKeys, function (key, value) {
            if (!isEmpty(objData[value])) {
                objTrueData[value] = objData[value];
            }
        });

        interaction[id_interaction] = objTrueData;

        EDGE_Plantilla.temp_scorm_suspendData =
                merge_options(EDGE_Plantilla.temp_scorm_suspendData, interaction);

        EDGE_Plantilla.debug ?
                console.log("UPLOADED extradata", EDGE_Plantilla.temp_scorm_suspendData) : false;
    }

    function read_extra_data() {
        var pagina = EDGE_Plantilla.recurso_on_show;
        var id_interaction = pagina.recurso;
        var extra_data = EDGE_Plantilla.temp_scorm_suspendData[id_interaction];
        extra_data = !isEmpty(extra_data) ? extra_data : {};

        EDGE_Plantilla.debug ?
                console.log("READ extradata", extra_data) : false;
        return extra_data;
    }
    //</editor-fold>


}());