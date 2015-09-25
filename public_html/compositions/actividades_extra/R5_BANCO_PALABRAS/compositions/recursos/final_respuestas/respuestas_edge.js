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
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['499px', '196px', '108px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(216,168,168,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1.00)']
                        },
                        {
                            rect: ['1306px', '209px', '120px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRectCopy3',
                            stroke: [0, 'rgba(216,168,168,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1.00)']
                        },
                        {
                            rect: ['1444px', '208px', '168px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRectCopy4',
                            stroke: [0, 'rgba(216,168,168,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1.00)']
                        },
                        {
                            rect: ['1324px', '484px', '138px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRectCopy5',
                            stroke: [0, 'rgba(216,168,168,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1.00)']
                        },
                        {
                            rect: ['1503px', '479px', '178px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRectCopy6',
                            stroke: [0, 'rgba(216,168,168,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1.00)']
                        },
                        {
                            rect: ['540px', '198px', '34px', '32px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(251, 239, 239);\">es</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['554px', '503px', '151px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRectCopy',
                            stroke: [0, 'rgba(216,168,168,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1.00)']
                        },
                        {
                            rect: ['621px', '198px', '120px', '30px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'texto_4',
                            text: '<p style=\"margin: 0px;\">&nbsp;rubio</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['454px', '198px', '85px', '30px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'texto_3',
                            text: '<p style=\"margin: 0px;\">&nbsp;Él</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['199px', '134px', '205px', '193px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'rubio',
                            transform: [[], [], [], ['0.92', '0.92']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/rubio.png', '0px', '0px']
                        },
                        {
                            rect: ['202px', '136px', '189px', '179px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'contorno_1',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['208px', '441px', '188px', '166px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'colombianos',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/colombianos.png', '0px', '0px']
                        },
                        {
                            rect: ['202px', '435px', '189px', '168px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'contorno_2',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['958px', '136px', '199px', '189px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'indio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/indio.png', '0px', '0px']
                        },
                        {
                            rect: ['953px', '129px', '200px', '192px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'contorno_3',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['963px', '400px', '202px', '192px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'contorno_4',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['967px', '409px', '200px', '187px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'brasilera',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/brasilera.png', '0px', '0px']
                        },
                        {
                            rect: ['429px', '508px', '116px', '30px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'texto_4Copy2',
                            text: '<p style=\"margin: 0px;\">Nosotros</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['582px', '505px', '85px', '30px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text2',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(245, 233, 233);\">somos</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['718px', '503px', '178px', '41px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRectCopy2',
                            stroke: [0, 'rgba(216,168,168,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1.00)']
                        },
                        {
                            rect: ['728px', '504px', '159px', '32px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(248, 235, 235);\">colombianos</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['1249px', '208px', '77px', '40px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'texto_3Copy2',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">Tú</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['1243px', '486px', '77px', '40px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'texto_3Copy3',
                            text: '<p style=\"margin: 0px;\">​Ella</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['1337px', '212px', '66px', '30px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text4',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(243, 234, 234);\">eres</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['1487px', '212px', '85px', '32px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text5',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(249, 242, 242);\">Uitoto</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['1358px', '484px', '66px', '32px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text6',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(244, 240, 240);\">es</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['1537px', '483px', '108px', '32px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text6Copy',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(249, 239, 239);\">brasilera</span></p>',
                            align: 'left',
                            type: 'text'
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
