// Função para atualizar o total do carrinho
function updateCart() {
    // Obter os valores das quantidades e preços dos produtos
    const qty1 = document.getElementById("qty1").value;
    const qty2 = document.getElementById("qty2").value;

    const price1 = 19.99;
    const price2 = 29.99;

    // Calcular o total
    const total = (qty1 * price1) + (qty2 * price2);

    // Atualizar o preço total na página
    document.getElementById("totalPrice").textContent = `R$ ${total.toFixed(2)}`;
}

// Função para remover um item do carrinho
function removeFromCart(itemId) {
    const item = document.getElementById(itemId);
    item.style.display = "none"; // Remove o item da visualização

    updateCart(); // Atualiza o total após a remoção
}
