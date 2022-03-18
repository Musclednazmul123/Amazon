import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'
import { getBasketTotal } from './reducer'

function Order({order}) {

  return (
    <div className='order'>
        <h2>Order</h2>
        <p> {moment.unix(order.data.created).format("MMM Do YYYY, h:mma")} </p>
        <p className='order__id'>
            <small>Order Id: {order.id} </small>
        </p>
        {order.data.basket?.map(item => (
            <CheckoutProduct 
                id = {item.id}
                title = {item.title}
                image = {item.image}
                price = {item.price}
                rating = {item.rating}
                hideButton
            />
        ))}
        <h2 className='order__total'>Order Total: ${getBasketTotal(order.data.basket)}</h2>
    
    </div>
  )
}

export default Order;