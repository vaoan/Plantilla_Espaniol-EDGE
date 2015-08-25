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
      
      
      Symbol.bindElementAction(compId, symbolName, "${submit}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.getSymbol("ruleta").play("giro04");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_escuchar}", "click", function(sym, e) {
         
         // Reproducir una pista de audio 
         sym.$("esn1le01ob04re5au04mesa")[0].play();
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'btn_enviar_1'
   (function(symbolName) {   
   
   })("btn_escuchar");
   //Edge symbol end:'btn_escuchar'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'btn_enviar'
   (function(symbolName) {   
   
   })("submit");
   //Edge symbol end:'submit'

   //=========================================================
   
   //Edge symbol: 'input_text_box'
   (function(symbolName) {   
   
   })("input_text_box");
   //Edge symbol end:'input_text_box'

   //=========================================================
   
   //Edge symbol: 'wheel'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("ruleta");
   //Edge symbol end:'ruleta'

   //=========================================================
   
   //Edge symbol: 'box_ruleta'
   (function(symbolName) {   
   
   })("box_ruleta");
   //Edge symbol end:'box_ruleta'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-23672294");