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
      
      
      Symbol.bindElementAction(compId, symbolName, "${btn_audio}", "mouseover", function(sym, e) {
         sym.getSymbol("Tool_audio").play("b");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_audio}", "mouseout", function(sym, e) {
         sym.getSymbol("Tool_audio").play("a");
         

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${btnR_7}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         cambiarColorBordes(sym, 7);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnR_7}", "mouseover", function(sym, e) {
         sym.getSymbol("rec_7").play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnR_7}", "mouseout", function(sym, e) {
         sym.getSymbol("rec_7").play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnR_6}", "mouseout", function(sym, e) {
         sym.getSymbol("rec_6").play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnR_5}", "mouseout", function(sym, e) {
         sym.getSymbol("rec_5").play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnR_4}", "mouseout", function(sym, e) {
         sym.getSymbol("rec_4").play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnR_3}", "mouseout", function(sym, e) {
         sym.getSymbol("rec_3").play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnR_2}", "mouseout", function(sym, e) {
         sym.getSymbol("rec_2").play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnR_1}", "mouseout", function(sym, e) {
         sym.getSymbol("rec_1").play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_vocabulario2}", "mouseout", function(sym, e) {
         sym.getSymbol("vocabulario").play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_puntoApren}", "mouseout", function(sym, e) {
         sym.getSymbol("punto_A").play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_accesibilidad}", "mouseout", function(sym, e) {
         sym.getSymbol("Tool_accesibilidad").play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_info}", "mouseout", function(sym, e) {
         sym.getSymbol("Tool_info").play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_creditos}", "mouseout", function(sym, e) {
         sym.getSymbol("Tool_creditos").play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_ayuda}", "mouseout", function(sym, e) {
         sym.getSymbol("Tool_ayuda").play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_full}", "mouseout", function(sym, e) {
         sym.getSymbol("Tool_full").play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_puntoApren}", "mouseover", function(sym, e) {
         sym.getSymbol("punto_A").play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_vocabulario2}", "mouseover", function(sym, e) {
         sym.getSymbol("vocabulario").play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnR_1}", "mouseover", function(sym, e) {
         sym.getSymbol("rec_1").play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnR_2}", "mouseover", function(sym, e) {
         sym.getSymbol("rec_2").play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnR_3}", "mouseover", function(sym, e) {
         sym.getSymbol("rec_3").play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnR_4}", "mouseover", function(sym, e) {
         sym.getSymbol("rec_4").play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnR_5}", "mouseover", function(sym, e) {
         sym.getSymbol("rec_5").play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnR_6}", "mouseover", function(sym, e) {
         sym.getSymbol("rec_6").play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_accesibilidad}", "mouseover", function(sym, e) {
         sym.getSymbol("Tool_accesibilidad").play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_info}", "mouseover", function(sym, e) {
         sym.getSymbol("Tool_info").play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_ayuda}", "mouseover", function(sym, e) {
         sym.getSymbol("Tool_ayuda").play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_creditos}", "mouseover", function(sym, e) {
         sym.getSymbol("Tool_creditos").play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_full}", "mouseover", function(sym, e) {
         sym.getSymbol("Tool_full").play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnR_6}", "click", function(sym, e) {
         cambiarColorBordes(sym, 6);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnR_5}", "click", function(sym, e) {
         cambiarColorBordes(sym, 5);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnR_4}", "click", function(sym, e) {
         cambiarColorBordes(sym, 4);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnR_3}", "click", function(sym, e) {
         cambiarColorBordes(sym, 3);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnR_2}", "click", function(sym, e) {
         cambiarColorBordes(sym, 2);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnR_1}", "click", function(sym, e) {
         cambiarColorBordes(sym, 1);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Tool_audio'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Tool_audio");
   //Edge symbol end:'Tool_audio'

   //=========================================================
   
   //Edge symbol: 'btn_audio'
   (function(symbolName) {   
   
   })("btn_audio");
   //Edge symbol end:'btn_audio'

   //=========================================================
   
   //Edge symbol: 'btnR_7'
   (function(symbolName) {   
   
   })("btnR_7");
   //Edge symbol end:'btnR_7'

   //=========================================================
   
   //Edge symbol: 'rec_6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rec_6");
   //Edge symbol end:'rec_6'

   //=========================================================
   
   //Edge symbol: 'rec_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rec_2");
   //Edge symbol end:'rec_2'

   //=========================================================
   
   //Edge symbol: 'rec_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rec_3");
   //Edge symbol end:'rec_3'

   //=========================================================
   
   //Edge symbol: 'rec_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rec_4");
   //Edge symbol end:'rec_4'

   //=========================================================
   
   //Edge symbol: 'rec_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rec_5");
   //Edge symbol end:'rec_5'

   //=========================================================
   
   //Edge symbol: 'rec_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rec_1");
   //Edge symbol end:'rec_1'

   //=========================================================
   
   //Edge symbol: 'btnR_1'
   (function(symbolName) {   
   
      })("btnR_1");
   //Edge symbol end:'btnR_1'

   //=========================================================
   
   //Edge symbol: 'btnR_2'
   (function(symbolName) {   
   
      })("btnR_2");
   //Edge symbol end:'btnR_2'

   //=========================================================
   
   //Edge symbol: 'btnR_3'
   (function(symbolName) {   
   
      })("btnR_3");
   //Edge symbol end:'btnR_3'

   //=========================================================
   
   //Edge symbol: 'btnR_4'
   (function(symbolName) {   
   
      })("btnR_4");
   //Edge symbol end:'btnR_4'

   //=========================================================
   
   //Edge symbol: 'btnR_5'
   (function(symbolName) {   
   
      })("btnR_5");
   //Edge symbol end:'btnR_5'

   //=========================================================
   
   //Edge symbol: 'btnR_6'
   (function(symbolName) {   
   
      })("btnR_6");
   //Edge symbol end:'btnR_6'

   //=========================================================
   
   //Edge symbol: 'Tool_audio_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("Tool_creditos");
   //Edge symbol end:'Tool_creditos'

   //=========================================================
   
   //Edge symbol: 'Tool_audio_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("Tool_ayuda");
   //Edge symbol end:'Tool_ayuda'

   //=========================================================
   
   //Edge symbol: 'Tool_creditos_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("Tool_full");
   //Edge symbol end:'Tool_full'

   //=========================================================
   
   //Edge symbol: 'Tool_full_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("Tool_info");
   //Edge symbol end:'Tool_info'

   //=========================================================
   
   //Edge symbol: 'Tool_info_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("Tool_accesibilidad");
   //Edge symbol end:'Tool_accesibilidad'

   //=========================================================
   
   //Edge symbol: 'btn_audio_1'
   (function(symbolName) {   
   
      })("btn_full");
   //Edge symbol end:'btn_full'

   //=========================================================
   
   //Edge symbol: 'btn_full_1'
   (function(symbolName) {   
   
      })("btn_ayuda");
   //Edge symbol end:'btn_ayuda'

   //=========================================================
   
   //Edge symbol: 'btn_full_1'
   (function(symbolName) {   
   
      })("btn_creditos");
   //Edge symbol end:'btn_creditos'

   //=========================================================
   
   //Edge symbol: 'btn_creditos_1'
   (function(symbolName) {   
   
      })("btn_info");
   //Edge symbol end:'btn_info'

   //=========================================================
   
   //Edge symbol: 'btn_info_1'
   (function(symbolName) {   
   
      })("btn_accesibilidad");
   //Edge symbol end:'btn_accesibilidad'

   //=========================================================
   
   //Edge symbol: 'punto_A'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("punto_A");
   //Edge symbol end:'punto_A'

   //=========================================================
   
   //Edge symbol: 'vocabulario'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("vocabulario");
   //Edge symbol end:'vocabulario'

   //=========================================================
   
   //Edge symbol: 'btnR_8'
   (function(symbolName) {   
   
         })("btn_vocabulario");
   //Edge symbol end:'btn_vocabulario'

   //=========================================================
   
   //Edge symbol: 'btn_vocabulario_1'
   (function(symbolName) {   
   
         })("btn_puntoApren");
   //Edge symbol end:'btn_puntoApren'

   //=========================================================
   
   //Edge symbol: 'btnR7'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rec_7");
   //Edge symbol end:'rec_7'

   //=========================================================
   
   //Edge symbol: 'overlay'
   (function(symbolName) {   
   
   })("overlay");
   //Edge symbol end:'overlay'

   //=========================================================
   
   //Edge symbol: 'container_overlay'
   (function(symbolName) {   
   
   })("container_overlay");
   //Edge symbol end:'container_overlay'

   //=========================================================
   
   //Edge symbol: 'contenedor_home'
   (function(symbolName) {   
   
   })("contenedor_home");
   //Edge symbol end:'contenedor_home'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-7659645");