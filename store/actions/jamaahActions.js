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

            // Jika permintaan berhasil, salurkan data jamaah yang berhasil ditambahkan ke reducer
            dispatch(addJamaahSuccess(response.data));
        } catch (error) {
            // Jika terjadi kesalahan, salurkan kesalahan ke reducer
            dispatch(addJamaahFailure(error));
        }
    };
};