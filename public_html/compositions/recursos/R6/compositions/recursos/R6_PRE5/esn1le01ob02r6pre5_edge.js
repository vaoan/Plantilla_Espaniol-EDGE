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
                            id: 'PICK_4',
                            symbolName: 'PICK_4',
                            type: 'rect',
                            rect: ['633px', '335px', '182', '182', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_3',
                            symbolName: 'PICK_3',
                            type: 'rect',
                            rect: ['1274px', '335px', '181', '182', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_2',
                            symbolName: 'PICK_2',
                            type: 'rect',
                            rect: ['954px', '342px', '182', '182', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_1',
                            symbolName: 'PICK_1',
                            type: 'rect',
                            rect: ['313px', '335px', '182', '182', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Text2Copy2',
                            type: 'text',
                            rect: ['137px', '69px', '1255px', '37px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\"><span style=\"font-size: 30px;\">Deletreo&nbsp;</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2Copy',
                            type: 'text',
                            rect: ['137px', '106px', '1589px', '37px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">Instrucción: seleccione la respuesta correcta.</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "italic", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['137px', '169px', '1475px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">Seleccione la imagen correspondiente &nbsp;al deletro del audio.</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "30px", "", "none"]
                        },
                        {
                            id: 'esn1le01ob02re6au08',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['-40', '310', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"esn1le01ob02re6au08.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'audio_1',
                            symbolName: 'btn_audio_2',
                            type: 'rect',
                            rect: ['298px', '248px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.1784','1.1784']]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['103px', '164px', '18px', '38px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​5</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(106,55,137,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'vineta_lila',
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
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 9126.85,
                    autoPlay: true,
                    data: [
                        [
                            "eid134",
                            "top",
                            500,
                            0,
                            "linear",
                            "${audio_1}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid133",
                            "left",
                            500,
                            0,
                            "linear",
                            "${audio_1}",
                            '298px',
                            '298px'
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
                            rect: ['18px', '3px', '128px', '31px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​TIMER</p>',
                            align: 'center',
                            type: 'text'
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
                            type: 'image',
                            id: 'camiseta',
                            rect: ['-61px', '-61px', '300px', '300px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.62', '0.62']],
                            fill: ['rgba(0,0,0,0)', 'images/camiseta.png', '0px', '0px']
                        },
                        {
                            rect: ['-6px', '-12px', '182px', '182px', 'auto', 'auto'],
                            borderRadius: ['34px', '34px', '34px', '34px 34px'],
                            opacity: '0',
                            id: 'RoundRect',
                            stroke: [10, 'rgba(106,55,137,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'image',
                            id: 'camisetaCopy',
                            rect: ['-59px', '-61px', '300px', '300px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.66', '0.66']],
                            fill: ['rgba(0,0,0,0)', 'imagenes/camiseta.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '182px', '182px']
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
                            "eid111",
                            "top",
                            500,
                            0,
                            "linear",
                            "${RoundRect}",
                            '-12px',
                            '-12px'
                        ],
                        [
                            "eid110",
                            "left",
                            500,
                            0,
                            "linear",
                            "${RoundRect}",
                            '-6px',
                            '-6px'
                        ],
                        [
                            "eid77",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid76",
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
                            transform: [[], [], [], ['0.64', '0.64']],
                            id: 'zapatos',
                            type: 'image',
                            rect: ['-59px', '-59px', '300px', '300px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/zapatos.png', '0px', '0px']
                        },
                        {
                            rect: ['-10px', '-15px', '182px', '182px', 'auto', 'auto'],
                            borderRadius: ['34px', '34px', '34px', '34px 34px'],
                            stroke: [10, 'rgba(106,55,137,1.00)', 'solid'],
                            id: 'RoundRect',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            transform: [[], [], [], ['0.63', '0.63']],
                            id: 'zapatosCopy',
                            type: 'image',
                            rect: ['-55px', '-70px', '300px', '300px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'imagenes/zapatos.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '182px', '182px']
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
                            "eid121",
                            "top",
                            500,
                            0,
                            "linear",
                            "${RoundRect}",
                            '-15px',
                            '-15px'
                        ],
                        [
                            "eid120",
                            "left",
                            500,
                            0,
                            "linear",
                            "${RoundRect}",
                            '-10px',
                            '-10px'
                        ],
                        [
                            "eid79",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid80",
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
                            rect: ['-10px', '-10px', '182px', '182px', 'auto', 'auto'],
                            borderRadius: ['34px', '34px', '34px', '34px 34px'],
                            stroke: [10, 'rgba(106,55,137,1.00)', 'solid'],
                            id: 'RoundRectCopy',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            transform: [[], [], [], ['0.61', '0.61']],
                            id: 'medias',
                            type: 'image',
                            rect: ['-59px', '-59px', '300px', '300px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/medias.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.65', '0.65']],
                            id: 'mediasCopy',
                            type: 'image',
                            rect: ['-59px', '-65px', '300px', '300px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'imagenes/medias.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '181px', '182px']
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
                            "eid124",
                            "left",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy}",
                            '-10px',
                            '-10px'
                        ],
                        [
                            "eid125",
                            "top",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy}",
                            '-10px',
                            '-10px'
                        ],
                        [
                            "eid81",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRectCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid82",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy}",
                            '1',
                            '1'
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
                            type: 'rect',
                            borderRadius: ['34px', '34px', '34px', '34px 34px'],
                            id: 'RoundRectCopy2',
                            opacity: '0',
                            rect: ['-10px', '-12px', '182px', '182px', 'auto', 'auto'],
                            stroke: [10, 'rgba(106,55,137,1.00)', 'solid'],
                            fill: ['rgba(192,192,192,0.00)'],
                            c: [
                            {
                                transform: [[], [], [], ['0.62', '0.62']],
                                id: 'bufanda',
                                type: 'image',
                                rect: ['-59px', '-59px', '300px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/bufanda.png', '0px', '0px']
                            }]
                        },
                        {
                            transform: [[], [], [], ['0.68', '0.68']],
                            id: 'bufandaCopy',
                            type: 'image',
                            rect: ['-60px', '-62px', '300px', '300px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'imagenes/bufanda.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '182px', '182px']
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
                            "eid83",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRectCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid114",
                            "left",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy2}",
                            '-10px',
                            '-10px'
                        ],
                        [
                            "eid115",
                            "top",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy2}",
                            '-12px',
                            '-12px'
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
                            type: 'image',
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'dedo',
                            rect: ['0px', '0px', '182px', '182px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/dedo.png', '0px', '0px']
                        },
                        {
                            rect: ['-11px', '-9px', '182px', '182px', 'auto', 'auto'],
                            borderRadius: ['34px', '34px', '34px', '34px 34px'],
                            opacity: '0',
                            id: 'RoundRectCopy3',
                            stroke: [10, 'rgba(106,55,137,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '182px', '182px']
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
                            "eid85",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRectCopy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid86",
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
                            type: 'image',
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'burro',
                            rect: ['0px', '0px', '182px', '182px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/burro.png', '0px', '0px']
                        },
                        {
                            rect: ['-11px', '-9px', '182px', '182px', 'auto', 'auto'],
                            borderRadius: ['34px', '34px', '34px', '34px 34px'],
                            opacity: '0',
                            id: 'RoundRectCopy5',
                            stroke: [10, 'rgba(106,55,137,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '182px', '182px']
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
                            "eid89",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRectCopy5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid90",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy5}",
                            '1',
                            '1'
                        ]
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
                        },
                        {
                            id: 'BTN-tools-ESCopy',
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
                            rect: ['65px', '7px', '7%', '18px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/BTN-tools-ES2.png', '0px', '0px']
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
            "btn_audio_2": {
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
                            source: ['media/r6_audio_1.mp3'],
                            id: 'r6_audio_1',
                            rect: ['515', '535', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/r6_audio_1.mp3'],
                            id: 'r6_audio_12',
                            rect: ['120', '581', '320px', '45px', 'auto', 'auto'],
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
                    duration: 9126.85,
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
                            [ "eid132", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${r6_audio_12}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("esn1le01ob02r6pre5_edgeActions.js");
})("EDGE-17298671");
