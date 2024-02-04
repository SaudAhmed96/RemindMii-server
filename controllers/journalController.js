const knex = require("knex");
const config = require("../knexfile");
const db = knex(config);

const index = (req, res) => {
	db("journal")
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => res.status(400).send(`Error retrieving journal: ${err}`));
};

const singleEntry = (req, res) => {
	db("journal")
		.where({ id: req.params.id })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).send(`Error retrieving journal entry: ${err}`);
		});
};
const addJournal = (req, res) => {
	db("journal")
		.insert({ ...req.body })
		.then((data) => {
			// console.log({ id: data[0], ...req.body });
			res.status(200).send();
		})
		.catch((err) => {
			console.log(err);
			res.status(400).send(`Error adding journal: ${err}`);
		});
};
const updateJournal = (req, res) => {
	const { task, category, finish_date, hours } = req.body;
	const reqData = { task, category, finish_date, hours };

	db("journal")
		.where({ id: req.params.id })
		.update(reqData)
		.then((data) => {
			console.log(data);
			res.status(200).send();
		})
		.catch((err) => res.status(400).send(`Error updating reminder: ${err}`));
};

module.exports = {
	index,
	addJournal,
	updateJournal,
	singleEntry,
};
