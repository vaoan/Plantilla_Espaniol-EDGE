/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src="http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js"></script>'        },
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
                            id: 'contacce',
                            type: 'rect',
                            rect: ['193px', '207px', '1550px', '769px', 'auto', 'auto'],
                            overflow: 'scroll',
                            borderRadius: ["0px", "0px", "15px 15px", "15px 15px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            c: [
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['0px', '-1px', '1550px', '59px', 'auto', 'auto'],
                                fill: ["rgba(115,74,138,1.00)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'subtitulo1',
                                type: 'text',
                                rect: ['59px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Resultado de aprendizaje</p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [30.08, "px"], "rgba(255,255,255,1)", "600", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'RectangleCopy',
                                type: 'rect',
                                rect: ['0px', '205px', '1550px', '59px', 'auto', 'auto'],
                                fill: ["rgba(115,74,138,1.00)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'subtitulo2',
                                type: 'text',
                                rect: ['59px', '214px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​ El género gramatical&nbsp;</p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(255,255,255,1)", "600", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text3Copy',
                                type: 'text',
                                rect: ['59px', '314px', '1428px', '95px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Las palabras en español pueden ser masculinas y femeninas. Cuando los seres son animados suelen tener una misma forma con sufijos –o(masculino) y –a (femenino) según el sexo de la entidad así:</p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text3Copy2',
                                type: 'text',
                                rect: ['59px', '713px', '1428px', '205px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​O pueden tener una forma específica para cada uno:</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">&nbsp;hombre/mujer, caballo/yegua, yerno/nuera</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Si se trata de entidades inanimadas, lo normal es que sea, exclusivamente femenino o solo masculino.</p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'PAObj5',
                                type: 'image',
                                rect: ['311px', '440px', '930px', '230px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"PAObj5.jpg",'0px','0px']
                            },
                            {
                                id: 'Text3',
                                type: 'text',
                                rect: ['59px', '96px', '1428px', '38px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Identificar los elementos morfológicos más simples de la gramática española.&nbsp;</p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['193px', '70px', '1550px', '137px', 'auto', 'auto'],
                            borderRadius: ["15px 15px", "15px 15px", "0px 0px", "0px 0px"],
                            fill: ["rgba(255,255,255,1)",[270,[['rgba(62,35,86,1.00)',0],['rgba(76,44,109,1.00)',100]]]],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['343px', '92px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Punto de aprendizaje</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [70, "px"], "rgba(255,255,255,1)", "600", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'cerrar_punto',
                            symbolName: 'cerrar_punto',
                            type: 'rect',
                            rect: ['1636', '100', '76', '77', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'RoundRect3Copy3',
                            type: 'rect',
                            rect: ['193px', '959px', '1550px', '30px', 'auto', 'auto'],
                            borderRadius: ["0px 0px", "0px 0px", "15px 15px", "15px 15px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['224px', '95px', '90px', '90px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'btn_puntoaprendizaje',
                            type: 'image',
                            rect: ['169px', '40px', '200px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"btn_puntoaprendizaje.png",'0px','0px'],
                            transform: [[],[],[],['0.4','0.4']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1920px', '1080px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,126,126,0.00)"]
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
            "cerrar_punto": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-38px', '-38px', '151px', '153px', 'auto', 'auto'],
                            id: 'cerrar',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '76px', '77px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("puntoaprendizaje_edgeActions.js");
})("EDGE-30791306");
