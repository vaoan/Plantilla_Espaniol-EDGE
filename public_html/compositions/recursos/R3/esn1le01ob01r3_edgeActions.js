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
         // Insertar código para ejecutarse cuando el símbolo se crea aquí
         inicializarDragAndDrop(sym);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Submit}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         checkAnswersDragAndDrop(sym);

      });
      //Edge binding end

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'DROP_1'
   (function(symbolName) {   
   
   })("DROP_1");
   //Edge symbol end:'DROP_1'

   //=========================================================
   
   //Edge symbol: 'DROP_2'
   (function(symbolName) {   
   
   })("DROP_2");
   //Edge symbol end:'DROP_2'

   //=========================================================
   
   //Edge symbol: 'DRAG_1'
   (function(symbolName) {   
   
   })("DRAG_1");
   //Edge symbol end:'DRAG_1'

   //=========================================================
   
   //Edge symbol: 'Submit'
   (function(symbolName) {   
   
   })("Submit");
   //Edge symbol end:'Submit'

   //=========================================================
   
   //Edge symbol: 'TIMER_CONTAINER'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("TIMER_CONTAINER");
   //Edge symbol end:'TIMER_CONTAINER'

   //=========================================================
   
   //Edge symbol: 'btn_enviar'
   (function(symbolName) {   
   
   })("btn_enviar");
   //Edge symbol end:'btn_enviar'

   //=========================================================
   
   //Edge symbol: 'btn_enviar_1'
   (function(symbolName) {   
   
   })("btn_audio");
   //Edge symbol end:'btn_audio'

   //=========================================================
   
   //Edge symbol: 'DRAG_2'
   (function(symbolName) {   
   
      })("DRAG_2");
   //Edge symbol end:'DRAG_2'

   //=========================================================
   
   //Edge symbol: 'DRAG_3'
   (function(symbolName) {   
   
      })("DRAG_3");
   //Edge symbol end:'DRAG_3'

   //=========================================================
   
   //Edge symbol: 'DRAG_4'
   (function(symbolName) {   
   
      })("DRAG_4");
   //Edge symbol end:'DRAG_4'

   //=========================================================
   
   //Edge symbol: 'DRAG_5'
   (function(symbolName) {   
   
      })("DRAG_5");
   //Edge symbol end:'DRAG_5'

   //=========================================================
   
   //Edge symbol: 'DRAG_6'
   (function(symbolName) {   
   
      })("DRAG_6");
   //Edge symbol end:'DRAG_6'

   //=========================================================
   
   //Edge symbol: 'DRAG_7'
   (function(symbolName) {   
   
      })("DRAG_7");
   //Edge symbol end:'DRAG_7'

   //=========================================================
   
   //Edge symbol: 'DRAG_8'
   (function(symbolName) {   
   
      })("DRAG_8");
   //Edge symbol end:'DRAG_8'

   //=========================================================
   
   //Edge symbol: 'DRAG_9'
   (function(symbolName) {   
   
      })("DRAG_9");
   //Edge symbol end:'DRAG_9'

   //=========================================================
   
   //Edge symbol: 'DRAG_10'
   (function(symbolName) {   
   
      })("DRAG_10");
   //Edge symbol end:'DRAG_10'

   //=========================================================
   
   //Edge symbol: 'DRAG_11'
   (function(symbolName) {   
   
      })("DRAG_11");
   //Edge symbol end:'DRAG_11'

   //=========================================================
   
   //Edge symbol: 'DRAG_12'
   (function(symbolName) {   
   
      })("DRAG_12");
   //Edge symbol end:'DRAG_12'

   //=========================================================
   
   //Edge symbol: 'DRAG_13'
   (function(symbolName) {   
   
      })("DRAG_13");
   //Edge symbol end:'DRAG_13'

   //=========================================================
   
   //Edge symbol: 'DRAG_14'
   (function(symbolName) {   
   
      })("DRAG_14");
   //Edge symbol end:'DRAG_14'

   //=========================================================
   
   //Edge symbol: 'DRAG_15'
   (function(symbolName) {   
   
      })("DRAG_15");
   //Edge symbol end:'DRAG_15'

   //=========================================================
   
   //Edge symbol: 'DRAG_16'
   (function(symbolName) {   
   
      })("DRAG_16");
   //Edge symbol end:'DRAG_16'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-6342212");