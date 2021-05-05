import { combineReducers } from 'redux';

import auth from '../reducers/authReducer';
import loading from '../reducers/loadingReducer';
import products from '../reducers/productsReducer';
import stores from '../reducers/storesReducer';

const rootReducer = combineReducers({ auth, loading, products, stores });

export default rootReducer;