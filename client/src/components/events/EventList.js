import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEvents } from "../../actions";

class EventList extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  renderEvents() {
    return this.props.events.reverse().map(event => {
      return (
        <div className="card" key={event._id}>
          <div className="card-content">
            <span className="card-title">{event.name}</span>
            <p>{event.description}</p>
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
