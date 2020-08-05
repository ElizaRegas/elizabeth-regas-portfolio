import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./containers/Navbar/Navbar";
import Content from "./containers/Content/Content";
import Footer from "./containers/Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (

        <div className="content">
          <Navbar />
          <Content />
          <Footer />
        </div>

    );
  }
}

export default App;
