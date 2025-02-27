const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 120000, // Aumenta o tempo máximo de carregamento da página para 120 segundos
    setupNodeEvents(on, config) {
      // Implementar event listeners do Node aqui, se necessário
    },
  },
});
