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

function lbtUtil(el,sel){
	var $el = $(el);
	var count = 1;
	var elchildren = $el.children('a');
	var w = elchildren.eq(0).innerWidth();
	var selchildren = $(sel).children();
	selchildren.eq(0).css('background','red');
	var time = 3000;
	var speed=w/(300/10);
	var isanimate = true;
	elchildren.each(function(index,item){
		$(item).css('left',index*w+'px')
	})

	
	
	setInterval(function(){
		if(isanimate){
			$el.animate({'left':parseInt($el.css('left'))-790+'px'})
		count++;
		if(count==9){
			count=1;
			
		}
		selchildren.css('background-color','white');
		selchildren.eq(count-1).css('background-color','red');
		}
		
	},2000)
	
	$('a.ctleft').mouseenter(function(){
		isanimate = false;
	}).mouseleave(function(){
		isanimate=true;
	})
	$('a.ctleft').on('click',function(){
		$el.animate({'left':parseInt($el.css('left'))+790+'px'});
		count--;
		if(count == 0){
			count = 8;
			$el.animate({'left':-790*8},0)
		}
		selchildren.css('background-color','white');
		selchildren.eq(count-1).css('background-color','red');
	})
}

lbtUtil(navLbt,navLbtSelect);