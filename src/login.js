import React from "react";

// functional component

// const ContentInner = () => (
//   <div className="content text-left">
//     <h1>heading text</h1>
//     <p>conetnt conetnt content content content </p>
//     <button className="btn primary"> click me </button>
//   </div>
// );

// class based compoenent

class Loginform extends React.Component {
  render() {
    // read something in component from state (i.e. this.state)
    return (
      <div className="content-right">
        <form>
          <h2> Login form</h2>
          <div className="formInner border-0">
            <label>
              <input type="text" name="text" placeholder="first name" />
            </label>
            <label>
              <input type="email" name="email" placeholder="email" />
            </label>
            <label>
              <input type="password" name="password" placeholder="password" />
            </label>
            <button className="submit" name="submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Loginform;
