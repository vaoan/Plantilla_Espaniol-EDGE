/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.11.3.min.js",
            js+"zoomUtilities.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Fondo',
                            type: 'rect',
                            rect: ['20px', '725px', '1877px', '196px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(12,100,86,1.00)",[270,[['rgba(96,74,123,1.00)',0],['rgba(96,74,123,1.00)',100]]]],
                            stroke: [1,"rgba(0,0,0,0.00)","dashed"]
                        },
                        {
                            id: 'funcioncomunicativa',
                            symbolName: 'funcioncomunicativa',
                            type: 'rect',
                            rect: ['46', '747', '652', '163', 'auto', 'auto'],
                            userClass: "not_zoom"
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['1420px', '772px', '88px', '88px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,0.749)"],
                            stroke: [1,"rgb(96, 74, 123)","solid"]
                        },
                        {
                            id: 'discuta',
                            symbolName: 'discuta',
                            type: 'rect',
                            rect: ['725px', '747px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'Cuadro_texto',
                            type: 'rect',
                            rect: ['107px', '179px', '906px', '334px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,0.75)"],
                            stroke: [7,"rgba(96,74,123,1.00)","solid"],
                            c: [
                            {
                                id: 'texto_11',
                                symbolName: 'texto_11',
                                type: 'rect',
                                rect: ['29', '18', '851', '56', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'btnr1_exploremos',
                            symbolName: 'btnr1_exploremos',
                            type: 'rect',
                            rect: ['1417', '769', '447', '95', 'auto', 'auto'],
                            cursor: 'pointer'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '944px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "funcioncomunicativa": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '650px', '49px', 'auto', 'auto'],
                            id: 'cont_funcion',
                            stroke: [1, 'rgba(0, 0, 0, 0)', 'dashed'],
                            type: 'rect',
                            fill: ['rgba(51,26,63,1.00)'],
                            c: [
                            {
                                rect: ['-1px', '-1px', '28px', '49px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [1, 'rgba(0,0,0,0.00)', 'dashed'],
                                type: 'rect',
                                fill: ['rgba(178,163,196,1.00)']
                            },
                            {
                                rect: ['43px', '1px', '366px', '38px', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(253,191,0,1.00)', '700', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\"><span style=\"font-size: 32px;\">Función comunicativa:</span></p>',
                                userClass: 'not_zoom',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['18px', '66px', '10px', '17px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.14999', '1.14999']],
                            id: 'Vineta1_funcion_comunicativa',
                            fill: ['rgba(0,0,0,0)', 'images/VI%C3%91ETA-10.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            textStyle: ['', '', '34px', '', 'none'],
                            rect: ['44px', '57px', '612px', '106px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(253,191,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            userClass: 'not_zoom',
                            id: 'Texto_Funcion_Comunicativa',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-size: 28px;\">Deletrear nombres, topónimos  y otras palabras de su contexto inmediato usando el alfabeto en español.&nbsp;</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 28px;\">​&nbsp;</span></p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '652px', '163px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "discuta": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '650px', '49px', 'auto', 'auto'],
                            id: 'cont_funcion',
                            stroke: [1, 'rgba(0, 0, 0, 0)', 'dashed'],
                            fill: ['rgba(51,26,63,1.00)'],
                            c: [
                            {
                                type: 'rect',
                                id: 'Rectangle',
                                stroke: [1, 'rgba(0,0,0,0.00)', 'dashed'],
                                rect: ['-1px', '-1px', '28px', '49px', 'auto', 'auto'],
                                fill: ['rgba(178,163,196,1.00)']
                            },
                            {
                                type: 'text',
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\"><span style=\"font-size: 32px;\">Discuta con sus compañeros</span></p>',
                                rect: ['41px', '2px', '569px', '38px', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(253,191,0,1.00)', '700', 'none', '', 'break-word', 'normal']
                            }]
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            id: 'Vineta1_funcion_comunicativa',
                            rect: ['18px', '66px', '10px', '17px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.14999', '1.14999']],
                            fill: ['rgba(0,0,0,0)', 'images/VI%C3%91ETA-10.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            id: 'Vineta2_funcion_comunicativa',
                            rect: ['18px', '105px', '10px', '17px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.14999', '1.14999']],
                            fill: ['rgba(0,0,0,0)', 'images/VI%C3%91ETA-10.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['45px', '57px', '607px', '106px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Texto_Funcion_Comunicativa',
                            textStyle: ['', '', '34px', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-size: 28px;\">¿Por qué es importante deletrear?​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 28px;\">​¿Qué palabras son difíciles de deletrear?</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 28px;\">​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">​</span></p>',
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(253,191,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '652px', '163px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "btnr1_exploremos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['48px', '10px', '399px', '76px', 'auto', 'auto'],
                            borderRadius: ['0px', '38px', '38px', '0px'],
                            id: 'RoundRect',
                            stroke: [1, 'rgba(49,28,69,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.749)', [270, [['rgba(49,28,69,1.00)', 0], ['rgba(56,32,79,1.00)', 21], ['rgba(40,22,56,1.00)', 63]]]]
                        },
                        {
                            rect: ['2px', '1px', '88px', '88px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2',
                            stroke: [1, 'rgb(96, 74, 123)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.749)']
                        },
                        {
                            rect: ['0px', '0px', '95px', '95px', 'auto', 'auto'],
                            id: 'BTN_animado',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/BTN_R1_Explore-29.png', '0px', '0px']
                        },
                        {
                            rect: ['163px', '23px', '198px', '50px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​Exploremos</p>',
                            textStyle: ['', '', '50px', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '447px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid35",
                            "scaleY",
                            0,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid36",
                            "scaleY",
                            1000,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid33",
                            "scaleX",
                            0,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid34",
                            "scaleX",
                            1000,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1.2',
                            '1'
                        ]
                    ]
                }
            },
            "texto_11": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '851px', '56px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [38, 'px'], 'rgba(96,74,123,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text4',
                            text: '<p style=\"margin: 0px;\">​Debemos aprender la fonética de una lengua por medio del deletreo para poder identificar cada letra del abecedario.&nbsp;</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '851px', '56px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("esn1le01ob02r1_edgeActions.js");
})("EDGE-16656972");
