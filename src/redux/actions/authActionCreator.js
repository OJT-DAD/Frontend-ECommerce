import * as constants from '../constants';

export const registerUser = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/user-management/register',
        data,
        // success: (response) => (setUserInfo(response)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});

export const loginUser = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/user-management/login',
        data,
        success: (response) => (setUserInfo(response)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});

export const logoutUser = () => {
    localStorage.removeItem('USER_INFO');
    return { type: constants.RESET_USER_INFO };
};


export const updatePersonalUser = (id, data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'PUT',
        url: `/user-management/update/${id}`,
        data,
        success: (response) => (setUserInfo(response)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});


const setUserInfo = (data) => {
    JSON.parse(atob(data.token.split(".")[1]))
    const userInfo = {
        userId: data.id,
        fullName: `${data.firstName} ${data.lastName}`,
        role: data.role,
        token: data.token,
        storeId: data.storeId,
        isLoggedIn: true
    };
    localStorage.setItem('USER_INFO', JSON.stringify(userInfo));
    return { type: constants.SET_USER_INFO, payload: userInfo }
};