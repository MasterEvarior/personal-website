describe("basics", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("should display header", () => {
    cy.contains("Giannin");
    cy.contains('Enter "help" for assistance 🎉');
  });

  it("should display footer", () => {
    cy.contains("Made with ❤️ by myself");
  });
});
