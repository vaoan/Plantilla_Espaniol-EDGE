/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("body").on("EDGE_Recurso_sendPreviousData EDGE_Recurso_postSubmitApplied", function (evt) {
    var stage = $(evt.sym.getComposition().getStage().ele);
    console.log("R6 previous data", evt);
    stage.prop("ed_attempts", evt.attempts);

    
});