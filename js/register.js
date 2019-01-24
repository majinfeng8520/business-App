mui.init({

});
mui.plusReady(function() {
	var clock = '';
	var nums = 60;
	var yzmBtn = document.getElementById('yzm') //验证码
	var phoneInput = document.getElementById('inpt_mobile') //手机号
	var nextOperate = document.getElementById('nextoperate') //下一步
	//发送验证码
	yzmBtn.addEventListener('tap', function() {
		console.log('手机号', phoneInput.value)
		if (phoneInput.value.trim() != "") {
			// 点击以后按钮变成禁用状态
			yzmBtn.disabled = true;
			// 点击修改按钮内容
			yzmBtn.innerHTML = nums + '秒';
			clock = setInterval(doLoop, 1000)
		} else {

		}


	})
	//倒计时
	function doLoop() {
		nums-- -
		// console.log("开始")
		if (nums > 0) {
			yzmBtn.innerHTML = nums + '秒';
		} else {
			clearInterval(clock) //清除定时器
			yzmBtn.disabled = false
			yzmBtn.innerHTML = "发送验证码"
			nums = 60
			console.log("2")
		}

	}


	nextOperate.addEventListener('tap', function() {
		plus.nativeUI.closeWaiting();
		mui.openWindow({
			url: "registerBusiness.html"
		})
	})

})
