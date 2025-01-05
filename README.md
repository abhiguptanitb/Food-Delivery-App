# Food Ordering System

## Description
A food ordering system built with React for the frontend, Node.js and Express for the backend, and MongoDB for data storage. The system allows users to browse through various food items, add them to their cart, and place an order. The app also handles user authentication, food management, and order placement. Additionally, the system includes a separate admin panel where administrators can manage food items by adding or removing them, as well as update the order status (e.g., processing, shipped, delivered), providing complete control over food and order management.

The application also integrates Stripe payment for secure and seamless transaction processing, enabling users to make payments for their orders directly through the platform.

## Features
1. User authentication
2. Cart management (add, remove, view items)
3. Place an order and make payment via Stripe
4. Admin panel to view and manage orders
5. Order status update functionality
6. User account management (signup, login, logout)

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Integration**: Stripe

## API Endpoints

### User Endpoints
- **User Registration**  
  `POST /api/user/register`  
  Registers a new user with a username, email, and password.

- **User Login**  
  `POST /api/user/login`  
  Authenticates an existing user and returns a JWT token.

### Food Endpoints
- **Add Food Item**  
  `POST /api/food/add`  
  Adds a new food item to the database.

- **Remove Food Item**  
  `POST /api/food/remove`  
  Removes a food item from the database.

- **Get Food List**  
  `GET /api/food/list`  
  Retrieves a list of all food items.

### Cart Endpoints
- **Add Item to Cart**  
  `POST /api/cart/add`  
  Adds an item to the user's cart or increases its quantity.

- **Remove Item from Cart**  
  `POST /api/cart/remove`  
  Removes an item from the user's cart or decreases its quantity.

- **Get User Cart**  
  `POST /api/cart/get`  
  Retrieves the current items and their quantities in the user's cart.

### Order Endpoints
- **Place Order**  
  `POST /api/order/place`  
  Places a new order with the user's cart items, shipping address, and amount.

- **Verify Order**  
  `POST /api/order/verify`  
  Verifies the payment status of an order after Stripe checkout.

- **User Orders**  
  `POST /api/order/userorders`  
  Retrieves all orders placed by a specific user.

- **List Orders**  
  `GET /api/order/list`  
  Retrieves all orders for admin view.

- **Update Order Status**  
  `POST /api/order/status` 

## Payment Integration Details

The application integrates Stripe Payment for secure and seamless transaction processing. Users can make payments for their orders directly through the platform.

For testing purposes, you can use the following test card numbers provided by Stripe. These numbers simulate payment scenarios and will not charge actual money:

### Stripe Test Card Numbers

- **Successful Payment:**
Card Number: 4242 4242 4242 4242
Expiry Date: Any valid future date (e.g., 12/34)
CVC: Any 3 digits (e.g., 123)
Country: India

- **Authentication Required:**
Card Number: 4000 0025 0000 3155
Expiry Date: Any valid future date
CVC: Any 3 digits

- **Payment Declined:**
Card Number: 4000 0000 0000 9995
Expiry Date: Any valid future date
CVC: Any 3 digits

You can find more details about test cards [[here on Stripe's offical documentation](https://docs.stripe.com/testing)]