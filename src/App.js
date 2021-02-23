import React from "react";
import "./App.css";
import product_list from "./List"
import Products from "./Products"
import Header from './Header'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Cart from './Cart'
function App() {
  return (
    <>
      <Header />
      <Router>
        <div>
          <nav>
            <ui>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ui>
          </nav>
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <Products product_list={product_list} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}
export default App;
