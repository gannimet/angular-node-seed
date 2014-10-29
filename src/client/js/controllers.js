(function(window, undefined) {
		
	var blogControllers = angular.module('blogControllers', []);

	blogControllers.controller('BlogCtrl', ['$scope', 'userService', function($scope, userService) {
		$scope.entity = 'world';

		userService.allUsers().success(function(data, status) {
			$scope.users = data.users;
		});
	}]);

})(window);
