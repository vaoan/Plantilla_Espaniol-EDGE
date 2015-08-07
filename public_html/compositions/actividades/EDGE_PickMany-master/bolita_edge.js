/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"interactionUtilities.js",
            js+"jquery-1.10.2.js",
            js+"pickManyUtilities.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'PICK_1',
                            symbolName: 'PICK_1',
                            type: 'rect',
                            rect: ['246px', '221px', '54', '54', 'auto', 'auto'],
                            transform: [[],[],[],['5.72222','5.72222']]
                        },
                        {
                            id: 'PICK_2',
                            symbolName: 'PICK_2',
                            type: 'rect',
                            rect: ['625px', '381px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['5.9537','5.9537']]
                        },
                        {
                            id: 'PICK_3',
                            symbolName: 'PICK_3',
                            type: 'rect',
                            rect: ['1060px', '220px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['5.72222','5.72222']]
                        },
                        {
                            id: 'PICK_4',
                            symbolName: 'PICK_4',
                            type: 'rect',
                            rect: ['1468px', '386px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['6.09259','6.09259']]
                        },
                        {
                            id: 'Submit',
                            symbolName: 'Submit',
                            type: 'rect',
                            rect: ['1478px', '662px', '128', '31', 'auto', 'auto'],
                            transform: [[],[],[],['2.85484','2.85484']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1838px', '785px', 'auto', 'auto'],
                            sizeRange: ['0%','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid79",
                            "left",
                            500,
                            0,
                            "linear",
                            "${PICK_4}",
                            '1468px',
                            '1468px'
                        ],
                        [
                            "eid67",
                            "scaleX",
                            500,
                            0,
                            "linear",
                            "${Submit}",
                            '2.85484',
                            '2.85484'
                        ],
                        [
                            "eid74",
                            "top",
                            500,
                            0,
                            "linear",
                            "${PICK_3}",
                            '220px',
                            '220px'
                        ],
                        [
                            "eid77",
                            "top",
                            500,
                            0,
                            "linear",
                            "${PICK_1}",
                            '221px',
                            '221px'
                        ],
                        [
                            "eid43",
                            "scaleX",
                            500,
                            0,
                            "linear",
                            "${PICK_1}",
                            '5.72222',
                            '5.72222'
                        ],
                        [
                            "eid44",
                            "scaleY",
                            500,
                            0,
                            "linear",
                            "${PICK_1}",
                            '5.72222',
                            '5.72222'
                        ],
                        [
                            "eid78",
                            "top",
                            500,
                            0,
                            "linear",
                            "${PICK_4}",
                            '386px',
                            '386px'
                        ],
                        [
                            "eid66",
                            "left",
                            500,
                            0,
                            "linear",
                            "${PICK_1}",
                            '246px',
                            '246px'
                        ],
                        [
                            "eid72",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Submit}",
                            '662px',
                            '662px'
                        ],
                        [
                            "eid57",
                            "scaleX",
                            500,
                            0,
                            "linear",
                            "${PICK_4}",
                            '6.09259',
                            '6.09259'
                        ],
                        [
                            "eid51",
                            "scaleX",
                            500,
                            0,
                            "linear",
                            "${PICK_3}",
                            '5.72222',
                            '5.72222'
                        ],
                        [
                            "eid52",
                            "scaleY",
                            500,
                            0,
                            "linear",
                            "${PICK_3}",
                            '5.72222',
                            '5.72222'
                        ],
                        [
                            "eid58",
                            "scaleY",
                            500,
                            0,
                            "linear",
                            "${PICK_4}",
                            '6.09259',
                            '6.09259'
                        ],
                        [
                            "eid68",
                            "scaleY",
                            500,
                            0,
                            "linear",
                            "${Submit}",
                            '2.85484',
                            '2.85484'
                        ],
                        [
                            "eid71",
                            "left",
                            500,
                            0,
                            "linear",
                            "${Submit}",
                            '1478px',
                            '1478px'
                        ],
                        [
                            "eid73",
                            "left",
                            500,
                            0,
                            "linear",
                            "${PICK_3}",
                            '1060px',
                            '1060px'
                        ]
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
                            rect: ['0px', '0px', '54px', '54px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(254,37,247,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '54px', '54px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250
                    },
                    data: [
                        [
                            "eid23",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(254,37,247,1.00)',
                            'rgba(37,254,50,1.00)'
                        ],
                        [
                            "eid25",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(37,254,50,1)',
                            'rgba(254,37,247,1.00)'
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
                            rect: ['0px', '0px', '54px', '54px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '54px', '54px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250
                    },
                    data: [
                        [
                            "eid23",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(255,0,0,1.00)',
                            'rgba(37,254,50,1.00)'
                        ],
                        [
                            "eid25",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(37,254,50,1)',
                            'rgba(255,0,0,1.00)'
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
                            rect: ['0px', '0px', '54px', '54px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,151,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '54px', '54px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250
                    },
                    data: [
                        [
                            "eid23",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(255,151,0,1.00)',
                            'rgba(37,254,50,1.00)'
                        ],
                        [
                            "eid25",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(37,254,50,1)',
                            'rgba(255,151,0,1.00)'
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
                            rect: ['0px', '0px', '54px', '54px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(0,191,197,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '54px', '54px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250
                    },
                    data: [
                        [
                            "eid23",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(0,191,197,1.00)',
                            'rgba(37,254,50,1.00)'
                        ],
                        [
                            "eid25",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(37,254,50,1)',
                            'rgba(0,191,197,1.00)'
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
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '128px', '31px', 'auto', 'auto'],
                            fill: ['rgba(241,248,33,1.00)']
                        },
                        {
                            rect: ['9px', '3px', '112px', '20px', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​otro botón</p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '128px', '31px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("bolita_edgeActions.js");
})("EDGE-17298671");
