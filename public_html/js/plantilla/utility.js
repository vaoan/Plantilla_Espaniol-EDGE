/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function isEmpty(obj) {
// null and undefined are "empty"
    if (obj === null)
        return true;
    if (typeof obj === 'undefined')
        return true;
    if (typeof obj === 'boolean') {
        return false;
    }
// Assume if it has a length property with a non-zero value
// that that property is correct.
    if (obj.length > 0)
        return false;
    if (obj.length === 0)
        return true;
// Otherwise, does it have any properties of its own?
// Note that this doesn't handle
// toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key))
            return false;
    }
    return true;
}

function merge_options(obj1, obj2) {
    var obj3 = {};
    for (var attrname in obj1) {
        obj3[attrname] = obj1[attrname];
    }
    for (var attrname in obj2) {
        obj3[attrname] = obj2[attrname];
    }
    return obj3;
}

jQuery.fn.center = function (realScale) {
    this.css("position", "absolute");

    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight() * realScale) / 2) +
            $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth() * realScale) / 2) +
            $(window).scrollLeft()) + "px");

    return this;
};

function WhatBrowser() {

    var browser = (!!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) ? "Opera" :
            typeof InstallTrigger !== 'undefined' ? "Firefox" :
            (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0) ? "Safari" :
            !!window.chrome ? "Chrome" : "IE";
    console.log(browser);

    return browser;
}

function prevent_scroll(jqueryObject) {
    jqueryObject.scrollTop();

    //Fixing IE EDGE

    // lock scroll position, but retain settings for later
    var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    ];
    var html = jqueryObject; // it would make more sense to apply this to body, but IE7 won't have that
    html.data('scroll-position', scrollPosition);
    html.data('previous-overflow', html.css('overflow'));
    html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);


    // un-lock scroll position
    /*var html = jqueryObject;
     var scrollPosition = html.data('scroll-position');
     html.css('overflow', html.data('previous-overflow'));
     window.scrollTo(scrollPosition[0], scrollPosition[1]);*/
}
