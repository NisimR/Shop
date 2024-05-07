import React, { useEffect, useState } from 'react'; // יש צורך רק בהחזיר את useEffect ו- useState מהספרייה של react
import Navbar from '../components/Navbar';
import Product from './Product';
import Cart from './Cart';
import GlobalContext from './temp/GlobalContext'

function Products() {

    const [appProducts, setAppProducts] = useState([]);
    const [cartItems, setItemsInCart] = useState([]);
    

    // פונקציה להוספת פריט לעגלת הקניות על פי המזהה שלו
    const onAddtoCartItemId = (id) => {setItemsInCart([...cartItems, id])
    console.log(...cartItems)
    //console.log(...appProducts)
    };

    useEffect(() => {
        // טעינת המוצרים מה-API בעת טעינת הרכיב
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(json => setAppProducts(json.products));
    }, []);

    return (
        <>
       
            <Navbar />
            
            
            <div className='products'>
                <div className='products-container'>
                    {/* מפקיד מוצרים לתצוגה, כל מוצר מקבל פונקציה להוספתו לעגלה */}
                    {appProducts.map((product, index) => (
                        <Product {...product} key={index} onAddtoCart={onAddtoCartItemId} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Products;
