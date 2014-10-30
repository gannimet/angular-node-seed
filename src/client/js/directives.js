(function(window, undefined) {

	var blogDirectives = angular.module('blogDirectives', []);

	blogDirectives.directive('angularSpec', function() {
		return {
			template: '<dl><dt>Name</dt><dd>{{angular.name}}</dd>' +
				'<dt>Sprache</dt><dd>{{angular.language}}</dd>' +
				'<dt>Qualität</dt><dd>{{angular.quality}}</dd>' +
				'</dl>'
		};
	});

})(window);
