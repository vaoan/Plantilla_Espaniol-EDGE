/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>',
            'sena_icon': '<link rel=\"stylesheet\" href=\"css/stylesheet.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.10.2.js",
            js+"EdgeCommons.js",
            js+"utility.js",
            js+"main.js",
            js+"timerUtilities.js",
            js+"actividades_result.js",
            js+"r6.js",
            js+"r6_puntaje.js",
            js+"zoomUtilities.js"
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
                            id: 'medidor_examen-01',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['638px', '253px', '555px', '274px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"medidor%20examen-01.png",'0px','0px']
                        },
                        {
                            id: 'medidor',
                            symbolName: 'medidor',
                            display: 'none',
                            type: 'rect',
                            rect: ['716px', '506', '198', '27', 'auto', 'auto']
                        },
                        {
                            id: 'Ellipse',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['857px', '462px', '115px', '115px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [1,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'text_percent',
                            symbolName: 'text_percent',
                            display: 'none',
                            type: 'rect',
                            rect: ['869px', '503', '91', '33', 'auto', 'auto']
                        },
                        {
                            id: 'texto_3',
                            display: 'none',
                            type: 'text',
                            rect: ['808px', '47px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Resultado</p>",
                            align: "center",
                            font: ['source-sans-pro, sans-serif', [46, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'R6_portada',
                            symbolName: 'R6_portada',
                            type: 'rect',
                            rect: ['0px', '0px', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'R6_1',
                            symbolName: 'R6_1',
                            type: 'rect',
                            rect: ['-1840px', '0px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.00064']]
                        },
                        {
                            id: 'R6_2',
                            symbolName: 'R6_2',
                            type: 'rect',
                            rect: ['1840px', '1px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.00064']]
                        },
                        {
                            id: 'R6_3',
                            symbolName: 'R6_3',
                            type: 'rect',
                            rect: ['1840px', '1px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.00064']]
                        },
                        {
                            id: 'R6_4',
                            symbolName: 'R6_4',
                            type: 'rect',
                            rect: ['1840px', '1px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.00064']]
                        },
                        {
                            id: 'R6_5',
                            symbolName: 'R6_5',
                            type: 'rect',
                            rect: ['1840px', '1px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.00064']]
                        },
                        {
                            id: 'Text',
                            display: 'none',
                            type: 'text',
                            rect: ['1564px', '675px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0.5',
                            text: "<p style=\"margin: 0px;\"><span style=\"font-family: sena_icon; font-size: 82px;\">5</span></p>",
                            align: "left",
                            font: ['sena_icon', [28, "px"], "rgba(106,55,137,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy2',
                            display: 'none',
                            type: 'text',
                            rect: ['1740px', '674px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\"><span style=\"font-family: sena_icon; font-size: 82px;\">Z</span></p>",
                            align: "left",
                            font: ['sena_icon', [28, "px"], "rgba(106,55,137,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2',
                            display: 'none',
                            type: 'text',
                            rect: ['1658px', '697px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif;\">1 de 5</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(106,55,137,1.00)", "700", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2Copy',
                            display: 'none',
                            type: 'text',
                            rect: ['1658px', '697px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​2<span style=\"font-family: source-sans-pro, sans-serif;\">&nbsp;de 5</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(106,55,137,1.00)", "700", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2Copy2',
                            display: 'none',
                            type: 'text',
                            rect: ['1658px', '697px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​3<span style=\"font-family: source-sans-pro, sans-serif;\">&nbsp;de 5</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(106,55,137,1)", "700", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2Copy3',
                            display: 'none',
                            type: 'text',
                            rect: ['1658px', '697px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​4<span style=\"font-family: source-sans-pro, sans-serif;\">&nbsp;de 5</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(106,55,137,1.00)", "700", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2Copy4',
                            display: 'none',
                            type: 'text',
                            rect: ['1658px', '697px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​5<span style=\"font-family: source-sans-pro, sans-serif;\">&nbsp;de 5</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(106,55,137,1.00)", "700", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Submit',
                            symbolName: 'r6_enviar',
                            display: 'none',
                            type: 'rect',
                            rect: ['1366px', '710', '165', '38', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'r6_siguiente',
                            symbolName: 'r6_siguiente',
                            type: 'rect',
                            rect: ['1759px', '690px', '50', '51', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.37951','1.75902']]
                        },
                        {
                            id: 'r6_atras',
                            symbolName: 'r6_atras',
                            display: 'none',
                            type: 'rect',
                            rect: ['1586px', '690px', '50', '51', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.37951','1.76502']]
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
                    duration: 8000,
                    autoPlay: true,
                    labels: {
                        "slide_1": 500,
                        "slide_2": 1000,
                        "slide_3": 1460,
                        "slide_4": 2000,
                        "slide_5": 2500,
                        "slide_final": 3000
                    },
                    data: [
                        [
                            "eid80",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Submit}",
                            'none',
                            'none'
                        ],
                        [
                            "eid81",
                            "display",
                            450,
                            0,
                            "linear",
                            "${Submit}",
                            'none',
                            'block'
                        ],
                        [
                            "eid82",
                            "display",
                            2550,
                            0,
                            "linear",
                            "${Submit}",
                            'block',
                            'none'
                        ],
                        [
                            "eid25",
                            "left",
                            0,
                            500,
                            "linear",
                            "${R6_1}",
                            '1840px',
                            '0px'
                        ],
                        [
                            "eid27",
                            "left",
                            500,
                            500,
                            "linear",
                            "${R6_1}",
                            '0px',
                            '-1840px'
                        ],
                        [
                            "eid224",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            'none',
                            'none'
                        ],
                        [
                            "eid229",
                            "display",
                            643,
                            0,
                            "linear",
                            "${Ellipse}",
                            'none',
                            'none'
                        ],
                        [
                            "eid254",
                            "display",
                            2905,
                            0,
                            "linear",
                            "${Ellipse}",
                            'none',
                            'block'
                        ],
                        [
                            "eid225",
                            "display",
                            0,
                            0,
                            "linear",
                            "${text_percent}",
                            'none',
                            'none'
                        ],
                        [
                            "eid230",
                            "display",
                            643,
                            0,
                            "linear",
                            "${text_percent}",
                            'none',
                            'none'
                        ],
                        [
                            "eid253",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${text_percent}",
                            'none',
                            'block'
                        ],
                        [
                            "eid223",
                            "display",
                            0,
                            0,
                            "linear",
                            "${medidor}",
                            'none',
                            'none'
                        ],
                        [
                            "eid228",
                            "display",
                            643,
                            0,
                            "linear",
                            "${medidor}",
                            'none',
                            'none'
                        ],
                        [
                            "eid255",
                            "display",
                            2905,
                            0,
                            "linear",
                            "${medidor}",
                            'none',
                            'block'
                        ],
                        [
                            "eid459",
                            "display",
                            1460,
                            0,
                            "linear",
                            "${Text2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid460",
                            "display",
                            1960,
                            0,
                            "linear",
                            "${Text2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid44",
                            "left",
                            500,
                            500,
                            "linear",
                            "${R6_2}",
                            '1840px',
                            '0px'
                        ],
                        [
                            "eid54",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${R6_2}",
                            '0px',
                            '-1840px'
                        ],
                        [
                            "eid499",
                            "opacity",
                            2000,
                            500,
                            "linear",
                            "${TextCopy2}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid219",
                            "-webkit-transform-origin",
                            3000,
                            0,
                            "linear",
                            "${medidor}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid512",
                            "-moz-transform-origin",
                            3000,
                            0,
                            "linear",
                            "${medidor}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid513",
                            "-ms-transform-origin",
                            3000,
                            0,
                            "linear",
                            "${medidor}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid514",
                            "msTransformOrigin",
                            3000,
                            0,
                            "linear",
                            "${medidor}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid515",
                            "-o-transform-origin",
                            3000,
                            0,
                            "linear",
                            "${medidor}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid516",
                            "transform-origin",
                            3000,
                            0,
                            "linear",
                            "${medidor}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid220",
                            "-webkit-transform-origin",
                            6750,
                            0,
                            "linear",
                            "${medidor}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid517",
                            "-moz-transform-origin",
                            6750,
                            0,
                            "linear",
                            "${medidor}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid518",
                            "-ms-transform-origin",
                            6750,
                            0,
                            "linear",
                            "${medidor}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid519",
                            "msTransformOrigin",
                            6750,
                            0,
                            "linear",
                            "${medidor}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid520",
                            "-o-transform-origin",
                            6750,
                            0,
                            "linear",
                            "${medidor}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid521",
                            "transform-origin",
                            6750,
                            0,
                            "linear",
                            "${medidor}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid496",
                            "opacity",
                            450,
                            550,
                            "linear",
                            "${Text}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid492",
                            "display",
                            450,
                            0,
                            "linear",
                            "${TextCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid500",
                            "display",
                            2550,
                            0,
                            "linear",
                            "${TextCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid468",
                            "display",
                            1960,
                            0,
                            "linear",
                            "${Text2Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid469",
                            "display",
                            2455,
                            0,
                            "linear",
                            "${Text2Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid470",
                            "display",
                            2455,
                            0,
                            "linear",
                            "${Text2Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid471",
                            "display",
                            2550,
                            0,
                            "linear",
                            "${Text2Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid221",
                            "rotateZ",
                            3000,
                            5000,
                            "linear",
                            "${medidor}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid457",
                            "display",
                            950,
                            0,
                            "linear",
                            "${Text2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid458",
                            "display",
                            1460,
                            0,
                            "linear",
                            "${Text2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid43",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${R6_3}",
                            '1840px',
                            '0px'
                        ],
                        [
                            "eid53",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${R6_3}",
                            '0px',
                            '-1840px'
                        ],
                        [
                            "eid42",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${R6_4}",
                            '1840px',
                            '0px'
                        ],
                        [
                            "eid52",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${R6_4}",
                            '0px',
                            '-1840px'
                        ],
                        [
                            "eid41",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${R6_5}",
                            '1840px',
                            '0px'
                        ],
                        [
                            "eid51",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${R6_5}",
                            '0px',
                            '-1840px'
                        ],
                        [
                            "eid222",
                            "display",
                            0,
                            0,
                            "linear",
                            "${medidor_examen-01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid227",
                            "display",
                            643,
                            0,
                            "linear",
                            "${medidor_examen-01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid256",
                            "display",
                            2905,
                            0,
                            "linear",
                            "${medidor_examen-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid456",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid452",
                            "display",
                            450,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid501",
                            "display",
                            2550,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid226",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid231",
                            "display",
                            643,
                            0,
                            "linear",
                            "${texto_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid252",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${texto_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid23",
                            "left",
                            0,
                            500,
                            "linear",
                            "${R6_portada}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid56",
                            "display",
                            0,
                            0,
                            "linear",
                            "${r6_atras}",
                            'none',
                            'none'
                        ],
                        [
                            "eid87",
                            "display",
                            950,
                            0,
                            "linear",
                            "${r6_atras}",
                            'none',
                            'block'
                        ],
                        [
                            "eid70",
                            "display",
                            2550,
                            0,
                            "linear",
                            "${r6_atras}",
                            'block',
                            'none'
                        ],
                        [
                            "eid455",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid451",
                            "display",
                            450,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid453",
                            "display",
                            950,
                            0,
                            "linear",
                            "${Text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid57",
                            "display",
                            0,
                            0,
                            "linear",
                            "${r6_siguiente}",
                            'none',
                            'none'
                        ],
                        [
                            "eid58",
                            "display",
                            450,
                            0,
                            "linear",
                            "${r6_siguiente}",
                            'none',
                            'block'
                        ],
                        [
                            "eid88",
                            "display",
                            2065,
                            0,
                            "linear",
                            "${r6_siguiente}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "R6_portada": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['37px', '29px', '563px', '749px', 'auto', 'auto'],
                            borderRadius: ['17px', '17px', '17px', '17px 17px'],
                            boxShadow: ['', 0, 0, 2, 2, 'rgba(147,148,142,1.00)'],
                            id: 'IMG_R6',
                            fill: ['rgba(0,0,0,0)', 'images/IMG_R62.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['632px', '386px', '1198px', '106px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'cont_1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(192,192,192,0.00)'],
                            c: [
                            {
                                type: 'image',
                                id: 'precarga_gif',
                                rect: ['509px', '52px', '161px', '12px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/precarga_gif.gif', '0px', '0px']
                            },
                            {
                                rect: ['422px', '33px', '335', '49', 'auto', 'auto'],
                                type: 'rect',
                                display: 'none',
                                symbolName: 'btn_evaluemos',
                                cursor: 'pointer',
                                id: 'btn_evaluemosCopy2'
                            }]
                        },
                        {
                            type: 'text',
                            id: 'texto_1_empuja_cont_1',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 700; color: rgb(51, 51, 51);\">Este test evalúa lo que ha aprendido en este objeto de aprendizaje.</span></p><p style=\"margin: 0px;\"><span style=\"font-family: source-sans-pro, sans-serif; color: rgb(51, 51, 51);\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-style: italic; font-family: source-sans-pro, sans-serif; color: rgb(51, 51, 51);\">Instrucciones:</span></p><p style=\"margin: 0px;\"><span style=\"font-style: italic; font-family: source-sans-pro, sans-serif; color: rgb(51, 51, 51);\">​</span></p><p style=\"margin: 0px; text-indent: 25px;\"><span style=\"font-style: italic; font-family: source-sans-pro, sans-serif; color: rgb(51, 51, 51);\">1. Lea cada pregunta cuidadosamente.</span></p><p style=\"margin: 0px; text-indent: 25px;\"><span style=\"font-style: italic; font-family: source-sans-pro, sans-serif; color: rgb(51, 51, 51);\">2. Responda todas las preguntas propuestas.</span></p><p style=\"margin: 0px; text-indent: 25px;\"><span style=\"font-style: italic; font-family: source-sans-pro, sans-serif; color: rgb(51, 51, 51);\">3. Envíe el test una sola vez.</span></p><p style=\"margin: 0px;\"><span style=\"font-family: source-sans-pro, sans-serif; color: rgb(51, 51, 51);\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-family: source-sans-pro, sans-serif; font-weight: 700; color: rgb(51, 51, 51);\">Recuerde:</span><span style=\"font-family: source-sans-pro, sans-serif; color: rgb(51, 51, 51);\"> cuando haga clic sobre </span><span style=\"font-family: source-sans-pro, sans-serif; font-weight: 800; color: rgb(51, 51, 51);\">Enviar</span><span style=\"font-family: source-sans-pro, sans-serif; color: rgb(51, 51, 51);\">, no podrá modificar ninguna respuesta.</span></p><p style=\"margin: 0px;\">​</p>',
                            rect: ['632px', '32px', '1198px', '348px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '335px', '49px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid307",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_evaluemosCopy2}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "R6_1": {
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "R6_2": {
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,119,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "R6_3": {
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(239,255,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "R6_4": {
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,255,117,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "R6_5": {
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,103,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "R6_final": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '91px', '33px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "r6_atras": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '50px', '51px']
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
            "r6_siguiente": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '50px', '51px']
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
            "r6_evaluemos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '566px', '123px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(157,113,197,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '566px', '123px']
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
            "r6_enviar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '165px', '43px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            stroke: [1, 'rgba(120,78,166,1.00)', 'solid'],
                            id: 'RoundRect',
                            opacity: '0.5',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(149,115,187,1.00)', 50], ['rgba(120,78,166,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['0px', '19px', '165px', '31px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'texto_2',
                                text: '<p style=\"margin: 0px; text-align: center; line-height: 0px;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255); font-size: 30px;\">Enviar</span></p>',
                                textShadow: ['rgba(0,0,0,0.49)', 1, 1, 1],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '165px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    labels: {
                        "desactivado": 0,
                        "activado": 2000
                    },
                    data: [
                        [
                            "eid430",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${RoundRect}",
                            '0.5',
                            '1'
                        ]
                    ]
                }
            },
            "btn_evaluemos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'RoundRect',
                            stroke: [1, 'rgba(120,78,166,1.00)', 'solid'],
                            rect: ['0px', '0px', '336px', '49px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', '24px', '335px', '31px', 'auto', 'auto'],
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px; text-align: center; line-height: 0px;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Evaluemos </span><span style=\"font-family: sena_icon; font-weight: 600; color: rgb(255, 255, 255);\">Z</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '335px', '49px']
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
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '600', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'texto_4',
                            text: '<p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 600; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">100%</p>',
                            align: 'center',
                            rect: ['-29px', '0px', '151px', '33px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '91px', '33px']
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
            "medidor": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '198px', '27px', 'auto', 'auto'],
                            id: 'medidor_examen-02Copy2',
                            fill: ['rgba(0,0,0,0)', 'images/medidor%20examen-02.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '198px', '27px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("R6_edgeActions.js");
})("EDGE-4821767");
