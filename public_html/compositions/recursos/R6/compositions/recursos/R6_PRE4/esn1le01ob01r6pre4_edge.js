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
            js+"pickManyUtilities.js",
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
                            id: 'PICK_1',
                            symbolName: 'PICK_1',
                            type: 'rect',
                            rect: ['278', '245px', '199', '250', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_2',
                            symbolName: 'PICK_2',
                            type: 'rect',
                            rect: ['584', '245px', '97', '250', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_3',
                            symbolName: 'PICK_3',
                            type: 'rect',
                            rect: ['790', '245px', '194', '250', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_4',
                            symbolName: 'PICK_4',
                            type: 'rect',
                            rect: ['1052', '245px', '181', '250', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_5',
                            symbolName: 'PICK_5',
                            type: 'rect',
                            rect: ['1305', '245px', '184', '250', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'texto_1_empuja_cont_1',
                            type: 'text',
                            rect: ['104px', '71px', '1659px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 40px;\">​<span style=\"font-family: sena_icon; font-weight: 900; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(84, 53, 118); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">Z</span><span style=\"font-family: source-sans-pro, sans-serif; font-weight: 900; font-style: normal; text-decoration: none; font-size: 40px; color: rgb(84, 53, 118); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">&nbsp;</span><span style=\"font-size: 30px;\">Las vocales &nbsp;</span></p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-size: 30px; color: rgb(106, 55, 137);\">4</span><span style=\"font-size: 30px;\">&nbsp;Iden</span><span style=\"font-family: source-sans-pro, sans-serif; text-decoration: none; font-size: 30px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; font-style: normal;\">​tifique las vocales que tienen la palabra </span><span style=\"font-family: source-sans-pro, sans-serif; text-decoration: none; font-size: 30px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; font-style: italic;\">radio</span><span style=\"font-family: source-sans-pro, sans-serif; text-decoration: none; font-size: 30px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; font-style: normal;\">.&nbsp;</span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: italic; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\">​​</span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px; font-style: italic;\">Instrucción: seleccione las respuestas correctas. Tiene distractores.</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "40px", "", "none"]
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
                    duration: 2500,
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
                            rect: ['0px', '0px', '161px', '31px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
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
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'TextCopy3',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Enviar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                rect: ['60px', '0px', '94px', '31px', 'auto', 'auto']
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
                            font: ['source-sans-pro, sans-serif', [320, 'px'], 'rgba(157,99,192,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​u</p>',
                            textStyle: ['', '', '250px', '', 'none'],
                            rect: ['8px', '5px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            rect: ['-2px', '60px', '182px', '182px', 'auto', 'auto'],
                            borderRadius: ['34px', '34px', '34px', '34px 34px'],
                            opacity: '0',
                            id: 'RoundRect',
                            stroke: [10, 'rgba(106,55,137,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '199px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid112",
                            "top",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid147",
                            "background-color",
                            2500,
                            0,
                            "linear",
                            "${RoundRect}",
                            'rgba(255,255,255,0.00)',
                            'rgba(255,255,255,0.00)'
                        ],
                        [
                            "eid104",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid105",
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
                            rect: ['-52px', '58px', '182px', '189px', 'auto', 'auto'],
                            borderRadius: ['34px', '34px', '34px', '34px 34px'],
                            stroke: [10, 'rgba(106,55,137,1.00)', 'solid'],
                            id: 'RoundRectCopy',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'text',
                            rect: ['15px', '-3px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​i</p>',
                            align: 'left',
                            font: ['source-sans-pro, sans-serif', [247, 'px'], 'rgba(157,99,192,1)', '700', 'none', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '97px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid144",
                            "top",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid115",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRectCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid116",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid143",
                            "height",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy}",
                            '189px',
                            '189px'
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
                            type: 'text',
                            rect: ['8px', '0px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '250px', '', 'none'],
                            id: 'Text3Copy2',
                            text: '<p style=\"margin: 0px;\">​o</p>',
                            align: 'left',
                            font: ['source-sans-pro, sans-serif', [320, 'px'], 'rgba(157,99,192,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['-4px', '60px', '182px', '182px', 'auto', 'auto'],
                            borderRadius: ['34px', '34px', '34px', '34px 34px'],
                            stroke: [10, 'rgba(106,55,137,1.00)', 'solid'],
                            id: 'RoundRectCopy2',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '194px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid122",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRectCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid123",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid128",
                            "top",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy2}",
                            '60px',
                            '60px'
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
                            type: 'text',
                            rect: ['7px', '3px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '250px', '', 'none'],
                            id: 'Text3Copy3',
                            text: '<p style=\"margin: 0px;\">​e</p>',
                            align: 'left',
                            font: ['source-sans-pro, sans-serif', [320, 'px'], 'rgba(157,99,192,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['-11px', '60px', '182px', '182px', 'auto', 'auto'],
                            borderRadius: ['34px', '34px', '34px', '34px 34px'],
                            stroke: [10, 'rgba(106,55,137,1.00)', 'solid'],
                            id: 'RoundRectCopy3',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '181px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid131",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRectCopy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid132",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy3}",
                            '1',
                            '1'
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
                            type: 'text',
                            rect: ['8px', '4px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '250px', '', 'none'],
                            id: 'Text3Copy4',
                            text: '<p style=\"margin: 0px;\">​a</p>',
                            align: 'left',
                            font: ['source-sans-pro, sans-serif', [320, 'px'], 'rgba(157,99,192,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['-9px', '60px', '182px', '182px', 'auto', 'auto'],
                            borderRadius: ['34px', '34px', '34px', '34px 34px'],
                            stroke: [10, 'rgba(106,55,137,1.00)', 'solid'],
                            id: 'RoundRectCopy4',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '184px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid142",
                            "top",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy4}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid139",
                            "left",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy4}",
                            '-9px',
                            '-9px'
                        ],
                        [
                            "eid137",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRectCopy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid138",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy4}",
                            '1',
                            '1'
                        ]
                    ]
                }
            },
            "margenes": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(106,55,137,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'TextCopy',
                            text: '<p style=\"margin: 0px;\">​1</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['104px', '164px', '18px', '38px', 'auto', 'auto']
                        },
                        {
                            transform: [[], [], [], ['0.25', '0.25']],
                            id: 'vineta_lila',
                            type: 'image',
                            rect: ['84px', '48px', '57px', '85px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/vineta_lila22.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['1px', '0px', '266px', '80px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '80px', '104px', '127px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['120px', '80px', '18px', '127px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '267px', '207px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("esn1le01ob01r6pre4_edgeActions.js");
})("EDGE-17298671");
