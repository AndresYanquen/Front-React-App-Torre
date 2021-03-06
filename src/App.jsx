import { useState } from "react";
import "./App.css";
import InitialScreen from "./components/InitialScreen";
import JobsList from "./components/JobsList";
import Navbar from "./components/Navbar";
import { Layout } from "./style/Styled";
import Context from "./context/context";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { Candidates } from "./components/Candidates";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <Router>
      <Context>
        <Layout>
          <Navbar></Navbar>
          <InitialScreen></InitialScreen>
          <JobsList></JobsList>
          <Candidates></Candidates>
        </Layout>
      </Context>
    </Router>
  );
}

export default App;
