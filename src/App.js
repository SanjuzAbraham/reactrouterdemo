import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Signin from "./components/Signin";

function App() {
  return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/signin" component={Signin} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
