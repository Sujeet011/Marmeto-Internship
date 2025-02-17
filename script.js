document.addEventListener("DOMContentLoaded", async () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const subtotalElement = document.getElementById("subtotal");
    const totalElement = document.getElementById("total");
    const checkoutButton = document.getElementById("checkout");

    // Fetch cart data
    const response = await fetch("https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889");
    const cartData = await response.json();

    let cartItems = cartData.items;

    function renderCart() {
        cartItemsContainer.innerHTML = "";
        let subtotal = 0;

        cartItems.forEach(item => {
            const itemSubtotal = (item.price * item.quantity) / 100;
            subtotal += itemSubtotal;

            const row = document.createElement("tr");

            row.innerHTML = `
                <td><img src="${item.image}" alt="${item.title}"> ${item.title}</td>
                <td>₹${(item.price / 100).toFixed(2)}</td>
                <td><input type="number" min="1" value="${item.quantity}" name="quantity_${item.id}" id="quantity_${item.id}" data-id="${item.id}"></td>
                <td>₹${itemSubtotal.toFixed(2)}</td>
                <td><button class="remove-btn" data-id="${item.id}">🗑️</button></td>
            `;
            
            // Append row to the table
            cartItemsContainer.appendChild(row);
        });

        // Update subtotal and total
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

        // Remove item event
        document.querySelectorAll(".remove-btn").forEach(button => {
            button.addEventListener("click", event => {
                const itemId = event.target.dataset.id;
                cartItems = cartItems.filter(i => i.id != itemId); 
                renderCart(); 
            });
        });
    }

    // Event listener for checkout button click
    checkoutButton.addEventListener("click", () => {
        const cartDataToLog = cartItems.map(item => ({
            title: item.title,
            quantity: item.quantity,
            price: (item.price / 100).toFixed(2),
            subtotal: ((item.price * item.quantity) / 100).toFixed(2) 
        }));

        console.log("Cart Data at Checkout:", cartDataToLog);

    });

    renderCart();
});
