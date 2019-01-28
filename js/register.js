mui.init({

});
mui.plusReady(function() {
	var clock = '';
	var nums = 60;
	var yzmBtn = document.getElementById('yzm') //验证码按钮
	var nextOperate = document.getElementById('nextoperate') //下一步
	var phoneInput = document.getElementById('inpt_mobile') //手机号
	var codeInput = document.getElementById('input_Code') //验证码
	var pwdInput = document.getElementById('input_Pwd') //手机号
	var agInput = document.getElementById('input_aginPwd') //再次输入

	//发送验证码
	yzmBtn.addEventListener('tap', function() {

		console.log('手机号', phoneInput.value)
		var reg = /1[3|4|5|6|7|8|9][0-9]{9}/;
		if (phoneInput.value.trim() == "") {
			plus.nativeUI.toast('手机号不能为空！', {
				verticalAlign: 'center'
			});
			return false
		} else if (!(/1[3|4|5|6|7|8|9][0-9]{9}/.test(phoneInput.value))) {
			plus.nativeUI.toast('请输入正确手机号', {
				verticalAlign: 'center'
			});
			return false
		} else {
			// 点击以后按钮变成禁用状态
			yzmBtn.disabled = true;
			// 点击修改按钮内容
			yzmBtn.innerHTML = nums + '秒';
			clock = setInterval(doLoop, 1000)
			plus.nativeUI.toast('验证码发送成功', {
				verticalAlign: 'center'
			});
		}
	})
	//倒计时
	function doLoop() {
		nums-- -
		console.log()
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
	//下一步
	nextOperate.addEventListener('tap', function() {

		if (phoneInput.value.trim() == "") {
			plus.nativeUI.toast('请输入手机号', {
				verticalAlign: 'center'
			});
			return false

		} else if (codeInput.value.trim() == "" || codeInput.value.trim().length < 6) {
			plus.nativeUI.toast('请输入验证码', {
				verticalAlign: 'center'
			});

			return false
		} else if (pwdInput.value.trim() == "" || agInput.value.trim() == "") {
			plus.nativeUI.toast('请输入密码', {
				verticalAlign: 'center'
			});
			return false
		} else if (!yzPwd(pwdInput.value.trim(), agInput.value.trim())) {

			plus.nativeUI.toast('两次密码不一致', {
				verticalAlign: 'center'
			});
			return false
		} else {

			mui.openWindow({
				url: "registerBusiness.html"
			})

		}

	})

	function yzPwd(pwd1, pwd2) {

		if (pwd1 == pwd2 || pwd2 == pwd1) {

			return true

		} else {
			return false
		}

	}

})
