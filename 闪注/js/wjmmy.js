$(function(){
	$('.yan button').tap(function(){
		$(this).hide();
		$(".djs").show();
		var tim = 59;
		var timer = setInterval(function(){
			if (tim <= 0) {
				clearInterval(timer)
				tim = 60;
				$('.yan button').show();
				$(".djs").hide();
			}
			$(".djs").html(tim + "s");
			tim--;
		},1000)
		setTimeout(function(){
			code = parseInt(Math.random() * 1000 + 8999);
			$(".ale strong").text(code)
			$(".ale").show();
		},3000)
		$(".btnn a").tap(function(){
			$(".ale").hide();
		})
	})
	$('.btn a').tap(function(){
		console.log(code)
		if ($(".yan input").val() == code) {
			$(this).attr("href","dlmm.html")
		} else{
			$(this).attr("href","javascript:;")
		}
	})
})
