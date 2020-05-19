import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE, EMPTY_FAVORITE } from "../_actions/actionTypes";

//Define your initialState
const initialState = {
    favorite: [],
}

//Define your reducer that will return the initialState by default
const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_FAVORITE:
            console.log(action.payload);
                if(state.favorite.some(el => el === action.payload)){
                    console.log('foundddddddddd');
                    return {
                      
                favorite: state.favorite.filter((item, i) => i !== action.payload.index),
                    }
                }else{
                return{
                    ...state,
                    favorite: [action.payload, ...state.favorite],
                }}
        
        case EMPTY_FAVORITE:
            return {
                ...state,
                favorite: [],
              
            }
        
        case REMOVE_FROM_FAVORITE:
            return {
                ...state,
                favorite: state.favorite.filter((item, i) => i !== action.payload.index),
            }
        default:
            return state
    }
}

export default reducer;
