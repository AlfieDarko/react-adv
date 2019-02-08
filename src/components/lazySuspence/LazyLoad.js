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
          <button onClick={this.showImage} />
        </>
      );
    } else {
      return (
        <>
          <Suspense fallback={<>Loading...</>}>
            <Cat />
          </Suspense>
          <button onClick={this.hideImage} />
        </>
      );
    }
  }
}

export default LazyLoad;
