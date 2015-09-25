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
            'sena_icon': '<link rel="stylesheet" href="css/stylesheet.css" type="text/css" media="screen" title="" charset="utf-8" />'        },
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
                            id: 'jefe',
                            type: 'image',
                            tag: 'img',
                            rect: ['463px', '99px', '250px', '250px', 'auto', 'auto'],
                            borderRadius: ["15px", "15px", "15px", "15px 15px"],
                            fill: ["rgba(0,0,0,0)",im+"jefe.png",'0px','0px']
                        },
                        {
                            id: 'plaza',
                            type: 'image',
                            tag: 'img',
                            rect: ['790px', '99px', '250px', '250px', 'auto', 'auto'],
                            borderRadius: ["15px", "15px", "15px", "15px 15px"],
                            fill: ["rgba(0,0,0,0)",im+"plaza.png",'0px','0px']
                        },
                        {
                            id: 'iglesias',
                            type: 'image',
                            tag: 'img',
                            rect: ['1117px', '99px', '250px', '250px', 'auto', 'auto'],
                            borderRadius: ["15px", "15px", "15px", "15px 15px"],
                            fill: ["rgba(0,0,0,0)",im+"iglesias.png",'0px','0px']
                        },
                        {
                            id: 'hospital',
                            type: 'image',
                            tag: 'img',
                            rect: ['962px', '431px', '250px', '250px', 'auto', 'auto'],
                            borderRadius: ["15px", "15px", "15px", "15px 15px"],
                            fill: ["rgba(0,0,0,0)",im+"hospital.png",'0px','0px']
                        },
                        {
                            id: 'caminos',
                            type: 'image',
                            tag: 'img',
                            rect: ['618px', '431px', '250px', '250px', 'auto', 'auto'],
                            borderRadius: ["15px", "15px", "15px", "15px 15px"],
                            fill: ["rgba(0,0,0,0)",im+"caminos.png",'0px','0px']
                        },
                        {
                            id: 'RectangleCopy4',
                            type: 'rect',
                            rect: ['463px', '309px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "18px 18px", "18px 18px"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy3',
                            type: 'rect',
                            rect: ['790px', '309px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "18px 18px", "18px 18px"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy2',
                            type: 'rect',
                            rect: ['1117px', '309px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "18px 18px", "18px 18px"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy',
                            type: 'rect',
                            rect: ['962px', '641px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "18px 18px", "18px 18px"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['618px', '641px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "18px 18px", "18px 18px"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'contorno_televisorCopy4',
                            type: 'rect',
                            rect: ['463px', '99px', '240px', '240px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [5,"rgba(79,45,110,1.00)","solid"]
                        },
                        {
                            id: 'contorno_televisorCopy3',
                            type: 'rect',
                            rect: ['790px', '99px', '240px', '240px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [5,"rgba(79,45,110,1.00)","solid"]
                        },
                        {
                            id: 'contorno_televisorCopy2',
                            type: 'rect',
                            rect: ['1117px', '99px', '240px', '240px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [5,"rgba(79,45,110,1.00)","solid"]
                        },
                        {
                            id: 'contorno_televisorCopy',
                            type: 'rect',
                            rect: ['962px', '431px', '240px', '240px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [5,"rgba(79,45,110,1.00)","solid"]
                        },
                        {
                            id: 'contorno_televisor',
                            type: 'rect',
                            rect: ['618px', '431px', '240px', '240px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [5,"rgba(79,45,110,1.00)","solid"]
                        },
                        {
                            id: 'texto_1',
                            type: 'text',
                            rect: ['463px', '312px', '250px', '40px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">jefe</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"],
                            textStyle: ["", "", "22px", "", ""]
                        },
                        {
                            id: 'texto_2',
                            type: 'text',
                            rect: ['790px', '312px', '250px', '40px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">plaza</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"],
                            textStyle: ["", "", "22px", "", ""]
                        },
                        {
                            id: 'texto_3',
                            type: 'text',
                            rect: ['1117px', '312px', '250px', '40px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">iglesias</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"],
                            textStyle: ["", "", "22px", "", ""]
                        },
                        {
                            id: 'texto_5',
                            type: 'text',
                            rect: ['962px', '644px', '250px', '40px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">hospital</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"],
                            textStyle: ["", "", "22px", "", ""]
                        },
                        {
                            id: 'texto_4',
                            type: 'text',
                            rect: ['618px', '644px', '250px', '40px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">caminos</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"],
                            textStyle: ["", "", "22px", "", ""]
                        },
                        {
                            id: 'lupa_1',
                            symbolName: 'lupa',
                            type: 'rect',
                            rect: ['463px', '99px', '46', '46', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'lupa_2',
                            symbolName: 'lupa',
                            type: 'rect',
                            rect: ['790px', '99px', '46', '46', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'lupa_3',
                            symbolName: 'lupa',
                            type: 'rect',
                            rect: ['1117px', '99px', '46', '46', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'lupa_4',
                            symbolName: 'lupa',
                            type: 'rect',
                            rect: ['618px', '431px', '46', '46', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'lupa_5',
                            symbolName: 'lupa',
                            type: 'rect',
                            rect: ['962px', '431px', '46', '46', 'auto', 'auto'],
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
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid15",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid21",
                            "left",
                            0,
                            0,
                            "linear",
                            "${lupa_4}",
                            '618px',
                            '618px'
                        ],
                        [
                            "eid18",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid26",
                            "top",
                            0,
                            0,
                            "linear",
                            "${lupa_2}",
                            '99px',
                            '99px'
                        ],
                        [
                            "eid16",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid19",
                            "top",
                            0,
                            0,
                            "linear",
                            "${lupa_1}",
                            '99px',
                            '99px'
                        ],
                        [
                            "eid28",
                            "top",
                            0,
                            0,
                            "linear",
                            "${lupa_3}",
                            '99px',
                            '99px'
                        ],
                        [
                            "eid14",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid25",
                            "left",
                            0,
                            0,
                            "linear",
                            "${lupa_2}",
                            '790px',
                            '790px'
                        ],
                        [
                            "eid23",
                            "left",
                            0,
                            0,
                            "linear",
                            "${lupa_5}",
                            '962px',
                            '962px'
                        ],
                        [
                            "eid24",
                            "top",
                            0,
                            0,
                            "linear",
                            "${lupa_5}",
                            '431px',
                            '431px'
                        ],
                        [
                            "eid22",
                            "top",
                            0,
                            0,
                            "linear",
                            "${lupa_4}",
                            '431px',
                            '431px'
                        ],
                        [
                            "eid27",
                            "left",
                            0,
                            0,
                            "linear",
                            "${lupa_3}",
                            '1117px',
                            '1117px'
                        ],
                        [
                            "eid20",
                            "left",
                            0,
                            0,
                            "linear",
                            "${lupa_1}",
                            '463px',
                            '463px'
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
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ['rgba(79,45,110,0.00)']
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
                            rect: ['612px', '87px', '600px', '600px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            overflow: 'hidden',
                            id: 'Zoom',
                            stroke: [3, 'rgba(159,103,194,0.78)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(106,55,137,1.00)'],
                            c: [
                            {
                                rect: ['-3px', '-3px', '605px', '605px', 'auto', 'auto'],
                                overflow: 'visible',
                                id: 'mesa2',
                                fill: ['rgba(0,0,0,0)', 'images/hospital.png', '0px', '0px'],
                                type: 'image',
                                tag: 'img'
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
                            font: ['sena_icon', [37, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            textStyle: ['', '', '50px', '', 'none'],
                            id: 'TX_lupa',
                            text: '<p style=\"margin: 0px;\">​A</p>',
                            align: 'center',
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
                            rect: ['612px', '87px', '600px', '600px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            overflow: 'hidden',
                            id: 'Zoom',
                            stroke: [3, 'rgba(159,103,194,0.78)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(106,55,137,1.00)'],
                            c: [
                            {
                                rect: ['-2px', '-3px', '605px', '605px', 'auto', 'auto'],
                                id: 'faro2',
                                fill: ['rgba(0,0,0,0)', 'images/caminos.png', '0px', '0px'],
                                type: 'image',
                                tag: 'img'
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
                            rect: ['612px', '87px', '600px', '600px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            overflow: 'hidden',
                            id: 'Zoom',
                            stroke: [3, 'rgba(159,103,194,0.78)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(106,55,137,1.00)'],
                            c: [
                            {
                                rect: ['-4px', '-3px', '605px', '605px', 'auto', 'auto'],
                                id: 'uva',
                                fill: ['rgba(0,0,0,0)', 'images/iglesias.png', '0px', '0px'],
                                type: 'image',
                                tag: 'img'
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
                            rect: ['612px', '87px', '600px', '600px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            overflow: 'hidden',
                            id: 'Zoom',
                            stroke: [3, 'rgba(159,103,194,0.78)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(106,55,137,1.00)'],
                            c: [
                            {
                                rect: ['-3px', '-3px', '605px', '605px', 'auto', 'auto'],
                                overflow: 'visible',
                                id: 'mesa2',
                                fill: ['rgba(0,0,0,0)', 'images/plaza.png', '0px', '0px'],
                                type: 'image',
                                tag: 'img'
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
                            rect: ['612px', '87px', '600px', '600px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            overflow: 'hidden',
                            id: 'Zoom',
                            stroke: [3, 'rgba(159,103,194,0.78)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(106,55,137,1.00)'],
                            c: [
                            {
                                rect: ['-2px', '-3px', '605px', '605px', 'auto', 'auto'],
                                id: 'faro2',
                                fill: ['rgba(0,0,0,0)', 'images/jefe.png', '0px', '0px'],
                                type: 'image',
                                tag: 'img'
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
                            textStyle: ['', '', '50px', '', 'none'],
                            id: 'TX_lupa',
                            text: '<p style=\"margin: 0px;\">​A</p>',
                            align: 'center',
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
