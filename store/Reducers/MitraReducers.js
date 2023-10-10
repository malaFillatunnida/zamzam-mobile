const initialState = {
    partnerData: [],
};

const MitraReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PARTNER_DATA':
            return { ...state, partnerData: action.payload };

        default:
            return state;
    }
};

export default MitraReducers;
