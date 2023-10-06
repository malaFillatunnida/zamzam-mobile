// store/reducers.js
const initialState = {
  partnerData: [],
  paketData: [],
  jamaahList: [],
  // fetch
  customerData: [],
  loading: true,
  error: null,
  // Add more initial state properties as needed
};

const jamaahReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_JAMAAH':
      return {
        ...state,
        jamaahList: [...state.jamaahList, action.jamaahData],
      };
    case 'SET_PARTNER_DATA':
      return { ...state, partnerData: action.payload };
    case 'SET_PAKET_DATA':
      return { ...state, paketData: action.payload };
    
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
    // Add more cases as needed
    default:
      return state;
  }
};

export default jamaahReducer;
