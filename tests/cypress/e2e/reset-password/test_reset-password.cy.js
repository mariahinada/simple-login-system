describe('Fluxo de Redefinição de Senha', () => {
  const mockUsers = [
    { email: 'usuario@exemplo.com', password: '123456' }
  ];

  beforeEach(() => {
    cy.visit('/src/html/reset-password.html');           
    cy.window().then((win) => {
      win.localStorage.setItem('users', JSON.stringify(mockUsers));
    });
  });

  it('deve exibir alerta se o e‑mail estiver vazio', () => {
    cy.get('#recovery-email').clear();          // garante vazio
    cy.get('button[type="submit"]').click();

    cy.get('#recovery-email')
      .invoke('prop', 'validationMessage')
      .should('contain', 'Preencha');
  });

  it('alerta email inválido se não contiver "@"', () => {
    const email = 'usuarioexemplo.com';
    cy.get('#recovery-email').type(email);
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (txt) => {
      expect(txt).to.include('insira um email válido');
    });

    cy.window().then((win) => {
      const users = JSON.parse(win.localStorage.getItem('users')) || [];
      const userExists = users.some((u) => u.email === email);
      expect(userExists).to.be.false;
    });
  });
});
