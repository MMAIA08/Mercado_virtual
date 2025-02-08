function confirmOrder() {
    const selectedPaymentMethod = document.querySelector('input[name="payment"]:checked');

    if (selectedPaymentMethod) {
        // Armazenar o método de pagamento escolhido no localStorage
        localStorage.setItem("paymentMethod", selectedPaymentMethod.value);

        alert(`Pedido confirmado com pagamento via ${selectedPaymentMethod.value.toUpperCase()}.`);
        window.location.href = "order-confirmation.html"; // Redirecionar para a página de confirmação
    } else {
        alert("Por favor, escolha um método de pagamento.");
    }
}
