import * as constants from '../constants';

export default function adminShipmentsReducer(state = [], action) {
    switch(action.type){
        case constants.ADMIN_GET_SHIPMENT:
            return action.payload;
        case constants.ADMIN_ADD_SHIPMENT:
            return state.concat(action.payload);
            case constants.ADMIN_DELETE_SHIPMENT:
                return state.filter(item => item.id !== action.payload);
        case constants.RESET_USER_INFO:
            return [];
        default:
            return state;
    }
}