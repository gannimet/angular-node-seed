(function(window, undefined) {

	var blogApp = angular.module('blogApp', [
		'ngRoute',
		'blogControllers',
		'blogFilters',
		'blogServices',
		'blogDirectives'
	]);

	blogApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider.when('/blog', {
			templateUrl: '/partials/blog',
			controller: 'BlogCtrl'
		}).when('/entry/:entryID', {
			templateUrl: '/partials/entry',
			controller: 'EntryCtrl'
		}).otherwise({
			redirectTo: '/blog'
		});

		$locationProvider.html5Mode(true);
	}]);

})(window);
