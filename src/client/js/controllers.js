(function(window, undefined) {
		
	var blogControllers = angular.module('blogControllers', []);

	blogControllers.controller('BlogCtrl', ['$scope', 'entryService', function($scope, entryService) {
		entryService.allEntries().success(function(data, success) {
			$scope.entries = data.entries;
		});
	}]);

	blogControllers.controller('EntryCtrl', ['$scope', function($scope) {
		
	}]);

})(window);
