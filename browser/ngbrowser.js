window.onload = function() {

  message = document.getElementById("message");

  // ブラウザのUAを小文字で取得
  var userAgent = window.navigator.userAgent.toLowerCase();

  // 一般的なブラウザ判定
  if (userAgent.indexOf('msie') != -1) {
    /* IE. */
    message.textContent = "あなたのブラウザは「IE」です。";
  } else if (userAgent.indexOf('chrome') != -1) {
    /* Google Chrome. */
    message.textContent = "あなたのブラウザは「Chrome」です。";
  } else if (userAgent.indexOf('firefox') != -1) {
    /* FireFox. */
    message.textContent = "あなたのブラウザは「Firefox」です。";
  } else if (userAgent.indexOf('safari') != -1) {
    /* Safari. */
    message.textContent = "あなたのブラウザは「Safari」です。";
  } else if (userAgent.indexOf('opera') != -1) {
    /* Opera. */
    message.textContent = "あなたのブラウザは「Opera」です。";
  } else if (userAgent.indexOf('gecko') != -1) {
    /*IE*/
    message.textContent = "あなたのブラウザは「IE」です。";
  } else {
    return false;
  }

}
