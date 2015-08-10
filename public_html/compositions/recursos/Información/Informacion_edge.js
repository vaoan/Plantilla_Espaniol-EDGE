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
                            id: 'Fondo_gris',
                            type: 'rect',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0.44)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'Banner_informacion',
                            type: 'group',
                            rect: ['193', '32', '1534', '96', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Fondo_blanco',
                                type: 'rect',
                                rect: ['0px', '20px', '1534px', '293px', 'auto', 'auto'],
                                borderRadius: ["0px", "0px", "17px 17px", "17px 17px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"],
                                boxShadow: ["", 3, 3, 22, 5, "rgba(0,0,0,0.65098)"]
                            },
                            {
                                id: 'Text3',
                                type: 'text',
                                rect: ['349px', '210px', '860px', '23px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Copyright&nbsp;© SENA 2015.</p><p style=\"margin: 0px;\">​Licenciado para Colombia por el Servicio Nacional de Aprendizaje SENA.</p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [22, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "40px", "", "none"]
                            },
                            {
                                id: 'fondo_morado',
                                type: 'rect',
                                rect: ['0px', '0px', '1534px', '96px', 'auto', 'auto'],
                                borderRadius: ["15px 15px", "15px 15px", "0px 0px", "0px 0px"],
                                fill: ["rgba(255,255,255,1)",[270,[['rgba(62,35,86,1.00)',0],['rgba(76,44,109,1.00)',100]]]],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'Texto_informacion',
                                type: 'text',
                                rect: ['79px', '18px', '316px', '54px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-family: source-sans-pro, sans-serif; font-weight: 700; font-size: 51px;\">Información</span></p>",
                                font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'informacion',
                                type: 'image',
                                rect: ['16px', '20px', '54px', '50px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"informacion.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'btn_cerrar_informacion',
                            symbolName: 'btn_cerrar_creditos',
                            type: 'rect',
                            rect: ['1643px', '49px', '50', '50', 'auto', 'auto'],
                            cursor: 'pointer'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
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
            "btn_cerrar_creditos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['7px', '5px', '37', '40', 'auto', 'auto'],
                            id: 'Btn_cerrar',
                            type: 'group',
                            c: [
                            {
                                rect: ['-7px', '-5px', '50px', '50px', 'auto', 'auto'],
                                id: 'btn_cerrar',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/btn_cerrar.png', '0px', '0px']
                            },
                            {
                                transform: [[], ['-42'], [], ['1.03', '0.95']],
                                rect: ['15px', '-3px', '8px', '46px', 'auto', 'auto'],
                                id: 'Rectangle2',
                                stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                transform: [[], ['-138'], [], ['1.03', '0.95']],
                                rect: ['15px', '-3px', '8px', '46px', 'auto', 'auto'],
                                id: 'Rectangle2Copy',
                                stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '50px', '50px']
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
})("EDGE-13904317");
