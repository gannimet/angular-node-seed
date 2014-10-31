(function(window, undefined) {

	var blogDirectives = angular.module('blogDirectives', []);

	blogDirectives.directive('greetAndCongrat', function() {
		return {
			restrict: 'EA',
			scope: {
				name: '@',
				action: '&'
			},
			controller: ['$scope', function($scope) {
				$scope.congrat = function() {
					$scope.action();
				};
			}],
			template: '<div class="important">Hello {{name}}!</div>' +
				'<button data-ng-click="congrat()">Congratulate</button>'
		};
	});

	blogDirectives.directive('listNames', function() {
		return {
			restrict: 'E',
			transclude: true,
			replace: true,
			scope: {
				names: '='
			},
			controller: ['$scope', function($scope) {
				$scope.addName = function() {
					if (!$scope.names) {
						$scope.names = [];
					}

					$scope.names.push($scope.currentName);
					$scope.currentName = '';
				};
			}],
			template: '<div id="namesContainer"><label>Name: ' +
				'<input type="text" data-ng-model="currentName" /></label>&nbsp;' +
				'<button data-ng-click="addName()">Add name</button>' +
				'<ul class="namesContainer"><data-ng-transclude>' +
				'</data-ng-transclude></ul></div>'
		};
	});

})(window);
