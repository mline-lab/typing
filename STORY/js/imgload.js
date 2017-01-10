window.onload = function() {
  //画像プリロード
  $(function() {    
      jQuery.preloadImages = function() {        
          for (var i = 0; i < arguments.length; i++) {            
              jQuery("<img>").attr("src", arguments[i]);        
          }    
      };

          
      $.preloadImages("img/typing/budou_default.png",
          "img/typing/budou_default_dmg.png",
          "img/typing/kaede_atk.png",
          "img/typing/kaede_atk2.png",
          "img/typing/kaede_atk3.png",
          "img/typing/kaede_default.png",
          "img/typing/kaede_miss.png",
          "img/typing/kaede-atk2-animation.png",
          "img/typing/kaede-atk3-animation.png",
          "img/typing/kaede-atk4-animation.png",
          "img/story/kaede.png",
          "img/story/kaede_off.png",
          "img/story/nasi.png",
          "img/story/sipses.png",
          "img/story/sipses_off.png",
          "img/story/tiharu.png",
          "img/story/tiharu_off.png",
          "img/story/yayoi.png",
          "img/story/yayoi_off.png",
          "img/story/yukino.png",
          "img/story/yukino_off.png",
          "img/story/bg/kouen_1.jpg",
          "img/story/bg/sai_1.jpg",
          "img/story/bg/sipses_cg_1.jpg",
          "img/story/bg/siro_1.jpg",
          "img/story/bg/siro_2.jpg",
          "img/story/bg/story01_01.jpg",
          "img/story/bg/story01_02.jpg",
          "img/story/bg/story01_03.jpg",
          "img/story/bg/story01_04.jpg",
          "img/story/bg/story01_05.jpg",
          "img/typing/bg/win.jpg",
          "img/typing/bg/lose.jpg");
  });
}
