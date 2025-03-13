// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg', // PostgreSQL
    connection: {
      connectionString:
        'postgresql://neondb_owner:npg_ehlMy9bzTUg3@ep-purple-snowflake-a53qaizs-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
      ssl: { rejectUnauthorized: false }, // Para habilitar SSL
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  staging: {
    client: 'pg', // PostgreSQL
    connection: {
      connectionString:
        'postgresql://neondb_owner:npg_ehlMy9bzTUg3@ep-purple-snowflake-a53qaizs-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
      ssl: { rejectUnauthorized: false }, // Para habilitar SSL
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'pg', // PostgreSQL
    connection: {
      connectionString:
        'postgresql://neondb_owner:npg_ehlMy9bzTUg3@ep-purple-snowflake-a53qaizs-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
      ssl: { rejectUnauthorized: false }, // Para habilitar SSL
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}
