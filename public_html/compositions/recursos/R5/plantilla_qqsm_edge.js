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
            js+"jquery-1.10.2.js",
            js+"EdgeCommons.js",
            js+"utility.js",
            js+"main.js",
            js+"timerUtilities.js",
            js+"actividades_result.js",
            js+"r6.js",
            js+"qqsm.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'qqsm_1',
                            symbolName: 'qqsm_1',
                            type: 'rect',
                            rect: ['-1830px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'qqsm_2',
                            symbolName: 'qqsm_2',
                            type: 'rect',
                            rect: ['1830px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'qqsm_3',
                            symbolName: 'qqsm_3',
                            type: 'rect',
                            rect: ['1830px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'qqsm_4',
                            symbolName: 'qqsm_4',
                            type: 'rect',
                            rect: ['1830px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'qqsm_5',
                            symbolName: 'qqsm_5',
                            type: 'rect',
                            rect: ['1830px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'qqsm_correct',
                            symbolName: 'qqsm_correct',
                            type: 'rect',
                            rect: ['1830px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'qqsm_incorrect',
                            symbolName: 'qqsm_6',
                            type: 'rect',
                            rect: ['1830px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['90px', '70px', '1180px', '41px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​En el proceso de aprendizaje de una lengua, es importante identificar las letras y sus nombres al deletrear palabras.<span style=\"font-family: source-sans-pro, sans-serif;\">​</span><span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\">​</span></p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['100px', '164px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Identifique la pronunciación y deletreo de cada palabra.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "700", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'TextCopy2',
                            type: 'text',
                            rect: ['88px', '218px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Instrucción: escuche el audio y seleccione la opción que corresponda. Tiene dos intentos para esta actividad.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'arrow',
                            type: 'image',
                            rect: ['83px', '177px', '11px', '16px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px']
                        },
                        {
                            id: 'ayuda_01',
                            symbolName: 'ayuda_01',
                            type: 'rect',
                            rect: ['198px', '300px', '131', '76', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'ayuda_2',
                            type: 'image',
                            rect: ['198px', '419px', '131px', '76px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"ayuda_2.png",'0px','0px']
                        },
                        {
                            id: 'ayuda_3',
                            type: 'image',
                            rect: ['198px', '540px', '131px', '76px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"ayuda_3.png",'0px','0px']
                        },
                        {
                            id: 'Submit',
                            symbolName: 'Submit',
                            type: 'rect',
                            rect: ['1485px', '707px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'esn1le01ob02re5au01',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['425', '509', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"esn1le01ob02re5au01.mp3"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1830px', '780px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid140",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${qqsm_incorrect}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid125",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${qqsm_4}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid127",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${qqsm_4}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid112",
                            "left",
                            0,
                            500,
                            "linear",
                            "${qqsm_1}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid120",
                            "left",
                            500,
                            500,
                            "linear",
                            "${qqsm_3}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid122",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${qqsm_3}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid115",
                            "left",
                            0,
                            500,
                            "linear",
                            "${qqsm_2}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid117",
                            "left",
                            500,
                            500,
                            "linear",
                            "${qqsm_2}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid130",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${qqsm_5}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid132",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${qqsm_5}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid135",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${qqsm_correct}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid137",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${qqsm_correct}",
                            '0px',
                            '-1830px'
                        ]
                    ]
                }
            },
            "TIMER_CONTAINER": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '161px', '31px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​TIMER</p>',
                            align: 'center',
                            rect: ['18px', '3px', '128px', '31px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '161px', '34px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "10": 250
                    },
                    data: [
                        [
                            "eid46",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid47",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${Rectangle}",
                            'rgba(255,0,0,1.00)',
                            'rgba(192,192,192,1)'
                        ],
                        [
                            "eid51",
                            "color",
                            0,
                            250,
                            "linear",
                            "${Text}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid52",
                            "color",
                            250,
                            250,
                            "linear",
                            "${Text}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,0,0,1)'
                        ]
                    ]
                }
            },
            "Submit": {
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
                                rect: ['60px', '0px', '94px', '31px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Enviar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                type: 'text'
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
            "btn_audio": {
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
                            rect: ['-117px', '0px', '433px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                rect: ['190px', '1px', '94px', '31px', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'BTN-tools-ES',
                            type: 'image',
                            rect: ['65px', '7px', '7%', '18px', 'auto', 'auto'],
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
            "ayuda_01": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '131px', '76px', 'auto', 'auto'],
                            id: 'ayuda_1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ayuda_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '131px', '76px']
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
            "PICK_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta2',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta_over',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta_over.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta_hover',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta_hover.png', '0px', '0px']
                        },
                        {
                            rect: ['40px', '5px', '323px', '52px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                            text: '<p style=\"margin: 0px;\">​a. Paso</p>',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '401px', '57px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid73",
                            "display",
                            250,
                            0,
                            "linear",
                            "${box_respuesta_over}",
                            'none',
                            'block'
                        ],
                        [
                            "eid76",
                            "display",
                            500,
                            0,
                            "linear",
                            "${box_respuesta_over}",
                            'block',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            250,
                            0,
                            "linear",
                            "${box_respuesta2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid75",
                            "display",
                            500,
                            0,
                            "linear",
                            "${box_respuesta_hover}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "PICK_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta2',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta_over',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta_over.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta_hover2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta_hover.png', '0px', '0px']
                        },
                        {
                            rect: ['40px', '5px', '323px', '52px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                            text: '<p style=\"margin: 0px;\">​b. Trazo</p>',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '401px', '57px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid73",
                            "display",
                            250,
                            0,
                            "linear",
                            "${box_respuesta_over}",
                            'none',
                            'block'
                        ],
                        [
                            "eid78",
                            "display",
                            500,
                            0,
                            "linear",
                            "${box_respuesta_over}",
                            'block',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            250,
                            0,
                            "linear",
                            "${box_respuesta2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid77",
                            "display",
                            500,
                            0,
                            "linear",
                            "${box_respuesta_hover2}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "PICK_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta2',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta_over',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta_over.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta_hover3',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta_hover.png', '0px', '0px']
                        },
                        {
                            rect: ['40px', '5px', '323px', '52px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                            text: '<p style=\"margin: 0px;\">​c. Mazo</p>',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '401px', '57px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid73",
                            "display",
                            250,
                            0,
                            "linear",
                            "${box_respuesta_over}",
                            'none',
                            'block'
                        ],
                        [
                            "eid80",
                            "display",
                            500,
                            0,
                            "linear",
                            "${box_respuesta_over}",
                            'block',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            250,
                            0,
                            "linear",
                            "${box_respuesta2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid79",
                            "display",
                            500,
                            0,
                            "linear",
                            "${box_respuesta_hover3}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "PICK_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta2',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta_over',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta_over.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '401px', '57px', 'auto', 'auto'],
                            id: 'box_respuesta_hover4',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/box_respuesta_hover.png', '0px', '0px']
                        },
                        {
                            rect: ['40px', '5px', '323px', '52px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                            text: '<p style=\"margin: 0px;\">​d. Brazo</p>',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '401px', '57px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid73",
                            "display",
                            250,
                            0,
                            "linear",
                            "${box_respuesta_over}",
                            'none',
                            'block'
                        ],
                        [
                            "eid82",
                            "display",
                            500,
                            0,
                            "linear",
                            "${box_respuesta_over}",
                            'block',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            250,
                            0,
                            "linear",
                            "${box_respuesta2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid81",
                            "display",
                            500,
                            0,
                            "linear",
                            "${box_respuesta_hover4}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "margen_inferior": {
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
                            id: 'Rectangle',
                            stroke: [7, 'rgba(79,45,110,0.00)', 'solid'],
                            rect: ['0px', '25px', '13px', '79px', 'auto', 'auto'],
                            fill: ['rgba(180,180,180,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [7, 'rgba(79, 45, 110, 0)', 'solid'],
                            rect: ['27px', '0px', '1735px', '11px', 'auto', 'auto'],
                            fill: ['rgba(180,180,180,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [7, 'rgba(79, 45, 110, 0)', 'solid'],
                            rect: ['27px', '118px', '1735px', '7px', 'auto', 'auto'],
                            fill: ['rgba(180,180,180,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle4',
                            stroke: [7, 'rgba(79, 45, 110, 0)', 'solid'],
                            rect: ['1776px', '25px', '13px', '79px', 'auto', 'auto'],
                            fill: ['rgba(180,180,180,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1803px', '139px']
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
            "margen_superior": {
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
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['1775px', '0px', '55px', '70px', 'auto', 'auto'],
                            fill: ['rgba(111,160,217,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '55px', '70px', 'auto', 'auto'],
                            fill: ['rgba(111,160,217,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['86px', '0px', '1689px', '70px', 'auto', 'auto'],
                            fill: ['rgba(181,199,220,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '70px']
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
            "espacios_texto": {
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
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '30px', '30px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '92px', '30px', '30px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '142px', '30px', '30px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '35px', '177px']
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
            "btn_audio_1": {
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
                            rect: ['-117px', '0px', '433px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['190px', '1px', '94px', '31px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                type: 'text'
                            }]
                        },
                        {
                            fill: ['rgba(255,255,255,1)'],
                            rect: ['52px', '3px', '25px', '25px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            type: 'rect',
                            id: 'stop',
                            opacity: '0',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            transform: [[], [], [], ['0.2', '0.2']],
                            rect: ['-23px', '-71px', '175px', '172px', 'auto', 'auto'],
                            id: 'play',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/audiomp3_1.mp3'],
                            id: 'audiomp3_1',
                            rect: ['998', '456', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 8670.95,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 124
                    },
                    data: [
                        [
                            "eid190",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${play}",
                            '1',
                            '0'
                        ],
                        [
                            "eid188",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                            [ "eid87", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_1}', [] ] ]
                    ]
                }
            },
            "publico": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-40px', '-51px', '399px', '509px', 'auto', 'auto'],
                            id: 'ayuda_publico_1',
                            transform: [[], [], [], ['0.8', '0.8']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ayuda_publico_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '319px', '407px']
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
            "llamada": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-40px', '-57px', '399px', '574px', 'auto', 'auto'],
                            id: 'ayuda_llamada_1',
                            transform: [[], [], [], ['0.8', '0.8']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ayuda_llamada_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '319px', '459px']
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
            "contenedor_externo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(79,45,110,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '781px']
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
            "qqsm_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(220,217,126,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1830px', '780px']
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
            "qqsm_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(239,202,156,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1830px', '780px']
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
            "qqsm_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(175,239,119,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1830px', '780px']
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
            "qqsm_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            id: 'Rectangle2Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(78,208,204,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1830px', '780px']
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
            "qqsm_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            id: 'Rectangle2Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(101,131,223,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1830px', '780px']
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
            "qqsm_6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            id: 'Rectangle2Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(203,85,133,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1830px', '780px']
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
            "qqsm_correct": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            id: 'Rectangle2Copy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(205,161,249,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1830px', '780px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("plantilla_qqsm_edgeActions.js");
})("EDGE-17298671");
