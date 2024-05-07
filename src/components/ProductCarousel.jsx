import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GlobalContext } from './App';

function ProductCarousel() {
  const { appProducts } = useContext(GlobalContext);

  // הגדרות קרוסלה
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {appProducts.map(product => (
        <div key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
        </div>
      ))}
    </Slider>
  );
}

export default ProductCarousel;
