import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './pages/authPage';
import HomePage from './pages/homePage';
import ProductPage from './pages/productPage';
import DashboardPage from './pages/dashboardPage';
import CartPage from './pages/cartPage';
import CheckoutPage from './pages/checkoutPage';
import PaymentPage from './pages/paymentPage';
import TransactionPage from './pages/transactionPage';
import StorePage from './pages/storePage'; 


const App = () => {
  return (
    <div className="container_app">
      <Switch>
        <Route exact path="/auth" component={AuthPage}/>
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/product/:productId" component={ProductPage}/>
        <Route exact path="/cart" component={CartPage}/>
        <Route exact path="/checkout/:checkoutId" component={CheckoutPage}/>
        <Route exact path="/payment/:transactionId" component={PaymentPage}/>
        <Route exact path="/transaction/:transactionId" component={TransactionPage}/>
        <Route path="/store/:storeId" component={StorePage}/>
        <Route path="/dashboard" component={DashboardPage}/>
        <Redirect to="/auth" />
      </Switch>
    </div>
  )
}

export default App
