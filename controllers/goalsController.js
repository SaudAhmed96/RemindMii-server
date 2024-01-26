const knex = require("knex");
const config = require("../knexfile");
const db = knex(config);

const index = (req, res) => {
	db("goals")
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => res.status(400).send(`Error retrieving goals: ${err}`));
};

const addGoal = (req, res) => {};

module.exports = {
	index,
	addGoal,
};
