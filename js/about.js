$(document).ready(function(){

  $(".tab_bt>li").click(function(){
    let list = $(this).index();
    $(".tab_conts>li").stop().fadeOut();
    $(".tab_conts>li").eq(list).stop().fadeIn();
    $(".tab_bt>li").removeClass("on")
    $(this).addClass("on")
  });

  let auto = setInterval(function(){
    asd();
  },7000);


  function asd(){
    $(".main_img").stop().animate({"margin-top":"-200vh"},1000,function(){
        $(".main_img>li:first-child").appendTo(".main_img");
        $(".main_img").css({"margin-top":"-100vh"});
    });
  }
});