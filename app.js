var OneVill = angular.module('OneVill', ['ui.router'])
.config(function($stateProvider){
	$stateProvider.state("index",{
		url:"",
		controller:"LoginCtrl",
		templateUrl:"templates/login.html"
	})
	$stateProvider.state("signup",{
		url:"/signup",
		controller:"SignUpCtrl",
		templateUrl:"templates/signup.html"
	})
	$stateProvider.state("forgotPwd",{
		url:"/forgotPassword",
		controller:"forgotPwdCtrl",
		templateUrl:"templates/forgotPassword.html"
	})
	$stateProvider.state("dashboard",{
		url:"/dashboard",
		controller:"dashboardCtrl",
		templateUrl:"templates/dashboard.html"
	})
	$stateProvider.state("dashboard.userProfile",{
		url:"/userProfile",
		controller:"dashboardCtrl",
		templateUrl:"templates/userProfile.html"
	})
	$stateProvider.state("dashboard.family",{
		url:"/family",
		controller:"dashboardCtrl",
		templateUrl:"templates/family.html"
	})
	
})

  .controller('forgotPwdCtrl', function forgotPwdCtrl($scope) {
	 
	  console.log("forgotPwd");
   

  

})
.controller('dashboardCtrl', function dashboardCtrl($scope) {
	 
	  console.log("forgotPwd");
   

  

})
 .controller('LoginCtrl', function LoginCtrl($scope) {
	 
	  console.log("login");
   
	$scope.loginFunc= function(data){
		var loginDetails=data;
		console.log(data);
	}
  

})

  
  .controller('SignUpCtrl', function SignUpCtrl($scope) {
	    console.log("signup");
     $scope.registerFunc= function(data){
		var registerDetails=data;
		console.log(data);
	}
	$scope.pwdCheck=function(data){
		console.log(data);
		if(data.password != data.confirmPassword)
		{
			$scope.pwdError=true;
		}
		else{
			$scope.pwdError=false;
		}
	}
  });
 