import axios from 'axios';

import * as constants from './constants'; 
import { logoutUser } from './actions/authActionCreator';

export const apiMiddleware = ({ dispatch, getState }) => next => action => {
    if (action.type !== constants.API) return next(action);

    dispatch({ type: constants.TOGGLE_LOADER });
    const BASE_URL = 'http://localhost:5000';
    const AUTH_TOKEN = getState().auth.token;
    if (AUTH_TOKEN)
        axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;
    const { url, method, success, data, postProccessSuccess, postProccessError } = action.payload;

    axios({
        method,
        url: BASE_URL + url, 
        data: data ? data : null
    }).then((response) => {
        dispatch({ type: constants.TOGGLE_LOADER });
        if (success) dispatch(success(response.data));
        if (postProccessSuccess) postProccessSuccess(response.data);
    }).catch(err => {
        dispatch({ type: constants.TOGGLE_LOADER });
        if (!err.response) console.warn(err);
        else {
            if (err.response && err.response.status === 403)
                dispatch(logoutUser());
            if (err.response.data.detail) {
                if (postProccessError) postProccessError(err.response.data.detail);
            }
            // if (err.response.data) {
            //     if (postProccessError) postProccessError(err.response.data);
            // }
        }
    });
};