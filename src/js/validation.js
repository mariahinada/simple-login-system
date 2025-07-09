document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;

    if (path.endsWith('login.html')) {
        setupLoginValidation();
    } else if (path.endsWith('register.html')) {
        setupRegisterValidation();
    } else if (path.endsWith('reset-password.html')) {
        setupResetValidation();
    }
});

function setupLoginValidation() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = form.email.value.trim();
        const password = form.password.value.trim();

        if (!email.includes('@')) {
            alert('Por favor, insira um email válido.');
            return;
        }

        if (password.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        let users = JSON.parse(localStorage.getItem('users')) || [];

        const userExists = users.some(user => user.email === email && user.password === password);

        if(userExists) {
            alert('Login bem-sucedido!');
            form.reset();

        } else {
            alert('Email ou senha incorretos. Por favor, tente novamente.');
        }
    });
}

function setupRegisterValidation() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = form.email.value.trim();
        const password = form.password.value.trim();
        const confirmPassword = form['confirm-password'].value.trim();

        if (!email.includes('@')) {
            alert('Por favor, insira um email válido.');
            return;
        }

        if (password.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        if (password !== confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        }

        let users = JSON.parse(localStorage.getItem('users')) || [];

        if(users.some(user => user.email === email)) {
            alert('Este email já está cadastrado.');
            return;
        }

        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert('Usuário cadastrado com sucesso!');
        form.reset();
    });
}

function setupResetValidation() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = form['recovery-email'].value.trim();

        if (!email.includes('@') || email.length < 5) {
            alert('Por favor, insira um email válido.');
            return;
        }

        alert('Instruções de redefinição de senha enviadas para o seu email!');
    });
}
