// SurveyFormReview shows users their form inputs for review

import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const EventFormReview = ({ onCancel, formValues, submitEvent, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entires</h5>
      {reviewFields}
      <button className="button-red" onClick={onCancel}>
        Back
      </button>
      <button
        onClick={() => submitEvent(formValues, history)}
        className="button-green"
      >
        Submit Event
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.eventForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(EventFormReview));
