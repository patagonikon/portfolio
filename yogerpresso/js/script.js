$(function(){
	$(".gnb>li").mouseover(function(){
		$(".gnb>li>ul").stop().slideDown();
		$(".fulldown").stop().slideDown();
	});
	$(".gnb>li, .fulldown").mouseout(function(){
		$(".gnb>li>ul").stop().slideUp();
		$(".fulldown").stop().slideUp();
	});
	
	var i = 0

	setInterval(function(){
		i++;
		if(i==4){i=0;}
		$(".slide_ba ul li").eq(i).css("left","100%").animate({"left":0},600);
		$(".slide_ba ul li").eq(i-1).css("left",0).animate({"left":"-100%"},600);
	},3000);	
	
	$(".contents .notice table tr:nth-child(1)").click(function(){
		$("#pop").stop().show();
	});
	$("#pop .pop_up button").click(function(){
		$("#pop").stop().hide();
	});

	

//미니 위로 슬라이드 부분
	var id = setInterval(auto,3000);
	
		var n = 0;
		function auto(){
		
		n++;
		if(n==5){n=0;}
			
		$(".mini_slide > ul> li").eq(n-1).css("top",0).animate({"top":"-100%"},600);
		$(".mini_slide > ul > li").eq(n).css("top","100%").animate({"top":0},600);
	}

//미니 위로 슬라이드 부분
});
