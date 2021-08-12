import React from "react";

const Education = (props) => {
  return (
    <div>
      <h2>Education</h2>
      <form>
        <div className="form-field">
          <label htmlFor="institution">Institution</label>
          <input
            onChange={props.onChange}
            value={props.state.institution}
            type="text"
            id="institution"
            placeholder="University of Florida"
          />
        </div>
        <div className="form-field">
          <label htmlFor="eduLocation">Location</label>
          <input
            onChange={props.onChange}
            value={props.state.eduLocation}
            type="text"
            id="eduLocation"
            placeholder="Gainesville, FL"
          />
        </div>
        <div className="form-field">
          <label htmlFor="attainment">Attainment</label>
          <input
            onChange={props.onChange}
            value={props.state.attainment}
            type="text"
            id="attainment"
            placeholder="B.S. Civil Engineering"
          />
        </div>
        <div className="form-field">
          <label htmlFor="eduStartDate">Start Date</label>
          <input
            onChange={props.onChange}
            value={props.state.eduStartDate}
            type="date"
            id="eduStartDate"
          />
        </div>
        <div className="form-field end-date-field">
          <label className="end-date-label" htmlFor="eduEndDate">
            End Date<span className="asterik">*</span>
          </label>
          <input
            onChange={props.onChange}
            value={props.state.eduEndDate}
            className="end-date-input"
            type="date"
            id="eduEndDate"
          />
          <small className="end-date-instructions">
            {" "}
            * Put today's date if presently enrolled here.
          </small>
        </div>
      </form>
    </div>
  );
};

export default Education;
