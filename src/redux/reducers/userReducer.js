import * as constants from '../constants';

export default function userReducer(state = [], action) {
    switch(action.type) {
        case constants.SET_ALL_USER:
            return action.payload;
        case constants.REMOVE_USER:
            return state.filter(item => item.id !== action.payload);
        case constants.UPDATE_USER:
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