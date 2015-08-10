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
            js+"ion.sound-3.0.5/js/ion.sound.min.js",
            js+"EdgeCommons.js",
            js+"utility.js",
            js+"main.js",
            js+"timerUtilities.js",
            js+"actividades_result.js",
            js+"r6.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'contenedor_3',
                            symbolName: 'contenedor_3',
                            display: 'none',
                            type: 'rect',
                            rect: ['5%', '5%', '873', '680', 'auto', 'auto']
                        },
                        {
                            id: 'contenedor_2',
                            symbolName: 'contenedor_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['-18.8%', '-31.3%', '880px', '630px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'contenedor_1',
                            symbolName: 'contenedor_1',
                            type: 'rect',
                            rect: ['5.1%', '5%', '860px', '630px', 'auto', 'auto'],
                            transform: [[],['360']]
                        },
                        {
                            id: 'TIMER_CONTAINER',
                            symbolName: 'timer',
                            type: 'rect',
                            rect: ['818', '29', '174', '174', 'auto', 'auto']
                        },
                        {
                            id: 'btn_atras',
                            symbolName: 'btn_atras',
                            type: 'rect',
                            rect: ['489', '599', '174', '148', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btn_adelante',
                            symbolName: 'btn_adelante',
                            type: 'rect',
                            rect: ['717', '599', '174', '148', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btn_start',
                            symbolName: 'btn_start',
                            type: 'rect',
                            rect: ['35', '39', '950', '694', 'auto', 'auto'],
                            cursor: 'pointer'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1020px', '782px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid152",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${contenedor_1}",
                            '1',
                            '0.1'
                        ],
                        [
                            "eid164",
                            "top",
                            0,
                            500,
                            "linear",
                            "${contenedor_1}",
                            '4.97%',
                            '-31.24%'
                        ],
                        [
                            "eid217",
                            "scaleX",
                            1000,
                            500,
                            "linear",
                            "${contenedor_3}",
                            '1',
                            '0.1'
                        ],
                        [
                            "eid169",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${contenedor_2}",
                            '1',
                            '0.1'
                        ],
                        [
                            "eid223",
                            "display",
                            0,
                            0,
                            "linear",
                            "${contenedor_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid226",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${contenedor_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid218",
                            "scaleY",
                            1000,
                            500,
                            "linear",
                            "${contenedor_3}",
                            '1',
                            '0.1'
                        ],
                        [
                            "eid172",
                            "top",
                            500,
                            500,
                            "linear",
                            "${contenedor_2}",
                            '5%',
                            '-31.26%'
                        ],
                        [
                            "eid153",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${contenedor_1}",
                            '1',
                            '0.1'
                        ],
                        [
                            "eid156",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${contenedor_1}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid171",
                            "left",
                            500,
                            500,
                            "linear",
                            "${contenedor_2}",
                            '5%',
                            '-18.83%'
                        ],
                        [
                            "eid170",
                            "scaleY",
                            500,
                            500,
                            "linear",
                            "${contenedor_2}",
                            '1',
                            '0.1'
                        ],
                        [
                            "eid220",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${contenedor_3}",
                            '4.99%',
                            '-34.13%'
                        ],
                        [
                            "eid224",
                            "display",
                            0,
                            0,
                            "linear",
                            "${contenedor_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid225",
                            "display",
                            500,
                            0,
                            "linear",
                            "${contenedor_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid163",
                            "left",
                            0,
                            500,
                            "linear",
                            "${contenedor_1}",
                            '5.05%',
                            '-32.89%'
                        ],
                        [
                            "eid219",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${contenedor_3}",
                            '5%',
                            '1.49%'
                        ]
                    ]
                }
            },
            "timer": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '174px', '174px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(78,23,199,1.00)']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [45, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px; text-align: center;\">​TIMER</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['11px', '44px', '152px', '81px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '174px', '174px']
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
            "contenedor_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,71,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '860px', '630px']
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
            "btn_adelante": {
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
                            id: 'Rectangle8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '174px', '148px', 'auto', 'auto'],
                            fill: ['rgba(0,255,7,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '174px', '148px']
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
            "btn_atras": {
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
                            id: 'Rectangle7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '174px', '148px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '174px', '148px']
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
            "contenedor_2": {
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
                            id: 'Rectangle9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '880px', '630px', 'auto', 'auto'],
                            fill: ['rgba(247,255,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '880px', '630px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid100",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Rectangle9}",
                            '880px',
                            '880px'
                        ],
                        [
                            "eid99",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle9}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid101",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle9}",
                            '630px',
                            '630px'
                        ],
                        [
                            "eid98",
                            "left",
                            500,
                            0,
                            "linear",
                            "${Rectangle9}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "contenedor_3": {
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
                            id: 'Rectangle11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0%', '0%', '873px', '680px', 'auto', 'auto'],
                            fill: ['rgba(255,0,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '873px', '680px']
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
            "btn_start": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '950px', '694px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '950px', '694px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("R6_edgeActions.js");
})("EDGE-301496212");
