import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            
            <img className='home__image' src='https://wgefund.org/wp-content/uploads/2016/11/AmazonSmilebanner.jpg'/>
            
            
            <div className='home__row' key={1}>
                <Product 
                    id = '01'
                    title='new product title' 
                    price={299.00} 
                    image='https://i.pinimg.com/736x/b4/d0/cf/b4d0cf8787fcf3fa318ae283bca2d7d1.jpg' 
                    rating={5} 
                />
                <Product 
                    id = '02'
                    title='new product title 2' 
                    price={300.00} 
                    image='https://i.pinimg.com/736x/b4/d0/cf/b4d0cf8787fcf3fa318ae283bca2d7d1.jpg' 
                    rating={5} 
                />
            </div>

            <div className='home__row'>
                <Product 
                    id = '03'
                    title='new product title' 
                    price={299.00} 
                    image='https://i.pinimg.com/736x/b4/d0/cf/b4d0cf8787fcf3fa318ae283bca2d7d1.jpg' 
                    rating={1} 
                />
                <Product 
                    id = '04'
                    title='new product title 2' 
                    price={300.00} 
                    image='https://i.pinimg.com/736x/b4/d0/cf/b4d0cf8787fcf3fa318ae283bca2d7d1.jpg' 
                    rating={5} 
                />
                <Product 
                    id = '05'
                    title='new product title 2' 
                    price={300.00} 
                    image='https://i.pinimg.com/736x/b4/d0/cf/b4d0cf8787fcf3fa318ae283bca2d7d1.jpg' 
                    rating={5} 
                />
                
            </div>

            <div className='home__row'>
                <Product 
                    id = '06'
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