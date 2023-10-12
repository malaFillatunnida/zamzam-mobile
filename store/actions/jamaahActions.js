import { instance as axios } from "../../util/api";
import { getStoreData } from "../../util/util";

// GET Jamaah
export const fetchCustomerSuccess = (data) => ({
    type: 'FETCH_CUSTOMER_SUCCESS',
    payload: data,
});

export const fetchCustomerFailure = (error) => ({
    type: 'FETCH_CUSTOMER_FAILURE',
    payload: error,
});

export const fetchCustomerData = (currentPage, selectedItemsPerPage) => {
    return async (dispatch) => {
        try {
            const token = await getStoreData("access_token");

            const response = await axios.get('/customers', {
                params: {
                    page: currentPage,
                    limit: selectedItemsPerPage,
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            dispatch(fetchCustomerSuccess(response.data));
        } catch (error) {
            dispatch(fetchCustomerFailure(error));
        }
    };
};
// GETByVOucher Jamaah
export const fetchCustomerByVoucherSuccess = (data) => ({
    type: 'FETCH_CUSTOMER_VOUCHER_SUCCESS',
    payload: data,
});

export const fetchCustomerByVoucherFailure = (error) => ({
    type: 'FETCH_CUSTOMER_VOUCHER_FAILURE',
    payload: error,
});

export const fetchCustomerDataByVoucher = (voucherCode) => {
    return async (dispatch) => {
      try {
        const token = await getStoreData("access_token");
  
        const response = await axios.get(`/customers/${voucherCode}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        dispatch(fetchCustomerByVoucherSuccess(response.data));
      } catch (error) {
        dispatch(fetchCustomerByVoucherFailure(error));
      }
    };
  };

// POST Jamaah
export const addJamaahSuccess = (data) => ({
    type: 'ADD_JAMAAH_SUCCESS',
    payload: data,
});

export const addJamaahFailure = (error) => ({
    type: 'ADD_JAMAAH_FAILURE',
    payload: error,
});

export const postCustomerData = (data) => {
    return async (dispatch) => {
        try {
            const token = await getStoreData("access_token");

            const response = await axios.post('/customers', data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            dispatch(addJamaahSuccess(response.data));
        } catch (error) {
            dispatch(addJamaahFailure(error));
        }
    };
};

// Update Jamaah
export const updateJamaahSuccess = (data) => ({
    type: 'UPDATE_JAMAAH_SUCCESS',
    payload: data,
});

export const updateJamaahFailure = (error) => ({
    type: 'UPDATE_JAMAAH_FAILURE',
    payload: error,
});

export const updateCustomerData = (data,voucherCode) => {
    return async (dispatch) => {
        try {
            const token = await getStoreData("access_token");

            const response = await axios.put(`/customers/${voucherCode}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            dispatch(updateJamaahSuccess(response.data));
        } catch (error) {
            dispatch(updateJamaahFailure(error));
        }
    };
};