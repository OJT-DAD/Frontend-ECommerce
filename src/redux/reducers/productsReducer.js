import * as constants from '../constants';

export default function productsReducer(state = [], action) {
    switch(action.type){
        case constants.SET_ALL_PRODUCT:
            return action.payload;
        case constants.ADD_PRODUCT:
            return state.concat(action.payload);
        case constants.REMOVE_PRODUCT:
            return state.filter(item => item.id !== action.payload);
        case constants.UPDATE_PRODUCT:
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