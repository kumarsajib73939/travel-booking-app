// Shopping Cart functionality
class ShoppingCart {
    constructor() {
        this.items = [];
        this.total = 0;
        this.init();
    }

    init() {
        // Add cart icon to navbar
        const navForm = document.querySelector('.navbar .d-flex');
        const cartHTML = `
            <div class="cart-icon">
                <i class="fas fa-shopping-cart"></i>
                <span class="cart-count">0</span>
            </div>
        `;
        navForm.insertAdjacentHTML('beforebegin', cartHTML);

        // Add cart modal to body
        const cartModal = `
            <div class="cart-modal">
                <h3>Your Cart</h3>
                <div class="cart-items"></div>
                <div class="cart-total">Total: $0</div>
                <button class="checkout-btn">Proceed to Checkout</button>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', cartModal);

        // Add event listeners
        this.addEventListeners();
        
        // Replace "Book Now" buttons with "Add to Cart"
        this.updateBookButtons();
    }

    addEventListeners() {
        // Cart icon click
        document.querySelector('.cart-icon').addEventListener('click', () => {
            document.querySelector('.cart-modal').classList.toggle('active');
        });

        // Checkout button
        document.querySelector('.checkout-btn').addEventListener('click', () => {
            if (this.items.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            alert('Proceeding to checkout with total: $' + this.total);
            // Here you would typically redirect to a checkout page
        });

        // Close cart when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.cart-modal') && !e.target.closest('.cart-icon')) {
                document.querySelector('.cart-modal').classList.remove('active');
            }
        });
    }

    updateBookButtons() {
        // Update all "Book Now" links to buttons
        const bookLinks = document.querySelectorAll('.packages .card a[href="#book"]');
        bookLinks.forEach(link => {
            const card = link.closest('.card');
            const destination = card.querySelector('h3').textContent;
            const price = card.querySelector('strong').textContent;
            
            const button = document.createElement('button');
            button.className = 'btn btn-warning w-100';
            button.textContent = 'Add to Cart';
            button.onclick = () => this.addToCart(destination, price);
            
            link.parentNode.replaceChild(button, link);
        });
    }

    addToCart(destination, price) {
        const priceNum = parseInt(price.replace('$', ''));
        this.items.push({ destination, price: priceNum });
        this.total += priceNum;
        this.updateCartDisplay();
        
        // Show confirmation
        alert(`${destination} added to cart!`);
    }

    removeFromCart(index) {
        this.total -= this.items[index].price;
        this.items.splice(index, 1);
        this.updateCartDisplay();
    }

    updateCartDisplay() {
        // Update cart count
        document.querySelector('.cart-count').textContent = this.items.length;

        // Update cart items
        const cartItems = document.querySelector('.cart-items');
        cartItems.innerHTML = this.items.map((item, index) => `
            <div class="cart-item">
                <div>
                    <div>${item.destination}</div>
                    <div>$${item.price}</div>
                </div>
                <span class="remove-item" onclick="cart.removeFromCart(${index})">✕</span>
            </div>
        `).join('');

        // Update total
        document.querySelector('.cart-total').textContent = `Total: $${this.total}`;
    }
}

// Initialize cart when document is ready
document.addEventListener('DOMContentLoaded', () => {
    window.cart = new ShoppingCart();
});