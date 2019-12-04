import React from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
