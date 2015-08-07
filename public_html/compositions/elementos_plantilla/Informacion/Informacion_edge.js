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
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'popup_informacion',
                            symbolName: 'popup_informacion',
                            type: 'rect',
                            rect: ['0', '0', '1118', '686', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1117px', '685px', 'auto', 'auto'],
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
            "titulo_banner": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1117px', '124px', 'auto', 'auto'],
                            id: 'barra_banner',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/barra_banner.png', '0px', '0px']
                        },
                        {
                            rect: ['24px', '23px', '77px', '77px', 'auto', 'auto'],
                            id: 'icono_informacion3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icono_informacion.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 50px; color: rgb(255, 255, 255); font-weight: 300;\">Información</span></p>',
                            rect: ['126px', '28px', '747px', '61px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1117px', '124px']
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
            "popup_informacion": {
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
                            id: 'ventana',
                            rect: ['0px', '0px', '1118px', '686px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ventana.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'titulo_banner',
                            symbolName: 'titulo_banner',
                            rect: ['1px', '0px', '1117', '124', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'falso_blanco',
                            rect: ['1px', '613px', '1117px', '72px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/falso_blanco.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'btn_cerrar',
                            symbolName: 'btn_cerrar',
                            cursor: 'pointer',
                            rect: ['1060', '12', '44', '44', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: source-sans-pro, sans-serif; color: rgb(0, 67, 95);\">copyright© SENA 2015.</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: source-sans-pro, sans-serif; color: rgb(0, 67, 95);\">Licenciado para colombia por el servicio Nacional de Aprendizaje del SENA</span></p>',
                            rect: ['57px', '577px', '1005px', '72px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1118px', '686px']
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
            "btn_cerrar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '44px', '44px', 'auto', 'auto'],
                            id: 'cerrar',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '44px', '44px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Informacion_edgeActions.js");
})("EDGE-24527128");
