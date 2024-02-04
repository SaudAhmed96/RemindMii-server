const knex = require("knex");
const config = require("../knexfile");
const db = knex(config);

const index = (req, res) => {
	const statusItems = ["all", "current", "complete"];
	const categoryItems = ["all", "personal", "work", "school"];
	let statusVal = {};
	let categoryVal = {};

	if (req.query.status == "current") {
		statusVal = { status: "Not Started" };
	} else if (req.query.status == "complete") {
		statusVal = { status: "Complete" };
	}

	if (req.query.category == "personal") {
		categoryVal = { category: "personal" };
	} else if (req.query.category == "work") {
		categoryVal = { category: "work" };
	} else if (req.query.category == "school") {
		categoryVal = { category: "school" };
	}

	if (
		statusItems.includes(req.query.status) ||
		categoryItems.includes(req.query.category)
	) {
		db("reminders")
			.where(statusVal)
			.andWhere(categoryVal)
			.then((data) => {
				res.status(200).json(data);
			})
			.catch((err) =>
				res.status(400).send(`Error retrieving reminders: ${err}`)
			);
	} else {
		db("reminders")
			.then((data) => {
				res.status(200).json(data);
			})
			.catch((err) =>
				res.status(400).send(`Error retrieving reminders: ${err}`)
			);
	}
};

const addReminder = (req, res) => {
	db("reminders")
		.insert({ ...req.body })
		.then((data) => {
			// console.log({ id: data[0], ...req.body });
			res.status(200).send();
		})
		.catch((err) => res.status(400).send(`Error adding reminder: ${err}`));
};

const updateReminder = (req, res) => {
	const { task, category, finish_date, hours } = req.body;
	const reqData = { task, category, finish_date, hours };

	console.log(req.body);

	db("reminders")
		.where({ id: req.params.id })
		.update(reqData)
		.then((data) => {
			console.log(data);
			res.status(200).send();
		})
		.catch((err) => res.status(400).send(`Error updating reminder: ${err}`));
};

const completeReminder = (req, res) => {
	db("reminders")
		.where({ id: req.params.id })
		.update({ status: "Complete" })
		.then((data) => {
			console.log(data);
			res.status(200).send();
		})
		.catch((err) => res.status(400).send(`Error completing reminder: ${err}`));
};

module.exports = {
	index,
	addReminder,
	updateReminder,
	completeReminder,
};
