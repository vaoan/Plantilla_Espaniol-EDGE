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
                            id: 'conburro',
                            type: 'rect',
                            rect: ['447px', '79px', '240px', '240px', 'auto', 'auto'],
                            overflow: 'hidden',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [5,"rgba(79,45,110,1.00)","solid"],
                            c: [
                            {
                                id: 'burro',
                                type: 'image',
                                tag: 'img',
                                rect: ['-49px', '-10px', '300px', '300px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"burro.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'contmesa',
                            type: 'rect',
                            rect: ['774px', '79px', '240px', '240px', 'auto', 'auto'],
                            overflow: 'hidden',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [5,"rgba(79,45,110,1.00)","solid"],
                            c: [
                            {
                                id: 'mesa',
                                type: 'image',
                                tag: 'img',
                                rect: ['-30px', '-30px', '300px', '300px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"mesa.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'contuva',
                            type: 'rect',
                            rect: ['1101px', '79px', '240px', '240px', 'auto', 'auto'],
                            overflow: 'hidden',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [5,"rgba(79,45,110,1.00)","solid"],
                            c: [
                            {
                                id: 'uva',
                                type: 'image',
                                tag: 'img',
                                rect: ['-29px', '-30px', '300px', '300px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"uva.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'contdedo',
                            type: 'rect',
                            rect: ['946px', '411px', '240px', '240px', 'auto', 'auto'],
                            overflow: 'hidden',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [5,"rgba(79,45,110,1.00)","solid"],
                            c: [
                            {
                                id: 'dedo',
                                type: 'image',
                                tag: 'img',
                                rect: ['-30px', '-30px', '300px', '300px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"dedo2.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'contfaro',
                            type: 'rect',
                            rect: ['602px', '411px', '240px', '240px', 'auto', 'auto'],
                            overflow: 'hidden',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [5,"rgba(79,45,110,1.00)","solid"],
                            c: [
                            {
                                id: 'faro',
                                type: 'image',
                                tag: 'img',
                                rect: ['-47px', '-22px', '300px', '300px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"faro.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'RectangleCopy4',
                            type: 'rect',
                            rect: ['447px', '289px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "18px 18px", "18px 18px"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy3',
                            type: 'rect',
                            rect: ['602px', '621px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "18px 18px", "18px 18px"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy2',
                            type: 'rect',
                            rect: ['946px', '621px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "18px 18px", "18px 18px"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy',
                            type: 'rect',
                            rect: ['774px', '289px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "18px 18px", "18px 18px"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['1101px', '289px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "18px 18px", "18px 18px"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'texto_5',
                            type: 'text',
                            rect: ['490px', '282px', '165px', '40px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center; color: rgb(255, 255, 255); font-family: source-sans-pro, sans-serif; font-size: 30px;\">Burro</p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'texto_4',
                            type: 'text',
                            rect: ['817px', '282px', '165px', '40px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">Mesa</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'texto_3',
                            type: 'text',
                            rect: ['1144px', '282px', '165px', '40px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">Uva</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'texto_2',
                            type: 'text',
                            rect: ['989px', '614px', '165px', '40px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">dedo</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'texto_1',
                            type: 'text',
                            rect: ['645px', '614px', '165px', '40px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">Faro</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'lupa_1',
                            symbolName: 'lupa',
                            type: 'rect',
                            rect: ['447px', '79px', '46', '46', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'lupa_2',
                            symbolName: 'lupa',
                            type: 'rect',
                            rect: ['774px', '79px', '46', '46', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'lupa_3',
                            symbolName: 'lupa',
                            type: 'rect',
                            rect: ['1101px', '79px', '46', '46', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'lupa_4',
                            symbolName: 'lupa',
                            type: 'rect',
                            rect: ['602px', '411px', '46', '46', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'lupa_5',
                            symbolName: 'lupa',
                            type: 'rect',
                            rect: ['946px', '411px', '46', '46', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'zoom_1',
                            symbolName: 'zoom_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'zoom_2',
                            symbolName: 'zoom_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'zoom_3',
                            symbolName: 'zoom_3',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'zoom_4',
                            symbolName: 'zoom_4',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'zoom_5',
                            symbolName: 'zoom_5',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
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
                            "eid17",
                            "display",
                            500,
                            0,
                            "linear",
                            "${zoom_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid19",
                            "display",
                            500,
                            0,
                            "linear",
                            "${zoom_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid24",
                            "top",
                            500,
                            0,
                            "linear",
                            "${lupa_2}",
                            '79px',
                            '79px'
                        ],
                        [
                            "eid18",
                            "display",
                            500,
                            0,
                            "linear",
                            "${zoom_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid23",
                            "left",
                            500,
                            0,
                            "linear",
                            "${lupa_2}",
                            '774px',
                            '774px'
                        ],
                        [
                            "eid21",
                            "left",
                            500,
                            0,
                            "linear",
                            "${lupa_1}",
                            '447px',
                            '447px'
                        ],
                        [
                            "eid27",
                            "left",
                            500,
                            0,
                            "linear",
                            "${lupa_4}",
                            '602px',
                            '602px'
                        ],
                        [
                            "eid20",
                            "display",
                            500,
                            0,
                            "linear",
                            "${zoom_1}",
                            'none',
                            'none'
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
                        ],
                        [
                            "eid28",
                            "top",
                            500,
                            0,
                            "linear",
                            "${lupa_4}",
                            '411px',
                            '411px'
                        ],
                        [
                            "eid22",
                            "top",
                            500,
                            0,
                            "linear",
                            "${lupa_1}",
                            '79px',
                            '79px'
                        ],
                        [
                            "eid31",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(255,255,255,0.00)',
                            'rgba(255,255,255,0.00)'
                        ],
                        [
                            "eid16",
                            "display",
                            500,
                            0,
                            "linear",
                            "${zoom_5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid30",
                            "top",
                            500,
                            0,
                            "linear",
                            "${lupa_5}",
                            '411px',
                            '411px'
                        ],
                        [
                            "eid26",
                            "top",
                            500,
                            0,
                            "linear",
                            "${lupa_3}",
                            '79px',
                            '79px'
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
                            "eid25",
                            "left",
                            500,
                            0,
                            "linear",
                            "${lupa_3}",
                            '1101px',
                            '1101px'
                        ],
                        [
                            "eid29",
                            "left",
                            500,
                            0,
                            "linear",
                            "${lupa_5}",
                            '946px',
                            '946px'
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
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(192,192,192,1)'],
                            c: [
                            {
                                type: 'rect',
                                borderRadius: ['10px', '10px', '10px', '10px'],
                                id: 'conburro',
                                stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                                rect: ['447px', '79px', '240px', '240px', 'auto', 'auto'],
                                overflow: 'hidden',
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
                                type: 'rect',
                                borderRadius: ['10px', '10px', '10px', '10px'],
                                id: 'contmesa',
                                stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                                rect: ['774px', '79px', '240px', '240px', 'auto', 'auto'],
                                overflow: 'hidden',
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
                                type: 'rect',
                                borderRadius: ['10px', '10px', '10px', '10px'],
                                id: 'contuva',
                                stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                                rect: ['1101px', '79px', '240px', '240px', 'auto', 'auto'],
                                overflow: 'hidden',
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
                                type: 'rect',
                                borderRadius: ['10px', '10px', '10px', '10px'],
                                id: 'contdedo',
                                stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                                rect: ['946px', '411px', '240px', '240px', 'auto', 'auto'],
                                overflow: 'hidden',
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
                                type: 'rect',
                                borderRadius: ['10px', '10px', '10px', '10px'],
                                id: 'contfaro',
                                stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                                rect: ['602px', '411px', '240px', '240px', 'auto', 'auto'],
                                overflow: 'hidden',
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
                                type: 'text',
                                id: 'txtburro',
                                text: '<p style=\"margin: 0px; text-align: center; color: rgb(255, 255, 255); font-family: source-sans-pro, sans-serif; font-size: 30px;\">Burro</p>',
                                rect: ['490px', '289px', '165px', '40px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                            },
                            {
                                type: 'text',
                                id: 'txtmesa',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">Mesa</span></p>',
                                rect: ['817px', '289px', '165px', '40px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                            },
                            {
                                type: 'text',
                                id: 'txtuva',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">Uva</span></p>',
                                rect: ['1144px', '289px', '165px', '40px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                            },
                            {
                                type: 'text',
                                id: 'txtdedo',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">dedo</span></p>',
                                rect: ['989px', '621px', '165px', '40px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                            },
                            {
                                type: 'text',
                                id: 'txtfaro',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">Faro</span></p>',
                                rect: ['645px', '621px', '165px', '40px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                            }]
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
            "zoom_5": {
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
                            borderRadius: ['0px', '0px', '30px', '30px 30px'],
                            id: 'Zona_clic',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.50)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Zoom',
                            stroke: [3, 'rgba(159,103,194,0.78)', 'solid'],
                            rect: ['612px', '87px', '600px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(106,55,137,1.00)'],
                            c: [
                            {
                                rect: ['-3px', '-3px', '605px', '605px', 'auto', 'auto'],
                                overflow: 'visible',
                                id: 'mesa2',
                                tag: 'img',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/dedo2.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'cerrar_lupa',
                            symbolName: 'cerrar_lupa',
                            cursor: 'pointer',
                            rect: ['1169px', '644px', null, null, 'auto', 'auto']
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
            "cerrar_lupa": {
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
                            borderRadius: ['7px', '7px', '7px', '7px 7px'],
                            id: 'RoundRect3',
                            stroke: [1, 'rgba(255,255,255,0.20)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(25,25,25,0.43)']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '0px', '46px', '46px', 'auto', 'auto'],
                            align: 'center',
                            id: 'TX_lupa',
                            textStyle: ['', '', '50px', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​A</p>',
                            font: ['sena_icon', [37, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '46px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid333",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            'rgba(25,25,25,0.43)',
                            'rgba(25,25,25,0.43)'
                        ]
                    ]
                }
            },
            "zoom_4": {
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
                            borderRadius: ['0px', '0px', '30px', '30px 30px'],
                            id: 'Zona_clic',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.50)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Zoom',
                            stroke: [3, 'rgba(159,103,194,0.78)', 'solid'],
                            rect: ['612px', '87px', '600px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(106,55,137,1.00)'],
                            c: [
                            {
                                type: 'image',
                                id: 'faro2',
                                tag: 'img',
                                rect: ['-2px', '-3px', '605px', '605px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/faro.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'cerrar_lupa',
                            symbolName: 'cerrar_lupa',
                            cursor: 'pointer',
                            rect: ['1169px', '644px', null, null, 'auto', 'auto']
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
            "zoom_3": {
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
                            borderRadius: ['0px', '0px', '30px', '30px 30px'],
                            id: 'Zona_clic',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.50)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Zoom',
                            stroke: [3, 'rgba(159,103,194,0.78)', 'solid'],
                            rect: ['612px', '87px', '600px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(106,55,137,1.00)'],
                            c: [
                            {
                                type: 'image',
                                id: 'uva',
                                tag: 'img',
                                rect: ['-4px', '-3px', '605px', '605px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/uva2.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'cerrar_lupa',
                            symbolName: 'cerrar_lupa',
                            cursor: 'pointer',
                            rect: ['1169px', '644px', null, null, 'auto', 'auto']
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
            "zoom_2": {
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
                            borderRadius: ['0px', '0px', '30px 30px', '30px 30px'],
                            id: 'Zona_clic',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.50)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Zoom',
                            stroke: [3, 'rgba(159,103,194,0.78)', 'solid'],
                            rect: ['612px', '87px', '600px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(106,55,137,1.00)'],
                            c: [
                            {
                                rect: ['-3px', '-3px', '605px', '605px', 'auto', 'auto'],
                                overflow: 'visible',
                                id: 'mesa2',
                                tag: 'img',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/mesa2.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'cerrar_lupa',
                            symbolName: 'cerrar_lupa',
                            cursor: 'pointer',
                            rect: ['1169px', '644px', null, null, 'auto', 'auto']
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
            "zoom_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1830px', '776px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '30px', '30px 30px'],
                            id: 'Zona_clic',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.50)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Zoom',
                            stroke: [3, 'rgba(159,103,194,0.78)', 'solid'],
                            rect: ['612px', '87px', '600px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(106,55,137,1.00)'],
                            c: [
                            {
                                type: 'image',
                                id: 'faro2',
                                tag: 'img',
                                rect: ['-2px', '-3px', '605px', '605px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/burro.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'cerrar_lupa',
                            symbolName: 'cerrar_lupa',
                            cursor: 'pointer',
                            rect: ['1169px', '644px', null, null, 'auto', 'auto']
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
            "lupa": {
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
                            borderRadius: ['13px', '13px', '13px', '13px 13px'],
                            id: 'RoundRect3',
                            stroke: [1, 'rgba(255,255,255,0.20)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(25,25,25,0.43)']
                        },
                        {
                            font: ['sena_icon', [37, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'center',
                            id: 'TX_lupa',
                            textStyle: ['', '', '50px', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​A</p>',
                            rect: ['0px', '0px', '46px', '46px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '46px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid333",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            'rgba(25,25,25,0.43)',
                            'rgba(25,25,25,0.43)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("respuestas_edgeActions.js");
})("EDGE-25832383");
