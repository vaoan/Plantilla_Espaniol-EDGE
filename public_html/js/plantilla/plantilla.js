/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("body").on("EDGE_Container_loaded", function (evt) {

    document.body.style.background = "url(http://www.globalasia.com/wp-content/uploads/2014/03/malaga.jpg) 50% 50% / cover no-repeat gray";
    $("body").css({
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "background-position": "center center"
    });
});