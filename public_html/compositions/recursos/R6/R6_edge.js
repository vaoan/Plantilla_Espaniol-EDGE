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
            js+"ion.sound-3.0.5/js/ion.sound.min.js",
            js+"EdgeCommons.js",
            js+"utility.js",
            js+"main.js",
            js+"timerUtilities.js",
            js+"actividades_result.js",
            js+"r6.js"
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
                            id: 'R6_portada',
                            symbolName: 'R6_portada',
                            type: 'rect',
                            rect: ['0px', '0px', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'R6_1',
                            symbolName: 'R6_1',
                            type: 'rect',
                            rect: ['-1840px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'R6_2',
                            symbolName: 'R6_2',
                            type: 'rect',
                            rect: ['1840px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'R6_3',
                            symbolName: 'R6_3',
                            type: 'rect',
                            rect: ['1840px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'R6_4',
                            symbolName: 'R6_4',
                            type: 'rect',
                            rect: ['1840px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'R6_5',
                            symbolName: 'R6_5',
                            type: 'rect',
                            rect: ['1840px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'Nav_R6_14',
                            display: 'none',
                            type: 'image',
                            rect: ['1577px', '665px', '240px', '100px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Nav_R6_1.png",'0px','0px']
                        },
                        {
                            id: 'Nav_R6_22',
                            display: 'none',
                            type: 'image',
                            rect: ['1577px', '665px', '240px', '100px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Nav_R6_2.png",'0px','0px']
                        },
                        {
                            id: 'Nav_R6_32',
                            display: 'none',
                            type: 'image',
                            rect: ['1577px', '665px', '240px', '100px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Nav_R6_3.png",'0px','0px']
                        },
                        {
                            id: 'Nav_R6_42',
                            display: 'none',
                            type: 'image',
                            rect: ['1577px', '665px', '240px', '100px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Nav_R6_4.png",'0px','0px']
                        },
                        {
                            id: 'Nav_R6_52',
                            display: 'none',
                            type: 'image',
                            rect: ['1577px', '665px', '240px', '100px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Nav_R6_5.png",'0px','0px']
                        },
                        {
                            id: 'R6_final',
                            symbolName: 'R6_final',
                            type: 'rect',
                            rect: ['1840px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'r6_enviar',
                            symbolName: 'r6_enviar',
                            display: 'none',
                            type: 'rect',
                            rect: ['1366px', '710', '165', '38', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'r6_siguiente',
                            symbolName: 'r6_siguiente',
                            type: 'rect',
                            rect: ['1759px', '690px', '50', '51', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.37951','1.75902']]
                        },
                        {
                            id: 'r6_atras',
                            symbolName: 'r6_atras',
                            display: 'none',
                            type: 'rect',
                            rect: ['1586px', '690px', '50', '51', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.37951','1.76502']]
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
                    labels: {
                        "slide_1": 500,
                        "slide_2": 1000,
                        "slide_3": 1500,
                        "slide_4": 2000,
                        "slide_5": 2500
                    },
                    data: [
                        [
                            "eid98",
                            "display",
                            2455,
                            0,
                            "linear",
                            "${Nav_R6_52}",
                            'none',
                            'block'
                        ],
                        [
                            "eid99",
                            "display",
                            2550,
                            0,
                            "linear",
                            "${Nav_R6_52}",
                            'block',
                            'none'
                        ],
                        [
                            "eid40",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${R6_final}",
                            '1840px',
                            '0px'
                        ],
                        [
                            "eid50",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${R6_final}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid25",
                            "left",
                            0,
                            500,
                            "linear",
                            "${R6_1}",
                            '1840px',
                            '0px'
                        ],
                        [
                            "eid27",
                            "left",
                            500,
                            500,
                            "linear",
                            "${R6_1}",
                            '0px',
                            '-1840px'
                        ],
                        [
                            "eid94",
                            "display",
                            1460,
                            0,
                            "linear",
                            "${Nav_R6_32}",
                            'none',
                            'block'
                        ],
                        [
                            "eid95",
                            "display",
                            1960,
                            0,
                            "linear",
                            "${Nav_R6_32}",
                            'block',
                            'none'
                        ],
                        [
                            "eid57",
                            "display",
                            0,
                            0,
                            "linear",
                            "${r6_siguiente}",
                            'none',
                            'none'
                        ],
                        [
                            "eid58",
                            "display",
                            450,
                            0,
                            "linear",
                            "${r6_siguiente}",
                            'none',
                            'block'
                        ],
                        [
                            "eid88",
                            "display",
                            2065,
                            0,
                            "linear",
                            "${r6_siguiente}",
                            'block',
                            'none'
                        ],
                        [
                            "eid92",
                            "display",
                            950,
                            0,
                            "linear",
                            "${Nav_R6_22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid93",
                            "display",
                            1460,
                            0,
                            "linear",
                            "${Nav_R6_22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid42",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${R6_4}",
                            '1840px',
                            '0px'
                        ],
                        [
                            "eid52",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${R6_4}",
                            '0px',
                            '-1840px'
                        ],
                        [
                            "eid41",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${R6_5}",
                            '1840px',
                            '0px'
                        ],
                        [
                            "eid51",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${R6_5}",
                            '0px',
                            '-1840px'
                        ],
                        [
                            "eid96",
                            "display",
                            1960,
                            0,
                            "linear",
                            "${Nav_R6_42}",
                            'none',
                            'block'
                        ],
                        [
                            "eid97",
                            "display",
                            2455,
                            0,
                            "linear",
                            "${Nav_R6_42}",
                            'block',
                            'none'
                        ],
                        [
                            "eid44",
                            "left",
                            500,
                            500,
                            "linear",
                            "${R6_2}",
                            '1840px',
                            '0px'
                        ],
                        [
                            "eid54",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${R6_2}",
                            '0px',
                            '-1840px'
                        ],
                        [
                            "eid56",
                            "display",
                            0,
                            0,
                            "linear",
                            "${r6_atras}",
                            'none',
                            'none'
                        ],
                        [
                            "eid87",
                            "display",
                            950,
                            0,
                            "linear",
                            "${r6_atras}",
                            'none',
                            'block'
                        ],
                        [
                            "eid70",
                            "display",
                            2550,
                            0,
                            "linear",
                            "${r6_atras}",
                            'block',
                            'none'
                        ],
                        [
                            "eid23",
                            "left",
                            0,
                            500,
                            "linear",
                            "${R6_portada}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid43",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${R6_3}",
                            '1840px',
                            '0px'
                        ],
                        [
                            "eid53",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${R6_3}",
                            '0px',
                            '-1840px'
                        ],
                        [
                            "eid90",
                            "display",
                            450,
                            0,
                            "linear",
                            "${Nav_R6_14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid91",
                            "display",
                            950,
                            0,
                            "linear",
                            "${Nav_R6_14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid80",
                            "display",
                            0,
                            0,
                            "linear",
                            "${r6_enviar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid81",
                            "display",
                            450,
                            0,
                            "linear",
                            "${r6_enviar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid82",
                            "display",
                            2550,
                            0,
                            "linear",
                            "${r6_enviar}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "R6_portada": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['37px', '29px', '563px', '749px', 'auto', 'auto'],
                            borderRadius: ['17px', '17px', '17px', '17px 17px'],
                            id: 'IMG_R6',
                            boxShadow: ['', 0, 0, 2, 2, 'rgba(147,148,142,1.00)'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/IMG_R62.png', '0px', '0px']
                        },
                        {
                            rect: ['632px', '32px', '1198px', '377px', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 700;\">Este test evalúa lo que ha aprendido en este objeto de aprendizaje.</span></p><p style=\"margin: 0px;\"><span style=\"font-family: source-sans-pro, sans-serif;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-style: italic; font-family: source-sans-pro, sans-serif;\">Instrucciones:</span></p><p style=\"margin: 0px;\"><span style=\"font-style: italic; font-family: source-sans-pro, sans-serif;\">​</span></p><p style=\"margin: 0px; text-indent: 25px;\"><span style=\"font-style: italic; font-family: source-sans-pro, sans-serif;\">1. Lea cada pregunta cuidadosamente.</span></p><p style=\"margin: 0px; text-indent: 25px;\"><span style=\"font-style: italic; font-family: source-sans-pro, sans-serif;\">2. Debe responder todas las preguntas propuestas.</span></p><p style=\"margin: 0px; text-indent: 25px;\"><span style=\"font-style: italic; font-family: source-sans-pro, sans-serif;\">3. El test debe ser enviado una sola vez.</span></p><p style=\"margin: 0px;\"><span style=\"font-family: source-sans-pro, sans-serif;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-family: source-sans-pro, sans-serif; font-weight: 700;\">Recuerde:</span><span style=\"font-family: source-sans-pro, sans-serif;\"> cuando haga clic sobre </span><span style=\"font-family: source-sans-pro, sans-serif; font-weight: 800;\">Enviar</span><span style=\"font-family: source-sans-pro, sans-serif;\">, no podrá modificar ninguna respuesta.</span></p><p style=\"margin: 0px;\">​</p>',
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            id: 'btn_evaluemosCopy2',
                            symbolName: 'btn_evaluemos',
                            cursor: 'pointer',
                            rect: ['1054', '419px', '335', '49', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '335px', '49px']
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
            "R6_1": {
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
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "R6_2": {
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
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(255,119,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "R6_3": {
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
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(239,255,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "R6_4": {
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
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(0,255,117,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "R6_5": {
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
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(0,103,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "R6_final": {
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
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(223,0,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "r6_atras": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '50px', '51px']
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
            "r6_siguiente": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '50px', '51px']
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
            "r6_evaluemos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '566px', '123px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(157,113,197,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '566px', '123px']
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
            "r6_enviar": {
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
                            rect: ['0px', '0px', '165px', '38px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(149,115,187,1.00)', 50], ['rgba(120,78,166,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['36px', '3px', '94px', '31px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Enviar</span></p>',
                                textShadow: ['rgba(0,0,0,0.49)', 1, 1, 1],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '165px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid76",
                            "background-image",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            [270,[['rgba(149,115,187,1.00)',50],['rgba(120,78,166,1.00)',50]]],
                            [270,[['rgba(111,67,158,1.00)',50],['rgba(84,53,118,1.00)',50]]]
                        ],
                        [
                            "eid79",
                            "textShadow.color",
                            0,
                            250,
                            "linear",
                            "${Text}",
                            'rgba(0,0,0,0.49)',
                            'rgba(0,0,0,0.65098)'
                        ]
                    ]
                }
            },
            "btn_evaluemos": {
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
                            rect: ['0px', '0px', '336px', '49px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['81px', '5px', '155px', '31px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Evaluemos</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['231px', '14px', '25px', '25px', 'auto', 'auto'],
                            id: 'signo_mas_que_1_Blancofw',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/signo%20mas%20que%201%20Blanco.fw.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '335px', '49px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("R6_edgeActions.js");
})("EDGE-4821767");
