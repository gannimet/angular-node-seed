var fs = require('fs');

module.exports = {

	allUsers: function(req, res) {
		fs.readFile('src/server/json/users.json', function(err, data) {
			if (err) {
				res.status(500).json({
					error: 'File users.json not found'
				});
			} else {
				res.status(200).json(JSON.parse(data));
			}
		});
	}

};
