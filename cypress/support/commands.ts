/// <reference types="cypress" />

import expect from "expect"
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * See https://medium.com/@NicholasBoll/using-jest-matchers-in-cypress-5e8e7281f5dd
 */
Cypress.Commands.overwrite(
  "should",
  // @ts-ignore
  (originalFn, subject, expectation, ...args) => {
    // See if the expectation is a string and if it is a member of Jest's expect
    if (typeof expectation === "string" && expect(subject)[expectation]) {
      // @ts-ignore
      return originalFn(subject, (s) => expect(s)[expectation](...args))
    }
    // @ts-ignore
    return originalFn(subject, expectation, ...args)
  },
)
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
