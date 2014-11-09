(function(window, undefined) {
		
	var blogControllers = angular.module('blogControllers', []);

	blogControllers.controller('BlogCtrl', ['$scope', 'entryService', function($scope, entryService) {
		entryService.allEntries().then(function(result) {
			$scope.entries = result.data.entries;
		});
	}]);

	blogControllers.controller('EntryCtrl', ['$scope', 'entryService', '$routeParams',
			function($scope, entryService, $routeParams) {
		var entryID = $routeParams.entryID;

		entryService.entryByID(entryID).then(function(result) {
			$scope.entry = result.data.entry;
		});

		entryService.commentsByEntryID(entryID).then(function(result) {
			$scope.comments = result.data.comments;
		});
	}]);

})(window);
