const logInData = [
    { 
      login: '727865319689', 
      password: '123456',
    },
    {
      login: '094747973123', 
      password: '123456',
    },
    { 
      login: '09ааа23', 
      password: '123456',
    },
  ];
  
  logInData.forEach((userData, index) => {
    it(`Тест #${index + 1}: Вхід з логіном "${userData.login}" та паролем "${userData.password}"`, () => {
      cy.visit('https://www.tubetgol.com/es/');
  
      cy.get('[class="btn btn-login"]').click();
      cy.get('#login-input').type(userData.login); 
      cy.get('#password-input').type(userData.password); 
      cy.get('#login-button').click(); 
  
      cy.get('[data-cy="/aviator-route"]').click().should('be.visible'); 
    });
  });