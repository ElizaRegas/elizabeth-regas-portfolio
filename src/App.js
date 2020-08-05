import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import HomeAnimation from "./components/HomeAnimation";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="content">
        <Navbar />
        <HomeAnimation />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;


