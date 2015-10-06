/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>',
            'sena_icon': '<link rel=\"stylesheet\" href=\"css/stylesheet.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />'        },
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
            js+"r5.js",
            js+"trivia.js",
            js+"zoomUtilities.js"
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
                                rect: ['840px', '250px', '150px', '150px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"correcto.png",'0px','0px']
                            },
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['840px', '325px', '150px', '75px', 'auto', 'auto'],
                                opacity: '0',
                                text: "<p style=\"margin: 0px;\">​1</p>",
                                align: "center",
                                font: ['sena_icon', [114, "px"], "rgba(0,0,0,0.00)", "600", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "0px", "", "none"]
                            },
                            {
                                id: 'texto_4',
                                type: 'text',
                                rect: ['735px', '413px', '360px', '43px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​¡Excelente trabajo!</p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [32, "px"], "rgba(0,0,0,1)", "600", "none", "", "break-word", ""]
                            },
                            {
                                id: 'Btn_Respuestascorrecto',
                                symbolName: 'Btn_Respuestas',
                                type: 'rect',
                                rect: ['808px', '494px', 'undefined', 'undefined', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'otroincontenedor',
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
                                rect: ['840px', '241px', '150px', '150px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"incorrecto.png",'0px','0px']
                            },
                            {
                                id: 'TextCopy',
                                type: 'text',
                                rect: ['841px', '316px', '150px', '75px', 'auto', 'auto'],
                                opacity: '0',
                                text: "<p style=\"margin: 0px;\">​2</p>",
                                align: "center",
                                font: ['sena_icon', [114, "px"], "rgba(0,0,0,0.00)", "600", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "0px", "", "none"]
                            },
                            {
                                id: 'texto_5',
                                type: 'text',
                                rect: ['735px', '400px', '360px', '54px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; line-height: 34px;\">​¡Respuesta incorrecta!</p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [32, "px"], "rgba(0,0,0,1)", "600", "none", "", "break-word", ""]
                            }]
                        },
                        {
                            id: 'incorrectocontenedor',
                            display: 'block',
                            type: 'rect',
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['0.5','0.5']],
                            c: [
                            {
                                id: 'RoundRectCopy2',
                                type: 'rect',
                                rect: ['735px', '210px', '360px', '360px', 'auto', 'auto'],
                                borderRadius: ["15px", "15px", "15px", "15px 15px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                boxShadow: ["", 0, 0, 25, 3, "rgba(70,70,70,0.68)"]
                            },
                            {
                                id: 'Btn_Respuestasincorrecto',
                                symbolName: 'Btn_Respuestas',
                                type: 'rect',
                                rect: ['809px', '492px', 'undefined', 'undefined', 'auto', 'auto']
                            },
                            {
                                id: 'incorrectoCopy',
                                type: 'image',
                                rect: ['840px', '241px', '150px', '150px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"incorrecto.png",'0px','0px']
                            },
                            {
                                id: 'TextCopy2',
                                type: 'text',
                                rect: ['841px', '316px', '150px', '75px', 'auto', 'auto'],
                                opacity: '0',
                                text: "<p style=\"margin: 0px;\">​2</p>",
                                align: "center",
                                font: ['sena_icon', [114, "px"], "rgba(0,0,0,0.00)", "600", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "0px", "", "none"]
                            },
                            {
                                id: 'texto_5Copy',
                                type: 'text',
                                rect: ['735px', '400px', '360px', '77px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; line-height: 34px;\">​¡Respuesta incorrecta!</p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [32, "px"], "rgba(0,0,0,1)", "600", "none", "", "break-word", ""]
                            }]
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
                            id: 'TIMER_CONTAINER',
                            symbolName: 'TIMER_CONTAINER',
                            display: 'none',
                            type: 'rect',
                            rect: ['1265px', '425px', '213', '100', 'auto', 'auto'],
                            clip: 'rect(0px 100.9814453125px 100px 0px)'
                        },
                        {
                            id: 'R6_portada',
                            symbolName: 'R6_portada',
                            type: 'rect',
                            rect: ['-1836px', '0px', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'Submit',
                            symbolName: 'Submit',
                            display: 'none',
                            type: 'rect',
                            rect: ['1509px', '707px', '165', '38', 'auto', 'auto'],
                            clip: 'rect(0px 193.8662109375px 50px -28.8662109375px)',
                            cursor: 'pointer'
                        },
                        {
                            id: 'Skills',
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
                        "correcto": 3500,
                        "otroin": 4500,
                        "incorrecto": 5500,
                        "respuestas": 7500
                    },
                    data: [
                        [
                            "eid697",
                            "opacity",
                            5500,
                            500,
                            "linear",
                            "${TextCopy2}",
                            '0',
                            '1'
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
                            "eid666",
                            "scaleX",
                            5500,
                            500,
                            "linear",
                            "${incorrectocontenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid662",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${incorrectocontenedor}",
                            'none',
                            'block'
                        ],
                        [
                            "eid663",
                            "display",
                            6223,
                            0,
                            "linear",
                            "${incorrectocontenedor}",
                            'block',
                            'none'
                        ],
                        [
                            "eid664",
                            "opacity",
                            5500,
                            500,
                            "linear",
                            "${incorrectocontenedor}",
                            '0',
                            '1'
                        ],
                        [
                            "eid608",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Skills}",
                            'none',
                            'none'
                        ],
                        [
                            "eid609",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Skills}",
                            'none',
                            'block'
                        ],
                        [
                            "eid610",
                            "display",
                            2583,
                            0,
                            "linear",
                            "${Skills}",
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
                            "eid375",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${otroincontenedor}",
                            'none',
                            'block'
                        ],
                        [
                            "eid376",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${otroincontenedor}",
                            'block',
                            'none'
                        ],
                        [
                            "eid690",
                            "opacity",
                            3500,
                            500,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid326",
                            "scaleY",
                            4500,
                            500,
                            "linear",
                            "${otroincontenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid314",
                            "scaleX",
                            3500,
                            500,
                            "linear",
                            "${correctocontenedor}",
                            '0.5',
                            '1'
                        ],
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
                            "eid315",
                            "scaleY",
                            3500,
                            500,
                            "linear",
                            "${correctocontenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid422",
                            "display",
                            0,
                            0,
                            "linear",
                            "${TIMER_CONTAINER}",
                            'none',
                            'block'
                        ],
                        [
                            "eid423",
                            "display",
                            2583,
                            0,
                            "linear",
                            "${TIMER_CONTAINER}",
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
                            "eid374",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${correctocontenedor}",
                            'none',
                            'block'
                        ],
                        [
                            "eid377",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${correctocontenedor}",
                            'block',
                            'none'
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
                            "eid325",
                            "scaleX",
                            4500,
                            500,
                            "linear",
                            "${otroincontenedor}",
                            '0.5',
                            '1'
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
                            "eid665",
                            "scaleY",
                            5500,
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
                            '0px',
                            '-1836px'
                        ],
                        [
                            "eid696",
                            "opacity",
                            4500,
                            500,
                            "linear",
                            "${TextCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid327",
                            "opacity",
                            4500,
                            500,
                            "linear",
                            "${otroincontenedor}",
                            '0',
                            '1'
                        ],
                        [
                            "eid318",
                            "opacity",
                            3500,
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
                            type: 'image',
                            id: 'precarga_gif',
                            rect: ['834px', '622px', '161px', '12px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/precarga_gif.gif', '0px', '0px']
                        },
                        {
                            rect: ['-2px', '0px', '1830px', '780px', 'auto', 'auto'],
                            borderRadius: ['20px', '20px', '20px', '20px 20px'],
                            id: 'fondotrivia-01',
                            type: 'image',
                            clip: 'rect(366.666748046875px 1830px 780px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/fondotrivia-01.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'precarga_gifCopy',
                            rect: ['834px', '663px', '161px', '12px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/precarga_gif2.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'sopadeletras-09',
                            rect: ['719px', '245px', '393px', '393px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sopadeletras-09.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['743px', '404px', '344px', '55px', 'auto', 'auto'],
                            align: 'center',
                            id: 'texto_1',
                            text: '<p style=\"margin: 0px;\">Trivia</p>',
                            opacity: '1',
                            font: ['source-sans-pro, sans-serif', [41, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', '', 'break-word', '']
                        },
                        {
                            rect: ['824px', '646px', null, null, 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            symbolName: 'btn_inicio',
                            cursor: 'pointer',
                            id: 'btn_inicio'
                        },
                        {
                            type: 'text',
                            id: 'texto_1_empuja_cont_1Copy',
                            textStyle: ['', '', '30px', '', 'none'],
                            rect: ['51px', '65px', '1768px', '63px', 'auto', 'auto'],
                            display: 'block',
                            align: 'left',
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px; line-height: 40px;\">​<span style=\"font-style: normal;\">Las letras se relacionan para formar palabras. Ejemplo: las letras S, O, L forman la palabra </span>sol.</p><p style=\"margin: 0px; line-height: 40px;\">​<br></p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-family: sena_icon; font-weight: 900; font-style: normal; text-decoration: none; color: rgb(84, 53, 118); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">Z</span>​<span style=\"font-style: normal; font-weight: 700;\">Identifique la escritura de la palabra que escucha en el audio.</span></p><p style=\"margin: 0px; line-height: 40px;\">​<br>Instrucción: haga clic en el botón \"inicio\" para comenzar</p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: italic; text-decoration: none; font-size: 30px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\"></span></p>'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '335px', '49px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid532",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_inicio}",
                            'none',
                            'none'
                        ],
                        [
                            "eid643",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto_1_empuja_cont_1Copy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid644",
                            "display",
                            500,
                            0,
                            "linear",
                            "${texto_1_empuja_cont_1Copy}",
                            'block',
                            'block'
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
                                type: 'text',
                                rect: ['0px', '22px', '182px', '31px', 'auto', 'auto'],
                                id: 'texto_2',
                                text: '<p style=\"margin: 0px; text-align: center; line-height: 0px;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Inicio</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal']
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
                            rect: ['0px', '0px', '213px', '43px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'texto_5',
                                text: '<p style=\"margin: 0px; text-align: center; line-height: 0px;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Volver a</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                rect: ['0px', '11px', '213px', '31px', 'auto', 'auto']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'texto_5Copy',
                                text: '<p style=\"margin: 0px; text-align: center; line-height: 0px;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">intentar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                rect: ['0px', '31px', '213px', '31px', 'auto', 'auto']
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
                            rect: ['722px', '161px', '439px', '52px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            id: 'Text2Copy5',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Respuestas Correctas</p>',
                            type: 'text'
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
                                rect: ['43px', '3px', '323px', '52px', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                                align: 'center',
                                id: 'Text2',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Brazo</p>',
                                type: 'text'
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
                                rect: ['44px', '2px', '323px', '52px', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                                align: 'center',
                                id: 'Text2Copy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Silla</p>',
                                type: 'text'
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
                                rect: ['39px', '2px', '323px', '52px', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                                align: 'center',
                                id: 'Text2Copy2',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Caballo</p>',
                                type: 'text'
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
                                rect: ['37px', '3px', '323px', '52px', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                                align: 'center',
                                id: 'Text2Copy3',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Paisaje</p>',
                                type: 'text'
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
                                rect: ['33px', '2px', '323px', '52px', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                                align: 'center',
                                id: 'Text2Copy4',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Cama</p>',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['441px', '360px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">2.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>',
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['441px', '440px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'TextCopy',
                            text: '<p style=\"margin: 0px;\">3.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>',
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['441px', '517px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'TextCopy2',
                            text: '<p style=\"margin: 0px;\">4.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>',
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['441px', '595px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'TextCopy3',
                            text: '<p style=\"margin: 0px;\">5.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>',
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['441px', '280px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'TextCopy4',
                            text: '<p style=\"margin: 0px;\">1.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>',
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['1.1784', '1.1784']],
                            id: 'audio_1',
                            symbolName: 'audio_1',
                            cursor: 'pointer',
                            rect: ['651px', '285px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['1.18', '1.18']],
                            id: 'audio_2',
                            symbolName: 'audio_2',
                            cursor: 'pointer',
                            rect: ['650px', '365px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['1.18', '1.18']],
                            id: 'audio_3',
                            symbolName: 'audio_3',
                            cursor: 'pointer',
                            rect: ['650px', '445px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['1.18', '1.18']],
                            id: 'audio_4',
                            symbolName: 'audio_4',
                            cursor: 'pointer',
                            rect: ['649px', '524px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['1.18', '1.18']],
                            id: 'audio_5',
                            symbolName: 'audio_5',
                            cursor: 'pointer',
                            rect: ['650px', '601px', null, null, 'auto', 'auto']
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
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            opacity: '1',
                            rect: ['-24px', '3px', '213px', '43px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', '16px', '213px', '31px', 'auto', 'auto'],
                                id: 'texto_3',
                                text: '<p style=\"margin: 0px; text-align: center; line-height: 0px;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255); font-size: 30px;\">Enviar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
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
                            "eid551",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid552",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${RoundRect}",
                            '0.5',
                            '1'
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
                            rect: ['13px', '10px', '200px', '36px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-weight: 700; font-size: 28px;\">Iniciar</span></p>',
                            type: 'text'
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
                            rect: ['0px', '0px', '96px', '96px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse4',
                            stroke: [2, 'rgba(0,0,0,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2',
                            stroke: [1, 'rgb(0, 0, 0)', 'dashed'],
                            rect: ['7px', '6px', '85px', '85px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(255,215,0,0.86)'],
                            c: [
                            {
                                rect: ['42px', '43px', '95px', '36px', 'auto', 'auto'],
                                transform: [[], [], ['62'], [1, 1, 1]],
                                id: 'Rectangle2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['10px', '30px', '64px', '26px', 'auto', 'auto'],
                                borderRadius: ['5px', '5px', '5px', '5px 5px'],
                                id: 'RoundRect',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,0.79)']
                            }]
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '600', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​timer</p>',
                            id: 'Text',
                            textStyle: ['', '', '23px', '', 'none'],
                            align: 'center',
                            rect: ['18px', '38px', '64px', '26px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    labels: {
                        "alerta": 2000
                    },
                    data: [
                        [
                            "eid6",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Ellipse2}",
                            'rgba(34,156,0,0.8627)',
                            'rgba(255,215,0,0.86)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            500,
                            500,
                            "linear",
                            "${Ellipse2}",
                            'rgba(255,215,0,0.86)',
                            'rgba(34,156,0,0.8627)'
                        ],
                        [
                            "eid12",
                            "background-color",
                            2000,
                            250,
                            "linear",
                            "${Ellipse2}",
                            'rgba(255,0,0,0.86)',
                            'rgba(255,215,0,0.86)'
                        ],
                        [
                            "eid78",
                            "background-color",
                            2250,
                            250,
                            "linear",
                            "${Ellipse2}",
                            'rgba(255,215,0,0.8627)',
                            'rgba(255,0,0,0.86)'
                        ],
                        [
                            "eid20",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${Rectangle2}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid26",
                            "rotateZ",
                            2000,
                            500,
                            "linear",
                            "${Rectangle2}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid28",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid718",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid719",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid720",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid721",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid722",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
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
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_oral',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-18px', '-22px', '129px', '63px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['55px', '48px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1.00)']
                            },
                            {
                                rect: ['8px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'TextCopy2',
                                textStyle: ['', '', '23px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​oral</p>',
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
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_auditiva',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-15px', '-25px', '148px', '63px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['64px', '48px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1.00)']
                            },
                            {
                                rect: ['7px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '23px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​auditiva</p>',
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
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'Skills',
                            type: 'image',
                            rect: ['-122px', '-30px', '530px', '250px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Skills.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            rect: ['44px', '33px', '141px', '141px', 'auto', 'auto'],
                            id: 'B_ESCRITA',
                            display: 'block',
                            cursor: 'default',
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCRITURA.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.45', '0.45']],
                            type: 'image',
                            rect: ['157px', '35px', '141px', '141px', 'auto', 'auto'],
                            id: 'B_ORAL',
                            display: 'block',
                            cursor: 'default',
                            fill: ['rgba(0,0,0,0)', 'images/B_HABLA.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            rect: ['-12px', '14px', '141px', '141px', 'auto', 'auto'],
                            id: 'B_LECTORA',
                            display: 'block',
                            cursor: 'default',
                            fill: ['rgba(0,0,0,0)', 'images/B_LECTURA.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.45', '0.45']],
                            type: 'image',
                            rect: ['100px', '14px', '141px', '141px', 'auto', 'auto'],
                            id: 'B_AUDITIVA',
                            display: 'none',
                            cursor: 'default',
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCUCHA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'escrita',
                            symbolName: 'escrita',
                            display: 'block',
                            rect: ['62px', '16px', '102', '108', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'oral',
                            symbolName: 'oral',
                            display: 'block',
                            rect: ['181px', '19px', '102', '109', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'lectora',
                            symbolName: 'lectora',
                            display: 'block',
                            rect: ['0px', '-1px', '117', '113', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'auditiva',
                            symbolName: 'auditiva',
                            display: 'block',
                            rect: ['112px', '1px', '117', '104', 'auto', 'auto']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Tool_lectora',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'default',
                            rect: ['24px', '50px', '70px', '70px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(255,0,0,0.00)'],
                            c: [
                            {
                                font: ['sena_icon', [81, 'px'], 'rgba(89,181,72,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                id: 'lecturaCopy2',
                                text: '<p style=\"margin: 0px;\">N</p>',
                                type: 'text',
                                rect: ['-6px', '-7px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Tool_escrita',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'default',
                            rect: ['80px', '71px', '70px', '70px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(255,0,0,0.00)'],
                            c: [
                            {
                                font: ['sena_icon', [57, 'px'], 'rgba(89,181,72,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                id: 'lecturaCopy4',
                                text: '<p style=\"margin: 0px;\">O</p>',
                                type: 'text',
                                rect: ['6px', '4px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Tool_auditiva',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'default',
                            rect: ['136px', '49px', '70px', '70px', 'auto', 'auto'],
                            display: 'block',
                            fill: ['rgba(255,0,0,0.00)'],
                            c: [
                            {
                                font: ['sena_icon', [63, 'px'], 'rgba(89,181,72,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                id: 'audioCopy',
                                text: '<p style=\"margin: 0px;\">​M</p>',
                                type: 'text',
                                rect: ['4px', '3px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Tool_oral',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'default',
                            rect: ['193px', '71px', '70px', '70px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(255,0,0,0.00)'],
                            c: [
                            {
                                font: ['sena_icon', [54, 'px'], 'rgba(89,181,72,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                id: 'lecturaCopy3',
                                text: '<p style=\"margin: 0px;\">L</p>',
                                type: 'text',
                                rect: ['8px', '13px', 'auto', 'auto', 'auto', 'auto']
                            }]
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
                            "eid35",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Tool_oral}",
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
                        ],
                        [
                            "eid48",
                            "display",
                            0,
                            0,
                            "linear",
                            "${escrita}",
                            'block',
                            'block'
                        ],
                        [
                            "eid36",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Tool_auditiva}",
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
                            'block',
                            'block'
                        ],
                        [
                            "eid51",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_AUDITIVA}",
                            'none',
                            'none'
                        ],
                        [
                            "eid41",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Tool_escrita}",
                            'none',
                            'none'
                        ],
                        [
                            "eid42",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Tool_lectora}",
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
                            "eid45",
                            "display",
                            0,
                            0,
                            "linear",
                            "${auditiva}",
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
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_lectora',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '-23px', '149px', '63px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['48px', '48px', '20px', '20px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1.00)']
                            },
                            {
                                rect: ['7px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'Text',
                                textStyle: ['', '', '23px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​lectora</p>',
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
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_escrita',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-10px', '-19px', '129px', '63px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['54px', '48px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1.00)']
                            },
                            {
                                rect: ['7px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'TextCopy3',
                                textStyle: ['', '', '23px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​escrita</p>',
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
            "Btn_Respuestas": {
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
                            rect: ['-19px', '0px', '250px', '43px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'texto_5',
                                text: '<p style=\"margin: 0px; text-align: center; line-height: 0px;\"><span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Ver Respuestas</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                rect: ['19px', '22px', '213px', '21px', 'auto', 'auto']
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("R5_edgeActions.js");
})("EDGE-4821767");
