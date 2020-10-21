
$(function(){
    $('.roll').vTicker({height:20,pause:3000});
    $(".record > div ").hide();
    $(".record > div ").eq(7).show();



    //슬라이드 업다운 시작
    $('.left_menu > ul > li').click(function(){
      var kkk = $(this).children('ul').css('display');
      if(kkk=="none"){
        $('.left_menu > ul > li').children('ul').stop().slideUp();
        $(this).children('ul').stop().slideDown();

        }else{
        $(this).children('ul').stop().slideUp();
        }

        return false;        
    });

    $('.top100 > ul > li').click(function(){

        var i = $(this).index();
        //alert(i);
        $('.record > div').fadeOut("fast");
        $('.record > div').eq(i).fadeIn("fast");
       
        $('.record > div').removeClass('on');
        $('.record > div').removeClass('active');
        $('.record > div').eq(i).addClass('on');
        $('.record > div').eq(i).addClass('active');
    return false;

    });

    // 
    $('.goods_list > p').click(function(){
        var ko = $(this).index();

        $('.goods_list1 > div').removeClass('on');
        $('.goods_list1 > div').eq(ko).addClass('on');

    return false;

    });





    //미니 슬라이드
    var z = 0
    var current = 0
    
    setInterval(function(){
        
        z++;
        if(z==4){
            z=0;
        }
        $('.slide > li').eq(z-1).css('left',0).animate({'left':'-100%'},2000);
        $('.slide > li').eq(z).css('left','100%').animate({'left':0},2000);

        return false;

    },4000);

    $('.slide > li > a').click(function(){

        return false;


    });
    //미니 슬라이드 끝

    //==========================================블릿클릭

//    $('.point > li > a').click(function(){

//     return false;

//     });

    $('.point > ul > li').click(function(){
        z = $(this).index();
        if(z==4){i=0}
      //   $('#buttonList li').removeClass('on');
      //   $('#buttonList li').eq(z).addClass('on');
        
        var cu = $(".slide > li").eq(current); //현재의 사진값
        var ne = $(".slide > li").eq(z);
        cu.css('left',0).stop().animate({'left':'-100%'},500);
        ne.css('left','100%').stop().animate({'left':'0'},500);
        current = z;
  
        return false;
     });
     
    //==========================================블릿클릭


	
     //뮤직비디오 썸네일 슬라이드
        var pc_prev = $('.left_button');
        var pc_next = $('.right_button');
    
        $('.hahaha').slick({
           
            autoplay:true,
            autoplaySpeed : 2000,
            infinite : true,
            speed : 1000,
            pauseOnHover : true,
            slidesToShow : 3,
            slidesToScroll : 1,

            prevArrow : pc_prev,
            nextArrow : pc_next,
         
            
        });

	//play_bar
	
    loading();
	
	
	function loading(){
		var time = $('.playTime').text().split(':');
		time = Number((time[0]*60))+Number(time[1]);
		
		//console.log(time);	
	
			
		$({percent:00}).animate({percent:time},{
			duration:time*1000,
			easing:'linear',
			progress:function(){
				var now = Math.floor(this.percent);
				//console.log(now);
				for(var n=0; n<3; n++){
					if(now < 60*(n+1) && now >= 60*n){
						$('.play_ing .minute').text("0"+n);
					 var k  = 	now-(n*60);
						if(k < 10) {
						k = "0" + k}
						else{
							k;
							}		

						$('.play_ing .second').text(k);
					}
				}
			}

		});

	}



});
