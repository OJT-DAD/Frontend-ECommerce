import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import Spinner from './components/spinner/Spinner.component';
import AuthPage from './pages/authPage';
import HomePage from './pages/homePage';
import PersonalPage from './pages/personalPage';
import ProductPage from './pages/productPage';
import DashboardPage from './pages/dashboardPage';
import CartPage from './pages/cartPage';
import CheckoutPage from './pages/checkoutPage';
import PaymentPage from './pages/paymentPage';
import TransactionPage from './pages/transactionPage';
import StorePage from './pages/storePage'; 


const App = ({ auth }) => {
  return (
    <ToastProvider
      autoDismiss="true"
      autoDismissTimeout={3000}
      placement="top-right"
    >
      <Spinner />
      <div className="container_app">
        {!auth.isLoggedIn ?
          (<Switch>
            <Route exact path="/auth" component={AuthPage}/>
            <Route exact path="/home" component={HomePage}/>
            <Route exact path="/product/:productId" component={ProductPage}/>
            <Redirect to="/auth" />
          </Switch>) : 
          (<Switch>
            <Route exact path="/home" component={HomePage}/>
            <Route exact path="/personal/:userId" component={PersonalPage}/>
            <Route exact path="/product/:productId" component={ProductPage}/>
            <Route exact path="/cart" component={CartPage}/>
            <Route exact path="/checkout/:checkoutId" component={CheckoutPage}/>
            <Route exact path="/payment/:transactionId" component={PaymentPage}/>
            <Route exact path="/transaction/:transactionId" component={TransactionPage}/>
            <Route path="/store/:storeId" component={StorePage}/>
            <Route path="/dashboard" component={DashboardPage}/>
            <Redirect to="/home" />
          </Switch>)
        }
      </div>
    </ToastProvider>
  )
}

const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps)(App);
