import React from "react";

const Experience = (props) => {
  return (
    <div>
      <h2>Work Experience</h2>
      <form className="experience-form">
        <div className="form-field">
          <label htmlFor="position">Position</label>
          <input
            onChange={props.onChange}
            value={props.state.jobTitle}
            type="text"
            id="position"
            placeholder="Software Engineer"
          />
        </div>
        <div className="form-field">
          <label htmlFor="company">Company</label>
          <input
            onChange={props.onChange}
            value={props.state.company}
            type="text"
            id="company"
            placeholder="Best Company Ever"
          />
        </div>
        <div className="form-field">
          <label htmlFor="location">Location</label>
          <input
            onChange={props.onChange}
            value={props.state.jobLocation}
            type="text"
            id="location"
            placeholder="Austin, TX"
          />
        </div>
        <div className="form-field">
          <label htmlFor="startDate">Start Date</label>
          <input
            onChange={props.onChange}
            value={props.state.jobStartDate}
            type="date"
            id="startDate"
          />
        </div>
        <div className="form-field end-date-field">
          <label className="end-date-label" htmlFor="endDate">
            End Date
          </label>
          <input
            className="end-date-input"
            onChange={props.onChange}
            value={props.state.jobEndDate}
            type="date"
            id="endDate"
          />
          <small className="end-date-instructions">
            {" "}
            (Put today's date if presently employed here.)
          </small>
        </div>
      </form>
    </div>
  );
};
// }

export default Experience;
