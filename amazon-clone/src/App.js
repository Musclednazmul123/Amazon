import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM  name convenntion
    <Router>
      <div className="App">
        <Switch>
          
          {/* cart page route  */}
        <Route path="/cart">
          <Header /> 
          <h2>this is my cart page</h2>
        </Route>

          {/* home page route  */}
        <Route path="/">
          <Header /> 
          <Home />
        </Route>

        </Switch>
      {/* Footer */}
    </div>
    </Router>
    
  );
}

export default App;
