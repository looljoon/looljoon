$(function(){
  // window.addEventListener('scroll',function(){
  //   console.log(
  //     "ScrollY: " , window.scrollY,
  //   )

  
  // });

 
  // $("#페이지").offset().top== $(document).scrollTop()

  var navi = $("#nav>ul>li>a");
  var numAnimation = $(".skill_count");

  // var pageIndex = Math.round($(window).scrollTop() / $(window).height());
  var pageIndex = Math.round($(window).scrollTop() / $(window).height());
  var windowHeight = $(window).height();
  var lastPageIndex = $(".page").length -1;
  var cnt=0;
  console.log("index : ", pageIndex);
  console.log("cnt : ", cnt);
    
//-------------------------------------------------------
//-------------------------------------------------------
// 원페이지 스크롤링
//-------------------------------------------------------
//-------------------------------------------------------

  
$("html").animate({scrollTop : pageIndex*$(window).height()},10);

// 마지막 페이지의 인덱스

window.addEventListener("wheel",function(event){
  event.preventDefault();
  // 여러번 휠 이벤트 발생 방지
  if($("html").is(":animated")) return;

  // 마우스 휠을 아래로 굴렸으면
  //  1. 마지막 페이지이면 이벤트 핸들러를 종료한다.
  //  2. 현재 페이지가 네 번째 페이지인지 확인(pageIndex == 3)
  //     1. 현재 보이는 컨텐츠가 세 번째 컨텐츠(3-3)가 아니면, 즉 현재 보이는 컨텐츠가 첫 번째 컨텐츠(3-1)이나 두 번째 컨텐츠(3-2)이면
  //        1. 다음 컨텐츠로 가로 스크롤 한다.
  //        2. 이벤트 핸들러를 종료한다.
  //     2. 현재 보이는 컨텐츠가 세 번째 컨텐츠(3-3)이면
  //        1. 다음 페이지로 스크롤 할 수 있도록, pageIndex를 증가시킨다.
  //  3. 현재 페이지가 네 번째 페이지가 아니면(else)
  //     1. 다음 페이지로 스크롤 할 수 있도록, pageIndex를 증가시킨다.


    // 마우스 휠을 아래로 굴리면
    // 1. 마지막 페이지이면 이벤트 핸들러를 종료한다.
  if(event.deltaY > 0){
    if(pageIndex==lastPageIndex) return;
    
    // }
    if(pageIndex==1){
      // profile_am 이 보일시 숨기고 # profile4 를 보여준다.
      // profile_am 이 보이지않고 #profile4가 보여질때는 index를 더해준다.
      if($("#profile_am").css('display')=="block"){
        $("#profile_am").fadeToggle(400),
        $("#profile4").fadeToggle(400);
        return;
      }
    
    }
  
    // 2. 현재 페이지가 네 번째 페이지인지 확인(pageIndex == 3)
    if(pageIndex==3){
      cnt++;
      console.log("cnt: " , cnt);
      
  //     1. 현재 보이는 컨텐츠가 첫 번째 컨텐츠(3-1)이나 두 번째 컨텐츠(3-2)이면
      if(cnt<=2){
  //        1. 다음 컨텐츠로 가로 스크롤 한다.
  //        2. 이벤트 핸들러를 종료한다.
      $("#wrap_pf").animate({marginLeft:-100*(cnt)+'%'});
      return;
  //     2. 현재 보이는 컨텐츠가 세 번째 컨텐츠(3-3)이면
  //        1. 다음 페이지로 스크롤 할 수 있도록, pageIndex를 증가시킨다.
      }else{pageIndex++;}
  //  3. 현재 페이지가 네 번째 페이지가 아니면(else)  
  //     1. 다음 페이지로 스크롤 할 수 있도록, pageIndex를 증가시킨다.
    }else{pageIndex++;}
  
  }


  // 마우스 휠을 위로 굴렸으면
  // 1. 첫 번째 페이지이면 이벤트 핸들러를 종료한다.
  // 2. 현재 페이지가 네 번째 페이지인지 확인(pageIndex == 3)
  //    1. 현재 보이는 컨텐츠가 첫 번째 컨텐츠(3-1)가 아니면, 즉 현재 보이는 컨텐츠가 두 번째 컨텐츠(3-2)이나 세 번째 컨텐츠(3-3)이면
  //       1. 이전 스크롤로 가로 스크롤 한다.
  //       2. 이벤트 핸들러를 종료한다.
  //    2. 현재 보이는 컨텐츠가 첫 번째 컨텐츠(3-1)이면
  //       1. 이전 페이지로 스크롤 할 수 있도록, pageIndex를 감소시킨다.
  // 3. 현재 페이지가 네 번째 페이지가 아니면(pageIndex == 3가 아니면,else)
  //    1. 이전 페이지로 스크롤 할 수 있도록, pageIndex를 감소시킨다.
  // 3. 스크롤 할 위치를 계산한다
  // 4. 계산한 위치로 스크롤 한다.


  // 마우스 휠을 위로 굴렸으면
  else{
  // 1. 첫 번째 페이지이면 이벤트 핸들러를 종료한다.
    if(pageIndex==0)return;

  
    if(pageIndex==1){
      // profile_am 이 보일시 숨기고 # profile4 를 보여준다.
      // profile_am 이 보이지않고 #profile4가 보여질때는 index를 더해준다.
      if($("#profile4").css('display')=="block"){
        $("#profile4").fadeToggle(400);
        $("#profile_am").fadeToggle(400);
        return;
      }
      else {
        pageIndex--;
      }
    }

  // 2. 현재 페이지가 네 번째 페이지인지 확인(pageIndex == 3)
    if(pageIndex==3){
      cnt--;
  //    1. 현재 보이는 컨텐츠가 두 번째 컨텐츠(3-2)이나 세 번째 컨텐츠(3-3)이면
  //       1. 이전 스크롤로 가로 스크롤 한다.
  //       2. 이벤트 핸들러를 종료한다.
     

      if(cnt==2 || cnt==1 ||cnt==0){ 
        $("#wrap_pf").animate({marginLeft:-100*(cnt)+'%'}); 
        return;
      }
  //    2. 현재 보이는 컨텐츠가 첫 번째 컨텐츠(3-1)이면
  //       1. 이전 페이지로 스크롤 할 수 있도록, pageIndex를 감소시킨다.
      else pageIndex--;
    }
  // 3. 현재 페이지가 네 번째 페이지가 아니면 (pageIndex == 3가 아니면) , else
    else{
      pageIndex--;
    }
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

    window.addEventListener('scroll',function(){

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
    // navi.addClass('active');
    $(".mockup").addClass('on');
    $(".mockup_info").addClass('on');
  }else{
    // navi.removeClass('active');
    $(".mockup").removeClass('on');
    $(".mockup_info").removeClass('on');
  }
});

//-------------------------------------------------------
//-------------------------------------------------------
//  nav 의 각 list 를 클릭했을때 a 요소 hash 태그 페이지 이동
//-------------------------------------------------------
//-------------------------------------------------------
    navi.click(function(event){
      console.log(".scroll_move");         
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });
});
 

$(window).scroll(function(){

  if($("#aboutme").offset().top== $(document).scrollTop()){

    $("#photo_am").addClass('on');
  }else{
   
    $("#photo_am").removeClass('on');
  }
});
