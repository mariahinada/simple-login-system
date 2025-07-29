describe('Fluxo de Login', () => {
  beforeEach(() => {
    cy.visit('index.html');

const users = [{ email: 'usuario@exemplo.com', password: '123456' }];
  localStorage.setItem('users', JSON.stringify(users));
  });

  it('deve exibir erro se o e-mail não tiver @', () => {
    cy.get('#email').type('usuarioexemplo.com');
    cy.get('#password').type('123456');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (text) => {
      expect(text).to.include('Por favor, insira um email válido.');
    });
  });

it('deve exibir erro se a senha for muito curta', () => {
    cy.get('#email').type('usuario@exemplo.com');
    cy.get('#password').type('123');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (text) => {
      expect(text).to.include('A senha deve ter pelo menos 6 caracteres');
    });
  });

  it('deve exibir erro se o usuário não existir', () => {
    cy.get('#email').type('naoexiste@exemplo.com');
    cy.get('#password').type('1234567');
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
