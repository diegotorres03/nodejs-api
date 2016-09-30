/**
 * Run test for api routes.
 * @module api-test
 */
'use strict'

// Set test environment
process.env.NODE_ENV = 'test'

// npm modules
const chai = require('chai')
const chaiHttp = require('chai-http')

// start server
const server = require('../../server')

// Config chai
chai.use(chaiHttp)

// Test routes
require('./users')(server.app)

// Test sandbox
require('./sandbox')(server.sandbox)