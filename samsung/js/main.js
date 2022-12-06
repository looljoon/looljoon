
$(function(){

var $samsung_pass = $("#samsung_pass");
var $samsung_ticket = $("#samsung_ticket");
var $exchange = $("#exchange");


  // console.log(" page.offset().top:", $("#page").offset().top)
  window.addEventListener('scroll',function(){
   console.log(
    "ScrollY: " ,window.scrollY,
    "innerHeight : " ,$(window).innerHeight(),
    "genesis car img offset().top : ", $("#cnt5").offset().top,
    "samsungpass offset().top : ", $samsung_pass.offset().top,
    "samsung ticket offset().top : ",$samsung_ticket.offset().top,
    "exchange offset().top : ",$exchange.offset().top,
    "exchange offset().top*0.98 : ",$exchange.offset().top*0.98,
    "exchange offset().top*0.99 : ",$exchange.offset().top*0.99,
    "exImage offset().top*0.96 : ",$("#exImage").offset().top*0.96,
    "exImage offset().top*0.98 : ",$("#exImage").offset().top*0.98,
    "exImage offset().top : ",$("#exImage").offset().top,
    "cnt1 offset().top : ",$("#cnt1").offset().top,
    "cnt1 offset().top*0.9 : ",$("#cnt1").offset().top*0.9,
    "cnt1 offset().top*0.75 : ",$("#cnt1").offset().top*0.75,
    "cntBox의 offset().top :" ,$(".cntBox").offset().top,
    "window.scrollY + window.innerHeight: ",(window.scrollY + $(window).innerHeight())
   )
  
 });

 
  // $("#페이지").offset().top== $(document).scrollY
  // $("#page").offset().top== $(document).scrollTop()
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------


  // $("#gotop").on("click",function(e){
  //   e.preventDefault();
  //   $('html,body').animate({scrolltop:0},600);
  // });
  
  // $(window).scroll(function(){
  //   if($(document).scrolltop()>$samsung_pass.offset().top ){
  //     $("#gotop").addClass('show');
  //   }else{
  //     $("#gotop").removeClass('show');
  //   }
  // });
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// samsungpass


  $(window).scroll(function(){
    if($samsung_pass.offset().top*0.8 < window.scrollY){
      $("#sp2_2").addClass('on');
     
      $("#sp3").addClass('on');
    }
    else{
      $("#sp2_2").removeClass('on');
   
      $("#sp3").removeClass('on');
    }

  });

//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// samsung ticket 에서 고정요소 

  $(window).scroll(function(){
    
    // 1 scrollY 의 값이 $samsung_ticket.offset()Top 보다 크고
    //   $("#cnt5").offset()Top보다 작을때 
    // 2 $("#fix_p")  와 $("#fix_img") 의 position 값을 absolute > fixed
      if( ($samsung_ticket.offset().top*0.9 < window.scrollY) &&
      ($("#cnt5").offset().top > window.scrollY)){
          $("#stLeft").addClass('on');
          $("#fixImg").addClass('on'); 

        }
    
      // 삼성티켓의 offset보다 작을때 on클래스 제거
      else{
        $("#stLeft").removeClass('on');
        $("#fixImg").removeClass('on'); 
      };
    })

//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// samsung ticket에서 보여져야하는 티켓 (cntBox)


$(window).scroll(function(){
  console.log("(#cnt1).offset().top*0.8= " ,$("#cnt1").offset().top*0.8);
  console.log("(#cnt1).offset().top= " ,$("#cnt1").offset().top);
  console.log("(#cnt2).offset().top*0.8= " ,$("#cnt2").offset().top*0.8);
  console.log("(#cnt2).offset().top= " ,$("#cnt2").offset().top);

  if ($("#cnt1").offset().top*0.85< window.scrollY && $("#cnt1").offset().top>window.scrollY){
    $(".cntBox").css({
      opacity:1,
      transitionDuration:0.1+"s"
    })
  }
  else{
    $(".cntBox").css({
      opacity:0,
      transitionDuration:0.1+"s",
 }) }
})
 
$(window).scroll(function(){
  if ($("#cnt2").offset().top*0.85< window.scrollY && $("#cnt2").offset().top>window.scrollY){
    $("#cnt2").css({
      opacity:1,
      transitionDuration:0.5+"s"
    })
  }
  else{
    $("#cnt2").css({
      opacity:0,
      transitionDuration:0.5+"s"
    })
  }
})

 
$(window).scroll(function(){
  if ($("#cnt3").offset().top*0.8< window.scrollY && $("#cnt3").offset().top>window.scrollY){
    $("#cnt3").css({
      opacity:1,
      transitionDuration:0.5+"s"
    })
  }
  else{
    $("#cnt3").css({
      opacity:0,
      transitionDuration:0.5+"s"
    })
  }
})

 
$(window).scroll(function(){
  if ($("#cnt4").offset().top*0.8< window.scrollY && $("#cnt4").offset().top>window.scrollY){
    $("#cnt4").css({
      opacity:1,
      transitionDuration:0.5+"s"
    })
  }
  else{
    $("#cnt4").css({
      opacity:0,
      transitionDuration:0.5+"s"
    })
  }
})

$(window).scroll(function(){
  if ($("#cnt5").offset().top*0.8< window.scrollY && $("#cnt5").offset().top>window.scrollY){
    $("#cnt5").css({
      opacity:1,
      transitionDuration:0.5+"s"
    })
  }
  else{
    $("#cnt5").css({
      opacity:0,
      transitionDuration:0.5+"s"
    })
  }
})

// 
// #ex_wrap 의 scrollY 가 0.8 일때 
// 
// "exImage offset().top*0.96 : ",$("#exImage").offset().top*0.96,
//"exImage offset().top*0.98 : ",$("#exImage").offset().top*0.98,
//
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//  환전서비스

$(window).scroll(function(){
  if($("#exImage").offset().top*0.96<window.scrollY &&  window.scrollY < ($("#exImage>img:nth-child(2)").offset().top)){
    $("#exHigh").addClass('on');
    $("#exFast").addClass('on');
    $("#exInfoP1").addClass('on');
    $("#exInfoP2").addClass('on');
  }else{
    $("#exHigh").removeClass('on');
    $("#exFast").removeClass('on');
    $("#exInfoP1").removeClass('on');
    $("#exInfoP2").removeClass('on');
  }
  
});


//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// payplanner - 이미지 효과

$("#ppLeft>img").eq(0).hide();

var now = 0;
var img = 2;
 
function slide(){
  if (now == img){
    $("#ppLeft>img").eq(now).fadeOut(2000);
    $("#ppLeft>img").eq(0).fadeIn(1000);
    now = 0;
  }
  else{
    $("#ppLeft>img").eq(now).fadeOut(2000);
    $("#ppLeft>img").eq(now+1).fadeIn(1000);
    now++;
  }
}

setInterval(slide, 3000);

// payplanner - 단락 슬라이드효과


$(window).scroll(function(){
  if ($("#payplanner").offset().top*0.9< window.scrollY && $("#membership").offset().top>window.scrollY){
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




        
});
