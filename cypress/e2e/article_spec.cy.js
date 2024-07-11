describe("NY Times Most Popular Articles", () => {
  const apiKey = Cypress.env("apiKey");

  it("should display the app title", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("NY Times Most Popular Articles");
  });

  it("should fetch and display articles", () => {
    cy.visit("http://localhost:5173/");
    cy.intercept(
      "GET",
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`
    ).as("getArticles");
    cy.wait("@getArticles").its("response.statusCode").should("eq", 200);
    cy.get("li").should("have.length.greaterThan", 0);
  });

  it("should show article details when an article is clicked", () => {
    cy.visit("http://localhost:5173/");
    cy.get("li").first().click();
    cy.get("h2").should("exist");
  });
});
