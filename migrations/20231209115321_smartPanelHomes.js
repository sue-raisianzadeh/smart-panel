exports.up = function (knex) {
  return knex.schema.createTable('smartpanel', (table) => {
    table.increments('id')
    table.string('name')
    table.string('email')
    table.string('phone')
    table.string('message')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('smartpanel')
}
