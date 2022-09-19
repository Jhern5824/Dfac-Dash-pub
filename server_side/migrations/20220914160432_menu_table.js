/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('menu', table =>{
    table.increments("id");
    table.string('name_of_menu_item', 250);
    table.string('DFAC_name', 250);
    table.string('time_of_day', 10);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('menu')
};
