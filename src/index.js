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

// const LoggedUserBlock = (props) => {
//   if (props.isUserLogged) return <span>User Name</span>;
//   else return <span>Please login</span>;
// };

// const HeadersBlock = (props) =>
//   // [1, 2, 3, 4, 5]
//   props.numbers
//     // .map((number) => `Test sub-header ${number}`)
//     // .map((headerText) => <h2>{headerText}</h2>)
//     // .map((element) => (
//     //   <React.Fragment>
//     //     {element}
//     //     <h3>Small header</h3>
//     //   </React.Fragment>
//     // ));
//     .map((number) => (
//       <React.Fragment>
//         <h2> Test sub-header {number}</h2>
//         <h3>Small header</h3>
//       </React.Fragment>
//     ));

// const DemoPage = (props) => {
//   return (
//     <React.Fragment>
//       <LoggedUserBlock isUserLogged={true} />
//       <h1> Demo document with JSX {2 + 2}</h1>
//       <HeadersBlock numbers={[1, 2, 3, 4, 5, 6, 7, 8]} />
//     </React.Fragment>
//   );
// };

// ReactDOM.render(<DemoPage />, document.getElementById("root"));

// Деструктурирование

// const LoggedUserBlock = ({ isUserLogged }) => {
//   if (isUserLogged) return <span>User Name</span>;
//   else return <span>Please login</span>;
// };

// const HeadersBlock = ({ numbers }) =>
//   numbers.map((number) => (
//     <React.Fragment>
//       <h2> Test sub-header {number}</h2>
//       <h3>Small header</h3>
//     </React.Fragment>
//   ));

// const GreeterBlock = ({ userName, arg1, arg2 }) => (
//   <h1>
//     Hi, {userName}, your sum = {arg1 + arg2}
//   </h1>
// );

// const DemoPage = (props) => {
//   return (
//     <React.Fragment>
//       <LoggedUserBlock isUserLogged={true} />
//       <h1> Demo document with JSX {2 + 2}</h1>
//       <GreeterBlock userName="Fronend Developer" arg1={2} arg2={3} />
//       <HeadersBlock numbers={[1, 2, 3, 4, 5, 6, 7, 8]} />
//     </React.Fragment>
//   );
// };

// ReactDOM.render(<DemoPage />, document.getElementById("root"));

// Виртуальный ДОМ (ReactDom.render)

// setInterval(() => {
//   const element = (
//     <div>
//       <h2>Hello, world!!!</h2>
//       <h3>It is {new Date().toLocaleTimeString()}.</h3>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }, 1000);

// Functional components versus Class components

// function WelcomePanelF(props) {
//   return <h1>Welcome, {props.name}</h1>;
// }

// class WelcomePanelC extends React.Component {
//   render() {
//     return <h1> Welcome, {this.props.name}</h1>;
//   }
// }

// const element = (
//   <React.Fragment>
//     <WelcomePanelF name={"functional"} />
//     <WelcomePanelC name={"class"} />
//   </React.Fragment>
// );

// ReactDOM.render(element, document.getElementById("root"));

// Сomposition

function WelcomePanelF(props) {
  return <h1>Welcome, {props.name}</h1>;
}

class WelcomePanelC extends React.Component {
  render() {
    return <h1> Welcome, {this.props.name}</h1>;
  }
}

const MainPanel = (props) => (
  <React.Fragment>
    <WelcomePanelF name={props.nameF} />
    <WelcomePanelC name={props.nameC} />
  </React.Fragment>
);

const ContentArea = (props) => (
  <MainPanel nameF={props.nameFunc} nameC={props.nameCl} />
);

ReactDOM.render(
  <ContentArea nameFunc={"functional"} nameCl={"class"} />,
  document.getElementById("root")
);
