/***********************
 * Acciones de composición de Adobe Edge Animate
 *
 * Editar este archivo con precaución, teniendo cuidado de conservar 
 * las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
 * capacidad de interactuar con estas acciones en Adobe Edge Animate
 *
 ***********************/
(function ($, Edge, compId) {
    var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

    //Edge symbol: 'stage'
    (function (symbolName) {




        Symbol.bindElementAction(compId, symbolName, "${descargable2}", "click", function (sym, e) {
            var stage = $(sym.getComposition().getStage().ele);
            window.open(stage.prop("ed_identify").pdf, "_blank");

        });
        //Edge binding end

    })("stage");
   //Edge symbol end:'stage'

    //=========================================================

    //Edge symbol: 'lectora'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("lectora");
   //Edge symbol end:'lectora'

    //=========================================================

    //Edge symbol: 'auditiva'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("auditiva");
   //Edge symbol end:'auditiva'

    //=========================================================

    //Edge symbol: 'escrita'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("escrita");
   //Edge symbol end:'escrita'

    //=========================================================

    //Edge symbol: 'oral'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("oral");
   //Edge symbol end:'oral'

    //=========================================================

    //Edge symbol: 'Skills'
    (function (symbolName) {

        Symbol.bindElementAction(compId, symbolName, "${Tool_lectora}", "mouseover", function (sym, e) {
            sym.getSymbol("lectora").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${Tool_lectora}", "mouseout", function (sym, e) {
            sym.getSymbol("lectora").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${Tool_escrita}", "mouseout", function (sym, e) {
            sym.getSymbol("escrita").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${Tool_escrita}", "mouseover", function (sym, e) {
            sym.getSymbol("escrita").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${Tool_auditiva}", "mouseout", function (sym, e) {
            sym.getSymbol("auditiva").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${Tool_auditiva}", "mouseover", function (sym, e) {
            sym.getSymbol("auditiva").play("b");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${Tool_oral}", "mouseout", function (sym, e) {
            sym.getSymbol("oral").play("a");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${Tool_oral}", "mouseover", function (sym, e) {
            sym.getSymbol("oral").play("b");

        });
        //Edge binding end

    })("Skills");
   //Edge symbol end:'Skills'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-31713253");