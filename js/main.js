$(document).ready(function(){
  let i = 0;
  let count = $(".slider>div").length;

  setInterval(function(){
      if(i == count - 1){
      i = 0;
      }else{
          i++;
      }
      $(".slider").stop().animate({"margin-left":"-420px"},function(){
          $(".slider>div").first().appendTo(".slider");
          $(".slider").css({"margin-left":"-210px"});
      });
      },2000);
  
  $(".m_title").click(function(){
    if($(this).hasClass("active")){
      $(".m_title").removeClass("active").siblings().slideUp();  
      //.m_txt를 지칭하는 것임
    }else{
      $(".m_title").removeClass("active").siblings().slideUp();  
      $(this).addClass("active").siblings().slideDown();
    };
    
  });
  });