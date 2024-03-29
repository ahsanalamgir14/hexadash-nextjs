/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('clients', function (table) {
        table.increments('id').primary();
        table.integer('user_id').unsigned().notNullable();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email').notNullable();
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('clients');
};
