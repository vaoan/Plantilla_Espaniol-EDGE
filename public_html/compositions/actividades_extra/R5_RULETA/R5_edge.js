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
            js+"actividades_result.js",
            js+"r5.js",
            js+"ruleta.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'correctocontenedor',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],[],[],['0.5','0.5']],
                            c: [
                            {
                                id: 'RoundRect',
                                type: 'rect',
                                rect: ['735px', '210px', '360px', '360px', 'auto', 'auto'],
                                borderRadius: ["15px", "15px", "15px", "15px 15px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                boxShadow: ["", 0, 0, 25, 3, "rgba(70,70,70,0.68)"]
                            },
                            {
                                id: 'correcto',
                                type: 'image',
                                rect: ['840px', '235px', '150px', '150px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"correcto.png",'0px','0px']
                            },
                            {
                                id: 'TextCopy3',
                                type: 'text',
                                rect: ['735px', '411px', '360px', '43px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​¡Excelente trabajo!</p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [32, "px"], "rgba(0,0,0,1)", "600", "none", "", "break-word", ""]
                            }]
                        },
                        {
                            id: 'incorrectocontenedor',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['0.5','0.5']],
                            c: [
                            {
                                id: 'RoundRectCopy',
                                type: 'rect',
                                rect: ['735px', '210px', '360px', '360px', 'auto', 'auto'],
                                borderRadius: ["15px", "15px", "15px", "15px 15px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                boxShadow: ["", 0, 0, 25, 3, "rgba(70,70,70,0.68)"]
                            },
                            {
                                id: 'volver',
                                symbolName: 'volver',
                                type: 'rect',
                                rect: ['808px', '502px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'incorrecto',
                                type: 'image',
                                rect: ['840px', '234px', '150px', '150px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"incorrecto.png",'0px','0px']
                            },
                            {
                                id: 'TextCopy4',
                                type: 'text',
                                rect: ['735px', '398px', '360px', '54px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​¡Respuesta incorrecta!</p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [32, "px"], "rgba(0,0,0,1)", "600", "none", "", "break-word", ""]
                            }]
                        },
                        {
                            id: 'R6_portada',
                            symbolName: 'R6_portada',
                            type: 'rect',
                            rect: ['-5px', '0px', '1830', '780', 'auto', 'auto']
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
                            id: 'R6_respuestas',
                            symbolName: 'R6_respuestas',
                            type: 'rect',
                            rect: ['1830px', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'ruleta2',
                            symbolName: 'ruleta',
                            display: 'none',
                            type: 'rect',
                            rect: ['657px', '102px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'ruleta_4',
                            symbolName: 'ruleta_4',
                            display: 'none',
                            type: 'rect',
                            rect: ['657px', '102px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'ruleta_3',
                            symbolName: 'ruleta_3',
                            display: 'none',
                            type: 'rect',
                            rect: ['657px', '102px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'ruleta_2',
                            symbolName: 'ruleta_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['657px', '102px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'ruleta_1',
                            symbolName: 'ruleta_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['657px', '102px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'Submit',
                            symbolName: 'Submit',
                            display: 'none',
                            type: 'rect',
                            rect: ['1509px', '707px', '165', '38', 'auto', 'auto'],
                            clip: 'rect(0px 193.8662109375px 52.28564453125px -28.8662109375px)',
                            cursor: 'pointer'
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
                    duration: 14000,
                    autoPlay: true,
                    labels: {
                        "slide_1": 500,
                        "slide_2": 1500,
                        "slide_3": 2500,
                        "slide_4": 3500,
                        "slide_5": 4500,
                        "correcto": 10000,
                        "incorrecto": 11500,
                        "respuestas": 13500
                    },
                    data: [
                        [
                            "eid364",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Submit}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2080",
                            "display",
                            1113,
                            0,
                            "linear",
                            "${Submit}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2081",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Submit}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2082",
                            "display",
                            2111,
                            0,
                            "linear",
                            "${Submit}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2083",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Submit}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2084",
                            "display",
                            3124,
                            0,
                            "linear",
                            "${Submit}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2085",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${Submit}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2086",
                            "display",
                            4121,
                            0,
                            "linear",
                            "${Submit}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2087",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${Submit}",
                            'none',
                            'block'
                        ],
                        [
                            "eid365",
                            "display",
                            5126,
                            0,
                            "linear",
                            "${Submit}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1126",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ruleta_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3348",
                            "display",
                            500,
                            0,
                            "linear",
                            "${ruleta_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid25",
                            "left",
                            500,
                            500,
                            "linear",
                            "${R6_1}",
                            '1840px',
                            '0px'
                        ],
                        [
                            "eid27",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${R6_1}",
                            '0px',
                            '-1836px'
                        ],
                        [
                            "eid373",
                            "left",
                            13500,
                            500,
                            "linear",
                            "${R6_respuestas}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid325",
                            "scaleX",
                            11500,
                            500,
                            "linear",
                            "${incorrectocontenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid375",
                            "display",
                            11500,
                            0,
                            "linear",
                            "${incorrectocontenedor}",
                            'none',
                            'block'
                        ],
                        [
                            "eid376",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${incorrectocontenedor}",
                            'block',
                            'none'
                        ],
                        [
                            "eid327",
                            "opacity",
                            11500,
                            500,
                            "linear",
                            "${incorrectocontenedor}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${R6_2}",
                            '1840px',
                            '0px'
                        ],
                        [
                            "eid54",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${R6_2}",
                            '0px',
                            '-1840px'
                        ],
                        [
                            "eid743",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ruleta2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3294",
                            "display",
                            500,
                            0,
                            "linear",
                            "${ruleta2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid374",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${correctocontenedor}",
                            'none',
                            'block'
                        ],
                        [
                            "eid377",
                            "display",
                            10750,
                            0,
                            "linear",
                            "${correctocontenedor}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1128",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ruleta_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3346",
                            "display",
                            500,
                            0,
                            "linear",
                            "${ruleta_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid43",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${R6_3}",
                            '1840px',
                            '0px'
                        ],
                        [
                            "eid53",
                            "left",
                            3000,
                            500,
                            "linear",
                            "${R6_3}",
                            '0px',
                            '-1840px'
                        ],
                        [
                            "eid42",
                            "left",
                            3500,
                            500,
                            "linear",
                            "${R6_4}",
                            '1840px',
                            '0px'
                        ],
                        [
                            "eid52",
                            "left",
                            4000,
                            500,
                            "linear",
                            "${R6_4}",
                            '0px',
                            '-1840px'
                        ],
                        [
                            "eid41",
                            "left",
                            4500,
                            500,
                            "linear",
                            "${R6_5}",
                            '1840px',
                            '0px'
                        ],
                        [
                            "eid296",
                            "left",
                            5000,
                            500,
                            "linear",
                            "${R6_5}",
                            '0px',
                            '-1840px'
                        ],
                        [
                            "eid314",
                            "scaleX",
                            10000,
                            500,
                            "linear",
                            "${correctocontenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1127",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ruleta_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3295",
                            "display",
                            500,
                            0,
                            "linear",
                            "${ruleta_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid326",
                            "scaleY",
                            11500,
                            500,
                            "linear",
                            "${incorrectocontenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid23",
                            "left",
                            0,
                            500,
                            "linear",
                            "${R6_portada}",
                            '-5px',
                            '-1830px'
                        ],
                        [
                            "eid315",
                            "scaleY",
                            10000,
                            500,
                            "linear",
                            "${correctocontenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1129",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ruleta_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3347",
                            "display",
                            500,
                            0,
                            "linear",
                            "${ruleta_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid318",
                            "opacity",
                            10000,
                            500,
                            "linear",
                            "${correctocontenedor}",
                            '0',
                            '1'
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
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            borderRadius: ['20px', '20px', '20px', '20px 20px'],
                            id: 'fondotrivia-01',
                            tag: 'img',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fondotrivia-01.jpg', '0px', '0px']
                        },
                        {
                            rect: ['834px', '622px', '161px', '12px', 'auto', 'auto'],
                            id: 'precarga_gif',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/precarga_gif.gif', '0px', '0px']
                        },
                        {
                            rect: ['824px', '603px', '182', '49', 'auto', 'auto'],
                            id: 'btn_inicio',
                            display: 'none',
                            symbolName: 'btn_inicio',
                            cursor: 'pointer',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'sopadeletras-09',
                            tag: 'img',
                            rect: ['719px', '201px', '393px', '393px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sopadeletras-09.png', '0px', '0px']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [41, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', '', 'break-word', ''],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">Ruleta</p>',
                            id: 'texto_1',
                            opacity: '1',
                            align: 'center',
                            rect: ['748px', '370px', '335px', '55px', 'auto', 'auto']
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
                        [
                            "eid397",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_inicio}",
                            'none',
                            'none'
                        ]
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
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
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
            "btn_inicio": {
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
                            id: 'RoundRectCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '182px', '49px', 'auto', 'auto'],
                            borderRadius: ['39px', '39px', '39px', '39px 39px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['13px', '6px', '155px', '31px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Inicio</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '182px', '49px']
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
            "volver": {
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
                            rect: ['0px', '0px', '213px', '50px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['0px', '4px', '213px', '31px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center; line-height: 22px;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Volver a intentar</span></p>',
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
            "contenedorrespuestas": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'box_pregunta',
                            rect: ['530px', '151px', '823px', '73px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/box_pregunta.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['722px', '161px', '439px', '52px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text2Copy5',
                            text: '<p style=\"margin: 0px;\">​Respuestas Correctas</p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['1028px', '272px', '401', '57', 'auto', 'auto'],
                            id: 'RTA1',
                            type: 'group',
                            c: [
                            {
                                id: 'box_respuesta',
                                rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/box_respuesta5.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['43px', '3px', '323px', '52px', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text2',
                                text: '<p style=\"margin: 0px;\">​Brazo</p>',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', '']
                            }]
                        },
                        {
                            rect: ['1027px', '352px', '401', '57', 'auto', 'auto'],
                            id: 'RTA2',
                            type: 'group',
                            c: [
                            {
                                id: 'box_respuestaCopy',
                                rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/box_respuesta5.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['44px', '2px', '323px', '52px', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text2Copy',
                                text: '<p style=\"margin: 0px;\">​Silla</p>',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', '']
                            }]
                        },
                        {
                            rect: ['1027px', '431px', '401', '57', 'auto', 'auto'],
                            id: 'RTA3',
                            type: 'group',
                            c: [
                            {
                                id: 'box_respuestaCopy2',
                                rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/box_respuesta5.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['39px', '2px', '323px', '52px', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text2Copy2',
                                text: '<p style=\"margin: 0px;\">​Caballo</p>',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', '']
                            }]
                        },
                        {
                            rect: ['1028px', '510px', '401', '57', 'auto', 'auto'],
                            id: 'RTA4',
                            type: 'group',
                            c: [
                            {
                                id: 'box_respuestaCopy3',
                                rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/box_respuesta5.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['37px', '3px', '323px', '52px', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text2Copy3',
                                text: '<p style=\"margin: 0px;\">​Paisaje</p>',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', '']
                            }]
                        },
                        {
                            rect: ['1032px', '588px', '401', '57', 'auto', 'auto'],
                            id: 'RTA5',
                            type: 'group',
                            c: [
                            {
                                id: 'box_respuestaCopy4',
                                rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/box_respuesta5.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['33px', '2px', '323px', '52px', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text2Copy4',
                                text: '<p style=\"margin: 0px;\">​Cama</p>',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', '']
                            }]
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">2.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>',
                            rect: ['441px', '360px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            id: 'TextCopy',
                            text: '<p style=\"margin: 0px;\">3.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>',
                            rect: ['441px', '440px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            id: 'TextCopy2',
                            text: '<p style=\"margin: 0px;\">4.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>',
                            rect: ['441px', '517px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            id: 'TextCopy3',
                            text: '<p style=\"margin: 0px;\">5.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>',
                            rect: ['441px', '595px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            id: 'TextCopy4',
                            text: '<p style=\"margin: 0px;\">1.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>',
                            rect: ['441px', '280px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['651px', '285px', null, null, 'auto', 'auto'],
                            type: 'rect',
                            id: 'audio_1',
                            symbolName: 'audio_1',
                            cursor: 'pointer',
                            transform: [[], [], [], ['1.1784', '1.1784']]
                        },
                        {
                            rect: ['650px', '365px', null, null, 'auto', 'auto'],
                            type: 'rect',
                            id: 'audio_2',
                            symbolName: 'audio_2',
                            cursor: 'pointer',
                            transform: [[], [], [], ['1.18', '1.18']]
                        },
                        {
                            rect: ['650px', '445px', null, null, 'auto', 'auto'],
                            type: 'rect',
                            id: 'audio_3',
                            symbolName: 'audio_3',
                            cursor: 'pointer',
                            transform: [[], [], [], ['1.18', '1.18']]
                        },
                        {
                            rect: ['649px', '524px', null, null, 'auto', 'auto'],
                            type: 'rect',
                            id: 'audio_4',
                            symbolName: 'audio_4',
                            cursor: 'pointer',
                            transform: [[], [], [], ['1.18', '1.18']]
                        },
                        {
                            rect: ['650px', '601px', null, null, 'auto', 'auto'],
                            type: 'rect',
                            id: 'audio_5',
                            symbolName: 'audio_5',
                            cursor: 'pointer',
                            transform: [[], [], [], ['1.18', '1.18']]
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
                        }
                    }
                },
                timeline: {
                    duration: 14239,
                    autoPlay: true,
                    data: [

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
                            rect: ['-24px', '3px', '213px', '43px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(182,154,212,1.00)', 50], ['rgba(158,122,196,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['0px', '-3px', '213px', '31px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'texto_3',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255); font-size: 25px;\">Enviar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
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
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "activado": 0,
                        "desactivado": 500
                    },
                    data: [
                        [
                            "eid13",
                            "background-image",
                            0,
                            500,
                            "linear",
                            "${RoundRect}",
                            [270,[['rgba(111,67,158,1.00)',50],['rgba(84,53,118,1.00)',50]]],
                            [270,[['rgba(182,154,212,1.00)',50],['rgba(158,122,196,1.00)',50]]]
                        ],
                        [
                            "eid14",
                            "background-image",
                            500,
                            500,
                            "linear",
                            "${RoundRect}",
                            [270,[['rgba(182,154,212,1.00)',50],['rgba(158,122,196,1.00)',50]]],
                            [270,[['rgba(111,67,158,1.00)',50],['rgba(84,53,118,1.00)',50]]]
                        ]
                    ]
                }
            },
            "R6_respuestas": {
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
                            fill: ['rgba(255,0,246,1.00)']
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
            "btnInicio": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '3px', '225px', '50px', 'auto', 'auto'],
                            borderRadius: ['25px', '25px', '25px', '25px 25px'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(214,219,65,1.00)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]]
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'texto_2',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-weight: 700; font-size: 28px;\">Iniciar</span></p>',
                            align: 'left',
                            rect: ['0px', '10px', '225px', '36px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '225px', '56px']
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
                            rect: ['202px', '198px', '52px', '52px', 'auto', 'auto'],
                            transform: [[], ['720'], [], ['1.06663', '1.06663']],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['189px', '185px', '121px', '121px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [3, 'rgb(0, 0, 0)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['210px', '199px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '35px', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(172,172,172,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Haga</p><p style=\"margin: 0px; line-height: 24px;\">​<span style=\"color: rgb(197, 0, 0); font-size: 40px;\">Click</span></p><p style=\"margin: 0px;\">​aquí</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['170px', '164px', '165px', '169px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'btn_ruleta',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(177,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '515px', '515px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid437",
                            "rotateZ",
                            0,
                            3500,
                            "linear",
                            "${Rectangle2}",
                            '0deg',
                            '566deg'
                        ],
                        [
                            "eid443",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3399",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3400",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3401",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3402",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3403",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid444",
                            "-webkit-transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3404",
                            "-moz-transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3405",
                            "-ms-transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3406",
                            "msTransformOrigin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3407",
                            "-o-transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3408",
                            "transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "ruleta_1": {
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
                            rect: ['202px', '198px', '52px', '52px', 'auto', 'auto'],
                            transform: [[], ['720'], [], ['1.06663', '1.06663']],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['189px', '185px', '121px', '121px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [3, 'rgb(0, 0, 0)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['210px', '199px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '35px', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(172,172,172,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Haga</p><p style=\"margin: 0px; line-height: 24px;\">​<span style=\"color: rgb(197, 0, 0); font-size: 40px;\">Click</span></p><p style=\"margin: 0px;\">​aquí</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['170px', '164px', '165px', '169px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'btn_ruleta',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(177,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '515px', '515px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid437",
                            "rotateZ",
                            0,
                            3500,
                            "linear",
                            "${Rectangle2}",
                            '0deg',
                            '697deg'
                        ],
                        [
                            "eid443",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3409",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3410",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3411",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3412",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3413",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid444",
                            "-webkit-transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3414",
                            "-moz-transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3415",
                            "-ms-transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3416",
                            "msTransformOrigin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3417",
                            "-o-transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3418",
                            "transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "ruleta_2": {
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
                            rect: ['202px', '198px', '52px', '52px', 'auto', 'auto'],
                            transform: [[], ['720'], [], ['1.06663', '1.06663']],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['189px', '185px', '121px', '121px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [3, 'rgb(0, 0, 0)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['210px', '199px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '35px', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(172,172,172,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Haga</p><p style=\"margin: 0px; line-height: 24px;\">​<span style=\"color: rgb(197, 0, 0); font-size: 40px;\">Click</span></p><p style=\"margin: 0px;\">​aquí</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['170px', '164px', '165px', '169px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'btn_ruleta',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(177,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '515px', '515px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid437",
                            "rotateZ",
                            0,
                            3500,
                            "linear",
                            "${Rectangle2}",
                            '0deg',
                            '427deg'
                        ],
                        [
                            "eid443",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3419",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3420",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3421",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3422",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3423",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid444",
                            "-webkit-transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3424",
                            "-moz-transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3425",
                            "-ms-transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3426",
                            "msTransformOrigin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3427",
                            "-o-transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3428",
                            "transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "ruleta_3": {
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
                            rect: ['202px', '198px', '52px', '52px', 'auto', 'auto'],
                            transform: [[], ['720'], [], ['1.06663', '1.06663']],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['189px', '185px', '121px', '121px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [3, 'rgb(0, 0, 0)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['210px', '199px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '35px', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(172,172,172,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Haga</p><p style=\"margin: 0px; line-height: 24px;\">​<span style=\"color: rgb(197, 0, 0); font-size: 40px;\">Click</span></p><p style=\"margin: 0px;\">​aquí</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['170px', '164px', '165px', '169px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'btn_ruleta',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(177,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '515px', '515px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid437",
                            "rotateZ",
                            0,
                            3500,
                            "linear",
                            "${Rectangle2}",
                            '0deg',
                            '651deg'
                        ],
                        [
                            "eid2342",
                            "rotateZ",
                            3500,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '651deg',
                            '651deg'
                        ],
                        [
                            "eid443",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3429",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3430",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3431",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3432",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3433",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid444",
                            "-webkit-transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3434",
                            "-moz-transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3435",
                            "-ms-transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3436",
                            "msTransformOrigin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3437",
                            "-o-transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3438",
                            "transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "ruleta_4": {
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
                            rect: ['202px', '198px', '52px', '52px', 'auto', 'auto'],
                            transform: [[], ['720'], [], ['1.06663', '1.06663']],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['189px', '185px', '121px', '121px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [3, 'rgb(0, 0, 0)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['210px', '199px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '35px', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(172,172,172,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Haga</p><p style=\"margin: 0px; line-height: 24px;\">​<span style=\"color: rgb(197, 0, 0); font-size: 40px;\">Click</span></p><p style=\"margin: 0px;\">​aquí</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['170px', '164px', '165px', '169px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'btn_ruleta',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(177,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '515px', '515px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid437",
                            "rotateZ",
                            0,
                            3500,
                            "linear",
                            "${Rectangle2}",
                            '0deg',
                            '472deg'
                        ],
                        [
                            "eid443",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3439",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3440",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3441",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3442",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3443",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid444",
                            "-webkit-transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3444",
                            "-moz-transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3445",
                            "-ms-transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3446",
                            "msTransformOrigin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3447",
                            "-o-transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3448",
                            "transform-origin",
                            4000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("R5_edgeActions.js");
})("EDGE-4821767");
