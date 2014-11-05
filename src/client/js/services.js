(function(window, undefined) {

	var blogServices = angular.module('blogServices', []);

	blogServices.factory('userService', ['$http', function($http) {
		return {
			allUsers: function() {
				return $http.get('/api/users').then(function(data) {
					return data.users;
				});
			}
		};
	}]);

	blogServices.factory('entryService', ['$http', function($http) {
		return {
			allEntries: function() {
				return $http.get('/api/entries');
			},

			entryByID: function(entryID) {
				return $http.get('/api/entry/' + entryID).then(function(data) {
					return data.entry;
				});
			}
		};
	}]);

})(window);
