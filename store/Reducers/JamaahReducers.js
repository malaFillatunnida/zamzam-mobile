const initialState = {
    partnerData: [],
    paketData: [],
    customerData: [],
    loading: true,
    error: null,
    addJamaahError: null,
};

const JamaahReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CUSTOMER_SUCCESS':
            return {
                ...state,
                customerData: action.payload,
                loading: false,
            };

        case 'FETCH_CUSTOMER_FAILURE':
            return {
                ...state,
                error: action.payload,
                loading: false,
            };

        case 'ADD_JAMAAH':
            return {
                ...state,
                customerData: [...state.customerData, action.payload],
            };

        case 'ADD_JAMAAH_SUCCESS':
            return {
                ...state,
                addJamaahError: null, // Reset error menjadi null saat sukses
            };

        case 'ADD_JAMAAH_FAILURE':
            return {
                ...state,
                addJamaahError: action.payload, // Simpan kesalahan dalam state
            };

        default:
            return state;
    }
};

export default JamaahReducers;
