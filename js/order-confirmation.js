// Função para simular o método de pagamento
function setPaymentMethod() {
    const paymentMethod = localStorage.getItem("paymentMethod");
    if (paymentMethod) {
        document.getElementById("paymentMethod").textContent = paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1); // Exibe "Pix" ou "Cartão"
    }
}

// Função para redirecionar para a página inicial
function goBackToHome() {
    window.location.href = "index.html";
}

// Função para simular o acompanhamento do pedido
function trackOrder() {
    alert("Seu pedido está sendo processado e será entregue em breve.");
}

// Chama a função para definir o método de pagamento
setPaymentMethod();
