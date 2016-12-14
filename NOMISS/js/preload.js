var _imgArray = ["budou_default.png","budou_default_dmg","kaede_atk.png","kaede_default.png","kaede_miss.png","kaede-atk2-animation.png","kaede-atk3-animation.png","kaede-atk4-animation.png"];

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
