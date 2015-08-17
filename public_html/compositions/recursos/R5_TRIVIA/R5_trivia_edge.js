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
                            id: 'trivia_respuesta',
                            symbolName: 'trivia_respuesta',
                            type: 'rect',
                            rect: ['3660px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'trivia_5',
                            symbolName: 'trivia_5',
                            type: 'rect',
                            rect: ['3660px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'trivia_3',
                            symbolName: 'trivia_3',
                            type: 'rect',
                            rect: ['3660px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'trivia_4',
                            symbolName: 'trivia_4',
                            type: 'rect',
                            rect: ['3660px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'trivia_2',
                            symbolName: 'trivia_2',
                            type: 'rect',
                            rect: ['3660px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'trivia_1',
                            symbolName: 'trivia_1',
                            type: 'rect',
                            rect: ['3660px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'trivia_portada',
                            symbolName: 'trivia_portada',
                            type: 'rect',
                            rect: ['-3660px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'btnInicio',
                            symbolName: 'btnInicio',
                            display: 'block',
                            type: 'rect',
                            rect: ['802px', '599px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'TIMER_CONTAINER3',
                            symbolName: 'TIMER_CONTAINER',
                            display: 'none',
                            type: 'rect',
                            rect: ['1258px', '425px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'Submit',
                            symbolName: 'Submit',
                            display: 'none',
                            type: 'rect',
                            rect: ['1587px', '693px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1830px', '780px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    labels: {
                        "slideInicio": 0,
                        "slide1": 500,
                        "slide2": 1500,
                        "slide3": 2500,
                        "slide4": 3500,
                        "slide5": 4500,
                        "slideRespuesta": 5500
                    },
                    data: [
                        [
                            "eid55",
                            "left",
                            2000,
                            1000,
                            "linear",
                            "${trivia_4}",
                            '3660px',
                            '0px'
                        ],
                        [
                            "eid47",
                            "left",
                            3000,
                            1000,
                            "linear",
                            "${trivia_4}",
                            '0px',
                            '-3660px'
                        ],
                        [
                            "eid39",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${trivia_portada}",
                            '0px',
                            '-3660px'
                        ],
                        [
                            "eid51",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${trivia_1}",
                            '3660px',
                            '0px'
                        ],
                        [
                            "eid41",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${trivia_1}",
                            '0px',
                            '-3660px'
                        ],
                        [
                            "eid59",
                            "left",
                            4000,
                            1000,
                            "linear",
                            "${trivia_5}",
                            '3660px',
                            '0px'
                        ],
                        [
                            "eid49",
                            "left",
                            5000,
                            1000,
                            "linear",
                            "${trivia_5}",
                            '0px',
                            '-3660px'
                        ],
                        [
                            "eid122",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${TIMER_CONTAINER3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid127",
                            "display",
                            1135,
                            0,
                            "linear",
                            "${TIMER_CONTAINER3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid125",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${TIMER_CONTAINER3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid129",
                            "display",
                            2129,
                            0,
                            "linear",
                            "${TIMER_CONTAINER3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid131",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${TIMER_CONTAINER3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid133",
                            "display",
                            3124,
                            0,
                            "linear",
                            "${TIMER_CONTAINER3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid135",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${TIMER_CONTAINER3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid137",
                            "display",
                            4118,
                            0,
                            "linear",
                            "${TIMER_CONTAINER3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid139",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${TIMER_CONTAINER3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid141",
                            "display",
                            5112,
                            0,
                            "linear",
                            "${TIMER_CONTAINER3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid123",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Submit}",
                            'none',
                            'block'
                        ],
                        [
                            "eid126",
                            "display",
                            1135,
                            0,
                            "linear",
                            "${Submit}",
                            'block',
                            'none'
                        ],
                        [
                            "eid124",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Submit}",
                            'none',
                            'block'
                        ],
                        [
                            "eid128",
                            "display",
                            2129,
                            0,
                            "linear",
                            "${Submit}",
                            'block',
                            'none'
                        ],
                        [
                            "eid130",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Submit}",
                            'none',
                            'block'
                        ],
                        [
                            "eid132",
                            "display",
                            3124,
                            0,
                            "linear",
                            "${Submit}",
                            'block',
                            'none'
                        ],
                        [
                            "eid134",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${Submit}",
                            'none',
                            'block'
                        ],
                        [
                            "eid136",
                            "display",
                            4118,
                            0,
                            "linear",
                            "${Submit}",
                            'block',
                            'none'
                        ],
                        [
                            "eid138",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${Submit}",
                            'none',
                            'block'
                        ],
                        [
                            "eid140",
                            "display",
                            5112,
                            0,
                            "linear",
                            "${Submit}",
                            'block',
                            'none'
                        ],
                        [
                            "eid111",
                            "display",
                            108,
                            0,
                            "linear",
                            "${btnInicio}",
                            'block',
                            'none'
                        ],
                        [
                            "eid57",
                            "left",
                            3000,
                            1000,
                            "linear",
                            "${trivia_3}",
                            '3660px',
                            '0px'
                        ],
                        [
                            "eid48",
                            "left",
                            4000,
                            1000,
                            "linear",
                            "${trivia_3}",
                            '0px',
                            '-3660px'
                        ],
                        [
                            "eid64",
                            "left",
                            5000,
                            1000,
                            "linear",
                            "${trivia_respuesta}",
                            '3660px',
                            '0px'
                        ],
                        [
                            "eid53",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${trivia_2}",
                            '3660px',
                            '0px'
                        ],
                        [
                            "eid46",
                            "left",
                            2000,
                            1000,
                            "linear",
                            "${trivia_2}",
                            '0px',
                            '-3660px'
                        ]
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
                            rect: ['14px', '11px', '200px', '36px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-weight: 700; font-size: 28px;\">Iniciar</span></p>',
                            id: 'Text',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
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
            "trivia_portada": {
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
                            id: 'fondotrivia-01',
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fondotrivia-01.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'sopadeletras-09',
                            rect: ['719px', '201px', '393px', '393px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sopadeletras-09.png', '0px', '0px']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [41, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'center',
                            id: 'TextCopy',
                            opacity: '1',
                            text: '<p style=\"margin: 0px;\">Trivia</p>',
                            rect: ['863px', '370px', 'auto', 'auto', 'auto', 'auto']
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
            "trivia_1": {
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
                            id: 'RectangleCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
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
            "trivia_2": {
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
                            id: 'RectangleCopy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,239,0,1.00)']
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
            "trivia_3": {
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
                            id: 'RectangleCopy4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,223,255,1.00)']
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
            "trivia_4": {
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
                            id: 'RectangleCopy3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,23,255,1.00)']
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
            "trivia_5": {
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
                            id: 'RectangleCopy6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(231,0,255,1.00)']
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
            "trivia_respuesta": {
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
                            id: 'RectangleCopy6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,255,63,1.00)']
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
                                transform: [[], [], ['62'], [1, 1, 1]],
                                rect: ['42px', '43px', '95px', '36px', 'auto', 'auto'],
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
                            align: 'center',
                            id: 'Text',
                            textStyle: ['', '', '23px', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​timer</p>',
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
                            "eid147",
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
                            "eid148",
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
                            "eid149",
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
                            "eid150",
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
                            "eid151",
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
                            rect: ['-24px', '3px', '213px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("R5_trivia_edgeActions.js");
})("EDGE-10633996");
