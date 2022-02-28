import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            
            <img className='home__image' src='https://www.savoo.co.uk/blog/wp-content/uploads/sites/3/2019/06/amazon-prime-day-banner.jpeg'/>
            
            
            <div className='home__row'>
                <Product 
                    id = '0121231312'
                    title='new product title' 
                    price={299.00} 
                    image='https://i.pinimg.com/736x/b4/d0/cf/b4d0cf8787fcf3fa318ae283bca2d7d1.jpg' 
                    rating={5} 
                />
                <Product 
                    id = '0121231405'
                    title='new product title 2' 
                    price={300.00} 
                    image='https://i.pinimg.com/736x/b4/d0/cf/b4d0cf8787fcf3fa318ae283bca2d7d1.jpg' 
                    rating={5} 
                />
            </div>

            <div className='home__row'>
                <Product 
                    id = '0121231308'
                    title='new product title' 
                    price={299.00} 
                    image='https://i.pinimg.com/736x/b4/d0/cf/b4d0cf8787fcf3fa318ae283bca2d7d1.jpg' 
                    rating={5} 
                />
                <Product 
                    id = '0121231306'
                    title='new product title 2' 
                    price={300.00} 
                    image='https://i.pinimg.com/736x/b4/d0/cf/b4d0cf8787fcf3fa318ae283bca2d7d1.jpg' 
                    rating={5} 
                />
                <Product 
                    id = '0121231304'
                    title='new product title 2' 
                    price={300.00} 
                    image='https://i.pinimg.com/736x/b4/d0/cf/b4d0cf8787fcf3fa318ae283bca2d7d1.jpg' 
                    rating={5} 
                />
                
            </div>

            <div className='home__row'>
                <Product 
                    id = '0121231302'
                    title='new product title 2' 
                    price={300.00} 
                    image='https://i.pinimg.com/736x/b4/d0/cf/b4d0cf8787fcf3fa318ae283bca2d7d1.jpg' 
                    rating={5} 
                />
            </div>
        </div>
    </div>
  )
}

export default Home