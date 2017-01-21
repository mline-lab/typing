var check = 0;

window.onload = function() {
  a_1 = document.getElementById("a_1");
  a_2 = document.getElementById("a_2");
  a_3 = document.getElementById("a_3");
  a_4 = document.getElementById("a_4");
  a_5 = document.getElementById("a_5");

  li_1 = document.getElementById("li_1");
  li_2 = document.getElementById("li_2");
  li_3 = document.getElementById("li_3");
  li_4 = document.getElementById("li_4");
  li_5 = document.getElementById("li_5");
}

function on_story() {
  if (check == 0) {
    check = 1;
    li_1.textContent = "BACK";
    li_2.textContent = "Coming Soon";
    li_3.textContent = "楓";
    li_4.textContent = "Coming Soon";
    li_5.textContent = "弥生";
    a_2.href = "#";
    a_3.href = "STORY/";
    a_4.href = "#";
    a_5.href = "STORY_yayoi/";
    a_2.className="chiharu_story";
    a_3.className="kaede_story";
    a_4.className="yukino_story";
    a_5.className="yayoi_story";
  } else {
    check = 0;
    li_1.textContent = "ストーリー";
    li_2.textContent = "ノーマル";
    li_3.textContent = "コレクト";
    li_4.textContent = "スピード";
    li_5.textContent = "ノーミス";
    a_2.href = "NORMAL/";
    a_3.href = "CORRECT/";
    a_4.href = "SPEED/";
    a_5.href = "NOMISS/";
    a_2.className="normal_typing";
    a_3.className="correct_typing";
    a_4.className="speed_typing";
    a_5.className="nomiss_typing";
  }

}
