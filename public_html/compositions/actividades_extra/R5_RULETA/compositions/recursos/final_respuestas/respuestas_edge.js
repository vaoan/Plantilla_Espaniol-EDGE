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
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['218px', '203px', '1484px', '620px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(195,179,209,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RoundRect2Copy4',
                            type: 'rect',
                            rect: ['1350px', '237px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect2Copy3',
                            type: 'rect',
                            rect: ['1350px', '336px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect2Copy2',
                            type: 'rect',
                            rect: ['1350px', '436px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect2Copy',
                            type: 'rect',
                            rect: ['1350px', '535px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect2',
                            type: 'rect',
                            rect: ['1350px', '635px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'texto_1',
                            type: 'text',
                            rect: ['398px', '228px', '952px', '475px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​¿Con cuál consonante inicia la palabra?&nbsp;&nbsp;</p><p style=\"margin: 0px;\">​¿Cuál es la última vocal de la palabra?</p><p style=\"margin: 0px;\">​¿Cuál es la primera consonante en la palabra?</p><p style=\"margin: 0px;\">​¿Cuál es la primera vocal de la palabra?</p><p style=\"margin: 0px;\">​¿Cuál es la última consonante de la palabra?</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(51,51,51,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "98px", "", "none"]
                        },
                        {
                            id: 'Numero1Copy4',
                            type: 'ellipse',
                            rect: ['310px', '259px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [1,"rgba(79,45,110,1.00)","solid"],
                            c: [
                            {
                                id: 'texto_2',
                                type: 'text',
                                rect: ['-30px', '0px', '109px', '50px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">1</span></p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [24, "px"], "rgba(255,255,255,1.00)", "700", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "47px", "", "none"]
                            }]
                        },
                        {
                            id: 'Numero1Copy3',
                            type: 'ellipse',
                            rect: ['310px', '357px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [1,"rgba(79,45,110,1.00)","solid"],
                            c: [
                            {
                                id: 'texto_3',
                                type: 'text',
                                rect: ['-30px', '0px', '109px', '50px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">2</span></p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [24, "px"], "rgba(255,255,255,1.00)", "700", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "47px", "", "none"]
                            }]
                        },
                        {
                            id: 'Numero1Copy2',
                            type: 'ellipse',
                            rect: ['310px', '457px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [1,"rgba(79,45,110,1.00)","solid"],
                            c: [
                            {
                                id: 'texto_4',
                                type: 'text',
                                rect: ['-30px', '0px', '109px', '50px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">3</span></p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [24, "px"], "rgba(255,255,255,1.00)", "700", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "47px", "", "none"]
                            }]
                        },
                        {
                            id: 'Numero1Copy',
                            type: 'ellipse',
                            rect: ['310px', '559px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [1,"rgba(79,45,110,1.00)","solid"],
                            c: [
                            {
                                id: 'texto_5',
                                type: 'text',
                                rect: ['-30px', '0px', '109px', '50px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">4</span></p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [24, "px"], "rgba(255,255,255,1.00)", "700", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "47px", "", "none"]
                            }]
                        },
                        {
                            id: 'Numero1',
                            type: 'ellipse',
                            rect: ['310px', '652px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [1,"rgba(79,45,110,1.00)","solid"],
                            c: [
                            {
                                id: 'texto_6',
                                type: 'text',
                                rect: ['-30px', '0px', '109px', '50px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">5</p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(255,255,255,1.00)", "700", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "47px", "", "none"]
                            }]
                        },
                        {
                            id: 'texto_7',
                            type: 'text',
                            rect: ['1350px', '237px', '80px', '478px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">p</p><p style=\"margin: 0px;\">​o</p><p style=\"margin: 0px;\">​s</p><p style=\"margin: 0px;\">​e</p><p style=\"margin: 0px;\">​n</p>",
                            align: "center",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "98px", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid10",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(255,255,255,0.00)',
                            'rgba(255,255,255,0.00)'
                        ]
                    ]
                }
            },
            "contenedorrespuestas": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['218px', '203px', '1484px', '620px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(195,179,209,1.00)']
                        },
                        {
                            rect: ['1350px', '237px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['1350px', '336px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['1350px', '436px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['1350px', '535px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['1350px', '635px', '80px', '80px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['398px', '228px', '952px', '475px', 'auto', 'auto'],
                            textStyle: ['', '', '98px', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(51,51,51,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            id: 'texto_1',
                            text: '<p style=\"margin: 0px;\">​¿Con cuál consonante inicia la palabra?&nbsp;&nbsp;</p><p style=\"margin: 0px;\">​¿Cuál es la última vocal de la palabra?</p><p style=\"margin: 0px;\">​¿Cuál es la primera consonante en la palabra?</p><p style=\"margin: 0px;\">​¿Cuál es la primera vocal de la palabra?</p><p style=\"margin: 0px;\">​¿Cuál es la última consonante de la palabra?</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['310px', '259px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Numero1',
                            stroke: [1, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['-30px', '0px', '109px', '50px', 'auto', 'auto'],
                                textStyle: ['', '', '47px', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                                id: 'texto_2',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">1</span></p>',
                                align: 'center',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['310px', '357px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Numero1Copy',
                            stroke: [1, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['-30px', '0px', '109px', '50px', 'auto', 'auto'],
                                textStyle: ['', '', '47px', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                                id: 'texto_3',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">2</span></p>',
                                align: 'center',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['310px', '457px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Numero1Copy2',
                            stroke: [1, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['-30px', '0px', '109px', '50px', 'auto', 'auto'],
                                textStyle: ['', '', '47px', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                                id: 'texto_4',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">3</span></p>',
                                align: 'center',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['310px', '559px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Numero1Copy3',
                            stroke: [1, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['-30px', '0px', '109px', '50px', 'auto', 'auto'],
                                textStyle: ['', '', '47px', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                                id: 'texto_5',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">4</span></p>',
                                align: 'center',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['310px', '652px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Numero1Copy4',
                            stroke: [1, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['-30px', '0px', '109px', '50px', 'auto', 'auto'],
                                textStyle: ['', '', '47px', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                                id: 'texto_6',
                                text: '<p style=\"margin: 0px;\">5</p>',
                                align: 'center',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['1350px', '237px', '80px', '478px', 'auto', 'auto'],
                            textStyle: ['', '', '98px', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '600', 'none', 'normal', 'break-word', ''],
                            id: 'texto_7',
                            text: '<p style=\"margin: 0px;\">p</p><p style=\"margin: 0px;\">​o</p><p style=\"margin: 0px;\">​s</p><p style=\"margin: 0px;\">​e</p><p style=\"margin: 0px;\">​n</p>',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1920px', '1080px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("respuestas_edgeActions.js");
})("EDGE-25832383");
