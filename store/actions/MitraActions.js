import { instance as axios } from "../../util/api";
import { getStoreData } from "../../util/util";

// GET Mitra
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

