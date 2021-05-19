import * as constants from '../constants';

export const fetchAllNewSeller = () => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: '/admin/new-seller/get-new-seller',
        success: (response) => (getAllNewSeller(response))
    }
});

export const fetchNewSellerById = (id, onSuccess, onError) => ({
    type: constants.API,
    payload:{
        method: 'GET',
        url: `/admin/new-seller/get-new-seller-detail/${id}`,
        success: (response) => (getNewSellerById(response)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
})

export const acceptNewSeller = (id, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: `/admin/new-seller/accept-new-seller/${id}`,
        id,
        success: (response) => (acceptAdminNewSeller(response)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});

export const rejectNewSeller = (id, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: `/admin/new-seller/reject-new-seller/${id}`,
        id,
        success: (response) => (rejectAdminNewSeller(response)),
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});

const getAllNewSeller = (data) => ({
    type: constants.ADMIN_GET_NEW_SELLER,
    payload: data.lists
});
const getNewSellerById = (data) => ({
    type: constants.ADMIN_GET_NEW_SELLER_DETAIL,
    payload: data.details
});

const acceptAdminNewSeller = (data) => ({
    type: constants.ADMIN_ACCEPT_NEW_SELLER,
    payload: data
});
const rejectAdminNewSeller = (data) => ({
    type: constants.ADMIN_REJECT_NEW_SELLER,
    payload: data
});