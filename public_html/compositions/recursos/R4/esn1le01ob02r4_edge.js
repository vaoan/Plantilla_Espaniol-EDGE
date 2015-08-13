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
                            id: 'Submit',
                            symbolName: 'Submit',
                            type: 'rect',
                            rect: ['1618px', '722px', '165', '38', 'auto', 'auto'],
                            clip: 'rect(0px 193.8662109375px 38px -28.8662109375px)',
                            cursor: 'pointer'
                        },
                        {
                            id: 'text_instruc1',
                            type: 'text',
                            rect: ['85px', '68px', '1763px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Cuando se deletrea una palabra debemos establecer una relación entre el sonido, la letra que lo representa y el nombre de la letra.&nbsp;&nbsp;&nbsp;</p><p style=\"margin: 0px;\">​</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'text_instruc2',
                            type: 'text',
                            rect: ['90px', '121px', '1668px', '63px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​A continuación encontrará los nombres de algunas letras del español. Escuche el audio y seleccione las letras adecuadas para completar las palabras.&nbsp;&nbsp;</p><p style=\"margin: 0px;\">​</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "32px", "", "none"]
                        },
                        {
                            id: 'text_instruc3',
                            type: 'text',
                            rect: ['85px', '179px', '1763px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Instrucción: seleccione y arrastre según corresponda. Tiene dos intentos para esta actividad.</p><p style=\"margin: 0px;\">​</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "italic", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Skills2',
                            symbolName: 'Skills',
                            type: 'rect',
                            rect: ['5', '618', '283', '157', 'auto', 'auto']
                        },
                        {
                            id: 'zona_textos',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '1830px', '125px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'img_cartagena',
                            type: 'image',
                            rect: ['57px', '206px', '312px', '215px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"img_cartagena.png",'0px','0px']
                        },
                        {
                            id: 'img_amazonas',
                            type: 'image',
                            rect: ['57px', '438px', '312px', '214px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"img_amazonas.png",'0px','0px']
                        },
                        {
                            id: 'circ_numero',
                            type: 'ellipse',
                            rect: ['42px', '194px', '29px', '29px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [0,"rgba(0,0,0,0.00)","none"]
                        },
                        {
                            id: 'circ_numeroCopy',
                            type: 'ellipse',
                            rect: ['42px', '424px', '29px', '29px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [0,"rgba(0,0,0,0.00)","none"]
                        },
                        {
                            id: 'num_1',
                            type: 'text',
                            rect: ['51px', '194px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​1</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [20, "px"], "rgba(255,255,255,1.00)", "700", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'num_2',
                            type: 'text',
                            rect: ['51px', '424px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​2</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [20, "px"], "rgba(255,255,255,1.00)", "700", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'DROP_1',
                            symbolName: 'DROP_1',
                            type: 'rect',
                            rect: ['880px', '272px', '439', '329', 'auto', 'auto']
                        },
                        {
                            id: 'DROP_2',
                            symbolName: 'DROP_2',
                            type: 'rect',
                            rect: ['1332px', '272px', '439', '329', 'auto', 'auto']
                        },
                        {
                            id: 'DRAG_1',
                            symbolName: 'DRAG_1',
                            type: 'rect',
                            rect: ['396px', '208px', '413', '64', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_2',
                            symbolName: 'DRAG_2',
                            type: 'rect',
                            rect: ['396px', '523px', '413', '64', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_3',
                            symbolName: 'DRAG_3',
                            type: 'rect',
                            rect: ['396px', '357px', '413', '64', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_4',
                            symbolName: 'DRAG_4',
                            type: 'rect',
                            rect: ['396px', '449px', '413', '64', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_5',
                            symbolName: 'DRAG_5',
                            type: 'rect',
                            rect: ['396px', '281px', '413', '64', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_6',
                            symbolName: 'DRAG_6',
                            type: 'rect',
                            rect: ['396px', '595px', '413', '64', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'margen_superior2',
                            symbolName: 'margen_superior',
                            type: 'rect',
                            rect: ['0', '0px', '1830', '70', 'auto', 'auto']
                        },
                        {
                            id: 'margen_inferior2',
                            symbolName: 'margen_inferior',
                            type: 'rect',
                            rect: ['0px', '641px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'vineta_lila',
                            type: 'image',
                            rect: ['37px', '96px', '57px', '85px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"vineta_lila.png",'0px','0px'],
                            transform: [[],[],[],['0.3','0.3']]
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
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid141",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zona_textos}",
                            'none',
                            'none'
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
                            rect: ['0px', '0px', '197px', '38px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(193,193,193,1.00)']
                        },
                        {
                            rect: ['22px', '7px', '154px', '38px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​TIMER</p>',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '197px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "10": 500
                    },
                    data: [
                        [
                            "eid32",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle2}",
                            'rgba(193,193,193,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid34",
                            "background-color",
                            500,
                            500,
                            "linear",
                            "${Rectangle2}",
                            'rgba(255,0,0,1)',
                            'rgba(193,193,193,1.00)'
                        ],
                        [
                            "eid41",
                            "color",
                            0,
                            500,
                            "linear",
                            "${Text2}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid42",
                            "color",
                            500,
                            500,
                            "linear",
                            "${Text2}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,0,0,1)'
                        ]
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
                            rect: ['0px', '0px', '413px', '64px', 'auto', 'auto'],
                            id: 'img_drag2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_drag2.png', '0px', '0px']
                        },
                        {
                            rect: ['16px', '14px', '373px', '35px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(0,0,0,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'text_drag1',
                            text: '<p style=\"margin: 0px;\">​Ce – a – erre – te – a - ge - e - ene - a&nbsp;</p><p style=\"margin: 0px;\">​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '413px', '64px']
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
                            rect: ['0px', '0px', '413px', '64px', 'auto', 'auto'],
                            id: 'img_drag3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_drag3.png', '0px', '0px']
                        },
                        {
                            rect: ['11px', '17px', '386px', '31px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'text_drag2',
                            text: '<p style=\"margin: 0px;\">​A – eme – a – zeta – o – ene –a –ese&nbsp;</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '413px', '64px']
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
                            rect: ['0px', '0px', '413px', '64px', 'auto', 'auto'],
                            id: 'img_drag42',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_drag4.png', '0px', '0px']
                        },
                        {
                            rect: ['16px', '15px', '381px', '32px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'text_drag3',
                            text: '<p style=\"margin: 0px;\">​Se – a – erre – efe – a - je - e - ene - a</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '413px', '64px']
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
                            rect: ['0px', '0px', '413px', '64px', 'auto', 'auto'],
                            id: 'img_drag5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_drag5.png', '0px', '0px']
                        },
                        {
                            rect: ['12px', '14px', '387px', '35px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'text_drag4',
                            text: '<p style=\"margin: 0px;\">​A – ene – a – zeta – o – eñe –a –eze</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '413px', '64px']
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
                            rect: ['0px', '0px', '413px', '64px', 'auto', 'auto'],
                            id: 'img_drag6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_drag6.png', '0px', '0px']
                        },
                        {
                            rect: ['14px', '15px', '382px', '31px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'text_drag5',
                            text: '<p style=\"margin: 0px;\">​Ce – a – pe – te – a - je - e - eñe - e&nbsp;</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '413px', '64px']
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
            "DRAG_6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '413px', '64px', 'auto', 'auto'],
                            id: 'img_drag7',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_drag7.png', '0px', '0px']
                        },
                        {
                            rect: ['14px', '16px', '385px', '35px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'text_drag6',
                            text: '<p style=\"margin: 0px;\">A – eñe – a – seta – o – eme –a –ese​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '413px', '64px']
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
                            rect: ['0px', '0px', '439px', '329px', 'auto', 'auto'],
                            id: 'img_zonaDrop',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img_zonaDrop.png', '0px', '0px']
                        },
                        {
                            rect: ['28px', '3px', '383px', '45px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [35, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text_cartagena',
                            text: '<p style=\"margin: 0px;\">​Cartagena</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '439px', '329px']
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
                            type: 'image',
                            id: 'img_zonaDrop2',
                            rect: ['0px', '0px', '439px', '329px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/img_zonaDrop2.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['21px', '7px', '398px', '38px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text_amazonas',
                            text: '<p style=\"margin: 0px;\">​Amazonas</p>',
                            align: 'center',
                            font: ['source-sans-pro, sans-serif', [35, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '439px', '329px']
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
                            transform: [[], [], [], ['0.45', '0.45']],
                            id: 'V_HABLA',
                            type: 'image',
                            rect: ['-24px', '16px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_HABLA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_oral',
                            opacity: '0',
                            rect: ['0px', '-4px', '102px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['41px', '42px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy2',
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​oral</p>',
                                textStyle: ['', '', '23px', '', ''],
                                rect: ['8px', '6px', 'auto', 'auto', 'auto', 'auto']
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
                            transform: [[], [], [], ['0.45', '0.45']],
                            id: 'V_ESCUCHA',
                            type: 'image',
                            rect: ['-12px', '12px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCUCHA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_auditiva',
                            opacity: '0',
                            rect: ['0px', '-9px', '117px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['48px', '42px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​auditiva</p>',
                                textStyle: ['', '', '23px', '', ''],
                                rect: ['7px', '6px', 'auto', 'auto', 'auto', 'auto']
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
                            type: 'image',
                            transform: [[], [], [], ['0.5', '0.5']],
                            display: 'block',
                            rect: ['44px', '33px', '141px', '141px', 'auto', 'auto'],
                            id: 'B_ESCRITURA',
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCRITURA.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0.45', '0.45']],
                            display: 'block',
                            rect: ['100px', '14px', '141px', '141px', 'auto', 'auto'],
                            id: 'B_ESCUCHA',
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCUCHA.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0.45', '0.45']],
                            display: 'none',
                            rect: ['157px', '35px', '141px', '141px', 'auto', 'auto'],
                            id: 'B_HABLA',
                            fill: ['rgba(0,0,0,0)', 'images/B_HABLA.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0.5', '0.5']],
                            display: 'none',
                            rect: ['-12px', '14px', '141px', '141px', 'auto', 'auto'],
                            id: 'B_LECTURA',
                            fill: ['rgba(0,0,0,0)', 'images/B_LECTURA.png', '0px', '0px']
                        },
                        {
                            rect: ['62px', '16px', '102', '108', 'auto', 'auto'],
                            id: 'escrita',
                            symbolName: 'escrita',
                            type: 'rect',
                            display: 'none'
                        },
                        {
                            rect: ['181px', '19px', '102', '109', 'auto', 'auto'],
                            id: 'oral',
                            symbolName: 'oral',
                            type: 'rect',
                            display: 'block'
                        },
                        {
                            rect: ['0px', '0px', '117', '113', 'auto', 'auto'],
                            id: 'lectora',
                            symbolName: 'lectora',
                            type: 'rect',
                            display: 'block'
                        },
                        {
                            rect: ['112px', '2px', '117', '104', 'auto', 'auto'],
                            id: 'auditiva',
                            symbolName: 'auditiva',
                            type: 'rect',
                            display: 'none'
                        },
                        {
                            rect: ['23px', '50px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Tool_lectora',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(45,110,51,0.00)']
                        },
                        {
                            rect: ['80px', '71px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Tool_escrita',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(45,110,51,0.00)']
                        },
                        {
                            rect: ['136px', '49px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Tool_auditiva',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(45,110,51,0.00)']
                        },
                        {
                            rect: ['192px', '72px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Tool_oral',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(45,110,51,0.00)']
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
                            "${B_HABLA}",
                            'none',
                            'none'
                        ],
                        [
                            "eid51",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_ESCUCHA}",
                            'block',
                            'block'
                        ],
                        [
                            "eid49",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_LECTURA}",
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
                            'none',
                            'none'
                        ],
                        [
                            "eid52",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_ESCRITURA}",
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
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'V_LECTURA',
                            type: 'image',
                            rect: ['-12px', '15px', '140px', '140px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_LECTURA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_lectora',
                            opacity: '0',
                            rect: ['0px', '-13px', '117px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['48px', '42px', '20px', '20px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​lectora</p>',
                                textStyle: ['', '', '23px', '', ''],
                                rect: ['7px', '6px', 'auto', 'auto', 'auto', 'auto']
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
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'V_ESCRITURA',
                            type: 'image',
                            rect: ['-18px', '17px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCRITURA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_escrita',
                            opacity: '0',
                            rect: ['0px', '-4px', '102px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['41px', '42px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy3',
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​escrita</p>',
                                textStyle: ['', '', '23px', '', ''],
                                rect: ['8px', '6px', 'auto', 'auto', 'auto', 'auto']
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
            "margen_inferior": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '25px', '13px', '79px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [7, 'rgba(79,45,110,0.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(180,180,180,1.00)']
                        },
                        {
                            rect: ['27px', '0px', '1735px', '11px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [7, 'rgba(79, 45, 110, 0)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(180,180,180,1)']
                        },
                        {
                            rect: ['27px', '118px', '1735px', '7px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [7, 'rgba(79, 45, 110, 0)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(180,180,180,1)']
                        },
                        {
                            rect: ['1776px', '25px', '13px', '79px', 'auto', 'auto'],
                            id: 'Rectangle4',
                            stroke: [7, 'rgba(79, 45, 110, 0)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(180,180,180,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1803px', '139px']
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
                            rect: ['1775px', '0px', '55px', '70px', 'auto', 'auto'],
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(111,160,217,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '55px', '70px', 'auto', 'auto'],
                            id: 'Rectangle2Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(111,160,217,1.00)']
                        },
                        {
                            rect: ['86px', '0px', '1689px', '70px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
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
            },
            "espacios_texto": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '30px', '30px', 'auto', 'auto'],
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['0px', '92px', '30px', '30px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['0px', '142px', '30px', '30px', 'auto', 'auto'],
                            id: 'Rectangle2Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '35px', '177px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("esn1le01ob02r4_edgeActions.js");
})("EDGE-6342212");
