import { combineReducers } from 'redux';

import auth from '../reducers/authReducer';
import loading from '../reducers/loadingReducer';
import products from '../reducers/productsReducer';
import stores from '../reducers/storesReducer';
import users from '../reducers/userReducer';
import carts from '../reducers/cartReducer';
import adminPayments from '../reducers/adminPaymentReducer';
import adminShipments from '../reducers/adminShipmentReducer';

const rootReducer = combineReducers({ 
    auth, 
    loading, 
    products,
    stores, 
    users,
    carts,
    adminPayments,
    adminShipments
});

export default rootReducer;