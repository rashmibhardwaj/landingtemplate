import React from "react";
import ReactDOM from "react-dom";
import Naina from "./header";
import Footer from "./footer";
import ContentForm from "./content";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Naina />
        <ContentForm />
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
