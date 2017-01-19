function bcv_set() {
    cv = document.getElementById("cv").value;
    var expire = new Date();
    expire.setTime(expire.getTime() + 60 * 24 * 60 * 60 * 1000);

    document.cookie = "chiharu_cv=" + "CV:" + cv + "; expires=" + expire.toUTCString();
}
