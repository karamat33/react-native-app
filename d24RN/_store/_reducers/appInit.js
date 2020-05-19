import { initConstants } from '../../_constants';

const initialState = {
  guestKey:'',
};

export function appInit(state = initialState, action) {
  switch (action.type) {
    case initConstants.GET_INITDATA:
      return {
        ...state,
      };
    case initConstants.GET_INITDATA_SUCCESS:
      return {
        ...state,
        guestKey: action.payload.user.guestKey.value
      };
    case initConstants.GET_INITDATA_ERROR:
      return {
        ...state,
      };
    default:
      return state
  }
}