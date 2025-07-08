# Estrutura do Projeto / simple-login-system

Este projeto é um sistema simples de login e cadastro composto por:

## 📁 src/
Contém os arquivos-fonte do projeto.

`html/`
  - `login.html`: Tela de login com formulário de entrada.
  - `register.html`: Tela de cadastro para novos usuários.
  
`css/`
  - `style.css`: Estilos gerais aplicados nas telas.
  
`js/`
  - `validation.js`: Script responsável por validar os dados de entrada nos formulários.
  - `auth.js`: Script simulado de autenticação dos usuários.

## 📁 tests/
Reúne tudo relacionado a testes automatizados.

- `casos de testes/`: Listagem de todos os cenários de teste automatizados e manuais.
- `evidencias/`: Prints ou gravações dos testes automatizados executados.
- `test_login_cy.js`: Arquivo de testes automatizados com Cypress para o fluxo de login e cadastro.

## 📁 docs/
Documentação do projeto.

- `estrutura_do_projeto.md`: Este arquivo.
- `decisoes_tecnicas.md`: Justificativas e escolhas feitas ao longo do desenvolvimento.
- `regras_validacoes.md`: Regras de negócio e critérios de validação aplicados nos formulários.
