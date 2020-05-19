import { GET_PRODUCTDATA, GET_PRODUCTDATA_SUCCESS, GET_PRODUCTDATA_ERROR } from "../_actions/actionTypes";

//Define your initialState
const initialState = {
  productData: {},
  //Have the loading state indicate if it's done getting data.
  loading: true,
  //Have state for error message for recieving an error.
  errorMessage: '',
}

//Define your reducer that will return the initialState by default
const reducer = (state = initialState, action) => {

 switch (action.type) {
    case GET_PRODUCTDATA:
      return { ...state, loading: action.payload };
    case GET_PRODUCTDATA_SUCCESS:
      return { ...state, productData: action.payload, loading: action.loading };
    case GET_PRODUCTDATA_ERROR:
      return { ...state, errorMessage: action.payload, loading: action.loading };
    default:
      return state;
  }
}

export default reducer;