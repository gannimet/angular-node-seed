var jsonLoader = require('../util/jsonLoader');

module.exports = {

	allUsers: function(req, res) {
		jsonLoader.loadUsers(function(err, usersData) {
			if (err) {
				res.status(500).json({
					error: err
				});
			} else {
				res.status(200).json(usersData);
			}
		});
	}

};
