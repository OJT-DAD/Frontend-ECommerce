import * as constants from '../constants';

export const fetchAdminHistory = () => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: '/history/admin-history',
        success: (response) => (getAdminHistory(response))
    }
});
export const fetchSellerHistory = (storeId) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `/history/seller-history/${storeId}`,
        success: (response) => (getSellerHistory(response))
    }
});
export const fetchUserHistory = (userId) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `/history/user-history/${userId}`,
        success: (response) => (getUserHistory(response))
    }
});

const getAdminHistory = (data) => ({
    type: constants.ADMIN_HISTORY,
    payload: data.histories
});

const getSellerHistory = (data) => ({
    type: constants.SELLER_HISTORY,
    payload: data.histories
});

const getUserHistory = (data) => ({
    type: constants.USER_HISTORY,
    payload: data.histories
});