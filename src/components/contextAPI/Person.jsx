import React, { Component } from "react";
import { MyContext } from "../../context.js";

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {context => (
            <>
              <p> age: {context.state.age}</p>
              <p> name: {context.state.name}</p>
              <button onClick={context.growAYearOlder}>
                <span>🥮🍥🧁+cake</span>
              </button>
            </>
          )}
        </MyContext.Consumer>
        <p>How do I access my data here?</p>
      </div>
    );
  }
}

export default Person;
