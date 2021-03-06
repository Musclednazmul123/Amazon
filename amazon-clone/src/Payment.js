import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from './axios'
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link, useHistory } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'
import { db } from "./firebase"

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue()

  

  const history = useHistory()

  const stripe = useStripe()
  const elements = useElements()

  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState('')
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState(true)

  // check if the user is authenticate or not 
  if (!user) {
    history.replace('/login')
  } 

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        // stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      })
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret()
  }, [basket])

  console.log('the secret is', clientSecret)

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff
    event.preventDefault()
    setProcessing(true)

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        db.collection('user').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        })

        setSucceeded(true)
        setError(null)
        setProcessing(false)


        dispatch({
          type: "EMPTY_BASKET", 
        });

        history.replace('/orders')
      })
  }

  const handleChange = (event) => {
    // Listen for changes in the Card element
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }
    return (
      <div className='payment'>
        <div className='payment__container'>
          <h1>
            Checkout (<Link to={'/checkout'}>{basket?.length} items</Link>)
          </h1>
          {/* Payment section - delivery address */}
          <div className='payment__section'>
            <div className='payment__title'>
              <h3>Delivery Adderss</h3>
            </div>
            <div className='payment__address'>
              <p>{user?.email}</p>
              <p>123 React Lane</p>
              <p>Los Angeles, CA</p>
            </div>
          </div>

          {/* Payment section - Review Items */}
          <div className='payment__section'>
            <div className='payment__title'>
              <h3>Review items and Delivery</h3>
            </div>
            <div className='payment__items'>
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>

          {/* Payment section - Payment methode */}
          <div className='payment__section'>
            <div className='payment__title'>
              <h3>Payment Method</h3>
            </div>
            <div className='payment__details'>
              {/* Stripe magic will go  */}
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />

                <div className='payment__priceContainer'>
                  <CurrencyFormat
                    renderText={(value) => (
                      <h3> Orders Total: {value} </h3>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                  />

                  <button disabled={processing || disabled || succeeded}>
                    {' '}
                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>{' '}
                  </button>
                </div>
                {/* error  */}
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
        
      </div>
    )
}

export default Payment
