
$(function(){
        var h;
        $(window).resize(function(){
        h = $(window).height();
      
        //$('#pata_history').height(h);
        //$('#body_popo1').height(h);

        });
        $(window).trigger('resize');
    
        
        $('nav ul li').click(function(){
        var i = $(this).index();
        //alert(i);
        var offset1 =  $('section').eq(i).offset().top;
        
        $('html,body').stop().animate({'scrollTop':offset1},1000);
        return false;

         });

       



// =========================================== 따라다니는 마우스 좌표

    $(window).mousemove(function(e){
        var x = e.pageX;
        var y = e.pageY;
        $('#m1').css("top",y).css("left",x);
        
        });

	$(window).trigger('mousemove');

// =========================================== 따라다니는 마우스 좌표



         /*픽스드 네비아이콘*/

        $(".inline > div").mouseover(function(){
           $('.inline > div').each(function(s){
               $(this).css("right",s*80);
           });
        });

        $(".inline").mouseleave(function(){
            $('.inline > div').css("right",0);
          
         });
         /*픽스드 네비아이콘*/


         /*햄버거 아이콘*/
        $('.hamburger').click(function(){
        
        $(this).toggleClass("is-active");
        $(".ul_in").toggleClass('on');
        });
         /*햄버거 아이콘*/



// =========================================== 포트폴리오 로고 슬라이드 시작//

    $('#pata_history .poto1').addClass('active');
    
    $('#pata_history .poto1').mouseenter(function(){
        $('#pata_history .poto2').fadeIn(1000);
    });

// =========================================== 포트폴리오 로고 슬라이드 끝//



// =========================================== 스크롤할시 움직인 만큼 높이 계산 시작
    $(window).scroll(function(){
        var i = $()
        var roll = $(this).scrollTop();
        $('.scroll span').text(roll);


        //패치 가 떨어지는 구간
        if(roll > 100  && roll < 15000){
            $('.patch').addClass('active');
            $('.inline').addClass('active');
        }else{
            $('.patch').removeClass('active');
            $('.inline').removeClass('active');
        }
        //패치 가 떨어지는 구간

        //백그라운드 에서 튀어나오는 부분
        if(roll > 580){
            $(".icon_box > ul > li > img").stop().animate({"top":0},1000);
            $(".icon_box > ul > li > h3").stop().delay(350).animate({"top":"260px"},1500);
            $(".icon_box > ul > li > p").stop().delay(600).animate({"top":"300px"},1800);   
        }

        if(roll > 790){
            $(".about_txt p").stop().animate({"marginTop":0},1000);
            $(".about_txt1 p").stop().animate({"marginTop":0},1000);   
        }
        //파타고니아
        if(roll >= 2004){
            $(".jae0").stop().delay(200).animate({"left":"14%"},1000);
            
        }else{
            $(".jae0").stop().animate({"left":"-100%"},1000);
            
        }
        //쥬씨
        if(roll >= 3030){
            $(".jae1").stop().delay(200).animate({"left":"13%"},1000);
            
        }else{
            $(".jae1").stop().animate({"left":"-100%"},1000);
            
        }
        //푸마
        if(roll >= 4030){
            $(".jae2").stop().delay(200).animate({"left":"1.6%"},1000);
            
        }else{
            $(".jae2").stop().animate({"left":"-100%"},1000);
            
        }
        //요거프레소
        if(roll >= 5030){
            $(".jae3").stop().delay(200).animate({"left":"13%"},1000);
            
        }else{
            $(".jae3").stop().animate({"left":"-100%"},1000);
            
        }
        //위니
        if(roll >= 6030){
            $(".jae4").stop().delay(200).animate({"left":"10%"},1000);
            $(".app > img").stop().delay(1000).animate({"left":"10%"},1000);
            
        }else{
            $(".jae4").stop().animate({"left":"-100%"},1000);
            $(".app > img").stop().animate({"left":"100%"},1000);
        }

        //스킬 막대 스크롤
        if(roll >= 7030){
            
            // $(".son").stop().delay(300).animate({"left":"40%"},1000);
            $(".develpment").stop().delay(400).animate({"left":"20%"},3200);
            $(".develpment2-2").stop().delay(300).animate({"left":"55%"},3000);
            $(".stick1").stop().delay(100).delay(3500).animate({"width":"320px"},3500);
            $(".stick2").stop().delay(200).delay(3500).animate({"width":"305px"},3500);
            $(".stick3").stop().delay(300).delay(3500).animate({"width":"270px"},3500);
            $(".stick4").stop().delay(400).delay(3500).animate({"width":"280px"},3500);
            $(".stick5").stop().delay(500).delay(3500).animate({"width":"320px"},3500);
            $(".stick6").stop().delay(600).delay(3500).animate({"width":"300px"},3500);
        }else{
            
            $(".son").stop().animate({"left":"-100%"},1000);
            $(".stick1").stop().animate({"width":"0px"},3000);
            $(".stick2").stop().animate({"width":"0px"},3000);
            $(".stick3").stop().animate({"width":"0px"},3000);
            $(".stick4").stop().animate({"width":"0px"},3000);
            $(".stick5").stop().animate({"width":"0px"},3000);
            $(".stick6").stop().animate({"width":"0px"},3000);
        }









        //백그라운드 에서 튀어나오는 부분
      
    
        $('.patch > a').on('click',function(){
            var mov = $(this).index();
            
            $('body, html').stop().animate({'scrollTop':0},1500,'swing');
            
            return false;
        });
        

        

    }); //윈도우 스크롤 마침

    /* 팝업창 */

    $("article .inline > .img").click(function(){
        var pp = $(this).index();

        //console.log(pp);
            $(".pop").fadeIn();
            $(".pop > div").eq(pp).fadeIn();

        return false;
    });

    
    $(" .pop > div > img").click(function(){
        $(".pop").fadeOut();

    });
    /* 팝업창 */



     /*이징 바운스 스크롤 창  */

    var p1 =  $(".cover > div").eq(0).offset().top;
    var p2 =  $(".cover > div").eq(1).offset().top;
    var p3 =  $(".cover > div").eq(2).offset().top;
    var p4 =  $(".cover > div").eq(3).offset().top;
console.log(p1,p2,p3,p4);

     $(".cover > div").mousewheel(function(event, d){
        console.log(d);
        //휠을 위로 스크롤할때
        if(d > 0){
            var prev = $(this).prev().offset().top;
            $('html,body').stop().animate({'scrollTop':prev},1050,'easeOutBounce');
        }
        //휠을 아래로 스크롤할때
        if(d < 0){
            var aa = $(this).next().offset().top;
            $('html,body').stop().animate({'scrollTop':aa},1050,'easeOutBounce');

          
        }
        
    });


});
// =========================================== 스크롤할시 움직인 만큼 높이 계산 시작
    

