import React from "react";

import Loginform from "./login";

// functional component

// const ContentInner = () => (
//   <div className="content text-left">
//     <h1>heading text</h1>
//     <p>conetnt conetnt content content content </p>
//     <button className="btn primary"> click me </button>
//   </div>
// );

// class based compoenent

class ContentInner extends React.Component {
  state = {
    // object
    name: "Ek Number", // string
    newName: "Do Number",
    isChanged: false
  };
  handleClick = () => {
    this.setState(() => ({
      isChanged: !this.state.isChanged
    }));
  };
  render() {
    // read something in component from state (i.e. this.state)
    return (
      <div className="content text-left">
        <div className="row">
          <ContentInner />
          <Loginform />
        </div>
      </div>
    );
  }
}

export default ContentInner;
