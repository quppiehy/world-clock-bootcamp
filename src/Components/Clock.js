import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
    };
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    console.log("Ticked");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Singapore Time: {this.state.time.toLocaleTimeString()} GMT +8</h1>
        <h1>
          Korea Time:
          {this.state.time.toLocaleTimeString("ko-KR", {
            timeZone: "Asia/Seoul",
          })}{" "}
          GMT +9
        </h1>
        <h1>
          USA Time (New York):{" "}
          {this.state.time.toLocaleTimeString("en-US", {
            timeZone: "America/New_York",
          })}{" "}
          GMT -5
        </h1>
      </div>
    );
  }
}
