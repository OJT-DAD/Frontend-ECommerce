import * as constants from '../constants';

export default function storesReducer(state = [], action) {
    switch(action.type) {
        case constants.SET_ALL_STORE:
            return action.payload;
        case constants.GET_STORE_BY_ID:
            return action.payload;
        case constants.CREATE_STORE:
            return state.concat(action.payload);
        case constants.REMOVE_STORE:
            return state.filter(item => item.id !== action.payload);
        case constants.UPDATE_STORE:
            return state.map(item => {
                if (item.id === action.payload.storeId)
                    return { ...item, ...action.payload.data };
                else 
                    return item;
            });
        case constants.RESET_USER_INFO:
            return [];
        default:
            return state;
    };
};