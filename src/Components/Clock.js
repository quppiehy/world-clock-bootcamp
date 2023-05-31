import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <Container>
        {this.props.zone && this.props.zone.length > 0 ? (
          this.props.zone.map((zone, index) => (
            <Row key={zone}>
              <Col>
                <h2>{zone}</h2>
              </Col>
              <Col>
                {this.state.time.toLocaleTimeString("en-US", {
                  timeZone: zone,
                })}
              </Col>
              <Col>{this.props.gmt[index]}</Col>
            </Row>
          ))
        ) : (
          <p>No zones passed</p>
        )}
      </Container>
    );
  }
}
