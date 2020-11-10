import React from 'react';
import {Route, Switch,Redirect} from 'react-router-dom'


import CartPage from '../pages/cart-page'
import HomePage from '../pages/home-page'
import StoreHeader from '../store-header/store-header';


import './app.css'





const  App = () =>{
  return (
    <main role="main" className="container">
      <StoreHeader numItems={5} total={210}/>
      <Switch>
      <Route
        path='/'
        component = {HomePage} 
        exact />
      <Route
        path='/cart'
        component= {CartPage} />  
        <Redirect to='/' />
      </Switch>
    </main>
  );
}

export default App;
