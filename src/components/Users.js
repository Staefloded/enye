import React, { useContext, useEffect } from "react";
import UsersContext from "./context/UsersContext";

const Users = () => {
  const usersContext = useContext(UsersContext);
  const { users, usersPerPage, loading, currentPage, getUsers, filtered } = usersContext;

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
        ? filterCurrentUsers.map((user, index) => (
            <p key={index}>
              {user.FirstName} {user.LastName} {user.Gender} {user.PaymentMethod}
            </p>
          ))
        : currentUsers.map((user, index) => (
            <p key={index}>
              {user.FirstName} {user.LastName} {user.Gender} {user.PaymentMethod}
            </p>
          ))}
    </div>
  );
};

export default Users;
