$(function(){
	$('.btnn a').tap(function(){
		$('.ale').hide();
	})
	$(".inp:eq(0)").blur(function(){
		var zz = /^[1][\d]{10}$/;
		if ($(".inp:eq(0)").val() == "") {
			$('.ale').show();
			$(".ale p").text("请输入手机号码")
		} else if (zz.test($(".inp:eq(0)").val())){
			$(".img:eq(0)").show();
			$(".img:eq(0)").attr("src","img/yes.png");
		} else{
			$(".img:eq(0)").show();
			$(".img:eq(0)").attr("src","img/no.png");
		}
		if ($(".img:eq(0)").attr("src") == "img/yes.png" && $(".img:eq(1)").attr("src") == "img/yes.png"){
			$(".btn a").attr("href","html/B-login.html")
		}
	})
	$(".inp:eq(1)").blur(function(){
		var mm = /^[\w]{6,24}$/;
		if ($(".inp:eq(1)").val() == "") {
			$('.ale').show();
			$(".ale p").text("请输入密码")
		} else if (mm.test($(".inp:eq(1)").val())){
			$(".img:eq(1)").show();
			$(".img:eq(1)").attr("src","img/yes.png");
		} else{
			$(".img:eq(1)").show();
			$(".img:eq(1)").attr("src","img/no.png");
		}
		if ($(".img:eq(0)").attr("src") == "img/yes.png" && $(".img:eq(1)").attr("src") == "img/yes.png"){
			$(".btn a").attr("href","html/B-login.html")
		}
	})
})
