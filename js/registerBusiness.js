mui.init({

});
mui.plusReady(function() {

	var inputBsName = document.getElementById('storeName') //商铺名称
	var inputBsAdderss = document.getElementById('storeAdderss') //商铺地址
	var inputNameWithBs = document.getElementById('contacts') //联系人
	var registerBtn = document.getElementById('registerClick') //注册
	console.log('=====')


	//下一步
	registerBtn.addEventListener('tap', function() {

		console.log('注册')
		if (inputBsName.value.trim() == "") {
			plus.nativeUI.toast('请填写商铺名称！', {
				verticalAlign: 'center'
			});
			return false

		} else if (inputBsAdderss.value.trim() == "") {
			plus.nativeUI.toast('请填写商铺地址！', {
				verticalAlign: 'center'
			});
			return false
		} else if (inputBsAdderss.value.trim() == "") {
			plus.nativeUI.toast('请填写联系人！', {
				verticalAlign: 'center'
			});
			return false
		} else {
			plus.nativeUI.toast('注册成功，老马🐂 🍺！', {
				verticalAlign: 'center'
			});
			return false
		}

	})



})
