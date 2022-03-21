import {USER_GET_INFO_SUCCESS, USER_GET_INFO_ERROR} from '../actions';
const initState = {
  currentUser: null,
};

export const user = (state = initState, action) => {
  switch (action.type) {
    case USER_GET_INFO_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case USER_GET_INFO_ERROR:
      console.log('Get user failed');
      return state;
    default:
      return state;
  }
};
