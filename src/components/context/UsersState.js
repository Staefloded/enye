import { useReducer } from "react";
import {
  GET_USERS,
  SET_LOADING,
  SET_CURRENT_PAGE,
  FILTER_USERS,
  CLEAR_FILTERED_SEARCH,
  CLEAR_USERS,
  USER_NAME_SEARCH,
} from "./type";
import UsersContext from "./UsersContext";
import usersReducer from "./usersReducer";

const UsersState = (props) => {
  const initialState = {
    users: [],
    loading: false,
    filtered: [],
    filteredSearch: [],
    currentPage: 1,
    usersPerPage: 20,
  };

  const [state, dispatch] = useReducer(usersReducer, initialState);

  //   Get All users
  const getUsers = async () => {
    setLoading();
    const res = await fetch("http://api.enye.tech/v1/challenge/records");
    const data = await res.json();

    dispatch({
      type: GET_USERS,
      payload: data.records.profiles,
    });
  };

  const setCurrentPage = (paginate) => {
    dispatch({
      type: SET_CURRENT_PAGE,
      payload: Number(paginate),
    });
  };

  const filteredUsers = (text) => {
    dispatch({
      type: FILTER_USERS,
      payload: text,
    });
  };

  const userNameSearch = (text) => {
    dispatch({
      type: USER_NAME_SEARCH,
      payload: text,
    });
  };

  const clearFilteredSearch = () => {
    dispatch({
      type: CLEAR_FILTERED_SEARCH,
    });
  };

  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <UsersContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        filtered: state.filtered,
        filteredSearch: state.filteredSearch,
        currentPage: state.currentPage,
        usersPerPage: state.usersPerPage,
        getUsers,
        setCurrentPage,
        filteredUsers,
        clearFilteredSearch,
        clearUsers,
        userNameSearch,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersState;
