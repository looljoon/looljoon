$(function(){




    // 헤더

    var $menu = $(".menu");
    var $subList = $(".subList");
    var $submenu = $(".submenu");
   





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
                    "top": "20%",
                    "transition-duration":"400ms"
                })
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
  














            
      