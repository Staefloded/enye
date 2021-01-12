import React, { useContext, useRef, useEffect, useState } from "react";
import UsersContext from "../context/UsersContext";

const Searchbar = () => {
  const userContext = useContext(UsersContext);
  const text = useRef("");
  const [search, setSearch] = useState("");

  const { userNameSearch, filteredSearch, clearFilteredSearch } = userContext;

  useEffect(() => {
    if (filteredSearch === null) {
      text.current.value = "";
    }
  }, [filteredSearch]);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.current.value !== "") {
      userNameSearch(search);
    } else {
      clearFilteredSearch();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" ref={text} onChange={onChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Searchbar;
