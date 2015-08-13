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

      

      

      Symbol.bindElementAction(compId, symbolName, "${Ellipse2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.getSymbol("CONTENEDOR").stop("A");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse2Copy}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.getSymbol("CONTENEDOR").stop("B");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse2Copy2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.getSymbol("CONTENEDOR").stop("C");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_audio}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         // Reproducir una pista de audio 
         sym.$("esn1le01ob01re3au1eme")[0].play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_audioCopy}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         // Reproducir una pista de audio 
         sym.$("esn1le01ob01re3au2pe")[0].play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_audioCopy2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir una pista de audio 
         sym.$("esn1le01ob01re3au3erre")[0].play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_audioCopy3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         // Reproducir una pista de audio 
         sym.$("esn1le01ob01re3au4ese")[0].play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_audioCopy4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir una pista de audio 
         sym.$("esn1le01ob01re3au5hache")[0].play();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Submit'
   (function(symbolName) {   
   
   })("Submit");
   //Edge symbol end:'Submit'

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
   
   //Edge symbol: 'CONTENEDOR'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("CONTENEDOR");
   //Edge symbol end:'CONTENEDOR'

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
   
   //Edge symbol: 'DROP_3'
   (function(symbolName) {   
   
   })("DROP_3");
   //Edge symbol end:'DROP_3'

   //=========================================================
   
   //Edge symbol: 'DROP_4'
   (function(symbolName) {   
   
   })("DROP_4");
   //Edge symbol end:'DROP_4'

   //=========================================================
   
   //Edge symbol: 'DROP_5'
   (function(symbolName) {   
   
   })("DROP_5");
   //Edge symbol end:'DROP_5'

   //=========================================================
   
   //Edge symbol: 'DRAG_1'
   (function(symbolName) {   
   
   })("DRAG_1");
   //Edge symbol end:'DRAG_1'

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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-6342212");