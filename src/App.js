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
            <Route path="/webportfolio">
              <WPortfolio />
            </Route>
            <Route path="/avportfolio">
              <AVPortfolio />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
