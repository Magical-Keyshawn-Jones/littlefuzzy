/// <reference types="cypress" />

describe('Testing Test', () => {

    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })

    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })

    it('Visits the Kitchen Sink', () => {
        cy.visit('http://localhost:3000/')
      })
  })

//   describe('Can Visit Website', () => {
//     it('Visits the Kitchen Sink', () => {
//       cy.visit('http://localhost:3000/')
//     })
//   })