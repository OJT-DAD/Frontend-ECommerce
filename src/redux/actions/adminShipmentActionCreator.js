import * as constants from '../constants';

export const fetchAllAdminShipment = () => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: '/admin/shipping',
        success: (response) => (getAllAdminShipment(response))
    }
});

export const createAdminShipment = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/admin/shipping',
        data,
        success: (response) => (addAdminShipment(response)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});

export const deleteAdminShipment = (id, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'DELETE',
        url: `/admin/shipping/${id}`,
        success: () => (removeAdminShipment(id)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});

const getAllAdminShipment = (data) => ({
    type: constants.ADMIN_GET_SHIPMENT,
    payload: data.availableShippingMethods
});

const addAdminShipment = (data) => ({
    type: constants.ADMIN_ADD_SHIPMENT,
    payload: data
});

const removeAdminShipment = (id) => ({
    type: constants.ADMIN_DELETE_SHIPMENT,
    payload: id
})