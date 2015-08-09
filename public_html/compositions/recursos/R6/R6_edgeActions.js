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
         // introducir código aquí
         // Ocultar un elemento 
         sym.$("contenedor_2").hide();
         
         // Ocultar un elemento 
         sym.$("contenedor_3").hide();
         
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         // Mostrar un elemento 
         sym.$("contenedor_2").show();
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_adelante}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_atras}", "click", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // introducir código aquí
         // Mostrar un elemento 
         sym.$("contenedor_3").show();
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // Insertar código para ejecutarse cuando el símbolo se crea aquí
         
         $("body").trigger({
             type: "ed_init_data",
             sym: sym
         });
         
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'timer'
   (function(symbolName) {   
   
   })("timer");
   //Edge symbol end:'timer'

   //=========================================================
   
   //Edge symbol: 'contenedor_1'
   (function(symbolName) {   
   
   })("contenedor_1");
   //Edge symbol end:'contenedor_1'

   //=========================================================
   
   //Edge symbol: 'btn_adelante'
   (function(symbolName) {   
   
   })("btn_adelante");
   //Edge symbol end:'btn_adelante'

   //=========================================================
   
   //Edge symbol: 'btn_atras'
   (function(symbolName) {   
   
   })("btn_atras");
   //Edge symbol end:'btn_atras'

   //=========================================================
   
   //Edge symbol: 'contenedor_2'
   (function(symbolName) {   
   
   })("contenedor_2");
   //Edge symbol end:'contenedor_2'

   //=========================================================
   
   //Edge symbol: 'contenedor_3'
   (function(symbolName) {   
   
   })("contenedor_3");
   //Edge symbol end:'contenedor_3'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-301496212");