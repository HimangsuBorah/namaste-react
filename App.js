// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     xyz: "abc",
//   },
//   "Hello world from react"
// );
import React from "react";
import  ReactDOM  from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, " I am h1"), React.createElement("h2", {}, " I am h2")]))
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
