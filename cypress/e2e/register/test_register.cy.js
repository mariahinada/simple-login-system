describe('Fluxo de registro', () => {
    beforeEach(() => {
        cy.visit('src/html/register.html');
});

it('deve exibir alerta se o e-mail for vazio', () => {
    cy.get('#email').clear();
    cy.get('#password').type('123456');
    cy.get('input#confirm-password').type('123456');
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (text) => {
        expect(text).to.include('Preencha este campo');
    });
});

it('alerta email inválido se não contiver @', () => {
    cy.get('#email').type('usuarioexemplo.com');
    cy.get('#password').type('123456');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (text) => {
        expect(text).to.include('Por favor, insira um e-mail válido');
    });
});

it('deve exibir erro se a senha for muito curta', () => {
    cy.get('#email').type('usuario@exemplo.com.br');
    cy.get('#password').type('123');
    cy.get('input#confirm-password').type('123');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (txt) => {
        expect(txt).to.include('A senha deve ter pelo menos 6 caracteres');
    });
});

it('alerta senhas não coincidem se a confirmação não for igual', () => {
    cy.get('#email').type('usuario@exemplo.com');
    cy.get('#password').type('123456');
    cy.get('input#confirm-password').type('1234567');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (txt) => {
        expect(txt).to.include('As senhas não coincidem');
    });
});

it('alerta email já cadastrado se o usuário já existir', () => {
    cy.window().then((win) => {
        win.localStorage.setItem('users', JSON.stringify([{ email: 'usuario@exemplo.com', password: '123456' }]));
    });

    cy.get('#email').type('usuario@exemplo.com');
    cy.get('#password').type('123456');
    cy.get('input#confirm-password').type('123456');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (txt) => {
        expect(txt).to.include('Este email já está cadastrado');
    });
});

it('registra novo usuário com sucesso, limpa o form e salva no localStorage', () => {
    cy.window().then((win) => {
        win.localStorage.clear();
    });

    cy.get('#email').type('novo@exemplo.com');
    cy.get('#password').type('123456');
    cy.get('input#confirm-password').type('123456');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (txt) => {
        expect(txt).to.include('Usuário cadastrado com sucesso');
    });

    cy.get('#email').should('have.value', '');
    cy.get('#password').should('have.value', '');
    cy.get('input#confirm-password').should('have.value', '');

    cy.window().then((win) => {
        const users = JSON.parse(win.localStorage.getItem('users'));
        expect(users).to.have.length(1);
        expect(users[0].email).to.equal('novo@exemplo.com');
        });
    });
});