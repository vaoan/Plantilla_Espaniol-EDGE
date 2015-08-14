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
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'medidor_examen-01',
                            type: 'image',
                            rect: ['637px', '253px', '555px', '274px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"medidor%20examen-01.png",'0px','0px']
                        },
                        {
                            id: 'medidor_examen-02',
                            type: 'image',
                            rect: ['716px', '506px', '198px', '27px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"medidor%20examen-02.png",'0px','0px']
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['857px', '462px', '115px', '115px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'text_percent',
                            symbolName: 'text_percent',
                            type: 'rect',
                            rect: ['869', '503', '91', '33', 'auto', 'auto']
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['808px', '47px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Resultado</p>",
                            align: "center",
                            font: ['source-sans-pro, sans-serif', [46, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
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
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid3",
                            "rotateZ",
                            0,
                            5000,
                            "linear",
                            "${medidor_examen-02}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid5",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${medidor_examen-02}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid186",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${medidor_examen-02}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid187",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${medidor_examen-02}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid188",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${medidor_examen-02}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid189",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${medidor_examen-02}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid190",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${medidor_examen-02}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid6",
                            "-webkit-transform-origin",
                            5000,
                            0,
                            "linear",
                            "${medidor_examen-02}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid191",
                            "-moz-transform-origin",
                            5000,
                            0,
                            "linear",
                            "${medidor_examen-02}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid192",
                            "-ms-transform-origin",
                            5000,
                            0,
                            "linear",
                            "${medidor_examen-02}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid193",
                            "msTransformOrigin",
                            5000,
                            0,
                            "linear",
                            "${medidor_examen-02}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid194",
                            "-o-transform-origin",
                            5000,
                            0,
                            "linear",
                            "${medidor_examen-02}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid195",
                            "transform-origin",
                            5000,
                            0,
                            "linear",
                            "${medidor_examen-02}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "txt_puntaje": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '60px', '33px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '600', 'none', '', 'break-word', ''],
                            id: 'Text',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif;\">100%</span></p>',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '60px', '28px']
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
            "text_percent": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '91px', '33px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '600', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-size: 30px;\">​</span>​<span style=\"font-size: 30px;\">​100%</span></p>',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '91px', '33px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("medidor_edgeActions.js");
})("EDGE-23573250");
