import { combineReducers } from 'redux';

import auth from '../reducers/authReducer';
import loading from '../reducers/loadingReducer';
import products from '../reducers/productsReducer';
import stores from '../reducers/storesReducer';
import users from '../reducers/userReducer';
import carts from '../reducers/cartReducer';

const rootReducer = combineReducers({ 
    auth, 
    loading, 
    products,
    stores, 
    users,
    carts 
});

export default rootReducer;