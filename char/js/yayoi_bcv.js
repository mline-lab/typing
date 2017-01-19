window.onload = function() {
  var result = null;

  var cookieName = "yayoi_cv" + '=';
  var allcookies = document.cookie;

  var position = allcookies.indexOf(cookieName);
  if (position != -1) {
      var startIndex = position + cookieName.length;

      var endIndex = allcookies.indexOf(';', startIndex);
      if (endIndex == -1) {
          endIndex = allcookies.length;
      }
      result = decodeURIComponent(allcookies.substring(startIndex, endIndex));
  }
  document.getElementById("cv").value = result;
}

function bcv_set() {
    cv = document.getElementById("cv").value;
    var expire = new Date();
    expire.setTime(expire.getTime() + 60 * 24 * 60 * 60 * 1000);

    document.cookie = "yayoi_cv=" + cv + "; expires=" + expire.toUTCString();
}
