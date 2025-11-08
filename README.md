# VibeCart

**VibeCart** is a full‑stack e‑commerce web application built with React
(frontend) and a backend server (Node/Express). The goal is
to give users a smooth shopping experience while you gain hands‑on
experience in modern web development.

------------------------------------------------------------------------

## 🚀 Features

-   Browse products with a clean, responsive UI.
-   Add items to cart, adjust quantities, view total price.
-   Persist cart state (across sessions) and sync with backend.
-   Modern front‑end animations or 3D model integrations.
-   RESTful backend API endpoints to manage products.

------------------------------------------------------------------------

## 🧩 Tech Stack

**Frontend**
- React (functional components)
- React Router (for navigating views)
- Tailwind CSS

**Backend**
- Node.js with Express
- REST API routes for products, cart
- Database (MongoDB)
- Environment variables for secrets / API keys

------------------------------------------------------------------------

## 🗂 Project Structure

    /vibe_cart
    ├── frontend/             # React client code  
    │   ├── src/  
    │   ├    ├── components/  # Reusable UI components
    │   ├    ├── pages/       # Products & Cart pages
    │   ├── package.json  
    │   ├── main.jsx          # Root component
    │   └── …
    ├── backend/              # Server & API 
    │   ├── models/           # Mongoose models
    │   ├── routes/           # Express route handlers
    │   ├── package.json  
    │   ├── .env              # Environment variables
    │   ├── seed.js           # data seeding
    │   ├── server.js         # Entry point
    │   └── …
    └── README.md

------------------------------------------------------------------------

## 📦 Getting Started

### Prerequisites

-   Node.js and npm installed
-   A running database (MongoDB)
-   Git installed

### Installation

1.  Clone the repository:

    ``` bash
    git clone https://github.com/akbhati32/vibe_cart.git
    cd vibe_cart
    ```

2.  Setup Backend:

    ``` bash
    cd backend
    npm install
    # Copy .env.example to .env and fill your DB_URL, JWT_SECRET etc  
    node seed.js   # seeding data first
    node server.js   # start endpoint
    ```

3.  Setup Frontend:

    ``` bash
    cd ../frontend
    npm install
    npm start
    ```

4.  Open your browser at `http://localhost:3000` (or whichever port you
    set) and you should see the app.

------------------------------------------------------------------------

## ✅ Usage

-   Nevigate the product catalogs.
-   Use the "Add to Cart" button, view your cart, update quantities or
    remove items.
-   Proceed to checkout and place an order.

------------------------------------------------------------------------

## 📄 License
Feel free to use and modify it for your own learning or project needs.

## 🙋‍♂️ Author
**Aslam Bhati**

---
## Home
<img width="1897" height="897" alt="Screenshot 2025-11-08 111833" src="https://github.com/user-attachments/assets/18390feb-9e27-4415-86f9-d5632427f2f1" />


## Cart
<img width="1918" height="897" alt="Screenshot 2025-11-08 111919" src="https://github.com/user-attachments/assets/1a5f210b-3d13-4313-a44d-9022bfb349ed" />


## Checkout
<img width="1919" height="895" alt="Screenshot 2025-11-08 111938" src="https://github.com/user-attachments/assets/02a7beee-6e65-4a3f-84b3-14b19945e81e" />


---
