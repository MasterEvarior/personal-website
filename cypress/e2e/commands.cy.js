describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("should display help text", () => {
    cy.get("#input").type("help{enter}");

    cy.contains("Enter any of the following commands and press <enter>");
  });

  it("should display about text", () => {
    cy.get("#input").type("about{enter}");

    cy.contains("Hi, I'm Giannin");
  });

  it("should display a list of skills", () => {
    cy.get("#input").type("skills{enter}");

    cy.contains("Programming Languages");
    cy.contains("Web Development");
    cy.contains("Tools & Cloud");
    cy.contains("DevOps & CI/CD");
  });

  it("should display contact text", () => {
    cy.get("#input").type("contact{enter}");

    cy.contains("Feel free to contact me through these channels:");
    cy.contains("contact@giannin.ch");
    cy.contains("https://github.com/MasterEvarior");
  });

  it("should clear output area", () => {
    cy.get("#input").type("about{enter}");
    cy.get("#input").type("clear{enter}");

    cy.get("#output").should("be.empty").invoke("text").should("be.empty");
  });

  it("should display error text on invalid input", () => {
    cy.get("#input").type("oiewhgröerg{enter}");

    cy.contains(
      '"oiewhgröerg" is not a valid command. Enter "help" for assistance.'
    );
  });
});
