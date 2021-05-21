import * as constants from '../constants';

export const getUserPaymentById = (id, onSuccess) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `/user/payment?CartIndexId=${id}`,
        success: (response) => (getUserPayment(response)),
        postProccessSuccess: onSuccess,
    }
});

export const getUserShippingById = (id, onSuccess) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `/user/shipping?CartIndexId=${id}`,
        success: (response) => (getUserShipping(response)),
        postProccessSuccess: onSuccess,
    }
});

export const setCheckoutPayment = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/user/payment',
        data,
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});

export const setCheckoutShipping = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/user/shipping',
        data,
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});

export const userAdditionalData = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/user/additional-data',
        data,
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});

export const userTransaction = (id, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: `/user/transaction?CartIndexId=${id}`,
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});


const getUserPayment = (data) => ({
    type: 'GET_USER_PAYMENT',
    payload: data
})
const getUserShipping = (data) => ({
    type: 'GET_USER_SHIPPING',
    payload: data
})