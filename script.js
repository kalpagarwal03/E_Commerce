const products = [
    // Men
    { name: "Men's T-Shirt", price: 19.99, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80", category: 'men' },
    { name: "Men's Jeans", price: 39.99, img: "https://images.unsplash.com/photo-1514995669114-d1c1b7a83a48?auto=format&fit=crop&w=400&q=80", category: 'men' },
    { name: "Men's Jacket", price: 59.99, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80", category: 'men' },
    { name: "Men's Hoodie", price: 29.99, img: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80", category: 'men' },
    { name: "Men's Shorts", price: 17.99, img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80", category: 'men' },
    // Women
    { name: "Women's Dress", price: 29.99, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", category: 'women' },
    { name: "Women's Top", price: 15.99, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80", category: 'women' },
    { name: "Women's T-Shirt", price: 18.99, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80", category: 'women' },
    { name: "Women's Skirt", price: 22.99, img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80", category: 'women' },
    { name: "Women's Hoodie", price: 27.99, img: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80", category: 'women' },
    // Kids
    { name: "Kids' T-Shirt", price: 12.99, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80", category: 'kids' },
    { name: "Kids' Dress", price: 16.99, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", category: 'kids' },
    { name: "Kids' Jeans", price: 19.99, img: "https://images.unsplash.com/photo-1514995669114-d1c1b7a83a48?auto=format&fit=crop&w=400&q=80", category: 'kids' },
    { name: "Kids' Hoodie", price: 15.99, img: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80", category: 'kids' },
    { name: "Kids' Shorts", price: 10.99, img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80", category: 'kids' },
    // More Products
    { name: "Men's Polo Shirt", price: 24.99, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80", category: 'men' },
    { name: "Women's Blouse", price: 21.99, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", category: 'women' },
    { name: "Men's Shorts", price: 18.99, img: "https://images.unsplash.com/photo-1514995669114-d1c1b7a83a48?auto=format&fit=crop&w=400&q=80", category: 'men' },
    { name: "Women's Pants", price: 27.99, img: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80", category: 'women' },
    { name: "Kids' Jacket", price: 22.99, img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80", category: 'kids' },
    { name: "Men's Cap", price: 9.99, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80", category: 'men' },
    { name: "Women's Scarf", price: 12.99, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", category: 'women' },
    { name: "Kids' Cap", price: 7.99, img: "https://images.unsplash.com/photo-1514995669114-d1c1b7a83a48?auto=format&fit=crop&w=400&q=80", category: 'kids' },
    { name: "Men's Socks", price: 8.99, img: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80", category: 'men' },
    { name: "Women's Socks", price: 8.99, img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80", category: 'women' }
];

let cart = {};

function updateCartCount() {
    const count = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cart-count').textContent = count;
}

function updateCartModal() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    Object.values(cart).forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.name} x${item.qty}</span>
            <span>$${(item.price * item.qty).toFixed(2)}</span>
        `;
        cartItems.appendChild(li);
        total += item.price * item.qty;
    });
    document.getElementById('cart-total').textContent = total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.product-card button').forEach(function(btn, idx) {
        btn.addEventListener('click', function() {
            const product = products[Math.floor(idx/2)];
            if (btn.classList.contains('view-btn')) {
                // Show product modal
                document.getElementById('modal-product-img').src = product.img;
                document.getElementById('modal-product-name').textContent = product.name;
                document.getElementById('modal-product-desc').textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1) + ' clothing, high quality.';
                document.getElementById('modal-product-price').textContent = `$${product.price.toFixed(2)}`;
                document.getElementById('product-modal').classList.add('active');
            } else {
                // Add to cart
                if (cart[product.name]) {
                    cart[product.name].qty += 1;
                } else {
                    cart[product.name] = { ...product, qty: 1 };
                }
                updateCartCount();
                updateCartModal();
            }
        });
    });

    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const closeCart = document.getElementById('close-cart');

    cartBtn.addEventListener('click', function() {
        cartModal.classList.add('active');
        updateCartModal();
    });
    closeCart.addEventListener('click', function() {
        cartModal.classList.remove('active');
    });
    cartModal.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });

    // Product modal close logic
    const productModal = document.getElementById('product-modal');
    const closeProductModal = document.getElementById('close-product-modal');
    closeProductModal.addEventListener('click', function() {
        productModal.classList.remove('active');
    });
    productModal.addEventListener('click', function(e) {
        if (e.target === productModal) {
            productModal.classList.remove('active');
        }
    });

    // Purchase button logic
    document.getElementById('purchase-btn').addEventListener('click', function() {
        window.location.href = 'payment.html';
    });
    // Checkout button logic
    document.getElementById('checkout-btn').addEventListener('click', function() {
        window.location.href = 'payment.html';
    });

    updateCartCount();
}); 