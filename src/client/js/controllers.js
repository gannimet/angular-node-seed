(function(window, undefined) {
		
	var blogControllers = angular.module('blogControllers', []);

	blogControllers.controller('BlogCtrl', ['$scope', 'entryService', function($scope, entryService) {
		entryService.allEntries().then(function(data, status) {
			$scope.entries = data.entries;
		});
		$scope.hello = 'world';
	}]);

	blogControllers.controller('EntryCtrl', ['$scope', 'entryService', '$routeParams',
			function($scope, entryService, $routeParams) {
		var entryID = $routeParams.entryID;
		entryService.entryByID(entryID).success(function(data, status) {
			$scope.entry = data.entry;
		});
	}]);

})(window);
