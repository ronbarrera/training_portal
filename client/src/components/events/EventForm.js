// SurveyForm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import EventField from "./EventField";
import EventField2 from "./EventField2";
import { Link } from "react-router-dom";
import formFields from "./formFields";

class EventForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={EventField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  renderFieldsTest() {
    return (
      <div>
        <Field
          key="description"
          component={EventField}
          type="text"
          label="Description: "
          name="description"
        />
        <Field
          key="department"
          name="department"
          component="select"
          label="Department: "
        >
          <option></option>
          <option value="#ff0000">Red</option>
          <option value="#00ff00">Green</option>
          <option value="#0000ff">Blue</option>
        </Field>
      </div>
    );
  }

  render() {
    return (
      <div className="card" style={{ textAlign: "center" }}>
        <div className="card-content">
          <h2>Enter a new training meeting</h2>
          <form onSubmit={this.props.handleSubmit(this.props.onEventSubmit)}>
            <Field
              name="name"
              component={EventField2}
              type="text"
              placeholder="name"
              label="Training Name"
            />
            <Field
              name="description"
              type="text"
              component={EventField2}
              label="Description"
            />

            <div>
              <label>Department</label>
              <div>
                <Field name="department" component="select">
                  <option value="IT">IT</option>
                  <option value="HR">HR</option>
                  <option value="Engineering">Engineering</option>
                </Field>
              </div>
            </div>
            <Field
              name="duration"
              type="text"
              component={EventField2}
              label="Duration"
            />
            <Field
              name="date"
              type="text"
              component={EventField2}
              label="Date"
            />
            <Field
              name="room"
              type="text"
              component={EventField2}
              label="Meeting Room"
            />
            <Link to="/">
              <button className="button-red"> Cancel</button>
            </Link>
            <button type="submit" className="button-blue">
              Review
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.description) {
    errors.description = "Required";
  }
  if (!values.department) {
    errors.department = "Required";
  }

  _.each(formFields, ({ name }) => {
    if (!values[name] && name !== "description") {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "eventForm",
  destroyOnUnmount: false
})(EventForm);
