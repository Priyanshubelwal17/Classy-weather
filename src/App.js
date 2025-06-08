import React from "react";
class Conter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
  }
  render() {
    return (
      <div>
        <button>-</button>
        <span>{this.state.count}</span>
        <button>+</button>
      </div>
    );
  }
}

export default Conter;
