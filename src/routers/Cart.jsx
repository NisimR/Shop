import { useContext, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import GlobalContext from './temp/GlobalContext';

function Cart() {
    const appProducts = useContext(GlobalContext);

    // סטייט עבור רשימת הפריטים בעגלת הקניות
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // קריאה מלוקל סטורז' וטעינת הפריטים בעגלה בעת טעינת הרכיב
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (storedCartItems) {
            setCartItems(storedCartItems);
        }
    }, []);

    // שמירת הפריטים בעגלה ללוקל סטורז'
    const saveToLocalStorage = (items) => {
        localStorage.setItem('cartItems', JSON.stringify(items));
    };

    // הסרת פריט מהעגלה
    const removeFromCart = (productId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCartItems); // עדכון הסטייט
        saveToLocalStorage(updatedCartItems); // עדכון ללוקל סטורז'
    };

    // הוספת פריט בכמות
    const increaseQuantity = (productId) => {
        const updatedCartItems = cartItems.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCartItems); // עדכון הסטייט
        saveToLocalStorage(updatedCartItems); // עדכון ללוקל סטורז'
    };

    // הפחתת כמות של פריט
    const decreaseQuantity = (productId) => {
        const updatedCartItems = cartItems.map(item =>
            item.id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
        );
        setCartItems(updatedCartItems); // עדכון הסטייט
        saveToLocalStorage(updatedCartItems); // עדכון ללוקל סטורז'
    };

    // חישוב המחיר הכולל של פריטי העגלה
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <>
            <Navbar />
            <div>
                <h2>Shopping Cart</h2>
                <ul>
                    {cartItems.map((item) => {
                        const itemProd = appProducts.find(product => product.id === item.id);
                        return (
                            <li key={itemProd.id}>
                                <div>{itemProd.title}</div>
                                <div>Price: ${itemProd.price}</div>
                                <div>Quantity: {itemProd.quantity}</div>
                                <button onClick={() => increaseQuantity(itemProd.id)}>+</button>
                                <button onClick={() => decreaseQuantity(itemProd.id)}>-</button>
                                <button onClick={() => removeFromCart(itemProd.id)}>Remove</button>
                            </li>
                        );
                    })}
                </ul>
                <div>Total Price: ${totalPrice}</div>
                <button>Continue to Checkout</button>
                <button>Continue Shopping</button>
            </div>
        </>
    );
}

export default Cart;
