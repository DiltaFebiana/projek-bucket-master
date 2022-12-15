describe('Admin Can Open Product Page', () => {
  it('Admin Can Read Product Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.visit("http://127.0.0.1:8000/");
    cy.get('#username').type("admin");
    cy.get('#password').type("admin123");
    cy.get('#login').click();
    cy.get('#menu > ul > :nth-child(2) > a').click();
    cy.get('#navbarDropdown').click();
    cy.get('.dropdown-item').click();
  })

  it('Admin Can Add New Product', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.visit("http://127.0.0.1:8000/");
    cy.get('#username').type("admin");
    cy.get('#password').type("admin123");
    cy.get('#login').click();
    cy.get('#menu > ul > :nth-child(2) > a').click();
    cy.get('.float-right > .btn').click();
    cy.get('#nama').type("Bucket Hijab");
    cy.get('#harga').type(90000);
    cy.get('#kategori').type("Hijab Pasmina");
    cy.get('#estimasi_pembuatan').type("6 jam");
    cy.get('#foto').selectFile('cypress/e2e/admin/bucket_hijab.jpg');
    cy.get('#catatan').type("Gratis kartu ucapan, untuk kalimat ucapan dan tambahan lainnya bisa ditambahkan di catatan.");
    cy.get('.btn').click();
    cy.get('#navbarDropdown').click();
    cy.get('.dropdown-item').click();
  })

  it('Admin Can Edit Product', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.visit("http://127.0.0.1:8000/");
    cy.get('#username').type("admin");
    cy.get('#password').type("admin123");
    cy.get('#login').click();
    cy.get('#menu > ul > :nth-child(2) > a').click();
    cy.get('.ml-3').click();
    cy.get(':nth-child(2) > :nth-child(7) > form > .btn-primary').click();
    cy.get('#harga').clear().type(70000);
    cy.get('#kategori').clear().type("Hijab Plisket");
    cy.get('#estimasi_pembuatan').clear().type("4 jam");
    cy.get('#foto').selectFile('cypress/e2e/admin/bucket_hijab.jpg');
    cy.get('.btn').click();
    cy.get('#navbarDropdown').click();
    cy.get('.dropdown-item').click();
  })

  it('Admin Can Delete Product', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.visit("http://127.0.0.1:8000/");
    cy.get('#username').type("admin");
    cy.get('#password').type("admin123");
    cy.get('#login').click();
    cy.get('#menu > ul > :nth-child(2) > a').click();
    cy.get('.ml-3').click();
    cy.get(':nth-child(2) > :nth-child(7) > form > .btn-danger').click();
    cy.get('#navbarDropdown').click();
    cy.get('.dropdown-item').click();
  })

})