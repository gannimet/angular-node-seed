(function(window, undefined) {

	var blogApp = angular.module('blogApp', [
		'ngRoute',
		'blogControllers',
		'blogFilters',
		'blogServices',
		'blogDirectives'
	]);

	blogApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/blog', {
			templateUrl: '/partials/blog',
			controller: 'BlogCtrl'
		}).when('/entry/:entryID', {
			templateUrl: '/partials/entry',
			controller: 'EntryCtrl'
		}).otherwise({
			redirectTo: '/blog'
		});
	}]);

})(window);
