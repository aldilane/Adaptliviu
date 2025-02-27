describe('Teste de Formulário de Contato - Adapt Liviu', () => {
    it('Deve preencher e enviar o formulário de contato com sucesso', () => {
      cy.intercept('https://www.google-analytics.com/**', {
        statusCode: 200,
        body: {}
      }).as('googleAnalytics');
      
      cy.visit('https://adaptliviu.com.br');
  
      // Clicar no botão "Fale com a nossa equipe"
      cy.xpath("//a[contains(.,'Fale com a nossa equipe')]").click();
  
      // Preencher os campos do formulário
      cy.xpath("//input[contains(@name,'form_fields[name]')]").type('Aldilane QA');
      cy.xpath("//input[contains(@type,'email')]").type('aldilanesantosbh@gmail.com');
      cy.xpath("//input[contains(@name,'form_fields[message]')]").type('Empresa QA');
  
      // Selecionar um produto no dropdown
      cy.xpath("//select[@name='form_fields[field_f4f7f90]']").select(1); 
  
      // Preencher telefone
      cy.xpath("//input[@size='1'][contains(@id,'195975d')]").type('31993005769');
  
      // Preencher a mensagem
      cy.xpath("//textarea[contains(@id,'98bbe7d')]").type('Desafio teste QA');
  
      // Marcar checkbox de aceite
      cy.xpath("//input[@type='checkbox'][contains(@id,'757d493')]").check();
  
      // Clicar no botão "Entrar em contato"
      cy.xpath("//button[contains(.,'Entrar em contato')]").click();
  
      // Validar a mensagem de sucesso
      cy.xpath("//div[contains(@class,'elementor-message-success')]")
        .should('contain', 'Inscrição realizada com sucesso! Em breve nosso time entrará em contato.');
    });
  });
  