import { createBrowserRouter } from "react-router-dom";
import Favorites from './routers/Favorites.jsx';
import Products from './routers/Products.jsx';
import App from "./App.jsx";
import Cart from "./routers/Cart.jsx";
import Product from "./routers/Product.jsx";

export const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/cart", element: <Cart /> },
    { path: "/favorites", element: <Favorites /> },
    { path: "/products", element: <Products /> },
    { path: "/products/:productId", element: <Product /> }, // נתיב דינמי עבור מוצר
]);
