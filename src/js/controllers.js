(function(window, undefined) {

	var webApp = angular.module('webApp', []);

	webApp.controller('WebCtrl', ['$scope', '$http', function($scope, $http) {
		$scope.entity = 'world';
		var b = 'dfsdf';
	}]);

})(window);
