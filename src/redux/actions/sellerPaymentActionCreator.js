import * as constants from '../constants';

export const fetchAllSellerPayment = (id) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `/seller/Payment/${id}`,
        success: (response) => (getAllSellerPayment(response))
    }
});

export const createSellerPayment = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/seller/Payment',
        data,
        success: (response) => (addSellerPayment(response)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});

export const deleteSellerPayment = (id, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'DELETE',
        url: `/seller/Payment/${id}`,
        success: () => (removeSellerPayment(id)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});

const getAllSellerPayment = (data) => ({
    type: constants.SELLER_GET_PAYMENT,
    payload: data.payments
});

const addSellerPayment = (data) => ({
    type: constants.SELLER_ADD_PAYMENT,
    payload: data
});

const removeSellerPayment = (id) => ({
    type: constants.SELLER_DELETE_PAYMENT,
    payload: id
})