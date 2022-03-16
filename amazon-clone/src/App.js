import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    // BEM  name convenntion
    <Router>
      <div className="App">
        <Header /> 
        <Switch>
          {/* checkout page route  */}
          <Route path="/login">
          <Login />
          </Route>
            {/* checkout page route  */}
          <Route path="/checkout">
            <Checkout />
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
