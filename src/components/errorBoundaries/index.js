import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary.js";
import BuggyComponent from "./BuggyComponent.js";

class ErrorCounter extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <p>
            These components are inside the same error boundary. If one crashes,
            the error boundary will replace both of them.
          </p>
          <BuggyComponent />
          <BuggyComponent />
        </ErrorBoundary>
        <hr />
        <p>
          These two counters are each inside of their own error boundary. So if
          one crashes, the other is not affected.
        </p>
        <ErrorBoundary>
          <BuggyComponent />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyComponent />
        </ErrorBoundary>
      </div>
    );
  }
}

export default ErrorCounter;
