import React, { useContext, useEffect } from "react";
import UsersContext from "../context/UsersContext";

export const Pagination = () => {
  const usersContext = useContext(UsersContext);
  const { users, usersPerPage, setCurrentPage, getUsers, filtered, filteredSearch } = usersContext;
  const totalUsers = users.length;
  const totalFilteredUsers = filtered.length;
  const totalSearchFilteredUsers = filteredSearch.length;

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  const pageNumbers = [];
  const filteredPageNumbers = [];
  const filteredSearchPageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  for (let i = 1; i <= Math.ceil(totalFilteredUsers / usersPerPage); i++) {
    filteredPageNumbers.push(i);
  }
  for (let i = 1; i <= Math.ceil(totalSearchFilteredUsers / usersPerPage); i++) {
    filteredSearchPageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {filteredPageNumbers.length !== 0
          ? filteredPageNumbers.map((number) => (
              <li key={number}>
                <a onClick={() => setCurrentPage(number)} href="!#">
                  {number}
                </a>
              </li>
            ))
          : filteredSearchPageNumbers.length !== 0
          ? filteredSearchPageNumbers.map((number) => (
              <li key={number}>
                <a onClick={() => setCurrentPage(number)} href="!#" style={{ display: "none" }}>
                  {number}
                </a>
              </li>
            ))
          : pageNumbers.map((number) => (
              <li key={number}>
                <a onClick={() => setCurrentPage(number)} href="!#">
                  {number}
                </a>
              </li>
            ))}
      </ul>
    </nav>
  );
};
