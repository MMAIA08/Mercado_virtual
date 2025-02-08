// Função para simular o login e redirecionar para a página de mercados
function validateLoginForm(event) {
    // Impede o envio do formulário real
    event.preventDefault();

    // Obter os valores dos campos
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aqui você pode validar os campos, mas vamos seguir direto para o redirecionamento
    if (email && password) {
        // Simular sucesso no login e redirecionar para a página de mercados
        window.location.href = 'markets.html';
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}

// Adicionar o ouvinte de evento para o envio do formulário
document.getElementById('loginForm').addEventListener('submit', validateLoginForm);
