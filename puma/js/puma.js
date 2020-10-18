$(function(){
    var i = 0;
    setInterval(function(){
        i++; //i = 1+1
        if(i==4){i=0;}
        $('.slider ul li').eq(i-1).css('left','0').animate({"left":'-100%'},800);
        $('.slider ul li').eq(i).css('left','100%').animate({"left":'0%'},800);
    },4000);    
});