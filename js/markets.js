// Função para filtrar os mercados
function filterMarkets() {
    let searchInput = document.getElementById('searchInput').value.toLowerCase();
    let categorySelect = document.getElementById('categorySelect').value;
    let marketCards = document.querySelectorAll('.market-card');
    
    marketCards.forEach(card => {
        let marketName = card.querySelector('h3').textContent.toLowerCase();
        let marketCategory = card.getAttribute('data-category');
        
        // Verifica se o nome do mercado contém o texto da busca e se a categoria corresponde
        if ((marketName.includes(searchInput)) && 
            (categorySelect === "" || marketCategory === categorySelect)) {
            card.style.display = 'block';  // Exibe o mercado
        } else {
            card.style.display = 'none';   // Esconde o mercado
        }
    });
}
