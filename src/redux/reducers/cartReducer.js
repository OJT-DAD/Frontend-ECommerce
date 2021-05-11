import * as constants from '../constants';

export default function cartReducer(state = [], action) {
    switch(action.type) {
        case constants.GET_CART_BY_USERID:
            return action.payload;
        case constants.REMOVE_CART_BY_PRODUCT_ID:
            return state.filter(item => item.id !== action.payload);
        case constants.UPDATE_CART_PRODUCT:
            return state.map(item => {
                if(item.id === action.payload.id)
                    return { ...item, ...action.payload.data };
                else 
                    return item;
            });
        case constants.RESET_USER_INFO:
            return [];
        default:
            return state;
    }
}