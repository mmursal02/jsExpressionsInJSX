import React from "react";
import ReactDOM from "react-dom";

const luckynumb = 5;
const fname = "Mohamed";
const lname = " Mursal";
ReactDOM.render(
  <h1>
    Hellow my name is {`${fname} ${lname}`} and my lucky number is {luckynumb}!
  </h1>,
  document.getElementById("root")
);
