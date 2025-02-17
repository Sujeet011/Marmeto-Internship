Cart Page - Responsive and Functional E-commerce Cart
This project involves creating a responsive and functional cart page for an e-commerce website using HTML, CSS, and JavaScript. The cart page dynamically loads cart item details from a provided JSON API and allows users to interact with the cart by adjusting quantities, removing items, and viewing updated total prices.

Features
Dynamic Cart Item Loading: Cart items are fetched from an external API and dynamically displayed on the cart page.
Interactive Cart Elements:
Quantity Update: Users can change the quantity of items, and the subtotal and total will update in real-time.
Remove Item: Users can remove items from the cart by clicking a trash icon, and the total will be updated accordingly.
Currency Formatting: Prices are displayed in Indian Rupees (₹) with proper formatting.
Responsive Design: The cart page is fully responsive and adjusts according to different screen sizes (mobile, tablet, desktop).
Cart Totals: The page displays both the subtotal for each item and the total cart value.
Checkout Button: A placeholder "Checkout" button is included, allowing for further checkout functionality.
Design Reference
The design of the cart page follows the specifications from the provided Figma Design. The page layout, typography, and styles have been implemented to match this design.

API for Cart Data
The cart items are fetched from the following JSON API: API Cart Data

The API provides a list of cart items, each containing:

Product image URL
Product title
Price
Quantity
Product subtotal (calculated as price * quantity)

Clone the Repository:
https://github.com/Sujeet011/Marmeto-Internship.git

Navigate to the Project Folder:
cd Marmeto-Internship
Open index.html in a Web Browser:

Open the index.html file in your browser to view the cart page.
View Cart Page Features:

Cart items are loaded from the provided API and displayed on the page.
Use the quantity input to change the number of items.
Click the trash icon to remove items from the cart.
The total price is updated dynamically.
Technology Stack
HTML: For the structure of the cart page.
CSS: For styling the page and making it responsive.
JavaScript: For dynamic functionality, including fetching cart data, updating quantities, and removing items.
JSON API: The cart data is fetched from an external JSON API.
Features to Implement
Quantity Update: Real-time update of individual item subtotal and total cart value when the quantity is changed.
Remove Item: The ability to remove an item from the cart and update the total accordingly.
Responsive Design: The page is designed to be fully responsive across devices (mobile, tablet, desktop).
