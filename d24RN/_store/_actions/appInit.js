import { initConstants } from '../../_constants';
import { appInitService } from '../_services';


function getAppInit() {
    return dispatch => {
        dispatch(request());
        appInitService.getAppInit()
            .then(
                payload => dispatch(success(payload)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: initConstants.GET_INITDATA } }
    function success(payload) { return { type: initConstants.GET_INITDATA_SUCCESS, payload } }
    function failure(error) { return { type: initConstants.GET_INITDATA_ERROR, error } }
}

export const appInitActions = {
    getAppInit,
};
