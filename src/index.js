import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// const element = (
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const subHeaders = [1, 2, 3, 4, 5]
//   .map((number) => `Test sub-header ${number}`)
//   .map((headerText) => <h2>{headerText}</h2>);

// const renderLoggedUserBlock = (isUserLogged) => {
//   if (isUserLogged) return <span>User Name</span>;
//   else return <span>Please login</span>;
// };

const LoggedUserBlock = (props) => {
  if (props.isUserLogged) return <span>User Name</span>;
  else return <span>Please login</span>;
};

const HeadersBlock = (props) =>
  // [1, 2, 3, 4, 5]
  props.numbers
    .map((number) => `Test sub-header ${number}`)
    .map((headerText) => <h2>{headerText}</h2>)
    .map((element) => (
      <React.Fragment>
        {element}
        <h3>Small header</h3>
      </React.Fragment>
    ));

const DemoPage = (props) => {
  return (
    <React.Fragment>
      <LoggedUserBlock isUserLogged={false} />
      <h1> Demo document with JSX {2 + 2}</h1>
      <HeadersBlock numbers={[1, 2, 3, 4, 5, 6, 7, 8]} />
    </React.Fragment>
  );
};

ReactDOM.render(<DemoPage />, document.getElementById("root"));
