import * as constants from '../constants';

export default function adminNewSellersReducer(state = [], action) {
    switch(action.type){
        case constants.ADMIN_GET_NEW_SELLER:
            return action.payload;
        case constants.ADMIN_GET_NEW_SELLER_DETAIL:
            return action.payload;
        case constants.ADMIN_ACCEPT_NEW_SELLER:
            return state.concat(action.payload);
        case constants.ADMIN_REJECT_NEW_SELLER:
            return state.concat(action.payload);
        case constants.RESET_USER_INFO:
            return [];
        default:
            return state;
    }
}