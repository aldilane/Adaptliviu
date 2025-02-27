# Guia de Preparação do Ambiente e Execução do Projeto

Este guia fornece os passos necessários para preparar o ambiente, instalar o Node.js e o Cypress, e rodar seu projeto de automação de testes com Cypress e JavaScript.

## Passo 1: Preparando o Ambiente

### 1.1 Instalar o Node.js

Primeiro, você precisa ter o **Node.js** instalado em sua máquina. O Node.js é uma plataforma de JavaScript para desenvolvimento do lado do servidor, e o Cypress depende dele para rodar.

1. Acesse o site oficial do Node.js: [https://nodejs.org/](https://nodejs.org/)
2. Baixe a versão recomendada (LTS) para o seu sistema operacional.
3. Siga as instruções de instalação de acordo com o seu sistema operacional:
   - **Windows**: Execute o instalador e siga os passos.
   - **MacOS**: Abra o arquivo `.pkg` e siga as instruções.
   - **Linux**: Utilize o gerenciador de pacotes da sua distribuição.

### 1.2 Verificar a instalação do Node.js

Após a instalação, abra o terminal (ou prompt de comando no Windows) e digite os seguintes comandos para verificar se o Node.js e o NPM foram instalados corretamente:

```bash
node -v
npm -v
```

## Passo 2: Instalando o Cypress

Agora que o Node.js está instalado, você pode instalar o Cypress no seu projeto.

### 2.1 Clonar o repositório

Se você ainda não clonou o repositório do seu projeto, faça isso utilizando o seguinte comando:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

### 2.2 Navegar até o diretório do projeto

Após clonar o repositório, entre na pasta do projeto:

```bash
cd nome-do-repositorio
```

### 2.3 Instalar as dependências do projeto
No diretório do seu projeto, instale as dependências usando o NPM ou Yarn.

Se você estiver usando o npm:

```bash
npm install
```

Ou, se preferir usar o yarn:

```bash
yarn install
```

### 2.4 Instalar o Cypress
Agora, instale o Cypress como dependência de desenvolvimento no seu projeto com o seguinte comando:

Se estiver usando npm:

```bash
npm install cypress --save-dev
```

Ou com yarn:

```bash
yarn add cypress --dev
```

Isso instalará o Cypress no seu projeto.

# Passo 3: Rodando o Projeto
Agora que o ambiente está configurado e o Cypress está instalado, você pode rodar os testes.

### 3.1 Rodar Cypress em Modo Interativo
Para abrir o Cypress em modo interativo e rodar os testes manualmente, utilize o seguinte comando:

```bash
npx cypress open
```

Isso abrirá o Cypress Test Runner, onde você poderá selecionar e executar os testes manualmente na interface gráfica.

### 3.2 Rodar Cypress em Modo Headless
Se preferir rodar os testes no terminal (sem a interface gráfica), use o modo headless:

```bash
npx cypress run
```

Isso executará todos os testes automaticamente no terminal, sem abrir a interface gráfica.

### 3.3 Rodar um Teste Específico
Se você quiser rodar um teste específico, você pode usar o seguinte comando:

```bash
npx cypress run --spec 'cypress/integration/arquivo_de_teste.spec.js'
```

Substitua 'cypress/integration/arquivo_de_teste.spec.js' pelo caminho e nome do arquivo de teste que você deseja executar.