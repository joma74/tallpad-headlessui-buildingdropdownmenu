import expect from "expect"

describe("open cypress example page", () => {
  it("visits the kitchen sink", () => {
    cy.visit("https://example.cypress.io")
  })
})

describe("check jest works", () => {
  it("cy's should works with string style matching from jest", () => {
    cy.wrap(5).should("toBe", 5)
    cy.wrap({ foo: "bar" }).should("toHaveProperty", "foo", "bar")
    expect({ foo: "bar" }).toHaveProperty("foo", "bar")
  })
  it("expect from jest works", () => {
    expect({ foo: "bar" }).toHaveProperty("foo", "bar")
  })
  it("expect from jest does not work", () => {
    expect({ foo: "bar" }).toHaveProperty("foo", "baz")
  })
})
