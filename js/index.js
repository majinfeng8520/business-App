mui.init({

});
//页面加载
mui.plusReady(function() {
	var btn_login = document.getElementById('login') //登录按钮
	var btn_register = document.getElementById('register') //注册按钮
	var inpt_mobile = document.getElementById('inpt_mobile') //手机号
	var input_pwd = document.getElementById('input_pwd') //密码
	// var btn_forget=document.getElementById('forget')

	//登录
	btn_login.addEventListener('tap', function() {
		
		if (inpt_mobile.value.trim() == "") {

			plus.nativeUI.toast('手机号不能为空！', {
				verticalAlign: 'center'
			});
		} else if (inpt_mobile.value.trim().length < 11) {

			plus.nativeUI.toast('手机号不正确！', {
				verticalAlign: 'center'
			});
		} else if (input_pwd.value.trim() == "") {

			plus.nativeUI.toast('密码不能为空！', {
				verticalAlign: 'center'
			});
		} else {
			console.log('请求登录')
			plus.nativeUI.showWaiting()
			mui.ajax('https://www.innothinking.cn/login', {
				data: {
					phoneNumber: inpt_mobile.value,
					password: input_pwd.value
				},
				dataType: 'json',
				type: 'post',
				timeout: 15000,
				headers: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: function(data) {
					if (data.coed == 1) {
						plus.nativeUI.closeWaiting()
						mui.openWindow({
							url: "pages/Home.html"
						})
					} else {
						plus.nativeUI.toast('登录失败！', {
							verticalAlign: 'center'
						});
					}
				},
				error: function(xhr, type, errorThrown) {
					console.log('异常', type)
				}
			})
		}
	})
	//注册
	btn_register.addEventListener('tap', function() {
		mui.openWindow({
			url: 'pages/register.html'
		})
	})
})
