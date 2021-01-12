import React, { useContext, useEffect } from "react";
import UsersContext from "./context/UsersContext";
import UserItem from "./UserItem";

const Users = () => {
  const usersContext = useContext(UsersContext);
  const {
    users,
    usersPerPage,
    loading,
    currentPage,
    getUsers,
    filtered,
    filteredSearch,
  } = usersContext;

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  // Get Current Users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const filterCurrentUsers = filtered.slice(indexOfFirstUser, indexOfLastUser);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {filtered.length !== 0
        ? filterCurrentUsers.map((user, index) => <UserItem key={index} user={user} />)
        : filteredSearch.length !== 0
        ? filteredSearch.map((user, index) => <UserItem key={index} user={user} />)
        : currentUsers.map((user, index) => <UserItem key={index} user={user} />)}
    </div>
  );
};

export default Users;
