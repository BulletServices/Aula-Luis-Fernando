import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductAddEdit from './components/ProductAddEdit';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';
import Product from './entity/Product';

const prodsList=[
  new Product({id:1, name: 'Prod1', price:125, quantity:10}),
  new Product({id:2, name: 'Prod2', price:114.99, quantity:3}),
  new Product({id:3, name: 'Prod3', price:50, quantity:12}),
  new Product({id:4, name: 'Prod4', price:15.50, quantity:247}),
]

const App =()=>{
  return (
    <Router>
      <div className='App'>
        <Navbar />
          <div className='container'>
            <Switch>

              <Route exact path='/' component={Home} />

              <Route exact path='/add' component={ProductAddEdit} />

              <Route exact path='/details' component={ProductDetails} />

              <Route
                exact path='/list'
                render={(props)=><ProductList prods={prodsList}/>}
              />

            </Switch>
         </div>
      </div>
    </Router>
  )
}
export default App;
