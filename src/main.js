$(document).ready(function(){
	$('[href="#"]').attr('href','javascript:void(0)');

//左侧导航栏自适应居中
$(window).resize((function(){
	var timer = null;
	var count = 0;
	var navLeft = $("#nav-left-fixed");
	var navRight = $("#nav-right-fixed")
	var navLeftHeight = navLeft.innerHeight();
	var navRightHeight = navRight.innerHeight();
	return function(e){
		_this=this;
		if(timer){
			clearTimeout(timer)
		}
		timer = setTimeout(function(){
			var navLeftTop = (_this.innerHeight - navLeftHeight)/2
			var navRightTop = (_this.innerHeight - navRightHeight)/2
			navLeft.css('top',navLeftTop+'px');
			navRight.css('top',navRightTop+'px');
			
		},300)

	}

})())

$(window).trigger("resize");

})

navLbt = document.getElementById("nav-lbt");
navLbtSelect = document.getElementById("nav-lbt-select");

var mySwiper = new Swiper ('.swiper-container', {
    
    loop: true,
  	autoplay:3000,
    pagination: '.swiper-pagination',
    paginationClickable :true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
   
  })    

