document.addEventListener("DOMContentLoaded", async () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const subtotalElement = document.getElementById("subtotal");
    const totalElement = document.getElementById("total");

    // Fetch cart data
    const response = await fetch("https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889");
    const cartData = await response.json();

    let cartItems = cartData.items;

    // Function to render cart items
    function renderCart() {
        cartItemsContainer.innerHTML = "";
        let subtotal = 0;

        cartItems.forEach(item => {
            let itemSubtotal = (item.price * item.quantity) / 100;
            subtotal += itemSubtotal;

            cartItemsContainer.innerHTML += `
                <tr>
                    <td><img src="${item.image}" alt="${item.title}"> ${item.title}</td>
                    <td>₹${(item.price / 100).toFixed(2)}</td>
                    <td><input type="number" min="1" value="${item.quantity}" data-id="${item.id}"></td>
                    <td>₹${itemSubtotal.toFixed(2)}</td>
                    <td><button class="remove-btn" data-id="${item.id}">🗑️</button></td>
                </tr>
            `;
        });

        subtotalElement.textContent = `₹${subtotal.toFixed(2)}`;
        totalElement.textContent = `₹${subtotal.toFixed(2)}`;

        attachEventListeners();
    }

    // Event listeners for quantity change and remove item
    function attachEventListeners() {
        document.querySelectorAll("input[type='number']").forEach(input => {
            input.addEventListener("change", event => {
                const itemId = event.target.dataset.id;
                const newQuantity = parseInt(event.target.value);
                const item = cartItems.find(i => i.id == itemId);
                if (newQuantity > 0) {
                    item.quantity = newQuantity;
                    renderCart();
                }
            });
        });

        document.querySelectorAll(".remove-btn").forEach(button => {
            button.addEventListener("click", event => {
                const itemId = event.target.dataset.id;
                cartItems = cartItems.filter(i => i.id != itemId);
                renderCart();
            });
        });
    }

    // Initial render
    renderCart();
});
