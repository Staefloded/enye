import {
  GET_USERS,
  SET_CURRENT_PAGE,
  SET_LOADING,
  FILTER_USERS,
  CLEAR_FILTERED,
  CLEAR_USERS,
} from "./type";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case FILTER_USERS:
      return {
        ...state,
        filtered: state.users.filter((user) => {
          const regex = new RegExp(`${action.payload}`);
          return (
            user.Gender.match(regex) ||
            user.PaymentMethod.match(regex) ||
            (user.Gender.match(regex) && user.PaymentMethod.match(regex))
          );
        }),
      };

    case CLEAR_FILTERED:
      return {
        ...state,
        filtered: null,
      };

    case CLEAR_USERS:
      return {
        ...state,
        users: null,
      };

    default:
      return state;
  }
};
