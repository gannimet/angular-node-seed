(function(window, undefined) {

	var blogServices = angular.module('blogServices', []);

	blogServices.service('userService', ['$http', function($http) {
		this.allUsers = function() {
			return $http.get('/users');
		};
	}]);

})(window);
