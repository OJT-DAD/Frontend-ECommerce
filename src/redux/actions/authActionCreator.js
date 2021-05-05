import * as constants from '../constants';

export const registerUser = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/user-management/register',
        data,
        // success: (response) => (setUserInfo(response)),
        postProcessSuccess: onSuccess,
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

export const getUserById = (userId, onSuccess) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `/user-management/get-by-id/${userId}`,
        postProccessSuccess: onSuccess
    }
});

export const updateUserById = (userId, data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'PUT',
        url: ''
    }
});


const setUserInfo = (data) => {
    JSON.parse(atob(data.token.split(".")[1]))
    const userInfo = {
        userId: data.id,
        fullName: `${data.firstName} ${data.lastName}`,
        role: data.role,
        token: data.token,
        isLoggedIn: true
    };
    localStorage.setItem('USER_INFO', JSON.stringify(userInfo));
    return { type: constants.SET_USER_INFO, payload: userInfo }
};