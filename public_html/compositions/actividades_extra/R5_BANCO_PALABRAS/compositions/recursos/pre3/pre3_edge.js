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
                centerStage: "vertical",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'texto_1_empuja_cont_1',
                            type: 'text',
                            rect: ['90px', '79px', '1634px', '168px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 28px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">El uso de adjetivos es importante, tienen la función de señalar una cualidad innata o permanente del sujeto. Ejemplo: la nieve es blanca.</span></p><p style=\"margin: 0px; line-height: 34px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 28px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px;\">​</p><p style=\"margin: 0px; line-height: 34px; font-family: source-sans-pro, sans-serif; font-weight: 900; font-style: normal; text-decoration: none; font-size: 40px; color: rgb(84, 53, 118); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px;\">&gt;<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 900; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(109, 59, 140); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">&nbsp;</span><span style=\"font-family: source-sans-pro, sans-serif; font-weight: bold; font-style: normal; text-decoration: none; font-size: 28px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">&nbsp;</span><span style=\"font-family: source-sans-pro, sans-serif; font-weight: bold; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">Construya una frase que contenga un verbo y una cualidad. Tenga en cuenta las pistas de audio y las imágenes.</span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 900; font-style: normal; text-decoration: none; font-size: 40px; color: rgb(84, 53, 118); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 34px;\"><span style=\"font-family: source-sans-pro, sans-serif; font-weight: bold; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">​</span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: italic; text-decoration: none; font-size: 30px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 34px;\">Instrucción: escuche el audio y complete la frase arrastrando las palabras. Tiene dos intentos y tiempo límite.</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'cont_1',
                            type: 'rect',
                            rect: ['0px', '269px', '1830px', '511px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'fondo',
                                type: 'rect',
                                rect: ['283px', '86px', '1286px', '219px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(225,216,234,1.00)"],
                                stroke: [2,"rgba(79,45,110,1.00)","solid"]
                            },
                            {
                                id: 'Skills',
                                symbolName: 'Skills',
                                type: 'rect',
                                rect: ['0px', '348px', '283', '157', 'auto', 'auto']
                            },
                            {
                                id: 'indio',
                                type: 'image',
                                rect: ['326px', '104px', '200px', '187px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px 10px"],
                                fill: ["rgba(0,0,0,0)",im+"indio.png",'0px','0px']
                            },
                            {
                                id: 'contorno_televisor',
                                type: 'rect',
                                rect: ['326px', '104px', '190px', '177px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(192,192,192,0.00)"],
                                stroke: [5,"rgba(79,45,110,1.00)","solid"]
                            },
                            {
                                id: 'DROP_1',
                                symbolName: 'DROP_1',
                                type: 'rect',
                                rect: ['818px', '152px', '156', '59', 'auto', 'auto']
                            },
                            {
                                id: 'DROP_2',
                                symbolName: 'DROP_2',
                                type: 'rect',
                                rect: ['993px', '152px', 'undefined', 'undefined', 'auto', 'auto']
                            },
                            {
                                id: 'DRAG_5',
                                symbolName: 'DRAG_5',
                                type: 'rect',
                                rect: ['1371px', '243px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'DRAG_1',
                                symbolName: 'DRAG_1',
                                type: 'rect',
                                rect: ['1179px', '243px', '144', '48', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'DRAG_4',
                                symbolName: 'DRAG_4',
                                type: 'rect',
                                rect: ['601px', '243px', '144', '48', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'DRAG_2',
                                symbolName: 'DRAG_2',
                                type: 'rect',
                                rect: ['794px', '243px', '144', '48', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'DRAG_3',
                                symbolName: 'DRAG_3',
                                type: 'rect',
                                rect: ['986px', '243px', '144', '48', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'Numero1',
                                type: 'ellipse',
                                rect: ['258px', '61px', '50px', '50px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(79,45,110,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                c: [
                                {
                                    id: 'texto_2',
                                    type: 'text',
                                    rect: ['0px', '0px', '50px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">3</span></p>",
                                    align: "center",
                                    font: ['source-sans-pro, sans-serif', [24, "px"], "rgba(255,255,255,1.00)", "700", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "47px", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'audio_1',
                            symbolName: 'audio_1',
                            type: 'rect',
                            rect: ['866px', '364px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'texto_3',
                            type: 'text',
                            rect: ['728px', '431px', '77px', '40px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">Tú</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
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
                    duration: 3237.475,
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
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                type: 'text',
                                rect: ['60px', '-2px', '94px', '31px', 'auto', 'auto'],
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
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "desactivado": 1000
                    },
                    data: [
                        [
                            "eid13",
                            "background-image",
                            0,
                            1000,
                            "linear",
                            "${RoundRect}",
                            [270,[['rgba(111,67,158,1.00)',50],['rgba(84,52,117,1.00)',50]]],
                            [270,[['rgba(173,145,204,1.00)',50],['rgba(137,101,175,1.00)',50]]]
                        ],
                        [
                            "eid15",
                            "background-image",
                            1000,
                            1000,
                            "linear",
                            "${RoundRect}",
                            [270,[['rgba(173,145,204,1.00)',50],['rgba(137,101,175,1.00)',50]]],
                            [270,[['rgba(111,67,158,1.00)',50],['rgba(84,52,117,1.00)',50]]]
                        ]
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
                            rect: ['0px', '0px', '130px', '34px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect11',
                            stroke: [7, 'rgb(139, 116, 161)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1)']
                        },
                        {
                            rect: ['21px', '3px', '107px', '41px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', ''],
                            id: 'texto_7',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 30px; color: rgb(255, 255, 255); font-style: normal;\">eres</span></p>',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '144px', '48px']
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
                            rect: ['0px', '0px', '130px', '34px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect11Copy',
                            stroke: [7, 'rgb(139, 116, 161)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1)']
                        },
                        {
                            rect: ['11px', '0px', '123px', '41px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', ''],
                            id: 'texto_5',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 30px; color: rgb(255, 255, 255); font-style: normal;\">Uitoto</span></p>',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '144px', '48px']
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
                            rect: ['0px', '0px', '130px', '34px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect11Copy2',
                            stroke: [7, 'rgb(139, 116, 161)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1)'],
                            c: [
                            {
                                rect: ['16px', '-6px', '100px', '41px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', ''],
                                id: 'texto_6',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 30px; color: rgb(255, 255, 255); font-style: normal;\">son</span></p>',
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '144px', '48px']
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
                            rect: ['0px', '0px', '130px', '34px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect11Copy3',
                            stroke: [7, 'rgb(139, 116, 161)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1)'],
                            c: [
                            {
                                rect: ['33px', '-4px', '64px', '41px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', ''],
                                id: 'TextCopy3',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 30px; color: rgb(255, 255, 255); font-style: normal;\">es</span></p>',
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '144px', '48px']
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
                            rect: ['0px', '0px', '148px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [4, 'rgba(84,53,118,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '59px']
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
                            rect: ['0px', '0px', '130px', '34px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect11Copy3',
                            stroke: [7, 'rgb(139, 116, 161)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1)'],
                            c: [
                            {
                                rect: ['-12px', '-4px', '155px', '41px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', ''],
                                id: 'texto_8',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 30px; color: rgb(255, 255, 255); font-style: normal;\">iutotos</span></p>',
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '144px', '48px']
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
                            rect: ['0px', '0px', '148px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [4, 'rgba(84,53,118,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '59px']
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
                            type: 'image',
                            tag: 'img',
                            id: 'V_HABLA',
                            rect: ['-24px', '16px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            fill: ['rgba(0,0,0,0)', 'images/V_HABLA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_oral',
                            opacity: '0',
                            rect: ['-18px', '-22px', '129px', '63px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(0,104,95,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['55px', '48px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,104,95,1.00)']
                            },
                            {
                                type: 'text',
                                rect: ['8px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                align: 'center',
                                id: 'TextCopy2',
                                textStyle: ['', '', '23px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​oral</p>',
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
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
                            type: 'image',
                            tag: 'img',
                            id: 'V_ESCUCHA',
                            rect: ['-12px', '12px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCUCHA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_auditiva',
                            opacity: '0',
                            rect: ['-15px', '-25px', '148px', '63px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(0,104,95,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['64px', '48px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,104,95,1.00)']
                            },
                            {
                                type: 'text',
                                rect: ['7px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '23px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​auditiva</p>',
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
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
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCRITURA.png', '0px', '0px'],
                            type: 'image',
                            id: 'B_ESCRITA',
                            rect: ['44px', '33px', '141px', '141px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.45', '0.45']],
                            fill: ['rgba(0,0,0,0)', 'images/B_HABLA.png', '0px', '0px'],
                            type: 'image',
                            id: 'B_ORAL',
                            rect: ['157px', '35px', '141px', '141px', 'auto', 'auto'],
                            display: 'block',
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/B_LECTURA.png', '0px', '0px'],
                            type: 'image',
                            id: 'B_LECTORA',
                            rect: ['-12px', '14px', '141px', '141px', 'auto', 'auto'],
                            display: 'block',
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.45', '0.45']],
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCUCHA.png', '0px', '0px'],
                            type: 'image',
                            id: 'B_AUDITIVA',
                            rect: ['100px', '14px', '141px', '141px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'img'
                        },
                        {
                            rect: ['62px', '16px', '102', '108', 'auto', 'auto'],
                            id: 'escrita',
                            symbolName: 'escrita',
                            type: 'rect',
                            display: 'block'
                        },
                        {
                            rect: ['181px', '19px', '102', '109', 'auto', 'auto'],
                            id: 'oral',
                            symbolName: 'oral',
                            type: 'rect',
                            display: 'none'
                        },
                        {
                            rect: ['0px', '-1px', '117', '113', 'auto', 'auto'],
                            id: 'lectora',
                            symbolName: 'lectora',
                            type: 'rect',
                            display: 'none'
                        },
                        {
                            rect: ['112px', '1px', '117', '104', 'auto', 'auto'],
                            id: 'auditiva',
                            symbolName: 'auditiva',
                            type: 'rect',
                            display: 'block'
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
                            "eid52",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_ESCRITA}",
                            'none',
                            'none'
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
                            "eid45",
                            "display",
                            0,
                            0,
                            "linear",
                            "${auditiva}",
                            'block',
                            'block'
                        ],
                        [
                            "eid46",
                            "display",
                            0,
                            0,
                            "linear",
                            "${lectora}",
                            'none',
                            'none'
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
                            "eid50",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_ORAL}",
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
                            type: 'image',
                            tag: 'img',
                            id: 'V_LECTURA',
                            rect: ['-12px', '15px', '140px', '140px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            fill: ['rgba(0,0,0,0)', 'images/V_LECTURA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_lectora',
                            opacity: '0',
                            rect: ['0px', '-23px', '149px', '63px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(0,104,95,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['48px', '48px', '20px', '20px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,104,95,1.00)']
                            },
                            {
                                type: 'text',
                                rect: ['7px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text',
                                textStyle: ['', '', '23px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​lectora</p>',
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
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
                            type: 'image',
                            tag: 'img',
                            id: 'V_ESCRITURA',
                            rect: ['-18px', '17px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCRITURA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_escrita',
                            opacity: '0',
                            rect: ['-10px', '-19px', '129px', '63px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(0,104,95,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['54px', '48px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,104,95,1.00)']
                            },
                            {
                                type: 'text',
                                rect: ['7px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                align: 'center',
                                id: 'TextCopy3',
                                textStyle: ['', '', '23px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​escrita</p>',
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
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
            "audio_1": {
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
                                rect: ['200px', '1px', '158px', '31px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'texto_8',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                type: 'text'
                            }]
                        },
                        {
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)'],
                            rect: ['52px', '3px', '25px', '25px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            stroke: [1, 'rgba(25,24,24,1.00)', 'solid'],
                            id: 'stop',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['-22px', '-71px', '175px', '172px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(0,0,0,0)', 'images/play-0333.png', '0px', '0px'],
                            id: 'play',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['-117px', '0px', '431px', '30px', 'auto', 'auto'],
                            borderRadius: ['32px', '32px', '32px', '32px 32px'],
                            id: 'Ellipse',
                            stroke: [1, 'rgba(68,90,144,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/audio_r6_1.mp3'],
                            id: 'audio_r6_1',
                            rect: ['123', '351', '320px', '45px', 'auto', 'auto'],
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
                    duration: 3237.475,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 750
                    },
                    data: [
                        [
                            "eid154",
                            "border-color",
                            124,
                            0,
                            "linear",
                            "${stop}",
                            'rgba(25,24,24,1.00)',
                            'rgba(25,24,24,1.00)'
                        ],
                        [
                            "eid155",
                            "border-width",
                            124,
                            0,
                            "linear",
                            "${stop}",
                            '1px',
                            '1px'
                        ],
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
                            "eid158",
                            "top",
                            124,
                            0,
                            "linear",
                            "${play}",
                            '-71px',
                            '-71px'
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
                        [
                            "eid156",
                            "left",
                            124,
                            0,
                            "linear",
                            "${play}",
                            '-22px',
                            '-22px'
                        ],
                            [ "eid77", "trigger", 750, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audio_r6_1}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pre3_edgeActions.js");
})("EDGE-6342212");
