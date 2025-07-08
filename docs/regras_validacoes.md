# Regras e Validações / simple-login-system

Temos algumas regras de negócio:

## Registro de conta

### E-mail

Obrigatório
Precisa conter o símbolo @
Deve ter domínio válido (ex: gmail.com, yahoo.com.br, outlook.com, etc)
Sem espaços

### Senha

Obrigatória
Mínimo de 8 caracteres
Pelo menos uma letra maiúscula
Pelo menos uma letra minúscula 
Pelo menos um número
Pelo menos um caractere especial (ex:!@#$%&*)

### Confirmação de senha

Obrigatória
Deve ser igual à senha

## Login

### E-mail

Mesmo critério do cadastro

### Senha

Obrigatória
Deve ser a senha cadastrada

## Mensagens de erro esperadas

- E-mail inválido
- Senha fraca: use letras maiúsculas, número(s) e caracteres especiais.
- Senhas não conferem
- Preencha todos os campos obrigatórios