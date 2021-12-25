import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Create from "./pages/Create";
import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/Sidebar";
import ListPage from "./pages/List";
import Update from "./pages/Update";
import Delete from "./pages/Delete";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    {/* <Sidebar /> */}
    <ListPage />
    <Create />
    <Update />
    <Delete />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
