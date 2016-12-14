var _imgArray = ["img/story/budou_default.png","img/story/budou_default_dmg","img/story/kaede_atk.png","img/story/kaede_default.png","img/story/kaede_miss.png","img/story/kaede-atk2-animation.png","img/story/kaede-atk3-animation.png","img/story/kaede-atk4-animation.png"];

loopImageLoader(_imgArray)

function loopImageLoader(i){
  var image1 = new Image();
  image1.src = _imgArray[i];
  image1.onload = function(){
    i++;
    if(_imgArray.length != i){
      //alert("nextnum : " + i);//debug
      loopImageLoader(i);
    }
  }
}
loopImageLoader(0);
