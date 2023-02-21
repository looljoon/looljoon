$(function(){


  var $navi = $("#nav>ul>li>a");
  var $aboutMe = $("#aboutme")
  
  var numAnimation = $(".skill_count");
  var pageIndex = Math.round($(window).scrollTop() / $(window).height());
  var windowHeight = $(window).height();
  var lastPageIndex = $(".page").length -1;
  var cnt = 0;
  console.log("index : ", pageIndex);
  console.log("cnt : ", cnt);
    
//-------------------------------------------------------
//-------------------------------------------------------
// 원페이지 스크롤링
//-------------------------------------------------------
//-------------------------------------------------------

  
$("html").animate({scrollTop : pageIndex*$(window).height()},10);

window.addEventListener("wheel",function(event){
  event.preventDefault();
  // 여러번 휠 이벤트 발생 방지
  if($("html").is(":animated")) return;
  console.log("index : ", pageIndex);
  console.log("cnt:", cnt);

  if(event.deltaY > 0){
  // 마지막 인덱스 페이지 return


    if(pageIndex>=lastPageIndex)return;

    if(pageIndex==1){
      if($("#profileBox1").css('opacity')=="1"){
        $("#profileBox1").css({"opacity":"0"});
        $("#profileBox2").css({"opacity":"1"});
        return;
      }
    } 
      
  // 3p경우
    if(pageIndex==lastPageIndex-1){
      cnt++;
      if(cnt<=2){
        $("#wrap3").animate({marginLeft:-100*(cnt)+'%'});
      }else{
        pageIndex++;
    }}
    // 3p가 아닐경우경우
    else{pageIndex++;}
  }

  else if(event.deltaY<0){
   
    if(pageIndex<=0)return;

    if(pageIndex==1){
      if($("#profileBox2").css('opacity')=="1"){
        $("#profileBox2").css({"opacity":"0"});
        $("#profileBox1").css({"opacity":"1"});
        return;
      }}
  
    if(pageIndex==lastPageIndex-1){
      cnt--;
      if(cnt>=0){
        $("#wrap3").animate({marginLeft:-100*(cnt)+'%'}); 
      }else{
        pageIndex--;
      }}
      else {pageIndex--;  }
  }
  // 스크롤 할 위치 = 뷰포트 높이 * 이동할 페이지 인덱스
  var posTop = windowHeight * pageIndex;
  $("html").animate({scrollTop : posTop});
},{ passive:false});

 
//-------------------------------------------------------
//-------------------------------------------------------
// skill 페이지 진입시 skill 숫자 애니매이션
//-------------------------------------------------------
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

      if($("#skill").offset().top == $(window).scrollTop()) {
        for(var i =0; i<numAnimation.length; i++){
          changeNum(i);}
     } 
    });

//-------------------------------------------------------
//-------------------------------------------------------
//portfolio 페이지에서 nav 폰트의 색상을 변경
//-------------------------------------------------------
//-------------------------------------------------------

$(window).scroll(function(){

  if($("#portfolio").offset().top== $(document).scrollTop()){
    $navi.addClass('active');
    $(".mockup").addClass('on');
    $(".mockup_info").addClass('on');
  }else{
    $navi.removeClass('active');
    $(".mockup").removeClass('on');
    $(".mockup_info").removeClass('on');
  }
});

//-------------------------------------------------------
//-------------------------------------------------------
//  nav 의 각 list 를 클릭했을때 a 요소 hash 태그 페이지 이동
//-------------------------------------------------------
//-------------------------------------------------------
$navi.click(function(event){
    console.log(".scroll_move");         
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });

 



});
