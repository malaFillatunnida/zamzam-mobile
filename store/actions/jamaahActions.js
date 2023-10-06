import { useDispatch } from "react-redux";
import { instance as axios } from "../../util/api";
import { getStoreData } from "../../util/util";






export const addJamaah = (jamaahData) => ({
  type: 'ADD_JAMAAH',
  payload: jamaahData,
});

export const fetchPartnerSuccess = (data) => ({
  type: 'SET_PARTNER_DATA',
  payload: data,
});

export const fetchPartners = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/partners', {
        headers: {
          Authorization: `Bearer ${await getStoreData("access_token")}`,
        },
      });
      dispatch(fetchPartnerSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

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



export const getJamaah = (data) => ({
  type: 'GET_JAMAAH',
  payload: data,
});

export const fetchCustomerSuccess = (data) => ({
  type: 'FETCH_CUSTOMER_SUCCESS',
  payload: data,
});

export const fetchCustomerFailure = (error) => ({
  type: 'FETCH_CUSTOMER_FAILURE',
  payload: error,
});

export const fetchCustomerData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/customers', {
        headers: {
          Authorization: `Bearer ${await getStoreData("access_token")}`,
        },
      });
      dispatch(fetchCustomerSuccess(response.data));
    } catch (error) {
      dispatch(fetchCustomerFailure(error));
    }
  };
};
// Add more actions as needed
