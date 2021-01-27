import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./App";
import { computeHeadingLevel } from "@testing-library/react";

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

// function WelcomePanelF(props) {
//   return <h1>Welcome, {props.name}</h1>;
// }

// class WelcomePanelC extends React.Component {
//   render() {
//     return <h1> Welcome, {this.props.name}</h1>;
//   }
// }

// const MainPanel = (props) => (
//   <React.Fragment>
//     <WelcomePanelF name={props.nameF} />
//     <WelcomePanelC name={props.nameC} />
//   </React.Fragment>
// );

// const ContentArea = (props) => (
//   <MainPanel nameF={props.nameFunc} nameC={props.nameCl} />
// );

// ReactDOM.render(
//   <ContentArea nameFunc={"functional"} nameCl={"class"} />,
//   document.getElementById("root")
// );

// STATE and Class component

const FormattedDate = ({ date }) => <h2>It is {date.toLocaleTimeString()}.</h2>;
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  handleClick(e) {
    e.preventDefault();
    console.log(`Happy New Year!!! + ${this.timerId}`);
  }
  render() {
    return (
      <React.Fragment>
        <h1>Current time:</h1>
        <FormattedDate date={this.state.date} />
        <a href="#" onClick={this.handleClick}>
          Happy New Year!!!
        </a>
      </React.Fragment>
    );
  }
}

const UserPlaceholder = ({ isUserLogged }) => {
  const loggedElement = <div>Logged User</div>;
  const notLoggedElement = <div>Not Logged User</div>;
  return isUserLogged ? loggedElement : notLoggedElement;
};

const TodoSection = ({ todoList }) => (
  <div>
    <h1>My Todo</h1>
    {todoList.length > 0 && (
      <h2>You have {todoList.length} unfinished tasks </h2>
    )}
  </div>
);

const App1 = () => (
  <React.Fragment>
    <Clock />
    <UserPlaceholder isUserLogged={false} />
    <TodoSection todoList={[1, 2, 3]} />
  </React.Fragment>
);

ReactDOM.render(<App1 />, document.getElementById("root"));

// const element = React.createElement("Clock", {}, "");

// Hook UseReducer:

const initialState = {
  counters: [
    {
      id: 1,
      value: 1,
    },
    {
      id: 2,
      value: 6,
    },
    {
      id: 3,
      value: 2,
    },
  ],
};

const updateCounter = (counters, id, step) => {
  const newCounters = counters.map((counter) => ({
    id: counter.id,
    value: counter.value,
  }));

  const counterToChange = newCounters.find((counter) => counter.id === id);

  if (counterToChange !== undefined) {
    counterToChange.value += step;
  }
  return newCounters;
};

const addCounter = (counters) => {
  const maxId = Math.max(...counters.map((counter) => counter.id));

  let newCounters = counters.map((counter) => ({
    id: counter.id,
    value: counter.value,
  }));
  newCounters = [...newCounters, { id: maxId + 1, value: 0 }];
  return newCounters;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { counters: updateCounter(state.counters, action.id, 1) };
    case "decrease":
      return { counters: updateCounter(state.counters, action.id, -1) };
    case "add":
      return { counters: addCounter(state.counters) };
    default:
      throw new Error("Unknown action");
  }
};

const Counter = ({ counter, minusHandler, plusHandler }) => (
  <div>
    Count: {counter}
    <button onClick={minusHandler}>-</button>
    <button onClick={plusHandler}>+</button>
  </div>
);

const InfoPanel = ({ data }) => (
  <div>
    Sum:
    <strong>{data.reduce((acc, value) => acc + value, 0)}</strong>
  </div>
);

const CounterApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {state.counters.map((counter) => (
        <React.Fragment>
          <Counter
            key={counter.id}
            counter={counter.value}
            minusHandler={() => dispatch({ type: "decrease", id: counter.id })}
            plusHandler={() => dispatch({ type: "increase", id: counter.id })}
          />
        </React.Fragment>
      ))}
      <input
        type="button"
        value="Add counter"
        onClick={() => dispatch({ type: "add" })}
      />

      <InfoPanel data={state.counters.map((counter) => counter.value)} />
    </>
  );
};
