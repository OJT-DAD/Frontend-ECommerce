import * as constants from '../constants';

export const fetchAllProduct = (Sort, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `/product/get-home-user`
        +(Sort !== "" ? `?Sort=${Sort}` : ""),
        success: (response) => (setAllProduct(response)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});

export const getProductById = (id, onSuccess) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `/product/get-by-id?ProductId=${id}`,
        postProccessSuccess: onSuccess
    }
});

export const createProduct = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/seller/product',
        data,
        success: (product) => (addProduct(product)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});


const setAllProduct = (data) => ({
    type: constants.SET_ALL_PRODUCT,
    payload: data.lists
});
const addProduct = (product) => ({
    type: constants.ADD_PRODUCT,
    payload: product
});