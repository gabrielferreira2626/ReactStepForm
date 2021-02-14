import React from "react";
import { BrowserRouter as Router, Route, Link, useLocation } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import {useForm, useFieldArray, useWatch} from 'react-hook-form'

//Components Per Page
import Step1 from "./Components/Step1";
import Step2 from "./Components/Step2";
import Step3 from "./Components/Step3";
import Result from "./Components/Result";

//Add Information to Save
createStore({
  yourDetails: {
    firstName: "",
    lastName: "",
    typeUser: null,
    qualifications: []

  },
});

//Navigation
const Pages = () => {
  //Get Current Location
  const location = useLocation();
  return (
    <>
      <nav>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Step 1</Link>
          </li>
          <li className={location.pathname === "/step2" ? "active" : ""}>
            <Link to="/step2">Step 2</Link>
          </li>
          <li className={location.pathname === "/step3" ? "active" : ""}>
            <Link to="/step3">Step 3</Link>
          </li>
          <li className={location.pathname === "/result" ? "active" : ""}>
            <Link to="/result">Result</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Step1} />
      <Route path="/step2" component={Step2} />
      <Route path="/step3" component={Step3} />
      <Route path="/result" component={Result} />
    </>
  );
};

function App() {
  return (
    <StateMachineProvider>
      <h1>Multi Step Form</h1>
      <Router>
        <Pages />
      </Router>
    </StateMachineProvider>
  );
}

export default App;
