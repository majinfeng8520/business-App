mui.init({

});
// 页面加载
mui.plusReady(function() {
	var clock = '';
	var nums = 60;
	var nextOperate = document.getElementById('nextoperate'); //下一步
	var codeBtn = document.getElementById('yzm') // 发送验证码
	var phoneInput = document.getElementById('phone') //手机号
	var codeInput = document.getElementById('code') //验证码


	//发送验证码
	codeBtn.addEventListener('tap', function() {
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
			codeBtn.disabled = true
			codeBtn.innerHTML = nums + '秒';
			clock = setInterval(doLoop, 1000)
			plus.nativeUI.toast('验证码发送成功', {
				verticalAlign: 'center'
			});
		}

		//倒计时
		function doLoop() {
			nums-- -
			console.log()
			if (nums > 0) {
				codeBtn.innerHTML = nums + '秒';
			} else {
				clearInterval(clock) //清除定时器
				codeBtn.disabled = false
				codeBtn.innerHTML = "发送验证码"
				nums = 60

			}

		}
	})




	//下一步
	nextOperate.addEventListener('tap', function() {
		// plus.nativeUI.closeWaiting();

		if (phoneInput.value.trim() == "") {
			plus.nativeUI.toast('请输入手机号', {
				verticalAlign: 'center'
			});
		} else if (codeInput.value.trim().length < 6 || codeInput.value.trim() == "") {
			plus.nativeUI.toast('请输入验证码', {
				verticalAlign: 'center'
			});
		} else {
			mui.openWindow({
				url: "replacePassword.html"
			})
		}

	})
})
