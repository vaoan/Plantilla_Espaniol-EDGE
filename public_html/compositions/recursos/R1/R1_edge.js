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
            js+"jquery-ui-1.11.4.custom/jquery-ui.min.js",
            js+"jquery.fullscreen-0.5.0/jquery.fullscreen.min.js",
            js+"ion.sound-3.0.5/js/ion.sound.min.js",
            js+"plantilla/utility.js",
            js+"plantilla/main.js",
            js+"EdgeCommons.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'RECURSO2',
                            display: 'none',
                            type: 'image',
                            rect: ['1px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"RECURSO2.png",'0px','0px']
                        },
                        {
                            id: 'overlay',
                            symbolName: 'overlay',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['46px', '615px', '1821px', '278px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0.4706)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btn_empezar',
                            symbolName: 'btn_empezar',
                            type: 'rect',
                            rect: ['1530', '699', '169', '137', 'auto', 'auto'],
                            cursor: 'pointer'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '944px', 'auto', 'auto'],
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
                            "eid216",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RECURSO2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid215",
                            "display",
                            0,
                            0,
                            "linear",
                            "${overlay}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Tool_audio": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            opacity: '0',
                            rect: ['0px', '14px', '92px', '53px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['83px', '19px', '15px', '15px', 'auto', 'auto'],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Audio</p>',
                                type: 'text'
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['83px', '19px', '15px', '15px', 'auto', 'auto'],
                                id: 'Rectangle3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'Text',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Audio</p>',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "btn_audio": {
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
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,0.29)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "btnR_7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.34)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
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
            "rec_6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['13px', '61px', '130px', '130px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'borde',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(204,204,204,1.00)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_r6Copy7',
                            opacity: '0',
                            rect: ['14px', '0px', '127px', '46px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['53px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy8',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy7',
                                text: '<p style=\"margin: 0px;\">​Evaluemos</p>',
                                textStyle: ['', '', '24px', '', ''],
                                rect: ['13px', '11px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        },
                        {
                            rect: ['18px', '66px', '120px', '120px', 'auto', 'auto'],
                            id: 'evaluacion_btn',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/evaluacion_btn.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '204px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid202",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid206",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${borde}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid77",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy7}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid78",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy7}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid201",
                            "scaleX",
                            0,
                            250,
                            "linear",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid205",
                            "scaleX",
                            250,
                            250,
                            "linear",
                            "${borde}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid79",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid80",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid199",
                            "scaleX",
                            0,
                            250,
                            "linear",
                            "${evaluacion_btn}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid203",
                            "scaleX",
                            250,
                            250,
                            "linear",
                            "${evaluacion_btn}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid200",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${evaluacion_btn}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid204",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${evaluacion_btn}",
                            '1.2',
                            '1'
                        ]
                    ]
                }
            },
            "rec_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['16px', '60px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'borde',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(204,204,204,1.00)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_r6Copy',
                            opacity: '0',
                            rect: ['0px', '0px', '143px', '46px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">​Exploremos</p>',
                                textStyle: ['', '', '24px', '', ''],
                                rect: ['18px', '11px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        },
                        {
                            rect: ['21px', '65px', '100px', '100px', 'auto', 'auto'],
                            id: 'exploremos_btn',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/exploremos_btn.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '143px', '181px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid114",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid122",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${borde}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid113",
                            "scaleX",
                            0,
                            250,
                            "linear",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid121",
                            "scaleX",
                            250,
                            250,
                            "linear",
                            "${borde}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid57",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid58",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid111",
                            "scaleX",
                            0,
                            250,
                            "linear",
                            "${exploremos_btn}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid119",
                            "scaleX",
                            250,
                            250,
                            "linear",
                            "${exploremos_btn}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid59",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid60",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid112",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${exploremos_btn}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid120",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${exploremos_btn}",
                            '1.2',
                            '1'
                        ]
                    ]
                }
            },
            "rec_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['22px', '60px', '100px', '100px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'borde',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(204,204,204,1.00)']
                        },
                        {
                            rect: ['27px', '65px', '90px', '90px', 'auto', 'auto'],
                            id: 'r3_btn',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/r3_btn.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_r6Copy2',
                            opacity: '0',
                            rect: ['0px', '0px', '156px', '46px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy2',
                                text: '<p style=\"margin: 0px;\">​Practiquemos</p>',
                                textStyle: ['', '', '24px', '', ''],
                                rect: ['14px', '11px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '171px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid142",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid138",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${borde}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid140",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${r3_btn}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid136",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${r3_btn}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid141",
                            "scaleX",
                            0,
                            250,
                            "linear",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid137",
                            "scaleX",
                            250,
                            250,
                            "linear",
                            "${borde}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid61",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy2}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid62",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy2}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid139",
                            "scaleX",
                            0,
                            250,
                            "linear",
                            "${r3_btn}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid135",
                            "scaleX",
                            250,
                            250,
                            "linear",
                            "${r3_btn}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid63",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid64",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "rec_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['23px', '61px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'borde',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(204,204,204,1.00)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_r6Copy5',
                            opacity: '0',
                            rect: ['0px', '0px', '156px', '46px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy6',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy5',
                                text: '<p style=\"margin: 0px;\">​Practiquemos</p>',
                                textStyle: ['', '', '24px', '', ''],
                                rect: ['14px', '11px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        },
                        {
                            rect: ['28px', '66px', '100px', '100px', 'auto', 'auto'],
                            id: 'r4_btn',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/r4_btn.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '182px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid154",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid162",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${borde}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid71",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid72",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid153",
                            "scaleX",
                            0,
                            250,
                            "linear",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid161",
                            "scaleX",
                            250,
                            250,
                            "linear",
                            "${borde}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid69",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy5}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid70",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy5}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid152",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${r4_btn}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid160",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${r4_btn}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid151",
                            "scaleX",
                            0,
                            250,
                            "linear",
                            "${r4_btn}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid159",
                            "scaleX",
                            250,
                            250,
                            "linear",
                            "${r4_btn}",
                            '1.2',
                            '1'
                        ]
                    ]
                }
            },
            "rec_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['13px', '63px', '130px', '130px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'borde',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(204,204,204,1.00)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_r6Copy6',
                            opacity: '0',
                            rect: ['0px', '0px', '156px', '46px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy6',
                                text: '<p style=\"margin: 0px;\">​Practiquemos</p>',
                                textStyle: ['', '', '24px', '', ''],
                                rect: ['14px', '11px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        },
                        {
                            rect: ['18px', '68px', '120px', '120px', 'auto', 'auto'],
                            id: 'r5_btn',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/r5_btn.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '210px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid178",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid186",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${borde}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid177",
                            "scaleX",
                            0,
                            250,
                            "linear",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid185",
                            "scaleX",
                            250,
                            250,
                            "linear",
                            "${borde}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid176",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${r5_btn}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid184",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${r5_btn}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid73",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy6}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid74",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy6}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid175",
                            "scaleX",
                            0,
                            250,
                            "linear",
                            "${r5_btn}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid183",
                            "scaleX",
                            250,
                            250,
                            "linear",
                            "${r5_btn}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid75",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid76",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy6}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "rec_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['13px', '62px', '130px', '130px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'borde',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(204,204,204,1.00)']
                        },
                        {
                            rect: ['19px', '67px', '120px', '120px', 'auto', 'auto'],
                            id: 'empecemos_btn',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/empecemos_btn.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_r6',
                            opacity: '0',
                            rect: ['7px', '0px', '143px', '46px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Empecemos</p>',
                                textStyle: ['', '', '24px', '', ''],
                                rect: ['14px', '11px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '205px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid94",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid102",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${borde}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid93",
                            "scaleX",
                            0,
                            250,
                            "linear",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid101",
                            "scaleX",
                            250,
                            250,
                            "linear",
                            "${borde}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid45",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid46",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid91",
                            "scaleX",
                            0,
                            250,
                            "linear",
                            "${empecemos_btn}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid99",
                            "scaleX",
                            250,
                            250,
                            "linear",
                            "${empecemos_btn}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid47",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid92",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${empecemos_btn}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid100",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${empecemos_btn}",
                            '1.2',
                            '1'
                        ]
                    ]
                }
            },
            "btnR_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.34)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
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
            "btnR_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.34)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
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
            "btnR_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.34)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
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
            "btnR_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.34)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
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
            "btnR_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.34)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
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
            "btnR_6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.34)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
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
            "Tool_creditos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            opacity: '0',
                            rect: ['-32px', '14px', '124px', '53px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            c: [
                            {
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Creditos</p>',
                                type: 'text'
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['115px', '19px', '15px', '15px', 'auto', 'auto'],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Tool_ayuda": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            opacity: '0',
                            rect: ['0px', '14px', '92px', '53px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            c: [
                            {
                                rect: ['9px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Ayuda</p>',
                                type: 'text'
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['83px', '19px', '15px', '15px', 'auto', 'auto'],
                                id: 'Rectangle3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Tool_full": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            opacity: '0',
                            rect: ['-146px', '14px', '238px', '53px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            c: [
                            {
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Pantalla completa</p>',
                                type: 'text'
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['229px', '19px', '15px', '15px', 'auto', 'auto'],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Tool_info": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            opacity: '0',
                            rect: ['-74px', '14px', '166px', '53px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['157px', '19px', '15px', '15px', 'auto', 'auto'],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Informacion</p>',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Tool_accesibilidad": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            opacity: '0',
                            rect: ['-86px', '14px', '178px', '53px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['169px', '19px', '15px', '15px', 'auto', 'auto'],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Accesibilidad</p>',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "btn_full": {
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
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,0.29)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "btn_ayuda": {
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
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,0.29)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "btn_creditos": {
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
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,0.29)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "btn_info": {
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
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,0.29)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "btn_accesibilidad": {
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
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,0.29)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "punto_A": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['22px', '70px', '90px', '90px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(204,204,204,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'btn_puntoaprendizaje',
                            rect: ['-33px', '15px', '200px', '200px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.4', '0.4']],
                            fill: ['rgba(0,0,0,0)', 'images/btn_puntoaprendizaje.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_r6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '134px', '67px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['62px', '50px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['14px', '9px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '24px', '', ''],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Punto de</p><p style=\"margin: 0px;\">​aprendizaje</p>',
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '134px', '160px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid207",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid208",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid209",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid210",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "vocabulario": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['23px', '45px', '90px', '90px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(204,204,204,1.00)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_r6Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '134px', '42px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['57px', '25px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['12px', '9px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '24px', '', ''],
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">Vocabulario</p>',
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        },
                        {
                            type: 'image',
                            id: 'btn_vocabulario',
                            rect: ['-32px', '-10px', '200px', '200px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.4', '0.4']],
                            fill: ['rgba(0,0,0,0)', 'images/btn_vocabulario.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '134px', '135px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid211",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid212",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid213",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid214",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "btn_vocabulario": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.34)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
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
            "btn_puntoApren": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.34)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
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
            "rec_7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'borde',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['25px', '97px', '84px', '84px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.1', '1.1']],
                            fill: ['rgba(205,205,205,1.00)'],
                            c: [
                            {
                                rect: ['4px', '4px', '76px', '76px', 'auto', 'auto'],
                                id: 'pdf_btn2',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/pdf_btn2.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_r6',
                            opacity: '0',
                            rect: ['0px', '0px', '135px', '84px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['58px', '68px', '20px', '20px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Aprendamos</p><p style=\"margin: 0px;\">​en papel</p>',
                                align: 'center',
                                rect: ['9px', '13px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '135px', '185px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid252",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1.2'
                        ],
                        [
                            "eid253",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.2',
                            '1.1'
                        ],
                        [
                            "eid260",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid261",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid262",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid263",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid254",
                            "scaleX",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1.2'
                        ],
                        [
                            "eid255",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.2',
                            '1.1'
                        ]
                    ]
                }
            },
            "overlay": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto'],
                            id: 'container_overlay',
                            symbolName: 'container_overlay',
                            type: 'rect'
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
            "container_overlay": {
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
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.4706)']
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
            "contenedor_home": {
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
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1838px', '785px', 'auto', 'auto'],
                            fill: ['rgba(244,52,251,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1838px', '785px']
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
            "overlay_portada": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1920px', '944px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1920px', '944px']
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
            "btn_empezar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '169px', '137px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(0,0,0,0.4706)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '169px', '137px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("R1_edgeActions.js");
})("EDGE-7659645");
