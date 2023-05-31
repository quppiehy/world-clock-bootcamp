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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.toggleClock}>Toggle Clock</button>
          {this.state.showClock ? (
            <Clock
              zone={["Asia/Singapore", "Asia/Seoul", "America/New_York"]}
              gmt={["GMT +8", "GMT +9", "GMT -5"]}
            />
          ) : (
            "Clocks are disabled"
          )}
        </header>
      </div>
    );
  }
}
