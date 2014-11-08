var fs = require('fs');

function loadDataFromFile(filePath, callback) {
	fs.readFile(filePath, function(err, jsonData) {
		if (err) {
			callback({
				error: err
			});
			return;
		}

		callback(null, JSON.parse(jsonData));
	});
}

module.exports = {

	loadEntries: function(callback) {
		loadDataFromFile('src/server/json/entries.json', callback);
	},

	loadUsers: function(callback) {
		loadDataFromFile('src/server/json/users.json', callback);
	},

	loadComments: function(callback) {
		loadDataFromFile('src/server/json/comments.json', callback);
	}

};
