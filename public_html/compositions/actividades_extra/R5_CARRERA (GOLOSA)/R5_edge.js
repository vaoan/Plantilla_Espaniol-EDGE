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
            js+"carrera_conocimiento.js"
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
                            id: 'golosa_sym',
                            symbolName: 'golosa_sym',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
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
                                tag: 'img',
                                rect: ['840px', '278px', '150px', '150px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"correcto.png",'0px','0px']
                            },
                            {
                                id: 'TextCopy3',
                                type: 'text',
                                rect: ['784px', '475px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​¡Excelente trabajo!</p>",
                                font: ['source-sans-pro, sans-serif', [32, "px"], "rgba(0,0,0,1)", "600", "none", "", "break-word", "nowrap"]
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
                                tag: 'img',
                                rect: ['840px', '269px', '150px', '150px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"incorrecto.png",'0px','0px']
                            },
                            {
                                id: 'TextCopy4',
                                type: 'text',
                                rect: ['752px', '443px', '326px', '54px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​¡Respuesta incorrecta!</p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [32, "px"], "rgba(0,0,0,1)", "600", "none", "", "break-word", ""]
                            }]
                        },
                        {
                            id: 'R6_portada',
                            symbolName: 'R6_portada',
                            type: 'rect',
                            rect: ['-1830px', '0px', '1830', '780', 'auto', 'auto']
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
                            display: 'none',
                            type: 'rect',
                            rect: ['1830px', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'Submit',
                            symbolName: 'Submit',
                            display: 'none',
                            type: 'rect',
                            rect: ['1417px', '707px', '165', '38', 'auto', 'auto'],
                            clip: 'rect(0px 193.8662109375px 38px -28.8662109375px)',
                            cursor: 'pointer'
                        },
                        {
                            id: 'SkillsCopy',
                            symbolName: 'Skills',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '617px', '283', '157', 'auto', 'auto']
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
                    duration: 8000,
                    autoPlay: true,
                    labels: {
                        "slide_1": 500,
                        "slide_2": 1000,
                        "slide_3": 1500,
                        "slide_4": 2000,
                        "slide_5": 2500,
                        "correcto": 4000,
                        "incorrecto": 5500,
                        "respuestas": 7500
                    },
                    data: [
                        [
                            "eid364",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Submit}",
                            'none',
                            'block'
                        ],
                        [
                            "eid365",
                            "display",
                            2583,
                            0,
                            "linear",
                            "${Submit}",
                            'block',
                            'none'
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
                            '-1836px'
                        ],
                        [
                            "eid373",
                            "left",
                            7500,
                            500,
                            "linear",
                            "${R6_respuestas}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid325",
                            "scaleX",
                            5500,
                            500,
                            "linear",
                            "${incorrectocontenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid375",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${incorrectocontenedor}",
                            'none',
                            'block'
                        ],
                        [
                            "eid376",
                            "display",
                            6250,
                            0,
                            "linear",
                            "${incorrectocontenedor}",
                            'block',
                            'none'
                        ],
                        [
                            "eid421",
                            "display",
                            500,
                            0,
                            "linear",
                            "${SkillsCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid422",
                            "display",
                            2583,
                            0,
                            "linear",
                            "${SkillsCopy}",
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
                            "eid374",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${correctocontenedor}",
                            'none',
                            'block'
                        ],
                        [
                            "eid377",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${correctocontenedor}",
                            'block',
                            'none'
                        ],
                        [
                            "eid427",
                            "display",
                            500,
                            0,
                            "linear",
                            "${golosa_sym}",
                            'none',
                            'block'
                        ],
                        [
                            "eid430",
                            "display",
                            2583,
                            0,
                            "linear",
                            "${golosa_sym}",
                            'block',
                            'none'
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
                            "eid296",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${R6_5}",
                            '0px',
                            '-1840px'
                        ],
                        [
                            "eid326",
                            "scaleY",
                            5500,
                            500,
                            "linear",
                            "${incorrectocontenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid379",
                            "display",
                            7500,
                            0,
                            "linear",
                            "${R6_respuestas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid314",
                            "scaleX",
                            4000,
                            500,
                            "linear",
                            "${correctocontenedor}",
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
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid315",
                            "scaleY",
                            4000,
                            500,
                            "linear",
                            "${correctocontenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid327",
                            "opacity",
                            5500,
                            500,
                            "linear",
                            "${incorrectocontenedor}",
                            '0',
                            '1'
                        ],
                        [
                            "eid318",
                            "opacity",
                            4000,
                            500,
                            "linear",
                            "${correctocontenedor}",
                            '0',
                            '1'
                        ],
                            [ "eid429", "trigger", 517, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${golosa_sym}', [] ] ]
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
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['395px', '405px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text2',
                            font: ['source-sans-pro, sans-serif', [100, 'px'], 'rgba(0,34,123,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            textShadow: ['rgba(17,17,17,0.65)', 6, 4, 10],
                            text: '<p style=\"margin: 0px;\">​Carrera de conocimiento</p>'
                        },
                        {
                            rect: ['115px', '541px', '1600px', '8px', 'auto', 'auto'],
                            borderRadius: ['39px', '39px', '39px', '39px 39px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,182,0,1.00)']
                        },
                        {
                            rect: ['115px', '562px', '1600px', '5px', 'auto', 'auto'],
                            borderRadius: ['39px', '39px', '39px', '39px 39px'],
                            id: 'RoundRectCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,182,0,1.00)']
                        },
                        {
                            rect: ['834px', '622px', '161px', '12px', 'auto', 'auto'],
                            id: 'precarga_gif',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/precarga_gif.gif', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'btn_inicio',
                            display: 'none',
                            symbolName: 'btn_inicio',
                            cursor: 'pointer',
                            rect: ['824px', '603px', '182', '49', 'auto', 'auto']
                        },
                        {
                            rect: ['756px', '65px', '319px', '319px', 'auto', 'auto'],
                            id: 'ficha',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ficha2.png', '0px', '0px']
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
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
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
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
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
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
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
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
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
                            rect: ['0px', '0px', '213px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', '0px', '213px', '31px', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Volver a intentar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
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
                            text: '<p style=\"margin: 0px;\">​Respuestas Correctas</p>',
                            id: 'Text2Copy5',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', '']
                        },
                        {
                            type: 'group',
                            id: 'RTA1',
                            rect: ['1028px', '272px', '401', '57', 'auto', 'auto'],
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
                                text: '<p style=\"margin: 0px;\">​Brazo</p>',
                                id: 'Text2',
                                textStyle: ['', '', '', '', 'none'],
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', '']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'RTA2',
                            rect: ['1027px', '352px', '401', '57', 'auto', 'auto'],
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
                                text: '<p style=\"margin: 0px;\">​Silla</p>',
                                id: 'Text2Copy',
                                textStyle: ['', '', '', '', 'none'],
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', '']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'RTA3',
                            rect: ['1027px', '431px', '401', '57', 'auto', 'auto'],
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
                                text: '<p style=\"margin: 0px;\">​Caballo</p>',
                                id: 'Text2Copy2',
                                textStyle: ['', '', '', '', 'none'],
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', '']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'RTA4',
                            rect: ['1028px', '510px', '401', '57', 'auto', 'auto'],
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
                                text: '<p style=\"margin: 0px;\">​Paisaje</p>',
                                id: 'Text2Copy3',
                                textStyle: ['', '', '', '', 'none'],
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', '']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'RTA5',
                            rect: ['1032px', '588px', '401', '57', 'auto', 'auto'],
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
                                text: '<p style=\"margin: 0px;\">​Cama</p>',
                                id: 'Text2Copy4',
                                textStyle: ['', '', '', '', 'none'],
                                align: 'center',
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
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
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
                            rect: ['-24px', '3px', '213px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(182,154,212,1.00)', 50], ['rgba(158,122,196,1.00)', 50]]]],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'TextCopy3',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Enviar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                rect: ['60px', '-2px', '94px', '31px', 'auto', 'auto']
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
            "conten_tablero": {
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
                            id: 'conten_tablero',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['91px', '467px', '50px', '183px', 'auto', 'auto'],
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2Copy2',
                            stroke: [1, 'rgb(79, 45, 110)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(79,45,110,1.00)']
                        },
                        {
                            rect: ['91px', '600px', '1678px', '50px', 'auto', 'auto'],
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2Copy',
                            stroke: [1, 'rgb(79, 45, 110)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(79,45,110,1.00)']
                        },
                        {
                            rect: ['1719px', '467px', '50px', '183px', 'auto', 'auto'],
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            stroke: [1, 'rgb(79, 45, 110)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(79,45,110,1.00)']
                        },
                        {
                            rect: ['86px', '512px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,182,0,1.00)'],
                            id: 'casilla_1',
                            stroke: [1, 'rgba(255,182,0,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)']
                        },
                        {
                            rect: ['125px', '614px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,182,0,1.00)'],
                            id: 'casilla_2',
                            stroke: [1, 'rgba(255,182,0,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)']
                        },
                        {
                            rect: ['470px', '614px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,182,0,1.00)'],
                            id: 'casilla_3',
                            stroke: [1, 'rgba(255,182,0,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)']
                        },
                        {
                            rect: ['298px', '614px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,182,0,1.00)'],
                            id: 'casilla_4',
                            stroke: [1, 'rgba(255,182,0,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)']
                        },
                        {
                            rect: ['643px', '614px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,182,0,1.00)'],
                            id: 'casilla_5',
                            stroke: [1, 'rgba(255,182,0,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)']
                        },
                        {
                            rect: ['816px', '614px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,182,0,1.00)'],
                            id: 'casilla_6',
                            stroke: [1, 'rgba(255,182,0,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)']
                        },
                        {
                            rect: ['1161px', '614px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,182,0,1.00)'],
                            id: 'casilla_7',
                            stroke: [1, 'rgba(255,182,0,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)']
                        },
                        {
                            rect: ['988px', '614px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,182,0,1.00)'],
                            id: 'casilla_9',
                            stroke: [1, 'rgba(255,182,0,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)']
                        },
                        {
                            rect: ['1334px', '614px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,182,0,1.00)'],
                            id: 'casilla_5Copy',
                            stroke: [1, 'rgba(255,182,0,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)']
                        },
                        {
                            rect: ['1506px', '614px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,182,0,1.00)'],
                            id: 'casilla_6Copy',
                            stroke: [1, 'rgba(255,182,0,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)']
                        },
                        {
                            rect: ['1714px', '501px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,182,0,1.00)'],
                            id: 'casilla_7Copy',
                            stroke: [1, 'rgba(255,182,0,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)']
                        },
                        {
                            rect: ['1679px', '614px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,182,0,1.00)'],
                            id: 'casilla_9Copy',
                            stroke: [1, 'rgba(255,182,0,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)']
                        },
                        {
                            rect: ['58px', '396px', '116px', '55px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,182,0,1.00)'],
                            id: 'EllipseCopy12',
                            stroke: [1, 'rgba(255,182,0,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['', 0, 4, 0, 1, 'rgba(119,85,0,1.00)']
                        },
                        {
                            rect: ['1686px', '396px', '116px', '55px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,182,0,1.00)'],
                            id: 'EllipseCopy11',
                            stroke: [1, 'rgba(255,182,0,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['', 0, 4, 0, 1, 'rgba(119,85,0,1.00)']
                        },
                        {
                            rect: ['68px', '277px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '400', 'none', 'italic', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text2Copy',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-style: normal; font-weight: 700; font-size: 39px;\">Inicio</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['1701px', '277px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '400', 'none', 'italic', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-style: normal; font-weight: 700; font-size: 39px;\">Meta</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['85px', '112px', '1693px', '50px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'ins_pedagCopy',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 30px; color: rgb(51, 51, 51);\">Identifique la palabra correcta (singular o plural) según el audio y la imagen.&nbsp;</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 30px; color: rgb(51, 51, 51);\">​</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['86px', '162px', '1678px', '77px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal'],
                            align: 'left',
                            id: 'ins_tecnicaCopy',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(51, 51, 51);\">Instrucción: escuche el audio y seleccione la respuesta correcta teniendo en cuenta la imagen. Tiene dos intentos y tiempo límite.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(51, 51, 51);\">​</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['85px', '65px', '1693px', '63px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'contextoCopy',
                            text: '<p style=\"margin: 0px; line-height: 34px;\">​<span style=\"font-size: 30px; color: rgb(51, 51, 51);\">Es importante aprender a identificar palabras en singular y en plural, así como conocer cuál es la forma contraria.</span></p>',
                            textStyle: ['', '', '30px', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['34px', '90px', '57px', '85px', 'auto', 'auto'],
                            tag: 'img',
                            id: 'vineta_lilaCopy',
                            transform: [[], [], [], ['0.25', '0.25']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/vineta_lila.png', '0px', '0px']
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
            "ficha": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1627px', '207px', '120px', '119px', 'auto', 'auto'],
                            id: 'ficha',
                            fill: ['rgba(0,0,0,0)', 'images/ficha.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '120px', '120px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    labels: {
                        "ficha_a": 500,
                        "ficha_b": 1000,
                        "ficha_c": 1500,
                        "ficha_d": 2000,
                        "ficha_e": 2500,
                        "ficha_f": 3000
                    },
                    data: [
                        [
                            "eid436",
                            "top",
                            500,
                            250,
                            "linear",
                            "${ficha}",
                            '10px',
                            '207px'
                        ],
                        [
                            "eid455",
                            "top",
                            2750,
                            250,
                            "linear",
                            "${ficha}",
                            '207px',
                            '10px'
                        ],
                        [
                            "eid412",
                            "left",
                            750,
                            250,
                            "linear",
                            "${ficha}",
                            '0px',
                            '38px'
                        ],
                        [
                            "eid413",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${ficha}",
                            '38px',
                            '383px'
                        ],
                        [
                            "eid442",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${ficha}",
                            '383px',
                            '1073px'
                        ],
                        [
                            "eid448",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${ficha}",
                            '1073px',
                            '1592px'
                        ],
                        [
                            "eid454",
                            "left",
                            2500,
                            250,
                            "linear",
                            "${ficha}",
                            '1592px',
                            '1629px'
                        ],
                        [
                            "eid416",
                            "left",
                            2750,
                            250,
                            "linear",
                            "${ficha}",
                            '1629px',
                            '1627px'
                        ]
                    ]
                }
            },
            "oral": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-24px', '16px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_HABLA.png', '0px', '0px'],
                            id: 'V_HABLA',
                            transform: [[], [], [], ['0.45', '0.45']],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_oral',
                            opacity: '0',
                            rect: ['-18px', '-22px', '129px', '63px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(0,104,95,1.00)'],
                            c: [
                            {
                                rect: ['55px', '48px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,104,95,1.00)']
                            },
                            {
                                rect: ['8px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​oral</p>',
                                id: 'TextCopy2',
                                textStyle: ['', '', '23px', '', ''],
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '102px', '109px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 500
                    },
                    data: [
                        [
                            "eid29",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Tool_oral}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Tool_oral}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "auditiva": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-12px', '12px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCUCHA.png', '0px', '0px'],
                            id: 'V_ESCUCHA',
                            transform: [[], [], [], ['0.45', '0.45']],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_auditiva',
                            opacity: '0',
                            rect: ['-15px', '-25px', '148px', '63px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(0,104,95,1.00)'],
                            c: [
                            {
                                rect: ['64px', '48px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,104,95,1.00)']
                            },
                            {
                                rect: ['7px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​auditiva</p>',
                                id: 'TextCopy',
                                textStyle: ['', '', '23px', '', ''],
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '117px', '104px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 500
                    },
                    data: [
                        [
                            "eid32",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Tool_auditiva}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Tool_auditiva}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Skills": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Skills',
                            rect: ['-122px', '-30px', '530px', '250px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/Skills.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            display: 'block',
                            id: 'B_ESCRITA',
                            rect: ['44px', '33px', '141px', '141px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCRITURA.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.45', '0.45']],
                            tag: 'img',
                            display: 'block',
                            id: 'B_ORAL',
                            rect: ['157px', '35px', '141px', '141px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/B_HABLA.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            tag: 'img',
                            display: 'none',
                            id: 'B_LECTORA',
                            rect: ['-12px', '14px', '141px', '141px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/B_LECTURA.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.45', '0.45']],
                            tag: 'img',
                            display: 'block',
                            id: 'B_AUDITIVA',
                            rect: ['100px', '14px', '141px', '141px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCUCHA.png', '0px', '0px']
                        },
                        {
                            rect: ['62px', '16px', '102', '108', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'escrita',
                            id: 'escrita',
                            type: 'rect'
                        },
                        {
                            rect: ['181px', '19px', '102', '109', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'oral',
                            id: 'oral',
                            type: 'rect'
                        },
                        {
                            rect: ['0px', '-1px', '117', '113', 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'lectora',
                            id: 'lectora',
                            type: 'rect'
                        },
                        {
                            rect: ['112px', '1px', '117', '104', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'auditiva',
                            id: 'auditiva',
                            type: 'rect'
                        },
                        {
                            rect: ['24px', '50px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Tool_lectora',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.00)']
                        },
                        {
                            rect: ['80px', '71px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Tool_escrita',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.00)']
                        },
                        {
                            rect: ['136px', '49px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Tool_auditiva',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.00)']
                        },
                        {
                            rect: ['193px', '71px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Tool_oral',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '283px', '157px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid50",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_ORAL}",
                            'block',
                            'block'
                        ],
                        [
                            "eid49",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_LECTORA}",
                            'none',
                            'none'
                        ],
                        [
                            "eid51",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_AUDITIVA}",
                            'block',
                            'block'
                        ],
                        [
                            "eid48",
                            "display",
                            0,
                            0,
                            "linear",
                            "${escrita}",
                            'none',
                            'none'
                        ],
                        [
                            "eid45",
                            "display",
                            0,
                            0,
                            "linear",
                            "${auditiva}",
                            'none',
                            'none'
                        ],
                        [
                            "eid46",
                            "display",
                            0,
                            0,
                            "linear",
                            "${lectora}",
                            'block',
                            'block'
                        ],
                        [
                            "eid47",
                            "display",
                            0,
                            0,
                            "linear",
                            "${oral}",
                            'none',
                            'none'
                        ],
                        [
                            "eid52",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_ESCRITA}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "lectora": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-12px', '15px', '140px', '140px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_LECTURA.png', '0px', '0px'],
                            id: 'V_LECTURA',
                            transform: [[], [], [], ['0.45', '0.45']],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_lectora',
                            opacity: '0',
                            rect: ['0px', '-23px', '149px', '63px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(0,104,95,1.00)'],
                            c: [
                            {
                                rect: ['48px', '48px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,104,95,1.00)']
                            },
                            {
                                rect: ['7px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​lectora</p>',
                                id: 'Text',
                                textStyle: ['', '', '23px', '', ''],
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '117px', '113px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 500
                    },
                    data: [
                        [
                            "eid30",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Tool_lectora}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Tool_lectora}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "escrita": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-18px', '17px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCRITURA.png', '0px', '0px'],
                            id: 'V_ESCRITURA',
                            transform: [[], [], [], ['0.45', '0.45']],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_escrita',
                            opacity: '0',
                            rect: ['-10px', '-19px', '129px', '63px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(0,104,95,1.00)'],
                            c: [
                            {
                                rect: ['54px', '48px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,104,95,1.00)']
                            },
                            {
                                rect: ['7px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​escrita</p>',
                                id: 'TextCopy3',
                                textStyle: ['', '', '23px', '', ''],
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '102px', '108px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 500
                    },
                    data: [
                        [
                            "eid31",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Tool_escrita}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Tool_escrita}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "golosa_sym": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1040px', '241px', '730px', '510px', 'auto', 'auto'],
                            id: 'golosa_lines',
                            fill: ['rgba(0,0,0,0)', 'images/golosa_lines.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['1040px', '241px', '730px', '510px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/step04.png', '0px', '0px'],
                            display: 'none',
                            type: 'image',
                            id: 'step04',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            id: 'step03',
                            opacity: '0',
                            rect: ['1040px', '241px', '730px', '510px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/step03.png', '0px', '0px'],
                            clip: 'rect(0px 730px 510px 0px)',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/step02.png', '0px', '0px'],
                            display: 'none',
                            id: 'step02',
                            rect: ['1040px', '241px', '730px', '510px', 'auto', 'auto'],
                            clip: 'rect(0px 548px 510px 0px)',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/step01.png', '0px', '0px'],
                            display: 'none',
                            id: 'step01',
                            rect: ['1040px', '241px', '730px', '510px', 'auto', 'auto'],
                            clip: 'rect(0px 730px 510px 730px)',
                            tag: 'img'
                        },
                        {
                            rect: ['1492px', '261px', '243px', '366px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/foot01.png', '0px', '0px'],
                            id: 'foot01',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['1280px', '209px', '153px', '301px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/foot02.png', '0px', '0px'],
                            id: 'foot02',
                            type: 'image',
                            clip: 'rect(25px 153px 301px 0px)',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            id: 'foot012',
                            opacity: '1',
                            rect: ['1217px', '140px', '208px', '314px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/foot01.png', '0px', '0px'],
                            clip: 'rect(95px 208.47540283203px 314px 0px)',
                            tag: 'img'
                        },
                        {
                            rect: ['1048px', '59px', '153px', '301px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/foot02.png', '0px', '0px'],
                            id: 'foot02Copy',
                            type: 'image',
                            clip: 'rect(186px 153px 301px 0px)',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            id: 'conten_tablero22',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'text',
                            rect: ['85px', '112px', '1693px', '50px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 30px; color: rgb(51, 51, 51);\">Identifique la palabra correcta (singular o plural) según el audio y la imagen.&nbsp;</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 30px; color: rgb(51, 51, 51);\">​</span></p>',
                            id: 'ins_pedag22',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['86px', '162px', '1678px', '77px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(51, 51, 51);\">Instrucción: escuche el audio y seleccione la respuesta correcta teniendo en cuenta la imagen. Tiene dos intentos y tiempo límite.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(51, 51, 51);\">​</span></p>',
                            id: 'ins_tecnica22',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['85px', '65px', '1693px', '63px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px; line-height: 34px;\">​<span style=\"font-size: 30px; color: rgb(51, 51, 51);\">Es importante aprender a identificar palabras en singular y en plural, así como conocer cuál es la forma contraria.</span></p>',
                            id: 'contexto22',
                            textStyle: ['', '', '30px', '', 'none'],
                            align: 'left',
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/vineta_lila.png', '0px', '0px'],
                            id: 'vineta_lila22',
                            rect: ['34px', '90px', '57px', '85px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.25', '0.25']],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
                        }
                    }
                },
                timeline: {
                    duration: 6750,
                    autoPlay: true,
                    data: [
                        [
                            "eid36",
                            "opacity",
                            5250,
                            1000,
                            "linear",
                            "${step04}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "clip",
                            1750,
                            1000,
                            "linear",
                            "${step02}",
                            [0,548,510,548],
                            [0,548,510,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid42",
                            "opacity",
                            6250,
                            500,
                            "linear",
                            "${foot02Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid43",
                            "opacity",
                            6750,
                            0,
                            "linear",
                            "${foot02Copy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid44",
                            "clip",
                            6250,
                            0,
                            "linear",
                            "${foot02Copy}",
                            [186,153,301,0],
                            [186,153,301,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid19",
                            "opacity",
                            2750,
                            500,
                            "linear",
                            "${foot02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            3250,
                            250,
                            "linear",
                            "${foot02}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21",
                            "clip",
                            3250,
                            0,
                            "linear",
                            "${foot02}",
                            [25,153,301,0],
                            [25,153,301,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid11",
                            "clip",
                            38,
                            962,
                            "linear",
                            "${step01}",
                            [0,730,510,730],
                            [0,730,510,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid53",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${step02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid34",
                            "opacity",
                            4500,
                            500,
                            "linear",
                            "${foot012}",
                            '0',
                            '1'
                        ],
                        [
                            "eid35",
                            "opacity",
                            5000,
                            250,
                            "linear",
                            "${foot012}",
                            '1',
                            '0'
                        ],
                        [
                            "eid15",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${foot01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "opacity",
                            1500,
                            250,
                            "linear",
                            "${foot01}",
                            '1',
                            '0'
                        ],
                        [
                            "eid28",
                            "opacity",
                            3500,
                            1000,
                            "linear",
                            "${step03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid428",
                            "display",
                            38,
                            0,
                            "linear",
                            "${step01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid56",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${foot012}",
                            'none',
                            'block'
                        ],
                        [
                            "eid55",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${step04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid54",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${step03}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("R5_edgeActions.js");
})("EDGE-4821767");
