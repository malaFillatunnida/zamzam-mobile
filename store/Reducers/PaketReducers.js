const initialState = {
    paketData: [],
};

const PaketReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PAKET_DATA':
            return { ...state, paketData: action.payload };

        case 'FETCH_PRODUCT_SUCCESS':
            return {
                ...state,
                paketData: action.payload,
                loading: false,
            };

        case 'FETCH_PRODUCT_FAILURE':
            return {
                ...state,
                error: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};

export default PaketReducers;
