import { instance as axios } from "../../util/api";
import { getStoreData } from "../../util/util";

// GET Paket
export const fetchPaketSuccess = (data) => ({
    type: 'SET_PAKET_DATA',
    payload: data,
});

export const fetchDataPaket = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/products', {
                headers: {
                    Authorization: `Bearer ${await getStoreData("access_token")}`,
                },
            });
            dispatch(fetchPaketSuccess(response.data));
        } catch (error) {
            console.log(error);
        }
    };
};

// GET Paket By Limit
export const fetchProductSuccess = (data) => ({
    type: 'FETCH_PRODUCT_SUCCESS',
    payload: data,
});

export const fetchProductFailure = (error) => ({
    type: 'FETCH_PRODUCT_FAILURE',
    payload: error,
});

export const fetchPaketDataByLimit = (currentPage, selectedItemsPerPage) => {
    return async (dispatch) => {
        try {
            const token = await getStoreData("access_token");

            const response = await axios.get('/products', {
                params: {
                    page: currentPage,
                    limit: selectedItemsPerPage,
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            dispatch(fetchProductSuccess(response.data));
        } catch (error) {
            dispatch(fetchProductFailure(error));
        }
    };
};


