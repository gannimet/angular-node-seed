(function(window, undefined) {

	var blogServices = angular.module('blogServices', []);

	blogServices.service('userService', ['$http', function($http) {
		this.allUsers = function() {
			return $http.get('/users');
		};
	}]);

	blogServices.service('entryService', ['$http', function($http) {
		this.allEntries = function() {
			return $http.get('/entries');
		};
	}]);

})(window);
