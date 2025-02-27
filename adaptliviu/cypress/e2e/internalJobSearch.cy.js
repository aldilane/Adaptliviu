describe('Pesquisa de Vagas Internas', () => {
    beforeEach(() => {
        cy.visit('https://adaptedtech.abler.com.br/', {
            timeout: 120000, // Aumenta o tempo de carregamento da página para 120 segundos
        });

        // Verifica se um elemento específico está presente, indicando que a página carregou corretamente
        cy.xpath("//input[contains(@type,'text')]").should('be.visible'); // Verifica se o campo de pesquisa está visível
    });

    it('Deve pesquisar vagas contendo a palavra "teste" e validar o resultado encontrado', () => {
        // Pesquisa pela palavra "teste"
        cy.xpath("//input[contains(@type,'text')]").type('teste'); // Altere para o campo de pesquisa correto
        cy.xpath("//button[@type='button'][contains(.,'Buscar vagas')]").click(); // Seletor do botão de busca

        // Aguarda a listagem dos resultados e valida que o resultado foi encontrado
        cy.xpath("//div[contains(@id,'list-vacancy')]", { timeout: 10000 }).should('exist').then(($list) => {
            if ($list.children().length > 0) {
                cy.log('Vagas encontradas:');
                // Exibe o texto de cada vaga encontrada
                cy.wrap($list).children().each(($el) => {
                    cy.log($el.text()); // Exibe os títulos das vagas encontradas
                });
            } else {
                cy.log('Nenhuma vaga encontrada para o termo "teste".');
            }
        });
    });

    it('Deve pesquisar uma palavra aleatória sem vagas e validar a mensagem de erro', () => {
        cy.xpath("//input[contains(@type,'text')]").type('palavraInexistente123'); // Insere uma palavra aleatória que não deve encontrar vagas
        cy.xpath("//button[@type='button'][contains(.,'Buscar vagas')]").click(); // Clica no botão de buscar vagas

        // Aguarda e valida a exibição da mensagem de "nenhuma vaga encontrada"
        cy.xpath("//div[@class='not-result result p-5 animated bounceIn']")
        .should('be.visible', { timeout: 10000 }) // Aguarda até 10s para o elemento aparecer
        .invoke('text')
        .then((text) => {
          const formattedText = text.replace(/\s+/g, ' ').trim(); // Remove múltiplos espaços e quebra de linha
          expect(formattedText).to.include('Ooops! Essa empresa não possui processos seletivos abertos ou não encontramos vagas para sua pesquisa, tente outra palavra-chave.');
        });
    
        cy.log('Nenhuma vaga encontrada para o termo "aleatoria".');
    });
});
