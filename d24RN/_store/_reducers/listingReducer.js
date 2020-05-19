import { GET_LISTINGDATA, GET_LISTINGDATA_SUCCESS, GET_LISTINGDATA_ERROR } from "../_actions/actionTypes";

//Define your initialState
const initialState = {
  listingData: {},
  //Have the loading state indicate if it's done getting data.
  loading: true,
  //Have state for error message for recieving an error.
  errorMessage: '',
}

//Define your reducer that will return the initialState by default
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LISTINGDATA:
      return { ...state, loading: action.loading };
    case GET_LISTINGDATA_SUCCESS:
      return { ...state, listingData: action.payload, loading: action.loading };
    case GET_LISTINGDATA_ERROR:
      return { ...state, errorMessage: action.payload, loading: action.loading };
    default:
      return state;
  }
}

export default reducer;