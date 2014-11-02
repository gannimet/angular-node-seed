(function(window, undefined) {

	var blogServices = angular.module('blogServices', []);

	blogServices.service('userService', ['$http', function($http) {
		this.allUsers = function() {
			return $http.get('/api/users');
		};
	}]);

	blogServices.service('entryService', ['$http', function($http) {
		this.allEntries = function() {
			return $http.get('/api/entries');
		};

		this.entryByID = function(entryID) {
			return $http.get('/api/entry/' + entryID);
		};
	}]);

})(window);
