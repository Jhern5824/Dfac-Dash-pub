/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('detailed_data', table => {
    table.increments("id");
    table.string('name');
    table.string('description');
    table.boolean('is_vegan');
    table.boolean('is_vegetarian');
    table.boolean('is_dairy');
    table.boolean('is_nuts');
    table.boolean('is_gluten');
    table.integer('calories');
    table.integer('calories_from_fat');
    table.integer('total_fat');
    table.integer('saturated_fat');
    table.integer('trans_fat');
    table.integer('cholestrol')
    table.integer('sodium_total')
    table.integer('carbohydrates')
    table.integer('dietary_fiber')
    table.integer('sugars')
    table.integer('protein')
    table.string('name_of_food')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('detailed_data')
};
