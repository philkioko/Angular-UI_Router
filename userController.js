(function(){

	'use strict';

	angular
	  	 .module('authApp')
	  	 .controller('UserController', UserController);

	  	 function UserController($http){
	  	 	var vm=this;
	  	 	vm.users;
	  	 	vm.errors;

	  	 	vm.getUsers=function(){
	  	 		$http.get('http://localhost:8000/Users').success(function(users) {
                vm.users = users;
            }).error(function(error) {
                vm.error = error;
            });
	  	 	}
	  	 }

})();