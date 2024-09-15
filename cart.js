// Função para atualizar a exibição dos itens do carrinho
function updateCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    let cartTotal = 0;

    cartItems.innerHTML = '';  // Limpa a lista atual de itens

    cart.forEach((item, index) => {
        cartTotal += item.price * item.quantity;  // Calcula o total baseado na quantidade

        // Cria um elemento de lista para cada item no carrinho
        let li = document.createElement('li');
        li.innerHTML = `${item.name} (x${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2)} 
            <button onclick="removeItem(${index})">Remover</button>`;
        cartItems.appendChild(li);
    });

    // Atualiza o valor total do carrinho
    document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
}

// Função para remover um item do carrinho
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Remove um item ou decrementa a quantidade
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;  // Decrementa a quantidade se for maior que 1
    } else {
        cart.splice(index, 1);  // Remove o item se a quantidade for 1
    }

    // Atualiza o localStorage e o carrinho
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();  // Atualiza a exibição do carrinho
    updateCartCount();  // Atualiza a contagem de itens no cabeçalho
}

// Função para limpar o carrinho
function clearCart() {
    localStorage.removeItem('cart');  // Remove o carrinho do localStorage
    updateCart();  // Atualiza a exibição
    updateCartCount();  // Atualiza a contagem
}

// Inicializa a exibição do carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    updateCart();
});
