/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('dfac_name').del()
  await knex('dfac_name').insert([
    {id: 1, location: 'Fort Bragg', name: 'SWCS Dining Facility'},
    {id: 2, location: 'Fort Bragg', name: '2nd BCT Dining Facility'},
    {id: 3, location: 'Fort Bragg', name: '3rd BCT Dining Facility'},
    {id: 4, location: 'Patrick SFB', name: 'Riverside DFAC'},
    {id: 5, location: 'Patrick SFB', name: 'The Tides Collacated Club'},
    {id: 6, location: 'Patrick SFB', name: 'Beach House'},
    {id: 7, location: 'F.E. Warren AFB', name: 'Chadwell Dining Facility'},

  ]);
};