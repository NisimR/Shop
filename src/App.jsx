import './App.css';
import Navbar from './components/Navbar';
import { createContext, useEffect, useState } from 'react';
import Products from './routers/Products'
import ProductCarousel from './components/Home';
// יצירת הקשר גלובלי
export const GlobalContext = createContext();

function App() {
  // סטייט עבור המוצרים באפליקציה
  const [appProducts, setAppProducts] = useState([]);

  // פונקציות לניהול המוצרים בעגלת הקניות ובמוצרים המועדפים

  // useEffect לטעינת המוצרים ברגע שהאפליקציה מתחילה
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(json => setAppProducts(json.products));
  }, []);

  // תוכן ה-App כולו מוזח תחת הפרוביידר של הקשר הגלובלי
  return (
    <GlobalContext.Provider value={{ appProducts }}>
      <div>
        <Navbar />
        <h1>Home</h1>
        {/* <ProductCarousel/> */}
  
        
      </div>
    </GlobalContext.Provider>
    
  );
}

export default App;

