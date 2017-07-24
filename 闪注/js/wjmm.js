$(function(){
	$(".btn>a").tap(function(){
		$(".ale strong").text($(".yan input").val())
		var zz = /^[1][\d]{10}$/;
		if ($(".yan input").val() == "") {
			$('.ale').hide();
			$(".yan input").val("请输入手机号")
		} else if (zz.test($(".yan input").val())){
			$('.ale').show();
			$('.yan img').show();
			$('.yan img').attr("href","img/yes.png")
		} else{
			$('.ale').hide();
			$('.yan img').show();
			$('.yan img').attr("href","img/no.png")
		}
	})
	$(".btnn>a:first").tap(function(){
		$(".ale").hide()
	})
	$(".btnn>a:last").tap(function(){
		$(".ale").hide()
	})
})
