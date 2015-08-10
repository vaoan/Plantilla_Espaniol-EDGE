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
                scaleToFit: "both",
                centerStage: "both",
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
                            id: 'CONTENEDOR',
                            type: 'rect',
                            rect: ['193px', '120px', '1534px', '959px', 'auto', 'auto'],
                            overflow: 'scroll',
                            fill: ["rgba(0,0,0,0)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            c: [
                            {
                                id: 'Rectangle2',
                                type: 'rect',
                                rect: ['0px', '-88px', '1639px', '1313px', 'auto', 'auto'],
                                overflow: 'hidden',
                                clip: 'rect(2.2724609375px 1527.6357421875px 1315.2724609375px -6.818359375px)',
                                fill: ["rgba(0,0,0,0)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"],
                                c: [
                                {
                                    id: 'fondo_blanco',
                                    symbolName: 'fondo_blanco',
                                    type: 'rect',
                                    rect: ['0', '-1479px', '1534', '4221', 'auto', 'auto'],
                                    transform: [[],[],[],['1','0.29438']]
                                },
                                {
                                    id: '_3_4_5',
                                    type: 'image',
                                    rect: ['116px', '202px', '191px', '63px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"3_4_5.png",'0px','0px']
                                },
                                {
                                    id: 'empecemos',
                                    type: 'image',
                                    rect: ['170px', '293px', '63px', '63px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"empecemos.png",'0px','0px']
                                },
                                {
                                    id: 'exploremos',
                                    type: 'image',
                                    rect: ['170px', '380px', '63px', '63px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"exploremos.png",'0px','0px']
                                },
                                {
                                    id: 'puntodeaprendizaje',
                                    type: 'image',
                                    rect: ['170px', '645px', '63px', '63px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"puntodeaprendizaje.png",'0px','0px']
                                },
                                {
                                    id: 'migadepan',
                                    type: 'image',
                                    rect: ['26px', '1083px', '351px', '28px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"migadepan.png",'0px','0px']
                                },
                                {
                                    id: 'evaluemos',
                                    type: 'image',
                                    rect: ['170px', '470px', '63px', '63px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"evaluemos.png",'0px','0px']
                                },
                                {
                                    id: 'pdf',
                                    type: 'image',
                                    rect: ['170px', '557px', '63px', '63px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"pdf.png",'0px','0px']
                                },
                                {
                                    id: 'skill',
                                    type: 'image',
                                    rect: ['120px', '111px', '163px', '63px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"skill.png",'0px','0px']
                                },
                                {
                                    id: 'tools',
                                    type: 'image',
                                    rect: ['178px', '819px', '48px', '223px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"tools.png",'0px','0px']
                                },
                                {
                                    id: 'vocabulario',
                                    type: 'image',
                                    rect: ['170px', '733px', '63px', '63px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"vocabulario.png",'0px','0px']
                                },
                                {
                                    id: 'Texto_habilidades',
                                    type: 'text',
                                    rect: ['401px', '129px', '1075px', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Habilidades: </span>estos íconos indican las habilidades más destacadas dentro de la temática.</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'Rectangle3',
                                    type: 'rect',
                                    rect: ['391px', '191px', '1126px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(197,197,197,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle3Copy',
                                    type: 'rect',
                                    rect: ['391px', '279px', '1126px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(197,197,197,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle3Copy4',
                                    type: 'rect',
                                    rect: ['391px', '367px', '1126px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(197,197,197,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle3Copy5',
                                    type: 'rect',
                                    rect: ['391px', '454px', '1126px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(197,197,197,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle3Copy6',
                                    type: 'rect',
                                    rect: ['391px', '543px', '1126px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(197,197,197,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle3Copy7',
                                    type: 'rect',
                                    rect: ['391px', '631px', '1126px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(197,197,197,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle3Copy8',
                                    type: 'rect',
                                    rect: ['391px', '719px', '1126px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(197,197,197,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle3Copy9',
                                    type: 'rect',
                                    rect: ['391px', '807px', '1126px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(197,197,197,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle3Copy10',
                                    type: 'rect',
                                    rect: ['391px', '1056px', '1126px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(197,197,197,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle3Copy11',
                                    type: 'rect',
                                    rect: ['391px', '1146px', '1126px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(197,197,197,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Texto_practiquemos',
                                    type: 'text',
                                    rect: ['400px', '217px', '1075px', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Practiquemos: </span>estas son actividades de práctica.</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'Texto_empecemos',
                                    type: 'text',
                                    rect: ['399px', '305px', '1075px', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Empecemos:</span> aquí encontrará la introducción a la temática de estudio.</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'Texto_exploremos',
                                    type: 'text',
                                    rect: ['401px', '393px', '1075px', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Exploremos: </span>aquí inicia su proceso de aprendizaje.</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'Texto_evaluemos',
                                    type: 'text',
                                    rect: ['401px', '482px', '1075px', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Evaluemos: </span>aquí se verificará su progreso de aprendizaje.</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'Texto_aprendamos_en_papel',
                                    type: 'text',
                                    rect: ['399px', '569px', '1075px', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Aprendamos en papel (PDF): </span>aquí encontrará la versión imprimible de la temática y actividades.</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'Texto_punto_de_aprendizaje',
                                    type: 'text',
                                    rect: ['401px', '657px', '1075px', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Punto de aprendizaje:</span> aquí encontrará la gramática más relevante de la temática.</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'Texto_vocabulario',
                                    type: 'text',
                                    rect: ['399px', '745px', '1075px', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Vocabulario:</span> aquí encontrará el vocabulario más relevante de la temática.</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'texto_menu_herramientas',
                                    type: 'text',
                                    rect: ['401px', '906px', '1075px', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Menú herramientas: </span>pantalla completa (full screen), créditos, ayuda, apagar sonidos de la interfaz, información del producto, accesibilidad.</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'Texto_cabezote',
                                    type: 'text',
                                    rect: ['399px', '1077px', '1075px', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Cabezote: </span>esta es la ruta que describe el idioma, nivel y nombre de la lección.</p><p style=\"margin: 0px;\"></p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'Banner_ayuda',
                            type: 'group',
                            rect: ['193px', '32px', '1534', '96', 'auto', 'auto'],
                            c: [
                            {
                                id: 'RoundRect',
                                type: 'rect',
                                rect: ['0px', '1px', '1534px', '87px', 'auto', 'auto'],
                                borderRadius: ["15px 15px", "15px 15px", "0px 0px", "0px 0px"],
                                fill: ["rgba(255,255,255,1)",[270,[['rgba(62,35,86,1.00)',0],['rgba(76,44,109,1.00)',100]]]],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['75px', '15px', '242px', '54px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-family: source-sans-pro, sans-serif; font-weight: 700; font-size: 51px;\">Ayuda</span></p>",
                                font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'ayuda',
                                type: 'image',
                                rect: ['18px', '15px', '54px', '50px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"ayuda.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'btn_cerrar_ayuda',
                            symbolName: 'btn_cerrar_creditos',
                            type: 'rect',
                            rect: ['1643', '49', '50', '50', 'auto', 'auto'],
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
                        [
                            "eid22",
                            "top",
                            0,
                            0,
                            "linear",
                            "${fondo_blanco}",
                            '-1479px',
                            '-1479px'
                        ],
                        [
                            "eid16",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${fondo_blanco}",
                            '0.29438',
                            '0.29438'
                        ]
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
                            type: 'group',
                            id: 'Btn_cerrar',
                            rect: ['7px', '5px', '37', '40', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'btn_cerrar',
                                rect: ['-7px', '-5px', '50px', '50px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/btn_cerrar.png', '0px', '0px']
                            },
                            {
                                rect: ['15px', '-3px', '8px', '46px', 'auto', 'auto'],
                                transform: [[], ['-42'], [], ['1.03', '0.95']],
                                id: 'Rectangle2',
                                stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                rect: ['15px', '-3px', '8px', '46px', 'auto', 'auto'],
                                transform: [[], ['-138'], [], ['1.03', '0.95']],
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
            },
            "content": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['5px', '0px', '1520px', '4221px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'content',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 700; font-size: 29px;\">Servicio Nacional de Aprendizaje SENA</span></p><p style=\"margin: 0px;\">&nbsp;</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Director General</span></p><p style=\"margin: 0px;\">Alfonso Prada Gil</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Secretario General</span></p><p style=\"margin: 0px;\">Milton Nuñez Paz</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Director del Sistema Nacional de Formación para el Trabajo</span></p><p style=\"margin: 0px;\">Juan Manuel Valdés Barcha</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Director de Promoción y Relaciones Corporativas</span></p><p style=\"margin: 0px;\">Juan Pablo Castro Morales</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Directora de Empleo, Trabajo y Emprendimiento</span></p><p style=\"margin: 0px;\">María Andrea Nieto Romero</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Director de Formación Profesional Integral</span></p><p style=\"margin: 0px;\">Mauricio Alvarado Hidalgo</p><p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Directora Administrativa y Financiera</span></p><p style=\"margin: 0px;\">Piedad Jiménez Montoya</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Director Jurídico</span></p><p style=\"margin: 0px;\">Juan Pablo Arenas Quiroz</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Director de Planeación y Direccionamiento Corporativo</span></p><p style=\"margin: 0px;\">Iván Ernesto Rojas Guzmán</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Jefe Oficina de Control Interno</span></p><p style=\"margin: 0px;\">Raúl Eduardo González Garzón</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Jefa de la Oficina de Control Interno Disciplinario</span></p><p style=\"margin: 0px;\">Dora Milena García Moreno</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Jefe de la Oficina de Sistemas</span></p><p style=\"margin: 0px;\">Carlos César Jiménez Aponte</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Jefe de la Oficina de Comunicaciones</span></p><p style=\"margin: 0px;\">Melba Pinto Gualdrón</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Coordinador del Grupo Gestión Operativa Integral de la Formación en Modalidad Presencial</span></p><p style=\"margin: 0px;\">Mario Javier Rincón Triana</p><p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Gerente Programa de Bilingüismo SENA</span></p><p style=\"margin: 0px;\">Olga Lucía Riveros Gaona</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Asesor de contenidos educativos Programa de Bilingüismo SENA</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Coordinador del proyecto</span></p><p style=\"margin: 0px;\">Mauricio Ríos Delgado</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Asesor técnico de programación e ingeniería del proyecto</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Programa de Bilingüismo SENA</span></p><p style=\"margin: 0px;\">William Augusto Duque Villalba</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Asesora pedagógica y curricular del proyecto</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Programa de Bilingüismo SENA</span></p><p style=\"margin: 0px;\">Dayana Cortés Medina</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Asesora pedagógica Programa de Bilingüismo</span></p><p style=\"margin: 0px;\">Astrid Oliveros López</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-size: 29px; font-weight: 700;\">eDistribution</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 29px; font-weight: 700;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Gerente del Proyecto</span></p><p style=\"margin: 0px;\">Alfredo Antonio Díaz Claro</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Directora Pedagógica</span></p><p style=\"margin: 0px;\">Nancy Carrillo Mora</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Coordinador de Producción</span></p><p style=\"margin: 0px;\">Mario Nel Villamizar Ochoa</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Coordinador de Adquisiciones</span></p><p style=\"margin: 0px;\">Gustavo Andrés Díaz Ochoa</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Project Manager</span></p><p style=\"margin: 0px;\">Catalina Ropero Acero</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Experta pedagógica</span></p><p style=\"margin: 0px;\">Paola Isabel Mejía Rodríguez</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Autores de contenido</span></p><p style=\"margin: 0px;\">Juan Camilo Gámez Porras</p><p style=\"margin: 0px;\">Emilio Alberto Godoy Montoya</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Diseñadores Instruccionales</span></p><p style=\"margin: 0px;\">Ana Vela Rodríguez  Velásquez</p><p style=\"margin: 0px;\">Emanuel Fernando Díaz Palencia</p><p style=\"margin: 0px;\">Jorge Edison Rojas Rodríguez</p><p style=\"margin: 0px;\">Fabio Rozo Berrera</p><p style=\"margin: 0px;\">Nancy Cruz Ulloa</p><p style=\"margin: 0px;\">Jeiner Leandro Velandia Sanabria</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Catalogadores</span></p><p style=\"margin: 0px;\">Katherin Vargas Polo</p><p style=\"margin: 0px;\">Yuri Emilse Correa Vivas</p><p style=\"margin: 0px;\">Johana Mancipe Delgado</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Especialista en Desarrollo de Contenido</span></p><p style=\"margin: 0px;\">Norma Constanza González La Rotta</p><p style=\"margin: 0px;\">Francisco Javier Hernández Sánchez</p><p style=\"margin: 0px;\">Leonardo Alberto Escobar Diaz</p><p style=\"margin: 0px;\">Ángela María López González</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Administradores de Plataforma LMS</span></p><p style=\"margin: 0px;\">Hernán Ramiro Pazmiño Santos</p><p style=\"margin: 0px;\">Sebastián Fernando Soler Mejía</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Diseñadores Gráficos</span></p><p style=\"margin: 0px;\">María AngéliK Bautista Vargas</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Desarrolladores Multimedia</span></p><p style=\"margin: 0px;\">Diana Carolina Bejarano Bejarano</p><p style=\"margin: 0px;\">Paola Andrea Cruz Espinoza</p><p style=\"margin: 0px;\">Cecilia Yinet Rodríguez López</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Ilustrador</span></p><p style=\"margin: 0px;\">Edwin Andrés Díaz Pinzón</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Realizador Audiovisual</span></p><p style=\"margin: 0px;\">Carolina Nova Torres</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Programador</span></p><p style=\"margin: 0px;\">Luis Gabriel Toscano Rodríguez</p><p style=\"margin: 0px;\">Heiner Wbeimar Angarita Maldonado&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p>',
                            textStyle: ['0px', '', '32px', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1520px', '793px']
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
            "fondo_blanco": {
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
                            borderRadius: ['17px 17px', '17px 17px', '17px 17px', '17px 17px'],
                            id: 'Fondo_blanco',
                            stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                            rect: ['0px', '1785px', '1534px', '650px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)'],
                            transform: [[], [], [], ['1', '6.49326']],
                            boxShadow: ['', 3, 3, 22, 5, 'rgba(0,0,0,0.65098)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1534px', '4221px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Ayuda_edgeActions.js");
})("EDGE-13904317");
