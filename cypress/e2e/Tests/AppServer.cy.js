/// <reference types="cypress" />

describe('Testing Test', () => {

    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })

    it('Does not do much!', () => {
      expect(true).equal(true)
    })

    // For Now helps stops loop
    it('Visits the Kitchen Sink', () => {
        cy.visit('http://localhost:3000/')
      })
  })