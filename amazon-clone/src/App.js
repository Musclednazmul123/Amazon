import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51KQ32zEizDf4tJhfioUEXI3vboeNUqO8uBdQfjuDDfOVvRwN7uqsvqsK8BmdoKqT4C976yRh7Aa8AILmjeSX6JfC00RbFmDwdy" 
  )

function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads....
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })

      } else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])
  return (
    // BEM  name convenntion
    <Router>
      <div className="App">
        <Header /> 
        <Switch>
          {/* orders page route  */}
          <Route path="/orders">
            <Orders />
          </Route>

          {/* login page route  */}
          <Route path="/login">
            <Login />
          </Route>
            {/* checkout page route  */}
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/* checkout page route  */}
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            
          </Route>

            {/* home page route  */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      {/* Footer */}
    </div>
    </Router>
    
  );
}

export default App;
