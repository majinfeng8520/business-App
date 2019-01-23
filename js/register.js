mui.init({
	
});
mui.plusReady(function() {
	var yzmBtn = document.getElementById('yzm')
	var nextOperate = document.getElementById('nextoperate')
	yzmBtn.addEventListener('tap', function() {
		console.log('点击验证码');
		// 点击修改按钮内容
		yzmBtn.innerHTML = '60秒';
		// 点击以后按钮变成禁用状态
		yzmBtn.disabled = true;
	})
	nextOperate.addEventListener('tap',function(){
		plus.nativeUI.closeWaiting();
		mui.openWindow({
			url: "registerBusiness.html"
		})
	})

})
