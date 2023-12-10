/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('smartpanel').del()
  await knex('smartpanel').insert([
    {
      id: 1,
      name: 'sue',
      email: 'raisianz@gmail.com',
      phone: '0212049836',
      message: 'hi...',
    },
    {
      id: 2,
      name: 'susan',
      email: 'raisianz@gmail.com',
      phone: '0212049836',
      message: 'hello..',
    },
  ])
}
