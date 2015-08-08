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
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['46px', '620px', '1821px', '278px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btn_empezar',
                            symbolName: 'btn_empezar',
                            type: 'rect',
                            rect: ['1640px', '689px', '169', '137', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],['3']]
                        },
                        {
                            id: 'precarga_gif',
                            type: 'image',
                            rect: ['1111px', '146px', '734px', '390px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"precarga_gif.gif",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['90px', '152px', '727px', '400px', 'auto', 'auto'],
                            fill: ["rgba(255,182,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '944px', 'auto', 'auto'],
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
            "btn_empezar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '169px', '137px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(132,47,189,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '169px', '137px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("R1_edgeActions.js");
})("EDGE-7659645");
