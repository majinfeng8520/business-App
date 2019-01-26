mui.init({
	
});
// 页面加载
mui.plusReady(function () {
    var nextOperate = document.getElementById('nextoperate');
	
	nextOperate.addEventListener('tap', function() {
		plus.nativeUI.closeWaiting();
		mui.openWindow({
			url: "replacePassword.html"
		})
	})
})