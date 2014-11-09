var jsonLoader = require('../util/jsonLoader');

module.exports = {

	commentsByEntryID: function(req, res) {
		var entryID = parseInt(req.params.entryID, 10);

		jsonLoader.loadComments(function(err, commentsData) {
			if (err) {
				res.status(500).json({
					error: err
				});
				return;
			}

			var allComments = commentsData.comments;
			var commentsForEntry = [];

			for (var i = 0; i < allComments.length; i++) {
				if (allComments[i].entry === entryID) {
					commentsForEntry.push(allComments[i]);
				}
			}

			jsonLoader.loadUsers(function(err, usersData) {
				if (err) {
					res.status(500).json({
						error: err
					});
				}

				var users = usersData.users;
				var usersMap = [];
				for (i = 0; i < users.length; i++) {
					var currentUser = users[i];
					usersMap[currentUser.id] = currentUser;
				}

				for (i = 0; i < commentsForEntry.length; i++) {
					var authorID = commentsForEntry[i].author;
					commentsForEntry[i].author = usersMap[authorID];
				}

				res.status(200).json({
					comments: commentsForEntry
				});
			});
		});
	}

};
