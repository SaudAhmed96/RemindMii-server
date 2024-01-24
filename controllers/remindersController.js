const knex = require("knex");
const config = require("../knexfile");
const db = knex(config);

const index = (req, res) => {
	db("reminders")
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => res.status(400).send(`Error retrieving reminders: ${err}`));
};

const addReminder = (req, res) => {};

module.exports = {
	index,
	addReminder,
};
