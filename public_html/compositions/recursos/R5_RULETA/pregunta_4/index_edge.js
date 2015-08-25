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
                            id: 'TextCopy3',
                            type: 'text',
                            rect: ['878px', '270px', '31px', '35px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​4.</p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(79,45,110,1.00)", "900", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'TextCopy4',
                            type: 'text',
                            rect: ['934px', '333px', '584px', '35px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​¿Cuál es la primera vocal de la palabra?</p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'submit',
                            symbolName: 'submit',
                            type: 'rect',
                            rect: ['1580px', '641px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btn_escuchar',
                            symbolName: 'btn_escuchar',
                            type: 'rect',
                            rect: ['1050px', '274px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'input_text_box',
                            symbolName: 'input_text_box',
                            type: 'rect',
                            rect: ['907px', '403px', '600', '67', 'auto', 'auto'],
                            transform: [[],[],[],['0.91','0.91']]
                        },
                        {
                            id: 'esn1le01ob04re5au04mesa',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['360', '467', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"esn1le01ob04re5au04mesa.wav"],
                            preload: 'auto'
                        },
                        {
                            id: 'box_ruleta',
                            symbolName: 'box_ruleta',
                            type: 'rect',
                            rect: ['137', '231px', '515', '515', 'auto', 'auto']
                        },
                        {
                            id: 'TextCopy2',
                            type: 'text',
                            rect: ['50px', '18px', '1664px', '67px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Cuando aprendemos una lengua, debemos estar en la capacidad de aislar las unidades más simples de las unidades más complejas. En la palabra garaje (unidad compleja), se pueden aislar las letras (unidades simples).</p><p style=\"margin: 0px;\">​</p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['50px', '107px', '1247px', '35px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​ Identifique y aísle las letras según el criterio de cada pregunta.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "700", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['50px', '156px', '1691px', '35px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Instrucción: escuche el audio, lea la pregunta y escriba la respuesta correspondiente. Tiene dos intentos para esta actividad.</p><p style=\"margin:0px\">​</p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "italic", "break-word", ""]
                        },
                        {
                            id: 'arrow',
                            type: 'image',
                            rect: ['39px', '119px', '11px', '16px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"arrow2.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1830px', '780px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid530",
                            "top",
                            0,
                            0,
                            "linear",
                            "${box_ruleta}",
                            '231px',
                            '231px'
                        ]
                    ]
                }
            },
            "btn_escuchar": {
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
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-117px', '0px', '433px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Escuchar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                rect: ['170px', '0px', '94px', '31px', 'auto', 'auto']
                            }]
                        },
                        {
                            rect: ['45px', '6px', '7%', '18px', 'auto', 'auto'],
                            id: 'BTN-tools-ES',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/BTN-tools-ES.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '31px']
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
            "submit": {
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
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '213px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Enviar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                rect: ['60px', '0px', '94px', '31px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '31px']
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
            "input_text_box": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '600px', '67px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'Rectangle2',
                            stroke: [2, 'rgba(124,124,124,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)', [270, [['rgba(160,160,160,1.00)', 0], ['rgba(212,212,212,1.00)', 8], ['rgba(250,250,250,1.00)', 92], ['rgba(160,160,160,1.00)', 100]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '600px', '67px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "ruleta": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'wheel',
                            type: 'image',
                            rect: ['0px', '0px', '515px', '515px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wheel.png', '0px', '0px']
                        },
                        {
                            id: 'wheel_pointer',
                            type: 'image',
                            rect: ['195px', '165px', '115px', '139px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wheel_pointer.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '515px', '515px']
                        }
                    }
                },
                timeline: {
                    duration: 9000,
                    autoPlay: true,
                    labels: {
                        "giro01": 0,
                        "giro02": 1750,
                        "giro03": 3500,
                        "giro04": 5250,
                        "giro05": 7250
                    },
                    data: [
                        [
                            "eid191",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeInOutSine",
                            "${wheel}",
                            [49,49],
                            [49,49],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid531",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeInOutSine",
                            "${wheel}",
                            [49,49],
                            [49,49],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid532",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeInOutSine",
                            "${wheel}",
                            [49,49],
                            [49,49],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid533",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeInOutSine",
                            "${wheel}",
                            [49,49],
                            [49,49],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid534",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeInOutSine",
                            "${wheel}",
                            [49,49],
                            [49,49],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid535",
                            "transform-origin",
                            0,
                            0,
                            "easeInOutSine",
                            "${wheel}",
                            [49,49],
                            [49,49],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid10",
                            "rotateZ",
                            0,
                            1500,
                            "easeInOutSine",
                            "${wheel}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid288",
                            "rotateZ",
                            1750,
                            1500,
                            "easeInOutSine",
                            "${wheel}",
                            '0deg',
                            '452deg'
                        ],
                        [
                            "eid305",
                            "rotateZ",
                            3500,
                            1500,
                            "easeInOutSine",
                            "${wheel}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid347",
                            "rotateZ",
                            5250,
                            1750,
                            "easeInOutSine",
                            "${wheel}",
                            '0deg',
                            '405deg'
                        ],
                        [
                            "eid364",
                            "rotateZ",
                            7250,
                            1750,
                            "easeInOutSine",
                            "${wheel}",
                            '0deg',
                            '540deg'
                        ]
                    ]
                }
            },
            "box_ruleta": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '515px', '515px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'text',
                            rect: ['26px', '149px', '447px', '181px', 'auto', 'auto'],
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​Espacio para la Ruleta, cargada</p><p style=\"margin: 0px;\">​desde el EDGE externo.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Eliminar​ este simbolo al terminar de editar ​éste archivo</p>',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [29, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '515px', '515px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-23672294");
