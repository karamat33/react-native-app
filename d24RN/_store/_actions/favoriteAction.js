import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE, EMPTY_FAVORITE } from "./actionTypes";

export const addToFavorite = (item) => dispatch => {
    
    dispatch({
        type: ADD_TO_FAVORITE,
        payload: item
    })
}
export const removeFavorite = (item) => dispatch => {
    dispatch({
        type: REMOVE_FROM_FAVORITE,
        payload: item
    })
}

export const emptyFavorite = () => dispatch => {
    dispatch({
        type: EMPTY_FAVORITE
    })
}