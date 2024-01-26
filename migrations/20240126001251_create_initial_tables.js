/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema
		.createTable("users", (table) => {
			table.increments("id").primary();
			table.string("username").notNullable();
			table.string("password").notNullable();
			table.datetime("added_date").notNullable();
			table.timestamp("updated_at").defaultTo(knex.fn.now());
			table.string("first_name").notNullable();
			table.string("last_name").notNullable();
		})
		.createTable("reminders", (table) => {
			table.increments("id").primary();
			table.string("task").notNullable();
			table.string("category").notNullable();
			table.datetime("finish_date").notNullable();
			table.integer("hours").notNullable();
			table.datetime("added_date").notNullable();
			table.timestamp("updated_at").defaultTo(knex.fn.now());
			table
				.integer("user_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("users")
				.onUpdate("CASCADE")
				.onDelete("CASCADE");
			table.string("status").notNullable();
		})
		.createTable("goals", (table) => {
			table.increments("id").primary();
			table.string("goal").notNullable();
			table.string("type").notNullable();
			table.string("category").notNullable();
			table.datetime("added_date").notNullable();
			table.datetime("target_finish").notNullable();
			table.timestamp("updated_at").defaultTo(knex.fn.now());
			table
				.integer("user_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("users")
				.onUpdate("CASCADE")
				.onDelete("CASCADE");
			table.string("status").notNullable();
		});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema
		.dropTable("reminders")
		.dropTable("goals")
		.dropTable("users");
};
