import * as constants from '../constants';

export const fetchAllStore = () => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: '/store',
        success: (response) => (setAllStores(response))
    }
});

export const getStoreById = (storeId, onSuccess) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `/store/get-by-id/${storeId}`,
        postProccessSuccess: onSuccess,
        success: (response) => (storeProduct(response))
    }
});

export const updateStoreById = (storeId, data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'PUT',
        url: `/seller/store/${storeId}`,
        data,
        postProccessSuccess: onSuccess,
        postProccessError: onError,
        success: (storeId, data) => (updateStore(storeId, data))
    }
});


const setAllStores = (data) => ({
    type: constants.SET_ALL_STORE,
    payload: data
});
const storeProduct = (data) => ({
    type: constants.GET_STORE_BY_ID,
    payload: data.store
});
const updateStore = (storeId, data) => ({
    type: constants.UPDATE_STORE,
    payload: { storeId, data }
});