/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("journal", (table) => {
		table.increments("id").primary();
		table.string("title").notNullable();
		table.string("entry").notNullable();
		table.datetime("entry_date").notNullable();
		table.timestamp("updated_at").defaultTo(knex.fn.now());
		table
			.integer("user_id")
			.unsigned()
			.notNullable()
			.references("id")
			.inTable("users")
			.onUpdate("CASCADE")
			.onDelete("CASCADE");
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("journal");
};
