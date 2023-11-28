/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('atomBuilding', (table) => {
    table.increments('id')
    table.string('name')
    table.string('email')
    table.string('Phone')
    table.string('message')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('atomBuilding')
}
