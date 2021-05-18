import * as constants from '../constants';

export const fetchAllStore = () => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: '/store/get-all',
        success: (response) => (setAllStores(response))
    }
});

export const getStoreById = (id, onSuccess) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `/store/get-by-id/${id}`,
        postProccessSuccess: onSuccess,
        success: (response) => (getStore(response))
    }
});

export const updateStoreById = (id, data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'PUT',
        url: `/seller/store/${id}`,
        data,
        success: (id, data) => (updateStore(id, data)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});

export const deleteStore = (id, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'DELETE',
        url: `/seller/store/${id}`,
        success: () => (removeStore(id)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});


const setAllStores = (data) => ({
    type: constants.SET_ALL_STORE,
    payload: data.stores
});
const getStore = (data) => ({
    type: constants.GET_STORE_BY_ID,
    payload: data.store
});
const updateStore = (id, data) => ({
    type: constants.UPDATE_STORE,
    payload: { id, data } 
});
const removeStore = (id) => ({
    type: constants.REMOVE_STORE,
    payload: id
})