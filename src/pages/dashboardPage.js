import { Switch, Route, Redirect, useRouteMatch as RouteMatch } from 'react-router-dom';
import React from 'react';
import '../styles/dashboard.css';
import Navbar from '../components/navbar/Navbar.component';
import Dashboard from '../components/dashboard/Dashboard.component';
import NavbarDashboard from '../components/dashboard/NavbarDashboard.component';
import Product from '../components/dashboard/Product.component';
import User from '../components/dashboard/User.component';
import Store from '../components/dashboard/Store.component';
import History from '../components/dashboard/History.component';

const DashboardPage = () => {
  let { path } = RouteMatch();
  return(
    <>
      <Navbar />
        
      <div className="con-dashboard">
        <NavbarDashboard />
        <Switch>
          <Route exact path={`${path}`}>
            <Dashboard />
          </Route>
          <Route exact path={`${path}/product`}>
            <Product />
          </Route>
          <Route exact path={`${path}/user`}>
            <User />
          </Route>
          <Route exact path={`${path}/store`}>
            <Store />
          </Route>
          <Route exact path={`${path}/history`}>
            <History />
          </Route>
          <Redirect to={`${path}`} />
        </Switch>
      </div>
    </>
  )
}
  
export default DashboardPage;
  