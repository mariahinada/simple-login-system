describe('Fluxo de Login', () => {
  beforeEach(() => {
    cy.visit('/src/html/login.html');

const users = [{ email: 'teste@exemplo.com', password: '123456' }];
  localStorage.setItem('users', JSON.stringify(users));
  });

  it('deve exibir erro se o e-mail não tiver @', () => {
    cy.get('#email').type('usuarioemail.com');
    cy.get('#password').type('123456');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (text) => {
      expect(text).to.include('E-mail válido');
    });
  });

it('deve exibir erro se a senha for muito curta', () => {
    cy.get('#email').type('usuario@exemplo.com');
    cy.get('#password').type('123');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (text) => {
      expect(text).to.include('senha deve ter pelo menos 6 caracteres');
    });
  });

  it('deve exibir erro se o usuário não existir', () => {
    cy.get('#email').type('naoexiste@exemplo.com');
    cy.get('#password').type('123456');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (text) => {
      expect(text).to.include('Email ou senha incorretos');
    });
  });

  it('deve logar com sucesso com email e senha válidos', () => {
    cy.get('#email').type('usuario@exemplo.com');
    cy.get('#password').type('123456');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (text) => {
      expect(text).to.include('Login bem-sucedido');
    });
  });
});