import * as constants from '../constants';

export const fetchAllSellerShipment = (id) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `/seller/shipping-method/${id}`,
        success: (response) => (getAllSellerShipment(response))
    }
});

export const createSellerShipment = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/seller/shipping-method',
        data,
        success: (response) => (addSellerShipment(response)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});

export const deleteSellerShipment = (id, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'DELETE',
        url: `/seller/shipping-method/${id}`,
        success: () => (removeSellerShipment(id)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});

const getAllSellerShipment = (data) => ({
    type: constants.SELLER_GET_SHIPMENT,
    payload: data.shippingMethods
});

const addSellerShipment = (data) => ({
    type: constants.SELLER_ADD_SHIPMENT,
    payload: data
});

const removeSellerShipment = (id) => ({
    type: constants.SELLER_DELETE_SHIPMENT,
    payload: id
})