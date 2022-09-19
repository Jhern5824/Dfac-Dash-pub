/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('detailed_data').del()
  await knex('detailed_data').insert([
    { id: 1, name: 'Middle Eastern Beyond Burger', description: 'Shawarma-seasoned Beyond® Burger with tomato, cucumber, arugula and spicy skhug sauce', is_vegan: 1, is_vegetarian: 0, is_dairy: 0, is_nuts: 0, is_gluten: 0, calories: 500, calories_from_fat: 220, total_fat: 25, saturated_fat: 9, trans_fat: 0, cholestrol: 0, sodium_total: 1480, carbohydrates: 45, dietary_fiber: 8, sugars: 6, protein: 28},
    { id: 2, name: 'Crispy Chicken Tenders', description: 'Deep-fried chicken breast strips', is_vegan: 0, is_vegetarian: 0, is_dairy: 0, is_nuts:0, is_gluten:1, calories: 520, calories_from_fat: 420, total_fat: 28, saturated_fat: 5, trans_fat: 0, cholestrol: 65, sodium_total: 1520, carbohydrates: 39, dietary_fiber: 1, sugars: 0, protein: 28},
    { id: 3, name: 'Four Cheese & Tomato Melt', description: 'Cheddar, Monterey Jack, provolone, Swiss cheese, tomato and onion on a flatbread', is_vegan: 0, is_vegetarian: 1, is_dairy: 1, is_nuts:0, is_gluten:1, calories: 490, calories_from_fat: 150, total_fat: 24, saturated_fat: 11, trans_fat: 0, cholestrol: 50, sodium_total: 850, carbohydrates: 47, dietary_fiber: 2, sugars: 3, protein: 23},
    { id: 4, name: 'Mushroom & Onion Quesadilla', description: 'Crispy flour tortilla filled with sauteed mushrooms, onions and melted cheddar', is_vegan: 0, is_vegetarian: 1, is_dairy: 1, is_nuts:0, is_gluten:0, calories: 550, calories_from_fat: 270, total_fat: 30, saturated_fat: 13, trans_fat: 0, cholestrol: 55, sodium_total: 1200, carbohydrates: 49, dietary_fiber: 4, sugars: 5, protein: 18},
    { id: 5, name: 'Beyond Sausage, Egg and Sriracha', description: 'Fried egg, Beyond Sausage, swiss cheese, sriracha on an english muffin', is_vegan: 0, is_vegetarian: 0, is_dairy: 1, is_nuts:0, is_gluten:0, calories: 500, calories_from_fat: 280, total_fat: 32, saturated_fat: 10, trans_fat: 0, cholestrol: 225, sodium_total: 970, carbohydrates: 29, dietary_fiber: 2, sugars: 2, protein: 24},
    { id: 6, name: 'Buttermilk Pancakes with Syrup', description: 'Fluffy, golden brown pancakes served with pure maple syrup', is_vegan: 0, is_vegetarian: 1, is_dairy: 0, is_nuts:0, is_gluten:1, calories: 270, calories_from_fat: 10, total_fat: 1, saturated_fat: 0, trans_fat: 0, cholestrol: 0, sodium_total: 420, carbohydrates: 62, dietary_fiber: 1, sugars: 27, protein: 4},

  ]);
};
