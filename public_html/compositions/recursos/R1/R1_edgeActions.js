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
         $("body").trigger({
                type: "EDGE_Container_loaded",
                sym: sym
            });

      });
      //Edge binding end

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_empezar}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         parent.$(parent.document).trigger({
                         type: 'EDGE_Plantilla_ClosePopup',
                         sym: sym,
                         evt: e
                     });

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

   //=========================================================
   
   //Edge symbol: 'overlay_portada'
   (function(symbolName) {   
   
   })("overlay_portada");
   //Edge symbol end:'overlay_portada'

   //=========================================================
   
   //Edge symbol: 'btn_empezar'
   (function(symbolName) {   
   
   })("btn_empezar");
   //Edge symbol end:'btn_empezar'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-7659645");