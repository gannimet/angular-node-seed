var fs = require('fs');

module.exports = {

	allEntries: function(req, res) {
		fs.readFile('src/server/json/entries.json', function(err, entriesData) {
			if (err) {
				res.status(500).json({
					error: 'File entries.json not found'
				});
			} else {
				// load users for author IDs
				fs.readFile('src/server/json/users.json', function(err, usersData) {
					if (err) {
						res.status(500).json({
							error: 'File users.json not found'
						});
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
						for (var i = 0; i < entries.length; i++) {
							var authorID = entries[i].author;
							entries[i].author = usersMap[authorID];
						}

						// send this preprocessed entries list to the client
						res.status(200).json({
							entries: entries
						});
					}
				});
			}
		});
	}

};
