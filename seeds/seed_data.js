/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// exports.seed = async function(knex) {
//   // Deletes ALL existing entries
//   await knex('table_name').del()
//   await knex('table_name').insert([
//     {id: 1, colName: 'rowValue1'},
//     {id: 2, colName: 'rowValue2'},
//     {id: 3, colName: 'rowValue3'}
//   ]);
// };

const userData = require("../seed_data/users");
const reminderData = require("../seed_data/reminders");
const goalData = require("../seed_data/goals");
const journalData = require("../seed_data/journal");

exports.seed = function (knex) {
	return knex("users")
		.del()
		.then(() => {
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
		})
		.then(() => {
			return knex("journal").del();
		})
		.then(() => {
			return knex("journal").insert(journalData);
		});
};
