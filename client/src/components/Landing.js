import React from "react";
import { Link } from "react-router-dom";
import EventList from "./events/EventList";

const Landing = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Employee Management</h1>
      <h2>Training Portal - trainings events scheduler</h2>
      <Link to="/new">
        <button>Add New Event</button>
      </Link>
      <EventList />
    </div>
  );
};

export default Landing;
