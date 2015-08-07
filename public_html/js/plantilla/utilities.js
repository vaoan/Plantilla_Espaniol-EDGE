// JavaScript Document
function cambiarColorBordes(sym, numRecurso) {
    for (var i = 1; i <= 7; i++) {
        if (i === numRecurso) {
            sym.getSymbol("rec_" + i).$("borde").css("background-color", "rgba(255,182,0,1.00)");
        }
        else
        {
            sym.getSymbol("rec_" + i).$("borde").css("background-color", "rgba(204,204,204,1.00)");
        }
    }
}
