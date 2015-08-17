/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

EDGE_Plantilla.btn_inicio = ["R6_portada", "btn_evaluemosCopy2"];

$(document).on("EDGE_Plantilla_creationComplete", function (evt) {
    buscar_sym(EDGE_Plantilla.plantilla_sym,
            EDGE_Plantilla.btn_inicio, true).show();
});

$("body").on("EDGE_Recurso_sendPreviousData EDGE_Recurso_postSubmitApplied", function (evt) {
    var stage = $(evt.sym.getComposition().getStage().ele);
    console.log("R6 previous data", evt);
    stage.prop("ed_attempts", evt.attempts);

    if (evt.block) {
        var sym = EDGE_Plantilla.plantilla_sym;
        //sym.stop("slide_final");
        
        console.log(EDGE_Plantilla.temp_scorm);

        var texto = buscar_sym(sym, ["text_percent"], true);
        
        var correct = 0, total = 0;
        $.each(EDGE_Plantilla.temp_scorm, function (key, value) {
            total++;
            if (value.estado === "correct") {
                correct++;
            }
        });
        
        var porc = parseInt((correct / total) * 100);
        var sec = (( (5 * porc) / 100) * 1000) + 3000;
        
        console.log("PROBANDO VALORES", porc, correct, total);

        texto.find("p").html(porc + "%");
        sym.stop(sec);
    }
});
