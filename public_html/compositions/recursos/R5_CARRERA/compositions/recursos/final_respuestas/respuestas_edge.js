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
                            type: 'image',
                            borderRadius: ['15px', '15px', '15px', '15px 15px'],
                            id: 'jefe',
                            rect: ['508px', '183px', '250px', '250px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/jefe.png', '0px', '0px']
                        },
                        {
                            rect: ['508px', '393px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '18px 18px', '18px 18px'],
                            id: 'RectangleCopy5',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(79,45,110,1.00)']
                        },
                        {
                            rect: ['508px', '183px', '240px', '240px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'contorno_televisorCopy6',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'image',
                            borderRadius: ['15px', '15px', '15px', '15px 15px'],
                            id: 'plaza',
                            rect: ['835px', '183px', '250px', '250px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/plaza.png', '0px', '0px']
                        },
                        {
                            rect: ['835px', '183px', '240px', '240px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'contorno_televisorCopy7',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['835px', '393px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '18px 18px', '18px 18px'],
                            id: 'RectangleCopy6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(79,45,110,1.00)']
                        },
                        {
                            type: 'image',
                            borderRadius: ['15px', '15px', '15px', '15px 15px'],
                            id: 'iglesias',
                            rect: ['1162px', '183px', '250px', '250px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/iglesias.png', '0px', '0px']
                        },
                        {
                            rect: ['1162px', '393px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '18px 18px', '18px 18px'],
                            id: 'RectangleCopy7',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(79,45,110,1.00)']
                        },
                        {
                            rect: ['1162px', '183px', '240px', '240px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'contorno_televisorCopy8',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'image',
                            borderRadius: ['15px', '15px', '15px', '15px 15px'],
                            id: 'hospital',
                            rect: ['1007px', '515px', '250px', '250px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/hospital.png', '0px', '0px']
                        },
                        {
                            rect: ['1007px', '725px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '18px 18px', '18px 18px'],
                            id: 'RectangleCopy9',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(79,45,110,1.00)']
                        },
                        {
                            rect: ['1007px', '515px', '240px', '240px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'contorno_televisorCopy9',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'image',
                            borderRadius: ['15px', '15px', '15px', '15px 15px'],
                            id: 'caminos',
                            rect: ['663px', '515px', '250px', '250px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/caminos.png', '0px', '0px']
                        },
                        {
                            rect: ['663px', '515px', '240px', '240px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'contorno_televisorCopy5',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['663px', '725px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '18px 18px', '18px 18px'],
                            id: 'RectangleCopy8',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(79,45,110,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ['rgba(79,45,110,0.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'TextCopy9',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">jefe</span></p>',
                            type: 'text',
                            rect: ['551px', '393px', '165px', '40px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'TextCopy8',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">plaza</span></p>',
                            type: 'text',
                            rect: ['878px', '393px', '165px', '40px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'TextCopy7',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">iglesias</span></p>',
                            type: 'text',
                            rect: ['1205px', '393px', '165px', '40px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'TextCopy6',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">hospital</span></p>',
                            type: 'text',
                            rect: ['1050px', '725px', '165px', '40px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'TextCopy5',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">caminos</span></p>',
                            type: 'text',
                            rect: ['706px', '725px', '165px', '40px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '1080px']
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
