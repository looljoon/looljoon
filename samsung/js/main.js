
$(function(){

var $samsung_pass = $("#samsung_pass");
var $samsung_ticket = $("#samsung_ticket");
var $exchange = $("#exchange");
var $payplanner = $("#payplanner");

  // console.log(" page.offset().top:", $("#page").offset().top)
  window.addEventListener('scroll',function(){
   console.log(
    "ScrollY: " ,window.scrollY,
    "innerHeight : " ,$(window).innerHeight(),
    "samsungpass offset().top : ", $samsung_pass.offset().top,
    "samsung ticket offset().top : ",$samsung_ticket.offset().top,
    "exchange offset().top : ",$exchange.offset().top,
    "payplanner offset().top : ",$payplanner.offset().top,
    
    " $samsung_ticket.offset().top+$(window).innerHeight()*0.2 : ", $samsung_ticket.offset().top+$(window).innerHeight()*0.2
 
    
   )
  
 });

 var pageIndex = Math.round($(window).scrollTop() / $(window).height());
  
$("html").animate({scrollTop : pageIndex*$(window).height()},10);

var $window = $(window);
var $html = $("html");

var windowHeight = $window.height();
var lastPageIndex = $(".page").length+2;

window.addEventListener("wheel",function(event){
  event.preventDefault();
  if($("html").is(":animated")) return;

  if(event.deltaY > 0){
    if(pageIndex>lastPageIndex) return;
    pageIndex++;
  }

  else if (event.deltaY < 0) {
  // 1. 첫 번째 페이지이면 이벤트 핸들러를 종료한다.
    if(pageIndex==0)return; 
    pageIndex--;
  }

  // 스크롤 할 위치 = 뷰포트 높이 * 이동할 페이지 인덱스
  var posTop = windowHeight * pageIndex;
  $("html").animate({scrollTop : posTop});

},{ passive:false});


//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// samsungpass


  $(window).scroll(function(){
    if($samsung_pass.offset().top == $(document).scrollTop()){
      $("#sp1").addClass('on');
      $("#sp2_2").addClass('on');
      $("#sp3").addClass('on');
    }
    else{
      $("#sp1").removeClass('on');
      $("#sp2_2").removeClass('on');
      $("#sp3").removeClass('on');
    }

  });

//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// samsung ticket 에서 고정요소 

  $(window).scroll(function(){
   
      if ($samsung_ticket.offset().top <= $(document).scrollTop() && $exchange.offset().top>$(document).scrollTop()){
          $("#leftSt").addClass('on');
          $("#fixImg").addClass('on');
          $("#rightSt").addClass('on');
        }
      else{
        $("#leftSt").removeClass('on');
        $("#fixImg").removeClass('on');
        $("#rightSt").removeClass('on');
      };   
    })

//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//  환전서비스

$(window).scroll(function(){

  if($exchange.offset().top == $(document).scrollTop()){
    $("#exImg>img:nth-child(1)").addClass('on');
    $("#exImg>img:nth-child(2)").addClass('on');
    $("#exInfo>p").addClass('on');
    $("#exInfo>h3").addClass('on');
   
  }else{
    $("#exImg>img:nth-child(1)").removeClass('on');
    $("#exImg>img:nth-child(2)").removeClass('on');
    $("#exInfo>p").removeClass('on');
    $("#exInfo>h3").removeClass('on');
   
  }
  
});


//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// payplanner - 이미지 효과

// setInterval(slide, 3000);

// payplanner - 단락 슬라이드효과

  $ppImg = $("#ppImg > ul");

  var time = 2000;

  $ppImg.children().last().prependTo($ppImg)

  window.setInterval(function() {

      $ppImg.css({
          "transitionDuration": time +"ms",
          "marginRight": "0%"
      });
      
      window.setTimeout(function() {
          $ppImg.removeAttr("style").children().last().prependTo($ppImg);
      }, time);

  }, 3000);
  


$(window).scroll(function(){
  if($payplanner.offset().top == $(document).scrollTop()){
    $("#ppInfo1").addClass('on');
    $("#ppInfo2").addClass('on');
    $("#ppInfo3").addClass('on');
  }
  else{
    $("#ppInfo1").removeClass('on');
    $("#ppInfo2").removeClass('on');
    $("#ppInfo3").removeClass('on');
  }
  

})

//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------


// membership 페이지의 삼성페이 이미지 클릭시 
// card1~card10 까지의 애니메이션 작동


$("#card0").on("click",function(e){
  e.preventDefault();
  $(".cardshow").addClass('animate')
});
$("#card0").on("mouseleave",function(){
  $(".cardshow").removeClass('animate')
});

//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------





 



        
});
