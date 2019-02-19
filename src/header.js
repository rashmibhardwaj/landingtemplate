import React from "react";

// const header = () => (
//   <header>
//     <h2>Header</h2>
//   </header>
// );

class header extends React.Component {
  state = {
    headingname: "Ghana bole hai k...."
  };

  render() {
    return (
      <header>
        <h2> {this.state.headingname} </h2>
      </header>
    );
  }
}

export default header;

// () =>
