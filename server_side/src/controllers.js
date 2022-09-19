const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV || 'development']);


function createData(newData) {
    knex("detailed_data").insert(newData);
    return knex.select("*").from("detailed_data");
}

module.exports = { createData }