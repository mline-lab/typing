window.onload = function{
  message = document.getElementById("message");
  kagerou();
}

function kagerou(){
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
      message.textContent = "あなたの使用ブラウザはIEです。";
  }
  if(isIE6) {
      message.textContent = "あなたの使用ブラウザはIE6です。";
  }
  if(isIE7) {
      message.textContent = "あなたの使用ブラウザはIE7です。";
  }
  if(isIE8) {
      message.textContent = "あなたの使用ブラウザはIE8です。";
  }
  if(isIE9) {
      message.textContent = "あなたの使用ブラウザはIE9です。";
  }
  if(isIE10) {
      message.textContent = "あなたの使用ブラウザはIE10です。";
  }
  if(isIE11) {
      message.textContent = "あなたの使用ブラウザはIE11です。";
  }
}
