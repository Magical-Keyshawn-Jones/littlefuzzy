/// <reference types="cypress" />

// import db from '../../../src/data/db-config';
// const server = require('../../../src/api/server')
// const request = require('supertest')

// beforeEach(async () => {
//   await db('videogames').truncate()
//   await db.seed.run()
// })

// afterAll(async () => {
//   await db.destroy()
// })

describe('Server Tests', () => {

  it('Server Is Up', () => {
    cy.request('http://localhost:3000/api/videogames/')
    // cy.should('have.length.above', 1) 
  })

})