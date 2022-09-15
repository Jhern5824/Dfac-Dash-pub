/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('military_base').del()
  await knex('military_base').insert([
    {id: 1, location: 'Patrick SFB', branch:"USSF"},
    {id: 2, location: 'F.E. Warren AFB', branch:"USAF"},
    {id: 3, location: 'Fort Bragg', branch:"USA"}
  ]);
};
