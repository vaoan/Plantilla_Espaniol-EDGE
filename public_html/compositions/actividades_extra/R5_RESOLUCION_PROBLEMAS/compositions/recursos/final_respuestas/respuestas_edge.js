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
                            id: 'contenedorrespuestas',
                            symbolName: 'contenedorrespuestas',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.5','0.5']]
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
                            "eid7",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${contenedorrespuestas}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid10",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(255,255,255,0.00)',
                            'rgba(255,255,255,0.00)'
                        ],
                        [
                            "eid9",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${contenedorrespuestas}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${contenedorrespuestas}",
                            '0.5',
                            '1'
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
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(79,45,110,0.00)']
                        },
                        {
                            rect: ['893px', '297px', '668px', '101px', 'auto', 'auto'],
                            textStyle: ['', '', '98px', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            id: 'texto_1',
                            text: '<p style=\"margin: 0px;\">Joven gordo</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['893px', '398px', '668px', '95px', 'auto', 'auto'],
                            textStyle: ['', '', '98px', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            id: 'texto_6',
                            text: '<p style=\"margin: 0px;\">Gobernante tranquila<br></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['893px', '493px', '668px', '100px', 'auto', 'auto'],
                            textStyle: ['', '', '98px', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            id: 'texto_7',
                            text: '<p style=\"margin: 0px;\">Cantante rubio</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['893px', '593px', '668px', '86px', 'auto', 'auto'],
                            textStyle: ['', '', '98px', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            id: 'texto_8',
                            text: '<p style=\"margin: 0px;\">​Estudiante divertida<br></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['779px', '327px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Numero1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['-38px', '7px', '124px', '50px', 'auto', 'auto'],
                                textStyle: ['', '', '30px', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                                id: 'texto_2',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">1</span></p>',
                                align: 'center',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['779px', '425px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Numero1Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['-38px', '7px', '124px', '50px', 'auto', 'auto'],
                                textStyle: ['', '', '30px', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                                id: 'texto_3',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">2</span></p>',
                                align: 'center',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['779px', '525px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Numero1Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['-38px', '7px', '124px', '50px', 'auto', 'auto'],
                                textStyle: ['', '', '30px', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                                id: 'texto_4',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">3</span></p>',
                                align: 'center',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['779px', '627px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Numero1Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['-38px', '7px', '124px', '50px', 'auto', 'auto'],
                                textStyle: ['', '', '30px', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                                id: 'texto_5',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">4</span></p>',
                                align: 'center',
                                type: 'text'
                            }]
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
