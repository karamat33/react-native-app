import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../_actions/actionTypes";

//Define your initialState
const initialState = {
    cart: [],
    total: 0,
}

//Define your reducer that will return the initialState by default
const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cart: [action.payload, ...state.cart],
                total: state.total + action.payload.threeDayPrice
            }
        case EMPTY_CART:
            return {
                ...state,
                cart: [],
                total: 0
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item, i) => i !== action.payload.index),
                total: state.total - action.payload.item.threeDayPrice
            }
        default:
            return state
    }
}

export default reducer;
