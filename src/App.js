import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LazyLoad from "./components/lazySuspence/LazyLoad";
import Person from "./components/contextAPI/Person.jsx";
import Family from "./components/contextAPI/Person.jsx";
import MyProvider from "./context.js";

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <header className="App-header">
            <p>
              I'm the app{" "}
              <span role="image" aria-labelledBy="emoji">
                😀
              </span>
            </p>
            <Family />

            <LazyLoad />
          </header>
        </div>
      </MyProvider>
    );
  }
}

export default App;
