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
                            rect: ['193px', '128px', '1534px', '954px', 'auto', 'auto'],
                            overflow: 'scroll',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'fondo_blanco',
                                symbolName: 'fondo_blanco',
                                type: 'rect',
                                rect: ['0', '-112px', '1534', '4221', 'auto', 'auto'],
                                transform: [[],[],[],['0.98317']]
                            },
                            {
                                id: 'contentCopy',
                                type: 'text',
                                rect: ['7px', '3px', '1520px', '4221px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700; font-size: 29px;\">Servicio Nacional de Aprendizaje SENA</span></p><p style=\"margin: 0px;\">&nbsp;</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Director General</span></p><p style=\"margin: 0px;\">Alfonso Prada Gil</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Secretario General</span></p><p style=\"margin: 0px;\">Milton Nuñez Paz</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Director del Sistema Nacional de Formación para el Trabajo</span></p><p style=\"margin: 0px;\">Juan Manuel Valdés Barcha</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Director de Promoción y Relaciones Corporativas</span></p><p style=\"margin: 0px;\">Juan Pablo Castro Morales</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Directora de Empleo, Trabajo y Emprendimiento</span></p><p style=\"margin: 0px;\">María Andrea Nieto Romero</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Director de Formación Profesional Integral</span></p><p style=\"margin: 0px;\">Mauricio Alvarado Hidalgo</p><p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Directora Administrativa y Financiera</span></p><p style=\"margin: 0px;\">Piedad Jiménez Montoya</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Director Jurídico</span></p><p style=\"margin: 0px;\">Juan Pablo Arenas Quiroz</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Director de Planeación y Direccionamiento Corporativo</span></p><p style=\"margin: 0px;\">Iván Ernesto Rojas Guzmán</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Jefe Oficina de Control Interno</span></p><p style=\"margin: 0px;\">Raúl Eduardo González Garzón</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Jefa de la Oficina de Control Interno Disciplinario</span></p><p style=\"margin: 0px;\">Dora Milena García Moreno</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Jefe de la Oficina de Sistemas</span></p><p style=\"margin: 0px;\">Carlos César Jiménez Aponte</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Jefe de la Oficina de Comunicaciones</span></p><p style=\"margin: 0px;\">Melba Pinto Gualdrón</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Coordinador del Grupo Gestión Operativa Integral de la Formación en Modalidad Presencial</span></p><p style=\"margin: 0px;\">Mario Javier Rincón Triana</p><p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Gerente Programa de Bilingüismo SENA</span></p><p style=\"margin: 0px;\">Olga Lucía Riveros Gaona</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Asesor de contenidos educativos Programa de Bilingüismo SENA</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Coordinador del proyecto</span></p><p style=\"margin: 0px;\">Mauricio Ríos Delgado</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Asesor técnico de programación e ingeniería del proyecto</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Programa de Bilingüismo SENA</span></p><p style=\"margin: 0px;\">William Augusto Duque Villalba</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Asesora pedagógica y curricular del proyecto</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Programa de Bilingüismo SENA</span></p><p style=\"margin: 0px;\">Dayana Cortés Medina</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Asesora pedagógica Programa de Bilingüismo</span></p><p style=\"margin: 0px;\">Astrid Oliveros López</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-size: 29px; font-weight: 700;\">eDistribution</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 29px; font-weight: 700;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Gerente del Proyecto</span></p><p style=\"margin: 0px;\">Alfredo Antonio Díaz Claro</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Directora Pedagógica</span></p><p style=\"margin: 0px;\">Nancy Carrillo Mora</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Coordinador de Producción</span></p><p style=\"margin: 0px;\">Mario Nel Villamizar Ochoa</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Coordinador de Adquisiciones</span></p><p style=\"margin: 0px;\">Gustavo Andrés Díaz Ochoa</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Project Manager</span></p><p style=\"margin: 0px;\">Catalina Ropero Acero</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Experta pedagógica</span></p><p style=\"margin: 0px;\">Paola Isabel Mejía Rodríguez</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Autores de contenido</span></p><p style=\"margin: 0px;\">Juan Camilo Gámez Porras</p><p style=\"margin: 0px;\">Emilio Alberto Godoy Montoya</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Diseñadores Instruccionales</span></p><p style=\"margin: 0px;\">Ana Vela Rodríguez  Velásquez</p><p style=\"margin: 0px;\">Emanuel Fernando Díaz Palencia</p><p style=\"margin: 0px;\">Jorge Edison Rojas Rodríguez</p><p style=\"margin: 0px;\">Fabio Rozo Berrera</p><p style=\"margin: 0px;\">Nancy Cruz Ulloa</p><p style=\"margin: 0px;\">Jeiner Leandro Velandia Sanabria</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Catalogadores</span></p><p style=\"margin: 0px;\">Katherin Vargas Polo</p><p style=\"margin: 0px;\">Yuri Emilse Correa Vivas</p><p style=\"margin: 0px;\">Johana Mancipe Delgado</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Especialista en Desarrollo de Contenido</span></p><p style=\"margin: 0px;\">Norma Constanza González La Rotta</p><p style=\"margin: 0px;\">Francisco Javier Hernández Sánchez</p><p style=\"margin: 0px;\">Leonardo Alberto Escobar Diaz</p><p style=\"margin: 0px;\">Ángela María López González</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Administradores de Plataforma LMS</span></p><p style=\"margin: 0px;\">Hernán Ramiro Pazmiño Santos</p><p style=\"margin: 0px;\">Sebastián Fernando Soler Mejía</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Diseñadores Gráficos</span></p><p style=\"margin: 0px;\">María AngéliK Bautista Vargas</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Desarrolladores Multimedia</span></p><p style=\"margin: 0px;\">Diana Carolina Bejarano Bejarano</p><p style=\"margin: 0px;\">Paola Andrea Cruz Espinoza</p><p style=\"margin: 0px;\">Cecilia Yinet Rodríguez López</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Ilustrador</span></p><p style=\"margin: 0px;\">Edwin Andrés Díaz Pinzón</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Realizador Audiovisual</span></p><p style=\"margin: 0px;\">Carolina Nova Torres</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Programador</span></p><p style=\"margin: 0px;\">Luis Gabriel Toscano Rodríguez</p><p style=\"margin: 0px;\">Heiner Wbeimar Angarita Maldonado&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [26, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["0px", "", "32px", "", "none"]
                            }]
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['193px', '32px', '1534px', '96px', 'auto', 'auto'],
                            borderRadius: ["15px 15px", "15px 15px", "0px 0px", "0px 0px"],
                            fill: ["rgba(255,255,255,1)",[270,[['rgba(62,35,86,1.00)',0],['rgba(76,44,109,1.00)',100]]]],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['272px', '50px', '242px', '54px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-family: source-sans-pro, sans-serif; font-weight: 700; font-size: 51px;\">Créditos</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'creditos',
                            type: 'image',
                            rect: ['218px', '54px', '54px', '50px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"creditos.png",'0px','0px']
                        },
                        {
                            id: 'btn_cerrar_creditos',
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
                            "eid12",
                            "top",
                            0,
                            0,
                            "linear",
                            "${fondo_blanco}",
                            '-112px',
                            '-112px'
                        ],
                        [
                            "eid13",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${fondo_blanco}",
                            '0.98317',
                            '0.98317'
                        ],
                        [
                            "eid14",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${fondo_blanco}",
                            '1',
                            '1'
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
                            type: 'text',
                            rect: ['5px', '0px', '1520px', '4221px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 700; font-size: 29px;\">Servicio Nacional de Aprendizaje SENA</span></p><p style=\"margin: 0px;\">&nbsp;</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Director General</span></p><p style=\"margin: 0px;\">Alfonso Prada Gil</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Secretario General</span></p><p style=\"margin: 0px;\">Milton Nuñez Paz</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Director del Sistema Nacional de Formación para el Trabajo</span></p><p style=\"margin: 0px;\">Juan Manuel Valdés Barcha</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Director de Promoción y Relaciones Corporativas</span></p><p style=\"margin: 0px;\">Juan Pablo Castro Morales</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Directora de Empleo, Trabajo y Emprendimiento</span></p><p style=\"margin: 0px;\">María Andrea Nieto Romero</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Director de Formación Profesional Integral</span></p><p style=\"margin: 0px;\">Mauricio Alvarado Hidalgo</p><p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Directora Administrativa y Financiera</span></p><p style=\"margin: 0px;\">Piedad Jiménez Montoya</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Director Jurídico</span></p><p style=\"margin: 0px;\">Juan Pablo Arenas Quiroz</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Director de Planeación y Direccionamiento Corporativo</span></p><p style=\"margin: 0px;\">Iván Ernesto Rojas Guzmán</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Jefe Oficina de Control Interno</span></p><p style=\"margin: 0px;\">Raúl Eduardo González Garzón</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Jefa de la Oficina de Control Interno Disciplinario</span></p><p style=\"margin: 0px;\">Dora Milena García Moreno</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Jefe de la Oficina de Sistemas</span></p><p style=\"margin: 0px;\">Carlos César Jiménez Aponte</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Jefe de la Oficina de Comunicaciones</span></p><p style=\"margin: 0px;\">Melba Pinto Gualdrón</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Coordinador del Grupo Gestión Operativa Integral de la Formación en Modalidad Presencial</span></p><p style=\"margin: 0px;\">Mario Javier Rincón Triana</p><p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Gerente Programa de Bilingüismo SENA</span></p><p style=\"margin: 0px;\">Olga Lucía Riveros Gaona</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Asesor de contenidos educativos Programa de Bilingüismo SENA</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Coordinador del proyecto</span></p><p style=\"margin: 0px;\">Mauricio Ríos Delgado</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Asesor técnico de programación e ingeniería del proyecto</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Programa de Bilingüismo SENA</span></p><p style=\"margin: 0px;\">William Augusto Duque Villalba</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Asesora pedagógica y curricular del proyecto</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Programa de Bilingüismo SENA</span></p><p style=\"margin: 0px;\">Dayana Cortés Medina</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Asesora pedagógica Programa de Bilingüismo</span></p><p style=\"margin: 0px;\">Astrid Oliveros López</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-size: 29px; font-weight: 700;\">eDistribution</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 29px; font-weight: 700;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Gerente del Proyecto</span></p><p style=\"margin: 0px;\">Alfredo Antonio Díaz Claro</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Directora Pedagógica</span></p><p style=\"margin: 0px;\">Nancy Carrillo Mora</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Coordinador de Producción</span></p><p style=\"margin: 0px;\">Mario Nel Villamizar Ochoa</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Coordinador de Adquisiciones</span></p><p style=\"margin: 0px;\">Gustavo Andrés Díaz Ochoa</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Project Manager</span></p><p style=\"margin: 0px;\">Catalina Ropero Acero</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Experta pedagógica</span></p><p style=\"margin: 0px;\">Paola Isabel Mejía Rodríguez</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Autores de contenido</span></p><p style=\"margin: 0px;\">Juan Camilo Gámez Porras</p><p style=\"margin: 0px;\">Emilio Alberto Godoy Montoya</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Diseñadores Instruccionales</span></p><p style=\"margin: 0px;\">Ana Vela Rodríguez  Velásquez</p><p style=\"margin: 0px;\">Emanuel Fernando Díaz Palencia</p><p style=\"margin: 0px;\">Jorge Edison Rojas Rodríguez</p><p style=\"margin: 0px;\">Fabio Rozo Berrera</p><p style=\"margin: 0px;\">Nancy Cruz Ulloa</p><p style=\"margin: 0px;\">Jeiner Leandro Velandia Sanabria</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Catalogadores</span></p><p style=\"margin: 0px;\">Katherin Vargas Polo</p><p style=\"margin: 0px;\">Yuri Emilse Correa Vivas</p><p style=\"margin: 0px;\">Johana Mancipe Delgado</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Especialista en Desarrollo de Contenido</span></p><p style=\"margin: 0px;\">Norma Constanza González La Rotta</p><p style=\"margin: 0px;\">Francisco Javier Hernández Sánchez</p><p style=\"margin: 0px;\">Leonardo Alberto Escobar Diaz</p><p style=\"margin: 0px;\">Ángela María López González</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Administradores de Plataforma LMS</span></p><p style=\"margin: 0px;\">Hernán Ramiro Pazmiño Santos</p><p style=\"margin: 0px;\">Sebastián Fernando Soler Mejía</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Diseñadores Gráficos</span></p><p style=\"margin: 0px;\">María AngéliK Bautista Vargas</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Desarrolladores Multimedia</span></p><p style=\"margin: 0px;\">Diana Carolina Bejarano Bejarano</p><p style=\"margin: 0px;\">Paola Andrea Cruz Espinoza</p><p style=\"margin: 0px;\">Cecilia Yinet Rodríguez López</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Ilustrador</span></p><p style=\"margin: 0px;\">Edwin Andrés Díaz Pinzón</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Realizador Audiovisual</span></p><p style=\"margin: 0px;\">Carolina Nova Torres</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">Programador</span></p><p style=\"margin: 0px;\">Luis Gabriel Toscano Rodríguez</p><p style=\"margin: 0px;\">Heiner Wbeimar Angarita Maldonado&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p>',
                            id: 'content',
                            textStyle: ['0px', '', '32px', '', 'none'],
                            align: 'center',
                            font: ['source-sans-pro, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
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
                            rect: ['0px', '23px', '1534px', '4198px', 'auto', 'auto'],
                            borderRadius: ['17px 17px', '17px 17px', '17px 17px', '17px 17px'],
                            boxShadow: ['', 3, 3, 22, 5, 'rgba(0,0,0,0.65098)'],
                            id: 'Fondo_blanco',
                            stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Creditos_edgeActions.js");
})("EDGE-13904317");
