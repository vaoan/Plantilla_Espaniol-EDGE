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
                            id: 'contenedor_externo',
                            symbolName: 'contenedor_externo',
                            type: 'rect',
                            rect: ['0', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'ruleta',
                            symbolName: 'ruleta',
                            type: 'rect',
                            rect: ['135px', '253px', 'undefined', 'undefined', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1830px', '780px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.80)"]
                        }
                    }
                },
                timeline: {
                    duration: 9000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "ruleta": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '515px', '515px', 'auto', 'auto'],
                            id: 'wheel',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel.png', '0px', '0px']
                        },
                        {
                            rect: ['195px', '165px', '115px', '139px', 'auto', 'auto'],
                            id: 'wheel_pointer',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel_pointer.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '515px', '515px']
                        }
                    }
                },
                timeline: {
                    duration: 9000,
                    autoPlay: true,
                    labels: {
                        "giro01": 0,
                        "giro02": 1750,
                        "giro03": 3500,
                        "giro04": 5250,
                        "giro05": 7250
                    },
                    data: [
                        [
                            "eid191",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeInOutSine",
                            "${wheel}",
                            [49,49],
                            [49,49],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid25",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeInOutSine",
                            "${wheel}",
                            [49,49],
                            [49,49],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid26",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeInOutSine",
                            "${wheel}",
                            [49,49],
                            [49,49],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid27",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeInOutSine",
                            "${wheel}",
                            [49,49],
                            [49,49],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid28",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeInOutSine",
                            "${wheel}",
                            [49,49],
                            [49,49],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid29",
                            "transform-origin",
                            0,
                            0,
                            "easeInOutSine",
                            "${wheel}",
                            [49,49],
                            [49,49],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid10",
                            "rotateZ",
                            0,
                            1500,
                            "easeInOutSine",
                            "${wheel}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid288",
                            "rotateZ",
                            1750,
                            1500,
                            "easeInOutSine",
                            "${wheel}",
                            '0deg',
                            '452deg'
                        ],
                        [
                            "eid305",
                            "rotateZ",
                            3500,
                            1500,
                            "easeInOutSine",
                            "${wheel}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid347",
                            "rotateZ",
                            5250,
                            1750,
                            "easeInOutSine",
                            "${wheel}",
                            '0deg',
                            '405deg'
                        ],
                        [
                            "eid364",
                            "rotateZ",
                            7250,
                            1750,
                            "easeInOutSine",
                            "${wheel}",
                            '0deg',
                            '540deg'
                        ]
                    ]
                }
            },
            "contenedor_externo": {
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
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
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
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-24451848");
