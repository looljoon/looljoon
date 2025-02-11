$(function(){
    let position1 = $('#wrap1').offset().top;
    let position2 = $('#wrap2').offset().top;
 
    var $menu = $(".menu");
    var $subList = $(".subList");
    var $submenu = $(".submenu");
   
 


    window.addEventListener('scroll',function(){
        console.log(
         "ScrollY: " ,window.scrollY,
        "section1 offset().top : ", $("#section1").offset().top,
        "wrap1의 높이",position1,
        "wrap2의 높이",position2,
        "innerHeight : " ,$(window).innerHeight(),
    )
    })


    // 헤더



    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
           
    //모바일이 아닌 경우 스크립트
       
         
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
                    "top": "20%",
                    "transition-duration":"400ms"
                })
            });

        
     
        
      
    
                 
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
  














            
      