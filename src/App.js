import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./containers/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import WPortfolio from "./pages/WPortfolio/WPortfolio";
import AVPortfolio from "./pages/AVPortfolio/AVPortfolio";
import Contact from "./pages/Contact/Contact";
import Footer from "./containers/Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="content">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/webportfolio">
              <WPortfolio />
            </Route>
            <Route exact path="/avportfolio">
              <AVPortfolio />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
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
