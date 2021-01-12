import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UsersState from "./components/context/UsersState";

ReactDOM.render(
  <React.StrictMode>
    <UsersState>
      <App />
    </UsersState>
  </React.StrictMode>,
  document.getElementById("root")
);
