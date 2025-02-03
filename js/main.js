$(function(){


  var $nav = $(".nav>ul>li>a");
  
  var numAnimation = $(".skill_count");
  var pageIndex = Math.round($(window).scrollTop() / $(window).height());
  var windowHeight = $(".page").height();
  var lastPageIndex = $(".page").length -1;
  var cnt = 0;
  console.log("index : ", pageIndex);
  console.log("cnt : ", cnt);
    



//-------------------------------------------------------
// 원페이지 스크롤링
//-------------------------------------------------------

  
$("html").animate({scrollTop : pageIndex*$(window).height()},10);

window.addEventListener("wheel",function(event){
  event.preventDefault();
  // 여러번 휠 이벤트 발생 방지
  if($("html").is(":animated")) return;
  console.log("index : ", pageIndex);
  console.log("cnt:", cnt);

  if(event.deltaY > 0){
    if(pageIndex>=lastPageIndex)return;

   
    if(pageIndex==lastPageIndex-1){
      cnt++;
      if(cnt<=2){
        $("#wrap3").animate({marginLeft:-100*(cnt)+'%'});
      }else{
        pageIndex++;
    }}
    else{pageIndex++;}
  }


  else if(event.deltaY<0){
    if(pageIndex<=0)return;
    if(pageIndex==lastPageIndex-1){
      cnt--;
      if(cnt>=0){
        $("#wrap3").animate({marginLeft:-100*(cnt)+'%'}); 
      }else{
        pageIndex--;
      }}
      else {pageIndex--;  }
  }
  var posTop = windowHeight * pageIndex;
  $("html").animate({scrollTop : posTop});
},{ passive:false});

 
//-------------------------------------------------------
//  skill 숫자 애니매이션
//-------------------------------------------------------

  function changeNum(idx){
    var num = 10 ;
    var intervalTime = 15;
    var targetNum = numAnimation[idx].getAttribute('data-rate');

    var timer = setInterval(function(){
      ++num;
      numAnimation[idx].innerText = num;
      
      if(num == targetNum){
        clearInterval(timer);
      }
    },intervalTime);
  }

  $(window).scroll(function(){
    console.log("scropllTop: " , $(window).scrollTop());

      if($("#skill").offset().top == $(window).scrollTop()) {
        for(var i =0; i<numAnimation.length; i++){
          changeNum(i);}
     } 
    });

//-------------------------------------------------------
//portfolio 페이지 nav 폰트 색상 변경
//-------------------------------------------------------

$(window).scroll(function(){
  if($("#portfolio").offset().top == $(document).scrollTop()){
    console.log("portolio section")
    $nav.addClass('active');
  }else{
    $nav.removeClass('active');

  }
  
});
//-------------------------------------------------------
//profileimg stick class 
//-------------------------------------------------------


$(window).scroll(function(){
 
  if($("#aboutme").offset().top <= $(document).scrollTop() && $("#skill").offset().top >= $(document).scrollTop() ){
    console.log("profileimg 고정")
    $("#profileimg").addClass('stick')
  }else{
    $("#profileimg").removeClass('stick');
  }
  // if($("#skill").offset().top < $(document).scrollTop()){
  //   console.log($("#skill").offset().top,"스킬탑높이")
  //   $("#profileimg").removeClass('stick');
  // }
 
});



//-------------------------------------------------------
//  nav 의 각 list 를 클릭했을때 a 요소 hash 태그 페이지 이동
//-------------------------------------------------------
$nav.click(function(event){
    console.log(".scroll_move");         
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });

//-------------------------------------------------------
// 화면 크기 변경 시 reload
//-------------------------------------------------------

jQuery(function($) {
    window.onresize = function(){
      document.location.reload();
    };
});
 



});