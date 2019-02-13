import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LazyLoad from "./components/lazySuspence/LazyLoad";
import Family from "./components/contextAPI/Person.jsx";
import MyProvider from "./context.js";
import ErrorCounter from "./components/errorBoundaries/index.js";
import MyInput from "./components/refForwarding/MyInput.js";

class App extends Component {
  textInput = React.createRef();

  componentDidMount() {
    // accessing current to get the current DOM node
    this.textInput.current.focus();
  }
  render() {
    return (
      <>
        <MyProvider>
          <div className="App">
            <header className="App-header">
              <p>
                I'm the app{" "}
                <span role="image" aria-labelledBy="emoji">
                  😀
                </span>
              </p>
              <p> new Context API Example</p>
              <Family />

              <p>Lazy Load Example</p>
              <LazyLoad />

              <p>Error Boundary Example</p>
              {/* IN DEV: JUST PRESS ESCAPE TO CONTINUE */}
              {/* YOU ONLY SEE SEAMLESS BOUNDARY IN PROD */}
              <ErrorCounter />

              <p>Ref Forwarding</p>

              <MyInput ref={this.textInput} />
            </header>
          </div>
        </MyProvider>
        <></>
      </>
    );
  }
}

export default App;
