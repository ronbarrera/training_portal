import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEvents } from "../../actions";

class EventList extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  renderEvents() {
    console.log("this is events " + this.props.events);

    return this.props.events.reverse().map(event => {
      return (
        <div className="card" key={event._id}>
          <div className="card-content">
            <div>Training Name: {event.name}</div>
            <div>Description: {event.description}</div>
            <div>Department: {event.department}</div>
            <div>Duration: {event.duration}</div>
            <div>Date: {event.date}</div>
            <div>Meeting Room: {event.room}</div>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderEvents()}</div>;
  }
}

function mapStateTopProps({ events }) {
  return { events };
}

export default connect(
  mapStateTopProps,
  { fetchEvents }
)(EventList);
