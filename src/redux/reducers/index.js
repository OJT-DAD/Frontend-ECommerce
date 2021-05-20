import { combineReducers } from 'redux';

import auth from '../reducers/authReducer';
import loading from '../reducers/loadingReducer';
import products from '../reducers/productsReducer';
import stores from '../reducers/storesReducer';
import users from '../reducers/userReducer';
import carts from '../reducers/cartReducer';
import adminPayments from '../reducers/adminPaymentReducer';
import adminShipments from '../reducers/adminShipmentReducer';
import adminNewSellers from '../reducers/adminNewSellerReducer';
import sellerPayments from '../reducers/sellerPaymentReducer';
import sellerShipments from '../reducers/sellerShipmentReducer';
import historyTransactions from '../reducers/HistoryReducer';

const rootReducer = combineReducers({ 
    auth, 
    loading, 
    products,
    stores, 
    users,
    carts,
    adminPayments,
    adminShipments,
    adminNewSellers,
    sellerPayments,
    sellerShipments,
    historyTransactions
});

export default rootReducer;