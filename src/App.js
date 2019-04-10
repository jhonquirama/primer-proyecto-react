import React, { Component } from "react";
//import FooterPage from "./components/FooterPage/FooterPage";
//import Home from "./components/Home/Home";
import { Link } from "react-router-dom";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Mi app</h1>
          <Link to="home">
            <p>Home</p>
          </Link>

          <Link to="FooterPage">
            <p>FooterPage</p>
          </Link>
        </header>
      </div>
    );
  }
}

export default App;
