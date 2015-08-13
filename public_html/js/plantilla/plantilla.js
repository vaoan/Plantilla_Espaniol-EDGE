/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("body").on("EDGE_Container_loaded", function () {
    //document.body.style.background = "url('images/r1.png') 50% 50% / cover no-repeat gray";
    $("html").css({
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "background-position": "center center",
        "background": "url('images/r1.png') 50% 50% / cover no-repeat gray"
    });
    
    $("body").css({
        overflow : "hidden",
        //"background": "rgba(0,0,0,0.5)"
    });
});