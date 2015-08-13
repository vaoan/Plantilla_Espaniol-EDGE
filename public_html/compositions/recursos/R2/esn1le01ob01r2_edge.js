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
                            id: 'Text2Copy2',
                            type: 'text',
                            rect: ['44px', '120px', '1763px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Observe atentamente el siguiente video que muestra la pronunciación de las vocales y las consonantes en el abecedario en español.</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2Copy',
                            type: 'text',
                            rect: ['44px', '156px', '1763px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Instrucción: haga clic en el botón reproducir para ver el video.</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "italic", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['44px', '30px', '1763px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​En español existen cinco vocales, estas son consideradas sonidos simples. Las consonantes, por su parte, son sonidos complejos porque obstruyen la salida del aire de distintas maneras, según la disposición de la boca. Todos los sonidos (vocales o consonantes) se representan a través de las letras, también llamadas grafemas.&nbsp;</p><p style=\"margin: 0px;\">​</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "30px", "", "none"]
                        },
                        {
                            id: 'signo_mas_que_1_VIOLETA',
                            type: 'image',
                            rect: ['16px', '129px', '18px', '18px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"signo%20mas%20que%201%20VIOLETA.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['497px', '345px', '864px', '140px', 'auto', 'auto'],
                            fill: ["rgba(109,59,140,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['660px', '390px', '511px', '79px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">ACÁ VA UN VIDEO</span></p>",
                            align: "center",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "italic", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1830px', '780px', 'auto', 'auto'],
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("esn1le01ob01r2_edgeActions.js");
})("EDGE-26455129");
