const userData = require("../seed_data/users");
const reminderData = require("../seed_data/reminders");
const goalData = require("../seed_data/goals");

exports.seed = function (knex) {
	return knex("users")
		.del()
		.then(function () {
			return knex("users").insert(userData);
		})
		.then(() => {
			return knex("reminders").del();
		})
		.then(() => {
			return knex("reminders").insert(reminderData);
		})
		.then(() => {
			return knex("goals").del();
		})
		.then(() => {
			return knex("goals").insert(goalData);
		});
};
