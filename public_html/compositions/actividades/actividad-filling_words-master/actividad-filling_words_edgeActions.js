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
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // Insertar código para ejecutarse cuando el símbolo se crea aquí - M'kay
         $('body').trigger({
            type: 'ed_send_data',
            sym: sym,
            evt: e
         });         
      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${btn_enviar2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         $('body').trigger({
            type: 'ed_check_activity',
            sym: sym,
            evt: e
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'text_1'
   (function(symbolName) {   
   
   })("text_1");
   //Edge symbol end:'text_1'

   //=========================================================
   
   //Edge symbol: 'text_2'
   (function(symbolName) {   
   
   })("text_2");
   //Edge symbol end:'text_2'

   //=========================================================
   
   //Edge symbol: 'text_3'
   (function(symbolName) {   
   
   })("text_3");
   //Edge symbol end:'text_3'

   //=========================================================
   
   //Edge symbol: 'btn_enviar'
   (function(symbolName) {   
   
   })("btn_enviar");
   //Edge symbol end:'btn_enviar'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-14164065");