// const environment = process.env.NODE_ENV || 'development'
const environment = process.env.DATABASE_URL ? "production" : "development";
const config = require('./knexfile')[environment]
module.exports = require('knex')(config)