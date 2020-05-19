import { GET_HOMEDATA, GET_HOMEDATA_SUCCESS, GET_HOMEDATA_ERROR } from "./actionTypes";
import  * as route from '../../_config/routes';
import { PUBLIC_API_HOST } from 'react-native-dotenv';

export const getHomeData = () => {
    //IN order to use await your callback must be asynchronous using async keyword.
    return async dispatch => {
        //Then perform your asynchronous operations.
        try {
            //Have it first fetch data from our api url.
            const promise = await fetch(PUBLIC_API_HOST + route.homeDataRoute);
            
            dispatch(fetchData(true));
            //Then use the json method to get json data from api/
            const data = await promise.json();
            //Now when the data is retrieved dispatch an action altering redux state.
            dispatch(fetchDataSuccess(data))
        } catch (error) {
            console.log('Getting Error---------', error);
            dispatch(fetchDataError(error))
        }
    }
}

//Define your action create that set your loading state.
export const fetchData = (bool) => {
    //return a action type and a loading state indicating it is getting data. 
    return {
        type: GET_HOMEDATA,
        payload: bool,
    };
};

//Define a action creator to set your loading state to false, and return the data when the promise is resolved
export const fetchDataSuccess = (data) => {
    //Return a action type and a loading to false, and the data.
    return {
        type: GET_HOMEDATA_SUCCESS,
        payload: data,
        loading: false,
    };
}

//Define a action creator that catches a error and sets an errorMessage
export const fetchDataError = (error) => {
    //Return a action type and a payload with a error
    return {
        type: GET_HOMEDATA_ERROR,
        payload: error,
        loading: false,
    };
}