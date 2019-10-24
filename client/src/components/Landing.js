import React from "react";
import { Link } from "react-router-dom";
import EventList from "./events/EventList";

const Landing = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Employee Management</h1>
      <h2>Training Portal - trainings events scheduler</h2>
      <div style={{ margin: "50dp" }}>
        <Link to="/new">
          <button className="button-green">Add New Event</button>
        </Link>
      </div>
      <EventList />
    </div>
  );
};

export default Landing;
