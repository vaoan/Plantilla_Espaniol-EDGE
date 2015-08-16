/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("body").on("EDGE_Recurso_sendPreviousData", function (evt) {
    console.log("R6 GET data", evt, EDGE_Plantilla.temp_scorm);
    var stage = $(evt.sym.getComposition().getStage().ele);
    stage.prop("ed_attempts", evt.attempts);
});

$("body").on("EDGE_Recurso_postSubmitApplied", function (evt) {
    console.log("R6 previous data", evt);
    var stage = $(evt.sym.getComposition().getStage().ele);
    
    stage.prop("ed_attempts", evt.attempts);

    send_to(evt);
});

function send_to(evt) {
    switch (evt.send_to) {
        case "try_again":
            evt.sym.play("incorrecto");
            break;
        case "failed":
            evt.sym.play("respuestas");
            break;
        case "correct":
            evt.sym.play("corecto");
            break;
        case "next":
            evt.sym.play();
            break;
    }
}
