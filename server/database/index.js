/** @module database */

// Modules to export
const dbPool = require('./database.pool')
const dbService = require('./database.service')

module.exports = {
  /** Pool of connections to application databases */
  dbPool,

  /** Common actions for crud operations */
  dbService
}