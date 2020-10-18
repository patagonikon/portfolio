// =========================================== 슬라이드
$(function(){
    var i = 0;
    setInterval(function(){
        i++; //i = 1+1
        if(i==5){i=0;}
        $('.slider ul li').eq(i-1).css('left','0').animate({"left":'-100%'},800);
        $('.slider ul li').eq(i).css('left','100%').animate({"left":'0%'},800);
    },4000);    
});
// =========================================== 슬라이드 //


// =========================================== 따라다니는 마우스 좌표

$(window).mousemove(function(e){
	var x = e.pageX;
	var y = e.pageY;
	
	$('#m1').css("top",y).css("left",x);
	
	});

	$(window).trigger('mousemove');

// =========================================== 따라다니는 마우스 좌표


// =========================================== 햄버거 클릭
$(function(){

    $('.hamburger').click(function(){
        
        $(this).toggleClass("is-active");

        if($('.mine_nav .ul_in').hasClass('on')){
            $('.mine_nav .ul_in').removeClass('on');
        }else{
            $('.mine_nav .ul_in').addClass('on');
        }
    });

});
// =========================================== 햄버거 클릭 //




// =========================================== 메인 파타고니아 로고 슬라이드 등장 시작//

$(function(){
    $('#pata_history .poto1').addClass('active');
    
    $('#pata_history .poto1').mouseenter(function(){
        $('#pata_history .poto2').fadeIn(700);
    });
});

// =========================================== 메인 파타고니아 로고 슬라이드 등장 끝//






// =========================================== 패딩에 마우스 스크롤시 색깔 변화 시작 부분
$(function(){
    
	$('#area1 div ul li').on('mousewheel',function(event, d){
		//console.log(d);
		//d는 휠의 방향을 감지한다. 위로올리면(+1양수) 아래로 내리면(음수 - )
		event.preventDefault();
		event.stopPropagation();
	//휠을 this 위에 작동작동 시킬때 부모에게 전파되는것을 금지
		if(d>0){//휠을 위로올리면
			var prev = $(this).prev().position().top;
			 $('#area1 ul').css('top',-prev);
			
		}
		if(d<0){//휠을 아래로 내리면
			var next= $(this).next().position().top;
			$('#area1 ul').css('top',-next);
		}

		
	});
// =========================================== 패딩에 마우스 스크롤시 색깔 변화 끝 부분


// =========================================== 스크롤할시 움직인 만큼 높이 계산 시작
    $(window).scroll(function(){
        var i = $()
        var roll = $(this).scrollTop();
        $('#sTop').text(roll);


        //패치 가 떨어지는 구간
        if(roll > 100  && roll < 15000){
            $('.patch').addClass('active');
        }else{
            $('.patch').removeClass('active');
        }
        //패치 가 떨어지는 구간


        if(roll < 500){
            $('.y_roll p').css('color','#fff');
            $('.y_roll p:after').css('backgournd','red');
        }
        if(roll > 343){

            $('.y_roll p').css('color','#bbb');
            $('.y_roll p:after').css('backgournd','red');
        }
        if(roll > 800  && roll < 2300){
            $('#article1 .right1').addClass('active');
        
        }else{
            $('#article1 .right1').removeClass('active');
        }

        // pata pick 글씨 트랜지션 부분 //
        if(roll > 3150){
            $('.nice_pick > div > p').eq(0).css({'opacity':"1"});
            $('.nice_pick > div > p').eq(1).css({'opacity':"1"});
            $('.nice_pick > div > p').eq(2).css({'opacity':"1"});
        }else{
            $('.nice_pick > div > p').css({'opacity':0});
        }
        if(roll > 3710){
            $('.nice_pick > div > p').eq(3).css({'opacity':"1"});
            $('.nice_pick > div > p').eq(4).css({'opacity':"1"});
            $('.nice_pick > div > p').eq(5).css({'opacity':"1"});
            
        }
        // pata pick 글씨 트랜지션 부분 //

    });
    
    $('.patch > a').on('click',function(){
		var mov = $(this).index();
		
		$('body, html').stop().animate({'scrollTop':0},1500,'swing');
        
        return false;
	});
// =========================================== 스크롤할시 움직인 만큼 높이 계산 시작
});