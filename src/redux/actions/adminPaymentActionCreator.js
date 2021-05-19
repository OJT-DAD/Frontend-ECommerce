import * as constants from '../constants';

export const fetchAllAdminPayment = () => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: '/admin/bank',
        success: (response) => (getAllAdminPayment(response))
    }
});

export const createAdminPayment = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/admin/bank',
        data,
        success: (response) => (addAdminPayment(response)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});

export const deleteAdminPayment = (id, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'DELETE',
        url: `/admin/bank/${id}`,
        success: () => (removeAdminPayment(id)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});

const getAllAdminPayment = (data) => ({
    type: constants.ADMIN_GET_PAYMENT,
    payload: data.banks
});

const addAdminPayment = (data) => ({
    type: constants.ADMIN_ADD_PAYMENT,
    payload: data
});

const removeAdminPayment = (id) => ({
    type: constants.ADMIN_DELETE_PAYMENT,
    payload: id
})