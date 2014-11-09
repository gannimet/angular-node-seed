(function(window, undefined) {

	var blogFilters = angular.module('blogFilters', []);

	blogFilters.filter('numberOfComments', function() {
		return function(commentsCount) {
			return prettyPrint(commentsCount, 'comment', 'comments');
		};
	});

	blogFilters.filter('numberOfEntries', function() {
		return function(entriesCount) {
			return prettyPrint(entriesCount, 'entry', 'entries');
		};
	});

	function prettyPrint(number, singular, plural) {
		if (number < 1) {
			return 'No ' + plural + ' yet';
		}

		if (number === 1) {
			return '1 ' + singular;
		}

		return number + ' ' + plural;
	}

})(window);
