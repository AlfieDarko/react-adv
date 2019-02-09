import React, { Component } from "react";
import PropTypes from "prop-types";

// A Way to stop JS errors from breaking the app
// Catch JS errors anywhere in the component tree
// log then and display a fallback UI

// DOES NOT CATCH ERRORS FOR
// EVENT HANDLERS
// ASYNC CODE
// SSR
// ERRORS THROWN IN ERROR BOUNDARY

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Render children if there's no error
    return this.props.children;
  }
}

export default ErrorBoundary;
