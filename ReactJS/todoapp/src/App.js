import React from "react";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Homepage />
      </div>
    );
  }
}

export default App;
