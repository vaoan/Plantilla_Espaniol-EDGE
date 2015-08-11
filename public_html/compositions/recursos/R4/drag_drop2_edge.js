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
            js+"jquery-ui-1.10.4.custom.js",
            js+"jquery-ui-1.10.4.custom.min.js",
            js+"dragAndDropUtilities.js",
            js+"interactionUtilities.js",
            js+"utility.js"
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
                            id: 'DROP_1',
                            symbolName: 'DROP_1',
                            type: 'rect',
                            rect: ['1391px', '338px', '109', '48', 'auto', 'auto']
                        },
                        {
                            id: 'DROP_2',
                            symbolName: 'DROP_2',
                            type: 'rect',
                            rect: ['1391px', '406px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'DROP_3',
                            symbolName: 'DROP_3',
                            type: 'rect',
                            rect: ['1391px', '473px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'DROP_4',
                            symbolName: 'DROP_4',
                            type: 'rect',
                            rect: ['1391px', '540px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'DROP_5',
                            symbolName: 'DROP_5',
                            type: 'rect',
                            rect: ['1391px', '608px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'Submit',
                            symbolName: 'Submit',
                            type: 'rect',
                            rect: ['1618px', '720px', '165', '38', 'auto', 'auto'],
                            clip: 'rect(0px 193.8662109375px 38px -28.8662109375px)',
                            cursor: 'pointer'
                        },
                        {
                            id: 'btn_audio',
                            symbolName: 'btn_audio',
                            type: 'rect',
                            rect: ['1017px', '350px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'esn1le01ob01re3au5hache',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['audios/esn1le01ob01re3au5hache.wav'],
                            preload: 'auto'
                        },
                        {
                            id: 'esn1le01ob01re3au4ese',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['audios/esn1le01ob01re3au4ese.wav'],
                            preload: 'auto'
                        },
                        {
                            id: 'esn1le01ob01re3au3erre',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['audios/esn1le01ob01re3au3erre.wav'],
                            preload: 'auto'
                        },
                        {
                            id: 'esn1le01ob01re3au2pe',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['audios/esn1le01ob01re3au2pe.wav'],
                            preload: 'auto'
                        },
                        {
                            id: 'esn1le01ob01re3au1eme',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['audios/esn1le01ob01re3au1eme.wav'],
                            preload: 'auto'
                        },
                        {
                            id: 'btn_audioCopy',
                            symbolName: 'btn_audio',
                            type: 'rect',
                            rect: ['1017px', '416px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'btn_audioCopy2',
                            symbolName: 'btn_audio',
                            type: 'rect',
                            rect: ['1017px', '482px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'btn_audioCopy3',
                            symbolName: 'btn_audio',
                            type: 'rect',
                            rect: ['1018px', '544px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'btn_audioCopy4',
                            symbolName: 'btn_audio',
                            type: 'rect',
                            rect: ['1024px', '622px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['53px', '117px', '1763px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Las letras que se usan para formar palabras dependen de la ortografía,  conjunto de normas que definen cómo se escriben las palabras.</p><p style=\"margin: 0px;\">​</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [20, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2Copy',
                            type: 'text',
                            rect: ['53px', '160px', '1763px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Instrucción: haga clic en cada uno de los botones para observar las imágenes.  Escuche el audio y luego relacione los nombres de la lista desplegable con la letra de la columna. Tiene dos intentos para esta actividad.</p><p style=\"margin: 0px;\">​</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [20, "px"], "rgba(0,0,0,1)", "400", "none", "italic", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2Copy2',
                            type: 'text',
                            rect: ['53px', '66px', '1763px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Existe un nombre recomendado para cada una de las letras. A continuación se presenta la propuesta para los nombres de las letras que se han establecido en el español de Colombia</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [20, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'signo_mas_que_1_VIOLETA',
                            type: 'image',
                            rect: ['25px', '122px', '18px', '18px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"signo%20mas%20que%201%20VIOLETA.png",'0px','0px']
                        },
                        {
                            id: 'CONTENEDOR',
                            symbolName: 'CONTENEDOR',
                            type: 'rect',
                            rect: ['113', '337', '640', '297', 'auto', 'auto']
                        },
                        {
                            id: 'Ellipse2',
                            type: 'ellipse',
                            rect: ['319px', '653px', '34px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(251,32,32,1)"],
                            stroke: [10,"rgba(84, 53, 118, 0)","solid"]
                        },
                        {
                            id: 'Ellipse2Copy',
                            type: 'ellipse',
                            rect: ['395px', '653px', '36px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(123,57,249,1.00)"],
                            stroke: [10,"rgba(84, 53, 118, 0)","solid"]
                        },
                        {
                            id: 'Ellipse2Copy2',
                            type: 'ellipse',
                            rect: ['475px', '653px', '36px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(244,141,51,1.00)"],
                            stroke: [10,"rgba(84, 53, 118, 0)","solid"]
                        },
                        {
                            id: 'DRAG_1',
                            symbolName: 'DRAG_1',
                            type: 'rect',
                            rect: ['1607px', '343px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_2',
                            symbolName: 'DRAG_2',
                            type: 'rect',
                            rect: ['1607', '413px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_3',
                            symbolName: 'DRAG_3',
                            type: 'rect',
                            rect: ['1607', '479px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_4',
                            symbolName: 'DRAG_4',
                            type: 'rect',
                            rect: ['1607', '545px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_5',
                            symbolName: 'DRAG_5',
                            type: 'rect',
                            rect: ['1607px', '613px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1830px', '780px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.80)",[270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid202",
                            "top",
                            0,
                            0,
                            "linear",
                            "${DROP_3}",
                            '473px',
                            '473px'
                        ],
                        [
                            "eid158",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btn_audioCopy2}",
                            '1017px',
                            '1017px'
                        ],
                        [
                            "eid160",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btn_audioCopy3}",
                            '544px',
                            '544px'
                        ],
                        [
                            "eid199",
                            "left",
                            0,
                            0,
                            "linear",
                            "${DROP_4}",
                            '1391px',
                            '1391px'
                        ],
                        [
                            "eid161",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btn_audioCopy3}",
                            '1018px',
                            '1018px'
                        ],
                        [
                            "eid156",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btn_audioCopy}",
                            '1017px',
                            '1017px'
                        ],
                        [
                            "eid162",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btn_audioCopy4}",
                            '1024px',
                            '1024px'
                        ],
                        [
                            "eid131",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '1830px',
                            '1830px'
                        ],
                        [
                            "eid133",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '780px',
                            '780px'
                        ],
                        [
                            "eid139",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]],
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]
                        ],
                        [
                            "eid200",
                            "top",
                            0,
                            0,
                            "linear",
                            "${DROP_4}",
                            '540px',
                            '540px'
                        ],
                        [
                            "eid204",
                            "top",
                            0,
                            0,
                            "linear",
                            "${DROP_2}",
                            '406px',
                            '406px'
                        ],
                        [
                            "eid141",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Submit}",
                            '720px',
                            '720px'
                        ],
                        [
                            "eid157",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btn_audioCopy}",
                            '416px',
                            '416px'
                        ],
                        [
                            "eid136",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(255,255,255,0.80)',
                            'rgba(255,255,255,0.80)'
                        ],
                        [
                            "eid159",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btn_audioCopy2}",
                            '482px',
                            '482px'
                        ],
                        [
                            "eid163",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btn_audioCopy4}",
                            '622px',
                            '622px'
                        ],
                        [
                            "eid203",
                            "left",
                            0,
                            0,
                            "linear",
                            "${DROP_2}",
                            '1391px',
                            '1391px'
                        ],
                        [
                            "eid205",
                            "left",
                            0,
                            0,
                            "linear",
                            "${DROP_5}",
                            '1391px',
                            '1391px'
                        ],
                        [
                            "eid206",
                            "top",
                            0,
                            0,
                            "linear",
                            "${DROP_5}",
                            '608px',
                            '608px'
                        ],
                        [
                            "eid201",
                            "left",
                            0,
                            0,
                            "linear",
                            "${DROP_3}",
                            '1391px',
                            '1391px'
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
                            rect: ['-24px', '3px', '213px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                type: 'text',
                                rect: ['60px', '0px', '94px', '31px', 'auto', 'auto'],
                                id: 'TextCopy3',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Enviar</span></p>',
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
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "btn_enviar": {
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
                            rect: ['0px', '0px', '213px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
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
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-117px', '0px', '433px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
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
                            rect: ['65px', '7px', '7%', '18px', 'auto', 'auto'],
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
            "CONTENEDOR": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '620px', '277px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [10, 'rgba(84,53,118,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(249,245,245,1.00)']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['7px', '111px', '629px', '77px', 'auto', 'auto'],
                            id: 'grupo_3',
                            fill: ['rgba(0,0,0,0)', 'images/grupo_3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['1px', '111px', '629px', '77px', 'auto', 'auto'],
                            id: 'grupo_2',
                            fill: ['rgba(0,0,0,0)', 'images/grupo_2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['5px', '111px', '629px', '77px', 'auto', 'auto'],
                            id: 'grupo_1',
                            fill: ['rgba(0,0,0,0)', 'images/grupo_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '640px', '297px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    labels: {
                        "A": 0,
                        "B": 1000,
                        "C": 2000
                    },
                    data: [
                        [
                            "eid180",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${grupo_3}",
                            '7px',
                            '7px'
                        ],
                        [
                            "eid173",
                            "display",
                            0,
                            0,
                            "linear",
                            "${grupo_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid172",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${grupo_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid174",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${grupo_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid170",
                            "display",
                            0,
                            0,
                            "linear",
                            "${grupo_1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid171",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${grupo_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid178",
                            "left",
                            0,
                            0,
                            "linear",
                            "${grupo_1}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid179",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${grupo_2}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid176",
                            "display",
                            0,
                            0,
                            "linear",
                            "${grupo_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid175",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${grupo_3}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "DROP_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '101px', '40px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [4, 'rgba(84,53,118,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '109px', '48px']
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
            "DROP_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '101px', '40px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [4, 'rgba(84,53,118,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '109px', '48px']
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
            "DROP_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '101px', '40px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [4, 'rgba(84,53,118,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '109px', '48px']
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
            "DROP_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '101px', '40px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [4, 'rgba(84,53,118,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '109px', '48px']
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
            "DROP_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '101px', '40px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [4, 'rgba(84,53,118,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '109px', '48px']
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
            "DRAG_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '80px', '24px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect11',
                            stroke: [7, 'rgb(139, 116, 161)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1)']
                        },
                        {
                            rect: ['28px', '6px', '39px', '22px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text12',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(245, 242, 242); font-style: normal;\">eme</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '94px', '38px']
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
            "DRAG_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '80px', '24px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect11Copy',
                            stroke: [7, 'rgb(139, 116, 161)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1)']
                        },
                        {
                            rect: ['33px', '5px', '44px', '19px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text13',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-style: normal; color: rgb(243, 238, 238);\">pe</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '94px', '38px']
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
            "DRAG_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '80px', '24px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect11Copy2',
                            stroke: [7, 'rgb(139, 116, 161)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1)']
                        },
                        {
                            rect: ['22px', '9px', '55px', '18px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text14',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-style: normal; color: rgb(249, 240, 240);\">hache</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '94px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid287",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text14}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid281",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Text14}",
                            '55px',
                            '55px'
                        ],
                        [
                            "eid285",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text14}",
                            '9px',
                            '9px'
                        ]
                    ]
                }
            },
            "DRAG_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '80px', '24px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect11Copy3',
                            stroke: [7, 'rgb(139, 116, 161)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1)']
                        },
                        {
                            rect: ['26px', '9px', '42px', '19px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text15',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-style: normal; color: rgb(252, 244, 244);\">erre</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '94px', '38px']
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
            "DRAG_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '80px', '24px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect11Copy4',
                            stroke: [7, 'rgb(139, 116, 161)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1)']
                        },
                        {
                            rect: ['30px', '8px', '35px', '21px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text16',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-style: normal; color: rgb(243, 233, 233);\">ese</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '94px', '38px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("drag_drop2_edgeActions.js");
})("EDGE-6342212");
