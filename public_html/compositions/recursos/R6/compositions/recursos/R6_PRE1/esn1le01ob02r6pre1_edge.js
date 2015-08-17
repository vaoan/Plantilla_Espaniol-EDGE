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
            js+"utility.js",
            js+"audioUtilities.js"
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
                            rect: ['800px', '277px', '109', '48', 'auto', 'auto']
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['713px', '262px', '87px', '63px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 45px;\">mes</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [20, "px"], "rgba(0,0,0,1)", "400", "none", "italic", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'signo_mas_que_1_VIOLETA',
                            type: 'image',
                            rect: ['103px', '80px', '18px', '18px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"signo mas que 1 VIOLETA2.png",'0px','0px']
                        },
                        {
                            id: 'esn1le01ob02re6au01',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['audios/esn1le01ob02re6au01.mp3'],
                            preload: 'auto'
                        },
                        {
                            id: 'DRAG_2',
                            symbolName: 'DRAG_2',
                            type: 'rect',
                            rect: ['646px', '381px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_3',
                            symbolName: 'DRAG_3',
                            type: 'rect',
                            rect: ['933px', '381px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_4',
                            symbolName: 'DRAG_4',
                            type: 'rect',
                            rect: ['1077px', '381px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_1',
                            symbolName: 'DRAG_1',
                            type: 'rect',
                            rect: ['793px', '381px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'audio_1',
                            symbolName: 'btn_audio_1',
                            type: 'rect',
                            rect: ['1239px', '168px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.1784','1.1784']]
                        },
                        {
                            id: 'Text3Copy',
                            type: 'text',
                            rect: ['133px', '70px', '754px', '45px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700; font-size: 30px;\">Deletreo en una palabra</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['133px', '115px', '1589px', '37px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">Instrucción: seleccione la respuesta correcta.</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "italic", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['133px', '163px', '935px', '37px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">Escuche el audio y arrastre la letra que falta para completar la palabra.</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['103px', '164px', '18px', '38px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​1</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(106,55,137,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'vineta_lilaCopy',
                            type: 'image',
                            rect: ['83px', '48px', '57px', '85px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"vineta_lila.png",'0px','0px'],
                            transform: [[],[],[],['0.25','0.25']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1830px', '780px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)",[270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid307",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(255,255,255,0.00)',
                            'rgba(255,255,255,0.00)'
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
                            "eid369",
                            "top",
                            4750,
                            0,
                            "linear",
                            "${audio_1}",
                            '168px',
                            '168px'
                        ],
                        [
                            "eid368",
                            "left",
                            4750,
                            0,
                            "linear",
                            "${audio_1}",
                            '1239px',
                            '1239px'
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
                            rect: ['-24px', '3px', '213px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
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
                            rect: ['-117px', '0px', '433px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
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
                            rect: ['73px', '0px', '482px', '277px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [10, 'rgba(84,53,118,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(249,245,245,1.00)']
                        },
                        {
                            controls: 'controls',
                            type: 'video',
                            source: ['videos/R-Z%20esn1le01ob01re4vd1.mp4'],
                            preload: 'auto',
                            id: 'R-Z_esn1le01ob01re4vd1',
                            display: 'none',
                            rect: ['87px', '9px', '474px', '280px', 'auto', 'auto'],
                            tag: 'video'
                        },
                        {
                            controls: 'controls',
                            type: 'video',
                            source: ['videos/A-I%20esn1le01ob01re4vd1.mp4'],
                            preload: 'auto',
                            id: 'A-I_esn1le01ob01re4vd1',
                            display: 'block',
                            rect: ['87px', '9px', '474px', '280px', 'auto', 'auto'],
                            tag: 'video'
                        },
                        {
                            controls: 'controls',
                            type: 'video',
                            source: ['videos/J-K%20esn1le01ob01re4vd1.mp4'],
                            preload: 'auto',
                            id: 'J-K_esn1le01ob01re4vd1Copy',
                            display: 'none',
                            rect: ['87px', '9px', '474px', '280px', 'auto', 'auto'],
                            tag: 'video'
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
                            "eid336",
                            "width",
                            2000,
                            0,
                            "linear",
                            "${R-Z_esn1le01ob01re4vd1}",
                            '474px',
                            '474px'
                        ],
                        [
                            "eid316",
                            "width",
                            0,
                            0,
                            "linear",
                            "${A-I_esn1le01ob01re4vd1}",
                            '474px',
                            '474px'
                        ],
                        [
                            "eid327",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${J-K_esn1le01ob01re4vd1Copy}",
                            '9px',
                            '9px'
                        ],
                        [
                            "eid335",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${J-K_esn1le01ob01re4vd1Copy}",
                            '474px',
                            '474px'
                        ],
                        [
                            "eid332",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${R-Z_esn1le01ob01re4vd1}",
                            '9px',
                            '9px'
                        ],
                        [
                            "eid313",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${R-Z_esn1le01ob01re4vd1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid337",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${R-Z_esn1le01ob01re4vd1}",
                            '87px',
                            '87px'
                        ],
                        [
                            "eid310",
                            "display",
                            0,
                            0,
                            "linear",
                            "${A-I_esn1le01ob01re4vd1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid308",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${A-I_esn1le01ob01re4vd1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid312",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${A-I_esn1le01ob01re4vd1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid314",
                            "display",
                            0,
                            0,
                            "linear",
                            "${J-K_esn1le01ob01re4vd1Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid311",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${J-K_esn1le01ob01re4vd1Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid309",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${J-K_esn1le01ob01re4vd1Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid330",
                            "height",
                            2000,
                            0,
                            "linear",
                            "${R-Z_esn1le01ob01re4vd1}",
                            '280px',
                            '280px'
                        ],
                        [
                            "eid319",
                            "left",
                            0,
                            0,
                            "linear",
                            "${A-I_esn1le01ob01re4vd1}",
                            '87px',
                            '87px'
                        ],
                        [
                            "eid326",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${J-K_esn1le01ob01re4vd1Copy}",
                            '87px',
                            '87px'
                        ],
                        [
                            "eid328",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${J-K_esn1le01ob01re4vd1Copy}",
                            '280px',
                            '280px'
                        ],
                            [ "eid338", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${R-Z_esn1le01ob01re4vd1}', [] ] ],
                            [ "eid339", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${J-K_esn1le01ob01re4vd1Copy}', [] ] ],
                            [ "eid340", "trigger", 1000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${R-Z_esn1le01ob01re4vd1}', [] ] ],
                            [ "eid341", "trigger", 1000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${A-I_esn1le01ob01re4vd1}', [] ] ],
                            [ "eid342", "trigger", 2000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${J-K_esn1le01ob01re4vd1Copy}', [] ] ],
                            [ "eid343", "trigger", 2000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${R-Z_esn1le01ob01re4vd1}', [] ] ]
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
                            rect: ['14px', '-14px', '66px', '38px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text12',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(245, 242, 242); font-style: normal; font-size: 45px;\">a</span></p>',
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
                            id: 'RoundRect11Copy2',
                            stroke: [7, 'rgb(139, 116, 161)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1)']
                        },
                        {
                            rect: ['22px', '-15px', '60px', '49px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text14',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-style: normal; color: rgb(249, 240, 240); font-size: 45px;\">o</span></p>',
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
                            "eid346",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Text14}",
                            '49px',
                            '49px'
                        ],
                        [
                            "eid349",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text14}",
                            '-15px',
                            '-15px'
                        ],
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
                            "eid347",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Text14}",
                            '60px',
                            '60px'
                        ]
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
                            id: 'RoundRect11Copy3',
                            stroke: [7, 'rgb(139, 116, 161)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1)']
                        },
                        {
                            rect: ['24px', '-14px', '45px', '52px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text15',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-style: normal; color: rgb(252, 244, 244); font-size: 45px;\">e</span></p>',
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
                            id: 'RoundRect11Copy4',
                            stroke: [7, 'rgb(139, 116, 161)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1)']
                        },
                        {
                            rect: ['28px', '-11px', '41px', '49px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text16',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-style: normal; color: rgb(243, 233, 233); font-size: 45px;\">i</span></p>',
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
                            rect: ['-117px', '0px', '433px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
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
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)'],
                            rect: ['52px', '3px', '25px', '25px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            id: 'stop',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['-23px', '-71px', '175px', '172px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            id: 'play',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/r6_audio_1.mp3'],
                            id: 'r6_audio_1',
                            rect: ['935', '666', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '213px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 5646.9,
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
                            [ "eid358", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${r6_audio_1}', [] ] ]
                    ]
                }
            },
            "SIG_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '87px', '90px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '87px', '90px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("esn1le01ob02r6pre1_edgeActions.js");
})("EDGE-6342212");
