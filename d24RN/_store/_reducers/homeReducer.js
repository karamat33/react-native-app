import { GET_HOMEDATA, GET_HOMEDATA_SUCCESS, GET_HOMEDATA_ERROR } from "../_actions/actionTypes";


//Define your initialState
const initialState = {
  homeData: {},
  //Have the loading state indicate if it's done getting data.
  loading: true,
  //Have state for error message for recieving an error.
  errorMessage: '',
}

//Define your reducer that will return the initialState by default
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOMEDATA:
      return { ...state, loading: action.payload };
    case GET_HOMEDATA_SUCCESS:
      return { ...state, homeData: action.payload, loading: action.loading };
    case GET_HOMEDATA_ERROR:
      return { ...state, errorMessage: action.payload, loading: action.loading };
    default:
      return state;
  }
}

export default reducer;
