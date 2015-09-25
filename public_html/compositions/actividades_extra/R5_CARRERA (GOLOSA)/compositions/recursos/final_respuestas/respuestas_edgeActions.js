/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${lupa_5}", "click", function(sym, e) {
         sym.$("zoom_5").show();
         sym.$("lupa").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lupa_4}", "click", function(sym, e) {
         sym.$("zoom_4").show();
         sym.$("lupa").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lupa_3}", "click", function(sym, e) {
         sym.$("zoom_3").show();
         sym.$("lupa").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lupa_2}", "click", function(sym, e) {
         sym.$("zoom_2").show();
         sym.$("lupa").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lupa_1}", "click", function(sym, e) {
         sym.$("zoom_1").show();
         sym.$("lupa").hide();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'contenedorrespuestas'
   (function(symbolName) {   
   
   })("contenedorrespuestas");
   //Edge symbol end:'contenedorrespuestas'

   //=========================================================
   
   //Edge symbol: 'zoom_5'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${cerrar_lupa}", "click", function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("lupa").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Zona_clic}", "click", function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("lupa").show();

      });
      //Edge binding end

   })("zoom_5");
   //Edge symbol end:'zoom_5'

   //=========================================================
   
   //Edge symbol: 'cerrar_lupa'
   (function(symbolName) {   
   
   })("cerrar_lupa");
   //Edge symbol end:'cerrar_lupa'

   //=========================================================
   
   //Edge symbol: 'zoom_4'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${cerrar_lupa}", "click", function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("lupa").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Zona_clic}", "click", function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("lupa").show();

      });
      //Edge binding end

   })("zoom_4");
   //Edge symbol end:'zoom_4'

   //=========================================================
   
   //Edge symbol: 'zoom_3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${cerrar_lupa}", "click", function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("lupa").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Zona_clic}", "click", function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("lupa").show();

      });
      //Edge binding end

   })("zoom_3");
   //Edge symbol end:'zoom_3'

   //=========================================================
   
   //Edge symbol: 'zoom_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${cerrar_lupa}", "click", function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("lupa").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Zona_clic}", "click", function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("lupa").show();

      });
      //Edge binding end

   })("zoom_2");
   //Edge symbol end:'zoom_2'

   //=========================================================
   
   //Edge symbol: 'zoom_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${cerrar_lupa}", "click", function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         
         // Mostrar un elemento 
         sym.getComposition().getStage().$("lupa").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Zona_clic}", "click", function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("lupa").show();

      });
      //Edge binding end

   })("zoom_1");
   //Edge symbol end:'zoom_1'

   //=========================================================
   
   //Edge symbol: 'lupa'
   (function(symbolName) {   
   
   })("lupa");
   //Edge symbol end:'lupa'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-25832383");