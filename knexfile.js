module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/knex-humans',
    pool: {
      min: 2,
      max: 10
    }
  }

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    }
  }

};
