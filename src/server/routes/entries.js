var jsonLoader = require('../util/jsonLoader');

function getAllEntries(callback) {
	jsonLoader.loadEntries(function(err, entriesData) {
		if (err) {
			callback(err);
			return;
		}

		var entries = entriesData.entries;
		jsonLoader.loadUsers(function(err, usersData) {
			if (err) {
				callback(err);
				return;
			}

			var users = usersData.users;

			// Map users by ID for easy access
			var usersMap = [];
			for (var i = 0; i < users.length; i++) {
				var currentUser = users[i];
				usersMap[currentUser.id] = currentUser;
			}

			// replace the author ID inside each entry object
			// with the actual user object
			for (i = 0; i < entries.length; i++) {
				var authorID = entries[i].author;
				entries[i].author = usersMap[authorID];
			}

			callback(null, {
				entries: entries
			});
		});
	});
}

module.exports = {

	allEntries: function(req, res) {
		getAllEntries(function(err, data) {
			if (err) {
				res.status(500).json(err);
			} else {
				res.status(200).json(data);
			}
		});
	},

	entryByID: function(req, res) {
		var entryID = parseInt(req.params.entryID, 10);

		getAllEntries(function(err, data) {
			if (err) {
				res.status(500).json(err);
			} else {
				// find entry with that ID
				var entries = data.entries;
				for (var i = 0; i < entries.length; i++) {
					if (entries[i].id === entryID) {
						res.status(200).json({
							entry: entries[i]
						});
						return;
					}
				}

				// entry not found
				res.status(404).json({
					error: 'Entry with ID' + entryID + ' not found'
				});
			}
		});
	}

};
