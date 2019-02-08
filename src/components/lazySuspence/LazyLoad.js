import React, { Suspense, lazy } from "react";
const Cat = lazy(() => import("./Cat"));

class LazyLoad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showImage: false
    };
  }

  showImage = () => {
    this.setState({ showImage: true });
  };

  hideImage = () => {
    this.setState({ showImage: false });
  };

  render() {
    if (!this.state.showImage) {
      return (
        <>
          <button onClick={this.showImage}>Show Image</button>
        </>
      );
    } else {
      return (
        <>
          {/* In Concurrent React, we can add maxDuration prop that takes
          milliseconds to prevent loading state if we have fast internet
        */}
          <Suspense fallback={<>Loading...</>}>
            <Cat />
          </Suspense>
          <button onClick={this.hideImage}>Hide Image</button>
        </>
      );
    }
  }
}

export default LazyLoad;
