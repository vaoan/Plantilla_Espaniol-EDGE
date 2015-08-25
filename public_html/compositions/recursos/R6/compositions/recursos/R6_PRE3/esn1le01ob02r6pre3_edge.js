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
            js+"pickManyUtilities.js",
            js+"interactionUtilities.js",
            js+"utility.js",
            js+"audioUtilities.js"
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
                            id: 'PICK_1',
                            symbolName: 'PICK_1',
                            type: 'rect',
                            rect: ['268px', '432px', '298', '73', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Text2Copy2',
                            type: 'text',
                            rect: ['133px', '68px', '1255px', '30px', 'auto', 'auto'],
                            clip: 'rect(2.666748046875px 1239px 42.000244140625px -16px)',
                            text: "<p style=\"margin: 0px;\"><span style=\"font-size: 30px; color: rgb(51, 51, 51);\">Vocal y consonante</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(51,51,51,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2Copy',
                            type: 'text',
                            rect: ['133px', '110px', '1589px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px; color: rgb(51, 51, 51);\">Instrucción: escuche el audio y seleccione la letra que corresponda. Tiene distractores.&nbsp;</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(51,51,51,1.00)", "400", "none", "italic", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['131px', '168px', '1560px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px; color: rgb(51, 51, 51);\">Identifique la letra con la que inicia la palabra.&nbsp;</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(51,51,51,1.00)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "30px", "", "none"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['105px', '255px', '30px', '43px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">a)</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(51,51,51,1.00)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3Copy',
                            type: 'text',
                            rect: ['703px', '257px', '30px', '43px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">b)</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(51,51,51,1.00)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3Copy2',
                            type: 'text',
                            rect: ['1300px', '261px', '30px', '43px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">c)</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(51,51,51,1.00)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'PICK_2',
                            symbolName: 'PICK_2',
                            type: 'rect',
                            rect: ['268px', '564px', '298', '73', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_3',
                            symbolName: 'PICK_3',
                            type: 'rect',
                            rect: ['833px', '432px', '298', '73', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_4',
                            symbolName: 'PICK_4',
                            type: 'rect',
                            rect: ['833px', '564px', '298', '73', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_5',
                            symbolName: 'PICK_5',
                            type: 'rect',
                            rect: ['1397px', '432px', '298', '73', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_6',
                            symbolName: 'PICK_6',
                            type: 'rect',
                            rect: ['1397px', '564px', '298', '73', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'audio_1',
                            symbolName: 'audio_1',
                            type: 'rect',
                            rect: ['273px', '261px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'audio_2',
                            symbolName: 'audio_2',
                            type: 'rect',
                            rect: ['886px', '261px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'audio_3',
                            symbolName: 'audio_3',
                            type: 'rect',
                            rect: ['1454px', '261px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'TextCopy2',
                            type: 'text',
                            rect: ['103px', '164px', '18px', '38px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​3</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(106,55,137,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'vineta_lilaCopy',
                            type: 'image',
                            tag: 'img',
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
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1348.35,
                    autoPlay: true,
                    labels: {
                        "Etiqueta 1": 500
                    },
                    data: [
                        [
                            "eid120",
                            "left",
                            500,
                            0,
                            "linear",
                            "${Text3Copy2}",
                            '1300px',
                            '1300px'
                        ],
                        [
                            "eid221",
                            "top",
                            0,
                            0,
                            "linear",
                            "${audio_2}",
                            '261px',
                            '261px'
                        ],
                        [
                            "eid222",
                            "left",
                            0,
                            0,
                            "linear",
                            "${audio_3}",
                            '1454px',
                            '1454px'
                        ],
                        [
                            "eid223",
                            "left",
                            0,
                            0,
                            "linear",
                            "${audio_2}",
                            '886px',
                            '886px'
                        ],
                        [
                            "eid219",
                            "top",
                            0,
                            0,
                            "linear",
                            "${audio_3}",
                            '261px',
                            '261px'
                        ],
                        [
                            "eid216",
                            "left",
                            0,
                            0,
                            "linear",
                            "${PICK_3}",
                            '833px',
                            '833px'
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
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '161px', '31px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'text',
                            rect: ['18px', '3px', '128px', '31px', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​TIMER</p>',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
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
                            rect: ['-24px', '3px', '213px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['60px', '0px', '94px', '31px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'TextCopy3',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Enviar</span></p>',
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
                    duration: 0,
                    autoPlay: false,
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
                            rect: ['0px', '0px', '298px', '73px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(249,244,244,1.00)']
                        },
                        {
                            rect: ['-12px', '-10px', '302px', '74px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [10, 'rgba(132,71,170,1.00)', 'solid'],
                            id: 'RoundRect',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(249,244,244,0.00)']
                        },
                        {
                            rect: ['64px', '11px', '153px', '43px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text4',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 30px; color: rgb(51, 51, 51);\">Vocal</span></p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '298px', '73px']
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
                            "eid203",
                            "border-color",
                            500,
                            0,
                            "linear",
                            "${RoundRect}",
                            'rgba(132,71,170,1.00)',
                            'rgba(132,71,170,1.00)'
                        ],
                        [
                            "eid152",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid153",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '1'
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
                            rect: ['0px', '0px', '298px', '73px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [10, 'rgba(251,251,252,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(253,249,249,1.00)']
                        },
                        {
                            rect: ['-11px', '-12px', '300px', '75px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [10, 'rgba(132,71,170,0.00)', 'solid'],
                            id: 'RoundRect2',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(249,244,244,0)']
                        },
                        {
                            rect: ['58px', '21px', '182px', '42px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text5',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 30px; color: rgb(51, 51, 51);\">Consonante</span></p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '298px', '73px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "seleccionado": 205,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid181",
                            "opacity",
                            0,
                            205,
                            "linear",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid182",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid226",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${RoundRect2}",
                            'rgba(132,71,170,0.00)',
                            'rgba(132,71,170,0.00)'
                        ],
                        [
                            "eid227",
                            "border-color",
                            205,
                            0,
                            "linear",
                            "${RoundRect2}",
                            'rgba(132,71,170,0.00)',
                            'rgba(132,71,170,1.00)'
                        ],
                        [
                            "eid204",
                            "border-color",
                            500,
                            0,
                            "linear",
                            "${RoundRect2}",
                            'rgba(132,71,170,1.00)',
                            'rgba(132,71,170,1.00)'
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
                            rect: ['0px', '0px', '298px', '73px', 'auto', 'auto'],
                            id: 'Rectangle2Copy',
                            stroke: [10, 'rgba(251,251,252,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(253,249,249,1.00)']
                        },
                        {
                            rect: ['-13px', '-12px', '302px', '80px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [10, 'rgba(132,71,170,1.00)', 'solid'],
                            id: 'RoundRect3',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,252,252,0.00)']
                        },
                        {
                            rect: ['82px', '14px', '144px', '52px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text6',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 30px; color: rgb(51, 51, 51);\">Vocal</span></p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '298px', '73px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "seleccionado": 195,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid185",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRect3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid186",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRect3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid205",
                            "border-color",
                            500,
                            0,
                            "linear",
                            "${RoundRect3}",
                            'rgba(132,71,170,1.00)',
                            'rgba(132,71,170,1.00)'
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
                            rect: ['0px', '0px', '298px', '73px', 'auto', 'auto'],
                            id: 'Rectangle2Copy2',
                            stroke: [10, 'rgba(251,251,252,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(253,249,249,1.00)']
                        },
                        {
                            rect: ['64px', '16px', '182px', '40px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text7',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 30px; color: rgb(51, 51, 51);\">Consonante</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['-11px', '-14px', '300px', '80px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [10, 'rgba(132,71,170,1.00)', 'solid'],
                            id: 'RoundRect4',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(253,249,249,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '298px', '73px']
                        }
                    }
                },
                timeline: {
                    duration: 540,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "seleccionado": 210,
                        "hover": 540
                    },
                    data: [
                        [
                            "eid189",
                            "opacity",
                            0,
                            210,
                            "linear",
                            "${RoundRect4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid190",
                            "opacity",
                            540,
                            0,
                            "linear",
                            "${RoundRect4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid208",
                            "border-color",
                            540,
                            0,
                            "linear",
                            "${RoundRect4}",
                            'rgba(132,71,170,1.00)',
                            'rgba(132,71,170,1.00)'
                        ]
                    ]
                }
            },
            "PICK_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '298px', '73px', 'auto', 'auto'],
                            id: 'Rectangle2Copy3',
                            stroke: [10, 'rgba(251,251,252,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(253,249,249,1.00)']
                        },
                        {
                            rect: ['-9px', '-11px', '299px', '76px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [10, 'rgba(132,71,170,1.00)', 'solid'],
                            id: 'RoundRect5',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(253,249,249,0.00)']
                        },
                        {
                            rect: ['67px', '14px', '164px', '47px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(51,51,51,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text8',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 30px;\">Vocal</span></p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '298px', '73px']
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
                            "eid194",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRect5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid195",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRect5}",
                            '1',
                            '1'
                        ],
                        [
                            "eid206",
                            "border-color",
                            500,
                            0,
                            "linear",
                            "${RoundRect5}",
                            'rgba(132,71,170,1.00)',
                            'rgba(132,71,170,1.00)'
                        ]
                    ]
                }
            },
            "PICK_6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '298px', '73px', 'auto', 'auto'],
                            id: 'Rectangle2Copy4',
                            stroke: [10, 'rgba(251,251,252,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(253,249,249,1.00)']
                        },
                        {
                            rect: ['-13px', '-10px', '304px', '74px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [10, 'rgba(132,71,170,1.00)', 'solid'],
                            id: 'RoundRect6',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(253,249,249,0.02)']
                        },
                        {
                            rect: ['58px', '11px', '182px', '51px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text9',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(51, 51, 51);\">Consonante</span></p>',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '298px', '73px']
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
                            "eid200",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRect6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid201",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRect6}",
                            '1',
                            '1'
                        ],
                        [
                            "eid207",
                            "border-color",
                            500,
                            0,
                            "linear",
                            "${RoundRect6}",
                            'rgba(132,71,170,1.00)',
                            'rgba(132,71,170,1.00)'
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
                            stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
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
                            rect: ['1335', '608', '320px', '45px', 'auto', 'auto'],
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
                    duration: 1159,
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
                            [ "eid224", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${r6_audio_1}', [] ] ]
                    ]
                }
            },
            "audio_2": {
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
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
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
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'stop',
                            opacity: '0',
                            rect: ['52px', '3px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)'],
                            stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            transform: [[], [], [], ['0.2', '0.2']],
                            tag: 'img',
                            type: 'image',
                            id: 'play',
                            opacity: '1',
                            rect: ['-23px', '-71px', '175px', '172px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/r6_audio_2.mp3'],
                            id: 'r6_audio_2',
                            rect: ['466', '599', '320px', '45px', 'auto', 'auto'],
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
                    duration: 1348.35,
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
                            [ "eid225", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${r6_audio_2}', [] ] ]
                    ]
                }
            },
            "audio_3": {
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
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
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
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'stop',
                            opacity: '0',
                            rect: ['52px', '3px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)'],
                            stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            transform: [[], [], [], ['0.2', '0.2']],
                            tag: 'img',
                            type: 'image',
                            id: 'play',
                            opacity: '1',
                            rect: ['-23px', '-71px', '175px', '172px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/r6_audio_3.mp3'],
                            id: 'r6_audio_3',
                            rect: ['-202', '474', '320px', '45px', 'auto', 'auto'],
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
                    duration: 1156.4,
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
                            [ "eid217", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${r6_audio_3}', [] ] ]
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("esn1le01ob02r6pre3_edgeActions.js");
})("EDGE-17298671");
