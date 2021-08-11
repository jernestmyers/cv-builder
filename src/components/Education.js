import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Education</h2>
        <form>
          <div className="form-field">
            <label htmlFor="institution">Institution</label>
            <input
              type="text"
              id="position"
              placeholder="University of Florida"
            />
          </div>
          <div className="form-field">
            <label htmlFor="locationOfStudy">Location</label>
            <input
              type="text"
              id="locationOfStudy"
              placeholder="Gainesville, FL"
            />
          </div>
          <div className="form-field">
            <label htmlFor="attainment">Attainment</label>
            <input
              type="text"
              id="attainment"
              placeholder="B.S. Civil Engineering"
            />
          </div>
          <div className="form-field">
            <label htmlFor="startDateEdu">Start Date</label>
            <input type="date" id="startDateEdu" />
          </div>
          <div className="form-field end-date-field">
            <label className="end-date-label" htmlFor="endDateEdu">
              End Date
            </label>
            <input className="end-date-input" type="date" id="endDateEdu" />
            <small className="end-date-instructions">
              {" "}
              (Put today's date if presently enrolled.)
            </small>
          </div>
        </form>
      </div>
    );
  }
}

export default Education;
