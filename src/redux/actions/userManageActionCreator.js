import * as constants from '../constants';

export const fetchAllUser = () => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: '/user-management/get-all',
        success: (response) => (setAllUser(response))
    }
});

export const getUserById = (id, onSuccess) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `/user-management/get-by-id/${id}`,
        postProccessSuccess: onSuccess
    }
});

export const updateUserById = (id, data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'PUT',
        url: `/user-management/update/${id}`,
        data,
        success: (id, data) => (updateUser(id, data)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});

export const deleteUser = (id, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'DELETE',
        url: `/user-management/delete/${id}`,
        success: () => (removeUser(id)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});



const setAllUser = (data) => ({
    type: constants.SET_ALL_USER,
    payload: data.userDatas
});
const updateUser = (id, data) => ({
   type: constants.UPDATE_USER,
   payload: { id, data } 
});
const removeUser = (id) => ({
    type: constants.REMOVE_USER,
    payload: id
});