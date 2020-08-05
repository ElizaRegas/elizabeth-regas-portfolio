import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./containers/Navbar/Navbar";
import Home from "./containers/Content/Home";
import About from "./containers/Content/About";
import Portfolio from "./containers/Content/Portfolio";
import Contact from "./containers/Content/Contact";
import Footer from "./containers/Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="content">
          <Navbar />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
