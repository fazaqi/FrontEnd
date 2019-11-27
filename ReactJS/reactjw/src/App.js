import React from "react";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import About from "./pages/about";
import Solution from "./pages/Solution";
import Developer from "./pages/Developer";
import { Route, Switch } from "react-router-dom";
import Notfound from "./pages/notfound";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <section className="section1">
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/solution" component={Solution} />
            <Route exact path="/developer" component={Developer} />
            <Route path="/*" component={Notfound} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
