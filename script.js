// Função para adicionar itens ao carrinho
function addToCart(name, price) {
    // Verifica se o localStorage está funcionando
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Verifica se o item já existe no carrinho
    let itemExists = cart.find(item => item.name === name);

    if (itemExists) {
        itemExists.quantity += 1;  // Incrementa a quantidade se o item já existe
    } else {
        cart.push({ name: name, price: price, quantity: 1 });  // Adiciona novo item
    }

    // Atualiza o localStorage com o carrinho atualizado
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Atualiza a contagem de itens no carrinho
    updateCartCount();
    
    console.log("Item adicionado ao carrinho:", name, price);  // Log para verificar
}

// Atualiza a contagem de itens no carrinho no cabeçalho
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartCount = cart.reduce((total, item) => total + item.quantity, 0);  // Soma todas as quantidades
    document.getElementById('cart-count').textContent = cartCount;  // Atualiza o contador no header
}

// Inicializa a contagem do carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});