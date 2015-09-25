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
            js+"jquery-1.10.2.js",
            js+"main.js",
            js+"bootstrap-select.js",
            js+"bootstrap.min.js"
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
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['81px', '58px', '236px', '36px', 'auto', 'auto'],
                            borderRadius: ["5px", "5px", "5px", "5px 5px"],
                            fill: ["rgba(38,38,224,0.00)"],
                            stroke: [2,"rgba(79,45,110,1.00)","solid"]
                        },
                        {
                            id: 'RoundRectCopy2',
                            type: 'rect',
                            rect: ['1251px', '58px', '236px', '36px', 'auto', 'auto'],
                            borderRadius: ["5px", "5px", "5px", "5px 5px"],
                            fill: ["rgba(38,38,224,0.00)"],
                            stroke: [2,"rgba(79,45,110,1.00)","solid"]
                        },
                        {
                            id: 'RoundRectCopy',
                            type: 'rect',
                            rect: ['603px', '58px', '236px', '36px', 'auto', 'auto'],
                            borderRadius: ["5px", "5px", "5px", "5px 5px"],
                            fill: ["rgba(38,38,224,0.00)"],
                            stroke: [2,"rgba(79,45,110,1.00)","solid"]
                        },
                        {
                            id: 'text_1',
                            symbolName: 'text_1',
                            type: 'rect',
                            rect: ['-268px', '9px', '1010', '170', 'auto', 'auto'],
                            transform: [[],[],[],['0.29593','0.35294']]
                        },
                        {
                            id: 'text_2',
                            symbolName: 'text_2',
                            type: 'rect',
                            rect: ['254px', '9px', '1010', '170', 'auto', 'auto'],
                            transform: [[],[],[],['0.29604','0.35294']]
                        },
                        {
                            id: 'text_3',
                            symbolName: 'text_3',
                            type: 'rect',
                            rect: ['902px', '9px', '1010', '170', 'auto', 'auto'],
                            transform: [[],[],[],['0.29604','0.35294']]
                        },
                        {
                            id: 'btn_submit',
                            symbolName: 'btn_submit',
                            type: 'rect',
                            rect: ['719px', '463px', '256', '237', 'auto', 'auto']
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
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "text_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1010px', '170px']
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
            "text_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1010px', '170px']
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
            "text_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1010px', '170px']
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
            "btn_submit": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '256px', '237px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '256px', '237px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("actividad-filling_selects_edgeActions.js");
})("EDGE-14164065");
