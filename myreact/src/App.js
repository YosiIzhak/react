//import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';


import Product from './components/router16.1/product16.1'
import ProductDetail from './components/router16.1/productDetail16.1'
import Header from './components/router16.1/header16.1'
import HomePage from './components/router16.1/router16.1'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  // constructor(props) {
  //   super(props)

  // }
  render() {
    return (
      <div>
       
        <BrowserRouter>
        <Header />
          <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/products" exact component={Product} />
            <Route path="/products/:id" exact component={ProductDetail} />
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}
export default App