import * as su from './actions';

//----------------------------------------------------------------------
const initialState = {
  isLoading: false,
  error: null,
  data: null,
  menu: su.support_menu
};

//----------------------------------------------------------------------
export default function reducer_Support(state = initialState, action) {
  switch (action.type) {
    case su.BEGIN:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case su.CONNECT:
    case su.DOCUMENTATION:
    case su.PAY:
    case su.FREE:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload
      };

    // EXISTING_CODE
    // EXISTING_CODE

    case su.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.err,
        data: null
      };

    default:
      return state;
  }
}