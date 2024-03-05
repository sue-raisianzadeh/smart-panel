const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../../.env') })

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'your_username',
      password: 'your_password',
      database: 'your_database_name',
      charset: 'utf8',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(__dirname, '/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/seeds'),
    },
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, '../../database/dev.sqlite3'),
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}
