var fs = require('fs');

function getAllEntries(callback) {
	fs.readFile('src/server/json/entries.json', function(err, entriesData) {
		if (err) {
			callback({
				error: err
			}, null);
			return;
		} else {
			// load users for author IDs
			fs.readFile('src/server/json/users.json', function(err, usersData) {
				if (err) {
					callback({
						error: err
					}, null);
					return;
				} else {
					var users = JSON.parse(usersData).users;
					var entries = JSON.parse(entriesData).entries;

					// map user ID to user object for later querying
					var usersMap = [];
					for (var i = 0; i < users.length; i++) {
						usersMap[users[i].id] = users[i];
					}

					// in every entry, replace the author ID with
					// the actual user object
					for (i = 0; i < entries.length; i++) {
						var authorID = entries[i].author;
						entries[i].author = usersMap[authorID];
					}

					// send this preprocessed entries list to the client
					callback(null, {
						entries: entries
					});
				}
			});
		}
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
