/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('bookings', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.string('title').notNullable();
      table.string('event_type').notNullable();
      table.string('start_date').notNullable();
      table.string('end_date').notNullable();
      table.text('description');
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('bookings');
  };