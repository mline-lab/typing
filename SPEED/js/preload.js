window.onload = function() {

// 読み込んだ数カウント
var imgCnt = 0;

// イメージオブジェクト
var Img = new Array();

// 読み込む画像
var IMG = new Array(
'img/story/budou_default.png',
'img/story/budou_default_dmg.png',
'img/story/kaede_atk.png',
'img/story/kaede_default.png',
'img/story/kaede_miss.png',
'img/story/kaede-atk2-animation.png',
'img/story/kaede-atk3-animation.png',
'img/story/kaede-atk3-animation.png',
'img/story/kaede-atk4-animation.png'
);

//
for(i = 0; i < IMG.length; i++){

Img[i] = new Image();
Img[i].src = IMG[i];

Img[i].onload = function() {
// 読み込んだカウントアップ
imgCnt++;

}
