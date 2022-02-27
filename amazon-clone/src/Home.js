import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://www.savoo.co.uk/blog/wp-content/uploads/sites/3/2019/06/amazon-prime-day-banner.jpeg'/>
            <div className='home__row'>
                <Product />
                <Product />
            </div>

            <div className='home__row'>
                <Product />
                <Product />
                <Product />
            </div>

            <div className='home__row'>
                <Product />
            </div>
        </div>
    </div>
  )
}

export default Home