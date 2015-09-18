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
		js+"jquery-1.11.3.min.js",
		js+"zoomUtilities.js"
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
                            rect: ['0', '0', '1830', '780', 'auto', 'auto']
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
                        ],
                        [
                            "eid11",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Stage}",
                            '1830px',
                            '1830px'
                        ],
                        [
                            "eid12",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Stage}",
                            '780px',
                            '780px'
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
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)'],
                            c: [
                            {
                                rect: ['447px', '79px', '240px', '240px', 'auto', 'auto'],
                                borderRadius: ['10px', '10px', '10px', '10px'],
                                overflow: 'hidden',
                                id: 'conburro',
                                stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,0.00)'],
                                c: [
                                {
                                    rect: ['-49px', '-10px', '300px', '300px', 'auto', 'auto'],
                                    id: 'burro',
                                    fill: ['rgba(0,0,0,0)', 'images/burro.png', '0px', '0px'],
                                    type: 'image',
                                    tag: 'img'
                                }]
                            },
                            {
                                rect: ['774px', '79px', '240px', '240px', 'auto', 'auto'],
                                borderRadius: ['10px', '10px', '10px', '10px'],
                                overflow: 'hidden',
                                id: 'contmesa',
                                stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,0.00)'],
                                c: [
                                {
                                    rect: ['-30px', '-30px', '300px', '300px', 'auto', 'auto'],
                                    id: 'mesa',
                                    fill: ['rgba(0,0,0,0)', 'images/mesa.png', '0px', '0px'],
                                    type: 'image',
                                    tag: 'img'
                                }]
                            },
                            {
                                rect: ['1101px', '79px', '240px', '240px', 'auto', 'auto'],
                                borderRadius: ['10px', '10px', '10px', '10px'],
                                overflow: 'hidden',
                                id: 'contuva',
                                stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,0.00)'],
                                c: [
                                {
                                    rect: ['-29px', '-30px', '300px', '300px', 'auto', 'auto'],
                                    id: 'uva',
                                    fill: ['rgba(0,0,0,0)', 'images/uva.png', '0px', '0px'],
                                    type: 'image',
                                    tag: 'img'
                                }]
                            },
                            {
                                rect: ['946px', '411px', '240px', '240px', 'auto', 'auto'],
                                borderRadius: ['10px', '10px', '10px', '10px'],
                                overflow: 'hidden',
                                id: 'contdedo',
                                stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,0.00)'],
                                c: [
                                {
                                    rect: ['-30px', '-30px', '300px', '300px', 'auto', 'auto'],
                                    id: 'dedo',
                                    fill: ['rgba(0,0,0,0)', 'images/dedo.png', '0px', '0px'],
                                    type: 'image',
                                    tag: 'img'
                                }]
                            },
                            {
                                rect: ['602px', '411px', '240px', '240px', 'auto', 'auto'],
                                borderRadius: ['10px', '10px', '10px', '10px'],
                                overflow: 'hidden',
                                id: 'contfaro',
                                stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,0.00)'],
                                c: [
                                {
                                    rect: ['-47px', '-22px', '300px', '300px', 'auto', 'auto'],
                                    id: 'faro',
                                    fill: ['rgba(0,0,0,0)', 'images/faro.png', '0px', '0px'],
                                    type: 'image',
                                    tag: 'img'
                                }]
                            },
                            {
                                rect: ['447px', '289px', '250px', '40px', 'auto', 'auto'],
                                borderRadius: ['0px', '0px', '18px 18px', '18px 18px'],
                                id: 'RectangleCopy4',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1.00)']
                            },
                            {
                                rect: ['602px', '621px', '250px', '40px', 'auto', 'auto'],
                                borderRadius: ['0px', '0px', '18px 18px', '18px 18px'],
                                id: 'RectangleCopy3',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1.00)']
                            },
                            {
                                rect: ['946px', '621px', '250px', '40px', 'auto', 'auto'],
                                borderRadius: ['0px', '0px', '18px 18px', '18px 18px'],
                                id: 'RectangleCopy2',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1.00)']
                            },
                            {
                                rect: ['774px', '289px', '250px', '40px', 'auto', 'auto'],
                                borderRadius: ['0px', '0px', '18px 18px', '18px 18px'],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1.00)']
                            },
                            {
                                rect: ['1101px', '289px', '250px', '40px', 'auto', 'auto'],
                                borderRadius: ['0px', '0px', '18px 18px', '18px 18px'],
                                id: 'Rectangle',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1.00)']
                            },
                            {
                                rect: ['490px', '289px', '165px', '40px', 'auto', 'auto'],
                                id: 'txtburro',
                                text: '<p style=\"margin: 0px; text-align: center; color: rgb(255, 255, 255); font-family: source-sans-pro, sans-serif; font-size: 30px;\">Burro</p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text'
                            },
                            {
                                rect: ['817px', '289px', '165px', '40px', 'auto', 'auto'],
                                id: 'txtmesa',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">Mesa</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text'
                            },
                            {
                                rect: ['1144px', '289px', '165px', '40px', 'auto', 'auto'],
                                id: 'txtuva',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">Uva</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text'
                            },
                            {
                                rect: ['989px', '621px', '165px', '40px', 'auto', 'auto'],
                                id: 'txtdedo',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">dedo</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text'
                            },
                            {
                                rect: ['645px', '621px', '165px', '40px', 'auto', 'auto'],
                                id: 'txtfaro',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">Faro</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1830px', '780px']
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
