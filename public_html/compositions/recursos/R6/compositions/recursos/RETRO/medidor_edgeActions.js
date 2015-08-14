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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // introducir código aquí
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'txt_puntaje'
   (function(symbolName) {   
   
   })("txt_puntaje");
   //Edge symbol end:'txt_puntaje'

   //=========================================================
   
   //Edge symbol: 'text_percent'
   (function(symbolName) {   
   
   })("text_percent");
   //Edge symbol end:'text_percent'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-23573250");