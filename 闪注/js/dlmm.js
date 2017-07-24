$(function(){
	var num = 1;
	$('.yan i:last').tap(function(){
		num++;
		if (num%2 == 0) {
			$(".yan input").attr("type","text")
			$(this).removeClass("fa-eye-slash").addClass("fa-eye")
		} else{
			$(".yan input").attr("type","password")
			$(this).removeClass("fa-eye").addClass("fa-eye-slash")
		}
	})
	$(".btn a").tap(function(){
		$('.ale').show();
	})
	$(".btnn a").tap(function(){
		$('.ale').hide();
	})
	$(".btn a").tap(function(){
		var zz = /^[\w]{6,24}$/;
		if ($(".yan input").val() == "") {
			$('.ale').show();
			$('.ale a').attr("href","javascript:;")
			$('.ale p').text("请输入登录密码")
		} else if (zz.test($(".yan input").val())){
			$('.ale').show();
			$('.ale a').attr("href","../index.html")
			$('.ale p').text("重置密码成功，请重新登录！")
		} else{
			$('.ale').show();
			$('.ale a').attr("href","javascript:;")
			$('.ale p').text("登录密码格式错误")
		}
	})
})
