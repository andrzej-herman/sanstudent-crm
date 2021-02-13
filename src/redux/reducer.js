export const initialState = {
  user: null,
  isLoading: false,
  response: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  CLEAR_USER: "CLEAR_USER",
  SET_LOADING: "SET_LOADING",
  CLEAR_LOADING: "CLEAR_LOADING",
  SET_RESPONSE: "SET_RESPONSE",
  CLEAR_RESPONSE: "CLEAR_RESPONSE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.CLEAR_USER:
      return {
        ...state,
        user: null,
      };
    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.CLEAR_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case actionTypes.SET_RESPONSE:
      return {
        ...state,
        response: action.response,
      };
    case actionTypes.CLEAR_RESPONSE:
      return {
        ...state,
        response: null,
      };
    default:
      return state;
  }
};

export default reducer;
