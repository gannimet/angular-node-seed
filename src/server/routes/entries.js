var entries = [
	{
		id: 1,
		title: 'Angular is awesome',
		text: 'Angular.js is the best client side framework around.'
	}, {
		id: 2,
		title: 'So is node.js',
		text: 'node.js is the best server side framework around'
	}
];

module.exports = {

	list: function(req, res) {
		res.json({
			entries: entries
		});
	}

};
