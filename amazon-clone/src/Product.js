import React from 'react';
import './Product.css';
import StarIcon from '@mui/icons-material/Star';

function Product() {
  return (
    <div className='product'>
        <div className='product__info'>
            <p className='product__title'>The lean startup: .....</p>
            <p className='product__price'>
                <small>$</small>
                <strong>500.00</strong>
            </p>
            <div className='product__rating'>
                <StarIcon className="product__star"/>
                <StarIcon className="product__star"/>
                <StarIcon className="product__star"/>
                <StarIcon className="product__star"/>
                <StarIcon className="product__star"/>
            </div>
        </div>
        <img className='product__image' src='https://i.pinimg.com/736x/b4/d0/cf/b4d0cf8787fcf3fa318ae283bca2d7d1.jpg' />
        <button>Add to Basket</button>
    </div>
  )
}

export default Product