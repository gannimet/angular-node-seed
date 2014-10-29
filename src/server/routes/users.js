var users = [
	{
		id: 1,
		name: 'Hans',
		email: 'hans@wurst.de'
	}, {
		id: 2,
		name: 'Torsten',
		email: 'torsten@web.de'
	}, {
		id: 3,
		name: 'Willi',
		email: 'fuenf@gegen.willi'
	}
];

module.exports = {

	list: function(req, res) {
		res.json({
			users: users
		});
	}

};
