# Mini E-commerce Product Gallery Frontend Kata

## Live Demo

Check out the live demo of the application [here](https://ecom-react-alpha.vercel.app).

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Features](#Features)
- [Technology Stack](#technology-stack)

## Getting Started

Follow these steps to clone the repository and run the project locally.

### Prerequisites

- Node.js (>= 18.x)
- PNPM (>= 8.x)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/adilbim/ecom-react.git
    cd ecom-react
    ```

2. **Install dependencies:**

    ```bash
    pnpm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following variable:

    ```plaintext
    VITE_API_BASE_URL=your_api_base_url
    ```

4. **Run the development server:**

    ```bash
    pnpm dev
    ```

    The application should now be running at `http://localhost:5173`.

## Project Structure

```plaintext
src/
│
├── api/
│   ├── axios.ts
│   ├── db.ts
│   ├── products.ts
│   └── product.types.ts
│
├── assets/
│
├── components/
│   └── AddToCartButton.tsx
│
├── constants/
│   └── navigation.ts
│
├── features/
│   └── layout
│   └── products
│
├── helpers/
│   └── helpers.ts
│
├── ui/
│   └── cart
│   └── skeleton
│
├── pages/
│   ├── Cart.tsx
│   └── ProductOverview.tsx
│
├── App.tsx
├── main.tsx
└── index.css
```

## Environment Variables

This project uses the following environment variable:

- `VITE_API_BASE_URL`: The base URL for your API.

Ensure you have a `.env` file in the root of your project with the required variables.

## Scripts

- `pnpm dev`: Start the development server.
- `pnpm build`: Build the project for production.
- `pnpm lint`: Run ESLint to lint the project files.
- `pnpm preview`: Locally preview production build

## Features

- **List Products:** View a comprehensive list of available products.
- **Add to Cart:** Add products to the cart directly from the product list and product preview.
- **Duplicate Prevention:** Prevent the addition of the same item to the cart more than once.
- **Product Details:** Preview detailed information about each product.
- **View Cart Items:** Access and review the items added to the cart.
- **Remove Cart Items:** Remove items from the cart as needed.
- **Adjust Item Quantity:** Modify the quantity of items in the cart.
- **Cart Access Control:** Prevent users from accessing the cart if it is empty.
- **Persistent Data:** Ensure cart data persists even after refreshing the page.
- **Responsive Design:** Enjoy a responsive design and layout that adapts seamlessly across all devices.

## Technology Stack

- **React & Vite:** Leverage React for building the user interface and Vite for a fast development build toolchain.
- **Tailwind CSS:** Utilize Tailwind CSS for styling the application with a utility-first approach.
- **IndexedDB with Dexie:** Implement IndexedDB for data persistence using the Dexie.js library.
