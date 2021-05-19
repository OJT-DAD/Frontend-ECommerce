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

export const deleteProduct = (id, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'DELETE',
        url: `/seller/product/${id}`,
        success: () => (removeProduct(id)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});

export const updateProductById = (id, data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'PUT',
        url: `/seller/product/${id}`,
        data,
        success: (id, data) => (updateProduct(id, data)),
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
const removeProduct = (id) => ({
    type: constants.REMOVE_PRODUCT,
    payload: id
});
const updateProduct = (id, data) => ({
    type: constants.UPDATE_PRODUCT,
    payload: { id, data }
});