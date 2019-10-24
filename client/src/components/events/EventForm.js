// SurveyForm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import EventField from "./EventField";
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

  render() {
    return (
      <div className="card" style={{ textAlign: "center" }}>
        <div className="card-content">
          <h2>Enter a new training meeting</h2>
          <form onSubmit={this.props.handleSubmit(this.props.onEventSubmit)}>
            {this.renderFields()}

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
