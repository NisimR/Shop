import React from 'react';

function Product(props) {
    const { id, price, description, thumbnail, title, onAddtoCart } = props;

    const handleAddToCart = () => {
        // קריאה לפונקציה שמועברת דרך הפרופס
        onAddtoCart(id);
        //console.log(id)
        
    };

    return (
        <div className='product'>
            <img src={thumbnail} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Price: {price} $</p>
            {/* הוספת קריאה לפונקציה בעת לחיצה על הכפתור */}
            <button className='add-to-cart-btn' onClick={handleAddToCart}>🛒 Add to Cart</button>
            <button className='add-fav-btn'>♥</button>
        </div>
    );
}

export default Product;
