
var ua = navigator.userAgent.toLowerCase();
var ver = navigator.appVersion.toLowerCase();

// IE(11以外)
var isMSIE = (ua.indexOf('msie') > -1) && (ua.indexOf('opera') == -1);
// IE6
var isIE6 = isMSIE && (ver.indexOf('msie 6.') > -1);
// IE7
var isIE7 = isMSIE && (ver.indexOf('msie 7.') > -1);
// IE8
var isIE8 = isMSIE && (ver.indexOf('msie 8.') > -1);
// IE9
var isIE9 = isMSIE && (ver.indexOf('msie 9.') > -1);
// IE10
var isIE10 = isMSIE && (ver.indexOf('msie 10.') > -1);
// IE11
var isIE11 = (ua.indexOf('trident/7') > -1);
// IE
var isIE = isMSIE || isIE11;


// 使用例
if(isIE) {
    location.href = "browser/nbg.html";
}
if(isIE6) {
    location.href = "browser/nbg.html";
}
if(isIE7) {
    location.href = "browser/nbg.html";
}
if(isIE8) {
    location.href = "browser/nbg.html";
}
if(isIE9) {
    location.href = "browser/nbg.html";
}
if(isIE10) {
    location.href = "browser/nbg.html";
}
if(isIE11) {
    location.href = "browser/nbg.html";
}
