(function(window, undefined) {
		
	var blogControllers = angular.module('blogControllers', []);

	blogControllers.controller('BlogCtrl', ['$scope', function($scope) {
		$scope.blogMessage = 'Hallo, ich bin der Blog!';
	}]);

	blogControllers.controller('EntryCtrl', ['$scope', function($scope) {
		$scope.entryMessage = 'Hallo, ich bin ein Blogeintrag!';
	}]);

})(window);
