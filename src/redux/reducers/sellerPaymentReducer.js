import * as constants from '../constants';

export default function adminPaymentsReducer(state = [], action) {
    switch(action.type){
        case constants.SELLER_GET_PAYMENT:
            return action.payload;
        case constants.SELLER_ADD_PAYMENT:
            return state.concat(action.payload);
            case constants.SELLER_DELETE_PAYMENT:
                return state.filter(item => item.id !== action.payload);
        case constants.RESET_USER_INFO:
            return [];
        default:
            return state;
    }
}