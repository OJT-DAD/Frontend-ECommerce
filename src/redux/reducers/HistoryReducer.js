import * as constants from '../constants';

export default function historyReducers(state = [], action) {
    switch(action.type){
        case constants.ADMIN_HISTORY:
            return action.payload;
        case constants.SELLER_HISTORY:
            return action.payload;
        case constants.USER_HISTORY:
            return action.payload;
        case constants.RESET_USER_INFO:
            return [];
        default:
            return state;
    }
}