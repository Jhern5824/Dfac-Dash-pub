/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('menu').del()
  await knex('menu').insert([
    {id: 1, name_of_menu_item: 'Middle Eastern Beyond Burger', DFAC_name:'Riverside DFAC',time_of_day:'Dinner'},
    {id: 2, name_of_menu_item: 'Crispy Chicken Tenders', DFAC_name:'Riverside DFAC',time_of_day:'Lunch'},
    {id: 3, name_of_menu_item: 'Four Cheese & Tomato Melt', DFAC_name:'Riverside DFAC',time_of_day:'Lunch'},
    {id: 4, name_of_menu_item: 'Beyond Sausage, Egg and Sriracha', DFAC_name:'Riverside DFAC',time_of_day:'Breakfast'},
    {id: 5, name_of_menu_item: 'Mushroom & Onion Quesadilla', DFAC_name:'Riverside DFAC',time_of_day:'Dinner'},
    {id: 6, name_of_menu_item: 'Buttermilk Pancakes with Syrup', DFAC_name:'Riverside DFAC',time_of_day:'Breakfast'}
  ]);
};


