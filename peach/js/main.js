$(function(){




    // 헤더
    var $section1 = $("#section1");
    var $header = $("#header");
    var $menu = $(".menu");
    var $subList = $(".subList");
    var $submenu = $(".submenu");
   

    // 챗봇 변수
    var $botIcon = $("#botIcon>li")
    var $botIcon2 = $("#botIcon2>li")
    var $contentIcons = $("#botIcon2>li");
    var $chatbot = $("#chatbot");
    var $botservice = $("#botservice");


    var $tripBtn= $("#tripType>ul>li>a");


// pop메시지 변수
    var $cookieA = $("#cookie>a");
    var $cookieBox = $("#cookieBox");
    var $cookieCheck =$("#cookieCheck>a");



// -----------------------------------------------
// 챗봇 클릭시 이미지 변환
        
    $chatbot.mouseenter(function(){
        $botIcon.css({
            "opacity":"1",
            "display":"block"
        })
        $(this).css({
            "transform": "rotate(135deg)",
            "transition-duration":"200ms"
        })
        
     
        $tripBtn.on("click", function(e){
            e.preventDefault();
            $tripBtn.removeClass("pick");
            $(this).addClass("pick");
        });


    $botIcon.mouseenter(function(){
        
        $contentIcons.removeClass("on");

        var index = $(this).attr("data-index");
        $contentIcons.eq(index).addClass("on");
        $botIcon2.css({"display" : "block"});
           });
        
        
       $botservice.mouseleave(function(){
            $botIcon.css({
                "opacity":"0",
                "display":"none"
            })
            $chatbot.css({
                "transform": "rotate(-180deg)",
                "transition-duration":"200ms"
            })
            $contentIcons.removeClass("on");
            $botIcon2.css({"display" : "none"});
        });
        
        });



// -----------------------------------------------
// 즐겨찾기 추가
        // $("#star").mouseenter(function(){
        //     $("#star>img").attr("src","images/star_white.png");
        //     $(this).css({
        //         "background-color":"#182e47",
        //         "transition":"200ms"
        //     })
        // })
       


    //     $("#star").mouseleave(function(){
    //         $("#star>img").attr("src","images/star.png");
    //         $(this).css({
               
    //             "transition":"200ms"
    //     })
    // })

    $("#star").on("click", function(){
       
        if($("#star").hasClass("on")){
            $("#star").removeClass("on");
        }
        else{
        $("#star").addClass("on");}
        
    });
        
  
      

// -----------------------------------------------
// pop 메시지

  
        
        $cookieA.on("click",function(event){
            event.preventDefault();
            $cookieBox.css({display:"none"});
        });

        $cookieCheck.on("click",function(event){
            event.preventDefault();
            $cookieBox.css({display:"none"});
        });
       


// -----------------------------------------------
//  여행지, 좌우 각각 클릭시 슬라이드 작동 

    $tripPrev = $("#tripPrev");
    $tripNext = $("#tripNext");
    var $tripList = $("#tripList>ul");

        $tripPrev.on("click", function(event){
            event.preventDefault();
            prevMove();
        })
        
        $tripNext.on("click", function(event){
            event.preventDefault();
            nextMove()
        })

        function prevMove(){
            if($tripList.is(":animated")) return;

            $tripList.animate({
                "margin-left":"25%"
            }, function(){
                $tripList.removeAttr("style").children(":last").prependTo(this);
            })
        };


        function nextMove(){
            if($tripList.is(":animated")) return;
            $tripList.animate({
                "margin-left":"-25%"
            }, function(){
                $tripList.removeAttr("style").children(":first").appendTo(this);
            })
        };


// -----------------------------------------------
//  이벤트, 좌우 각각 클릭시 슬라이드 작동 



        $eventPrev = $("#eventPrev");
        $eventNext = $("#eventNext");

        var $eventList = $("#eventWrap>ul");

        $eventPrev.on("click", function(event){
            event.preventDefault();
            prevMove2();
        })

        $eventNext.on("click", function(event){
            event.preventDefault();
            nextMove2()
        })


        function prevMove2(){
            if($eventList.is(":animated")) return;

            $eventList.animate({
                "margin-left":"33.33%"
            }, function(){
                $eventList.removeAttr("style").children(":last").prependTo(this);
            })
        };


        function nextMove2(){
            if($eventList.is(":animated")) return;
            $eventList.animate({
                "margin-left":"-33.33%"
            }, function(){
                $eventList.removeAttr("style").children(":first").appendTo(this);
            })
        };





// -----------------------------------------------
// 배너 
        var interval = 3000;
        var timerId = window.setInterval(slideImage,interval);
        var $bannerList = $("#banner>ul");

        $bannerList.parent().hover(
            function(){
                window.clearInterval(timerId);

            },
            function(){
                timerId=window.setInterval(slideImage, interval);
            }
        )

        function slideImage(){

            if($bannerList.is(":animated")) return;

            $bannerList.animate({"margin-left":"-100%"}, function(){
                $bannerList.removeAttr("style").children(":first").appendTo(this);
            })
        };










    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
           
    //모바일이 아닌 경우 스크립트
        if(!isMobile) {
         
        // ----------------------------------------------- 
        // 서브 스크롤 메뉴 
                        
                
            $menu.on("click", function(e){
                $subList.hide();
                var a = $(this).attr("id");
                $('#s'+a).slideDown(400);
                $("#bookbox").css({
                    "top": "50%",
                    "transition-duration":"400ms"
                })
                    
                });

            $subList.mouseleave(function(){
                $(this).slideUp(400),
                $submenu.css({
                    "box-shadow":"4px 4px 4px #cfcfcf6b"
                });
                $("#bookbox").css({
                    "top": "40%",
                    "transition-duration":"400ms"
                })
            });

        
        // -----------------------------------------------
        // 출발, 도착 박스
        
                $("#depPick").on("click", function(e){
                    e.preventDefault();
                    $("#closeBtn>h3").text("출발지 선택"),
                    $("#depAirport").toggle();
                    $("#depAirport").css({"left":"24%"});
                });
        
                $("#arrPick").on("click", function(e){
                    e.preventDefault();
                    $("#closeBtn>h3").text("도착지 선택"),
                    $("#depAirport").toggle(),
                    $("#depAirport").css({"left":"42%"});
        
                });
                $("#closeBtn>img").on("click", function(e){
                    e.preventDefault();         
                    $("#depAirport").toggle()
                });
        
        // -----------------------------------------------
        
                var count1=0;
                var count2=0;
                var count3=0;
        
                
                $("#adt>.decrease").on("click", function(e){
                    e.preventDefault();
                    if(count1<=0){
                        return;
                    }else{
                        count1-=1
                    }
                   
                    $(this).siblings('.result').html(count1);
                })
                $("#adt>.increase").on("click", function(e){
                    e.preventDefault();
                    count1+=1
                    $(this).siblings('.result').html(count1);
                })
        
        
        
        
                $("#chd>.decrease").on("click", function(e){
                    e.preventDefault();
                   
                    if(count2<=0){ 
                        return;
                    }else{
                        count2-=1
                    }
                    $(this).siblings('.result').html(count2);
                })
                $("#chd>.increase").on("click", function(e){
                    e.preventDefault();
                    count2+=1
                    $(this).siblings('.result').html(count2);
                })
        
        
                $("#inf>.decrease").on("click", function(e){
                    e.preventDefault();
                    
                    if(count3<=0){ 
                        return;
                    }else{
                        count3-=1
                    }
                    $(this).siblings('.result').html(count3);
                })
                $("#inf>.increase").on("click", function(e){
                    e.preventDefault();
                    count3+=1
                    $(this).siblings('.result').html(count3);
                })
        
        // -----------------------------------------------
                // tripType
                        
             

      
    
                 
        }else{
            //모바일인 경우 스크립트
               $("#depPick").on("click", function(e){
                    e.preventDefault();
                    $("#depAirport").toggle();
                    // $("#depAirport").css({"position":"fixed"});
                });
        
                $("#arrPick").on("click", function(e){
                    e.preventDefault();
                    $("#depAirport").toggle()
                    // $("#depAirport").css({"position":"fixed"});
        
                });
                $("#closeBtn>img").on("click", function(e){
                    e.preventDefault();         
                    $("#depAirport").toggle()
                });   
                

              




             }
                               
});
  














            
      