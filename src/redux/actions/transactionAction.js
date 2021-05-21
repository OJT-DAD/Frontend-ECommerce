import * as constants from '../constants';

export const getTransactionData = (id, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `/user/transaction?TransayctionIndexId=${id}`,
        postProccessSuccess: onSuccess,
        postProccessError: onError
    }
});