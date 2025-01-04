# Food Ordering System
<h2>Description</h2>
A food ordering system built with React for the frontend, Node.js and Express for the backend, and MongoDB for data storage. The system allows users to browse through various food items, add them to their cart, and place an order. The app also handles user authentication, food management, and order placement.

Features
User authentication
Cart management (add, remove, view items)
Place an order and make payment via Stripe
Admin panel to view and manage orders
Order status update functionality
User account management (signup, login, update profile)
Tech Stack
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
Payment Integration: Stripe
API Endpoints
User Endpoints
User Registration
POST /api/user/register
Registers a new user with a username, email, and password.

User Login
POST /api/user/login
Authenticates an existing user and returns a JWT token.

Food Endpoints
Add Food Item
POST /api/food/add
Adds a new food item to the database.

Remove Food Item
POST /api/food/remove
Removes a food item from the database.

Get Food List
GET /api/food/list
Retrieves a list of all food items.

Get Food Details
POST /api/food/details
Retrieves details of a specific food item by its ID.

Cart Endpoints
Add Item to Cart
POST /api/cart/add
Adds an item to the user's cart or increases its quantity.

Remove Item from Cart
POST /api/cart/remove
Removes an item from the user's cart or decreases its quantity.

Get User Cart
POST /api/cart/get
Retrieves the current items and their quantities in the user's cart.

Order Endpoints
Place Order
POST /api/order/place
Places a new order with the user's cart items, shipping address, and amount.

Verify Order
POST /api/order/verify
Verifies the payment status of an order after Stripe checkout.

User Orders
POST /api/order/userorders
Retrieves all orders placed by a specific user.

List Orders (Admin)
GET /api/order/list
Retrieves all orders for admin view.

Update Order Status
POST /api/order/status
Updates the status of a specific order (e.g., processing, shipped, delivered).

Setup
Clone this repository:

bash
Copy code
git clone https://github.com/yourusername/food-delivery-app.git
Install dependencies:

bash
Copy code
npm install
Create a .env file with the following environment variables:

STRIPE_SECRET_KEY: Your Stripe secret key for payments
MONGO_URI: MongoDB connection URI
JWT_SECRET: Secret key for JWT authentication
Run the application:

bash
Copy code
npm start
License
This project is licensed under the MIT License - see the LICENSE file for details.

