import "./App.css";
import React from "react";
import logo from "./logo.png";

import Clock from "./Components/Clock";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showClock: true,
    };
  }

  toggleClock = () => {
    this.setState({
      showClock: !this.state.showClock,
    });
  };

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <header className="App-header">
          <button onClick={this.toggleClock}>Toggle Clock</button>
          {this.state.showClock ? <Clock /> : "Clocks are disabled"}
        </header>
      </div>
    );
  }
}
