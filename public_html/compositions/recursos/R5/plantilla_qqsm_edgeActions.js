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
         
         inicializarPickMany(sym);
         
         // Ocultar un elemento 
         sym.$("ayuda_publico_1").hide();
         sym.$("ayuda_llamada_1").hide();
         
         

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Submit}", "click", function(sym, e) {
         do_submit(sym);

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ayuda_01}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         do_50_50(sym);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ayuda_2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         do_publico(sym)

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'TIMER_CONTAINER'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
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

   //=========================================================
   
   //Edge symbol: 'btn_enviar'
   (function(symbolName) {   
   
   })("Submit");
   //Edge symbol end:'Submit'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'btn_enviar_1'
   (function(symbolName) {   
   
   })("btn_audio");
   //Edge symbol end:'btn_audio'

   //=========================================================
   
   //Edge symbol: 'ayuda_1'
   (function(symbolName) {   
   
   })("ayuda_01");
   //Edge symbol end:'ayuda_01'

   //=========================================================
   
   //Edge symbol: 'PICK_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("PICK_1");
   //Edge symbol end:'PICK_1'

   //=========================================================
   
   //Edge symbol: 'PICK_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("PICK_2");
   //Edge symbol end:'PICK_2'

   //=========================================================
   
   //Edge symbol: 'PICK_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("PICK_3");
   //Edge symbol end:'PICK_3'

   //=========================================================
   
   //Edge symbol: 'PICK_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("PICK_4");
   //Edge symbol end:'PICK_4'

   //=========================================================
   
   //Edge symbol: 'margen_inferior'
   (function(symbolName) {   
   
   })("margen_inferior");
   //Edge symbol end:'margen_inferior'

   //=========================================================
   
   //Edge symbol: 'margen_superior'
   (function(symbolName) {   
   
   })("margen_superior");
   //Edge symbol end:'margen_superior'

   //=========================================================
   
   //Edge symbol: 'espacios_texto'
   (function(symbolName) {   
   
   })("espacios_texto");
   //Edge symbol end:'espacios_texto'

   //=========================================================
   
   //Edge symbol: 'btn_audio_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();
         sym.$("audiomp3_1")[0].pause();
         sym.$("audiomp3_1")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8671, function(sym, e) {
         // introducir código aquí
         sym.play("stop");

      });
      //Edge binding end

   })("btn_audio_1");
   //Edge symbol end:'btn_audio_1'

   //=========================================================
   
   //Edge symbol: 'ayuda'
   (function(symbolName) {   
   
   })("publico");
   //Edge symbol end:'publico'

   //=========================================================
   
   //Edge symbol: 'llamada'
   (function(symbolName) {   
   
   })("llamada");
   //Edge symbol end:'llamada'

   //=========================================================
   
   //Edge symbol: 'contenedor_externo'
   (function(symbolName) {   
   
   })("contenedor_externo");
   //Edge symbol end:'contenedor_externo'

   //=========================================================
   
   //Edge symbol: 'qqsm_1'
   (function(symbolName) {   
   
   })("qqsm_1");
   //Edge symbol end:'qqsm_1'

   //=========================================================
   
   //Edge symbol: 'qqsm_2'
   (function(symbolName) {   
   
   })("qqsm_2");
   //Edge symbol end:'qqsm_2'

   //=========================================================
   
   //Edge symbol: 'qqsm_3'
   (function(symbolName) {   
   
   })("qqsm_3");
   //Edge symbol end:'qqsm_3'

   //=========================================================
   
   //Edge symbol: 'qqsm_4'
   (function(symbolName) {   
   
   })("qqsm_4");
   //Edge symbol end:'qqsm_4'

   //=========================================================
   
   //Edge symbol: 'qqsm_5'
   (function(symbolName) {   
   
   })("qqsm_5");
   //Edge symbol end:'qqsm_5'

   //=========================================================
   
   //Edge symbol: 'qqsm_6'
   (function(symbolName) {   
   
   })("qqsm_6");
   //Edge symbol end:'qqsm_6'

   //=========================================================
   
   //Edge symbol: 'qqsm_correct'
   (function(symbolName) {   
   
   })("qqsm_correct");
   //Edge symbol end:'qqsm_correct'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-17298671");