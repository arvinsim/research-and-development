describe("Create Person Test", () => {
  it("open page", () => {
    const name = "Arthur";
    const gender = "male";
    const age = "18";

    cy.visit("http://localhost:3000/react-hook-form");
    cy.get("#name").type(name);
    cy.get("#gender").select(gender);
    cy.get("#age").type(age);
    cy.get("form").submit();
    cy.get("#message").contains(
      `Your name is ${name}. You are ${gender} and aged ${age}`
    );
  });
});

// Here to just satisfy Typescript
export {};
