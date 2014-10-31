(function(window, undefined) {
		
	var blogControllers = angular.module('blogControllers', []);

	blogControllers.controller('BlogCtrl', ['$scope', 'userService', function($scope, userService) {
		$scope.entity = 'world';
		$scope.congratulate = function(age) {
			window.alert('Congratulations on your ' + age + '. birthday!');
		};
		$scope.names = ['Siegfried', 'Raimund', 'Sören'];
		$scope.loadAllUsers = function() {
			userService.allUsers().success(function(data, status) {
				$scope.users = data.users;
			});
		};

		$scope.loadAllUsers();
	}]);

	blogControllers.controller('TestableCtrl', ['$scope', function($scope) {
		$scope.name = 'Sarah';
		$scope.sayHello = function() {
			$scope.greeting = 'Hello ' + $scope.name;
		};
	}]);

})(window);
