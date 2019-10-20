// SurveyForm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import EventField from "./EventField";
import { Link } from "react-router-dom";
import formFields from "./formFields";

import moment from "moment";

const format = "h:mm a";

const departments = ["Engineering", "Information Technology", "Product"];
const defaultDepartment = departments[0];

class EventForm extends Component {
  state = {
    startDate: new Date(),
    value: moment()
  };
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleValueChange = value => {
    this.setState({ value });
  };

  clear = () => {
    this.setState({
      value: undefined
    });
  };

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
    const { value } = this.state;

    return (
      <div style={{ textAlign: "center" }}>
        <form onSubmit={this.props.handleSubmit(this.props.onEventSubmit)}>
          {this.renderFields()}

          <Link to="/" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Review
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name] && name != "description") {
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
