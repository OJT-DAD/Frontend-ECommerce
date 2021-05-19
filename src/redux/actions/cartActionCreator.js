import * as constants from '../constants';

export const getCartByUserId = (id, onSuccess) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `/user/cart/${id}`,
        success: (response) => (getCartData(response)),
        postProccessSuccess: onSuccess
    }
});

export const addProductToCart = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/user/cart',
        data,
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});

export const deleteCartProduct = (id, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'DELETE',
        url: `/user/cart/${id}`,
        success: () => (removeCartProduct(id)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});

export const updateCartProduct = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'PUT',
        url: '/user/cart/edit-quantity',
        data,
        success: (data) => (updateCart(data)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});

export const getCartDetailById = (id, onSuccess) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `/user/cart/GetDetailCart/${id}`,
        success: (response) => (getCartDetail(response)),
        postProccessSuccess: onSuccess
    }
});



const getCartData = (data) => ({
    type: constants.GET_CART_BY_USERID,
    payload: data.carts
});
const removeCartProduct = (id) => ({
    type: constants.REMOVE_CART_BY_PRODUCT_ID,
    payload: id
});
const updateCart = (data) => ({
    type: constants.UPDATE_CART_PRODUCT,
    payload: data
});
const getCartDetail = (data) => ({
    type: constants.GET_CART_DETAIL,
    payload: data.cartDetails
});