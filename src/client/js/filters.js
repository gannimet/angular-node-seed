(function(window, undefined) {

	var blogFilters = angular.module('blogFilters', []);

	blogFilters.filter('numberOfComments', function() {
		return function(commentsCount) {
			if (commentsCount < 1) {
				return 'No comments yet';
			}

			if (commentsCount === 1) {
				return '1 comment:';
			}

			return commentsCount + ' comments:';
		};
	});

})(window);
