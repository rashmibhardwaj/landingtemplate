import React from "react";

// const footer = () => (
//   <footer className="footer">
//     <small>@Copyright 2019</small>
//   </footer>
// );

class footer extends React.Component {
  state = {
    copyright: "@purani ho gye hai site",
    newName: "2019",
    isChanged: false
  };
  handleHover = () => {
    console.log("hover");
    this.setState(() => ({
      isChanged: !this.state.isChanged
    }));
  };
  render() {
    return (
      <footer className="footer">
        <small onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
          {this.state.copyright}
          {!this.state.isChanged ? " 2000" : ` ${this.state.newName}`}
        </small>
      </footer>
    );
  }
}

export default footer;
