import { userConstants } from '../../_constants';
import { userService } from '../_services';
import { alertActions } from './alertAction';


const login = (username, password) => {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                  
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request (user)  { return { type: userConstants.LOGIN_REQUEST, user } }
    function success (user)  { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure (error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

const register = (user) => {
    return (dispatch, getState) => {

        const state = getState();
        const res = state.homeData;
        console.log(111111111);
        console.log(res)
        dispatch(request(user));
        userService.register(user,'234242342')
            .then(
                user => {
                    if(user.status == 200){ 
                    dispatch(success());
                    dispatch(alertActions.success('Registration successful'));
                    }else{
                    console.log(user)
                    dispatch(failure(user.user.message));
                    dispatch(alertActions.error(user.user.message));
                    }
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request (user)  { return { type: userConstants.REGISTER_REQUEST, user } }
    function success (user)  { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure (error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}


export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};
