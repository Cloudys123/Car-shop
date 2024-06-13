function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let item = { name: name, price: price };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(name + ' has been added to your cart.');
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        cartItems.innerHTML += `<p>${item.name} - $${item.price} <button onclick="removeItem(${index})" style="background-color: #ff0000; color: #fff; border: none; padding: 5px; cursor: pointer;">Remove</button></p>`;
    });
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
    }
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
}

function checkout() {
    window.location.href = 'checkout.html';
}

function goToCart() {
    window.location.href = 'cart.html';
}


document.addEventListener('DOMContentLoaded', displayCart);
