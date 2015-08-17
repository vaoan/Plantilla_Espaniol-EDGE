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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();
         pagina_actual("2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         pagina_actual("1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         pagina_actual("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();
         pagina_actual("4");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();
         pagina_actual("5");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnInicio}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Submit}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'btnTimer'
   (function(symbolName) {   
   
   })("btnInicio");
   //Edge symbol end:'btnInicio'

   //=========================================================
   
   //Edge symbol: 'trivia_portada'
   (function(symbolName) {   
   
   })("trivia_portada");
   //Edge symbol end:'trivia_portada'

   //=========================================================
   
   //Edge symbol: 'trivia_1'
   (function(symbolName) {   
   
   })("trivia_1");
   //Edge symbol end:'trivia_1'

   //=========================================================
   
   //Edge symbol: 'trivia_2'
   (function(symbolName) {   
   
   })("trivia_2");
   //Edge symbol end:'trivia_2'

   //=========================================================
   
   //Edge symbol: 'trivia_3'
   (function(symbolName) {   
   
   })("trivia_3");
   //Edge symbol end:'trivia_3'

   //=========================================================
   
   //Edge symbol: 'trivia_4'
   (function(symbolName) {   
   
   })("trivia_4");
   //Edge symbol end:'trivia_4'

   //=========================================================
   
   //Edge symbol: 'trivia_5'
   (function(symbolName) {   
   
   })("trivia_5");
   //Edge symbol end:'trivia_5'

   //=========================================================
   
   //Edge symbol: 'trivia_6'
   (function(symbolName) {   
   
   })("trivia_respuesta");
   //Edge symbol end:'trivia_respuesta'

   //=========================================================
   
   //Edge symbol: 'TIMER_CONTAINER'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.play("alerta");

      });
      //Edge binding end

   })("TIMER_CONTAINER");
   //Edge symbol end:'TIMER_CONTAINER'

   //=========================================================
   
   //Edge symbol: 'Submit'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Submit");
   //Edge symbol end:'Submit'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-10633996");