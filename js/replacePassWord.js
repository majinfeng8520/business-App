mui.init({
	
})

mui.plusReady(function () {
	
	var newPwdInput = document.getElementById('newPwd')//新密码
	var newPwdAgainInput = document.getElementById('newPwdAgain')//再次输入
	var resBtn = document.getElementById('nextoperate')
	
	
	resBtn.addEventListener('tap',function(){
		console.log('啊哈哈哈')	
		if(newPwdInput.value.trim() == "" || newPwdAgainInput.value.trim() == ""){
			plus.nativeUI.toast('请输入密码', {
				verticalAlign: 'center'
			});
			return false
		}else if(!yzPwd(newPwdInput.value.trim(),newPwdAgainInput.value.trim())){
			
			plus.nativeUI.toast('两次密码不一致', {
				verticalAlign: 'center'
			});
		}else if(newPwdInput.value.trim().length<6 || newPwdAgainInput.value.trim().length<6){
			plus.nativeUI.toast('密码长度不能低于6位', {
				verticalAlign: 'center'
			});
		}else{
			plus.nativeUI.toast('全网通缉老🐎', {
				verticalAlign: 'center'
			});
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