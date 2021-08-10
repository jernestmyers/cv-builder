import React, { Component } from "react";

// class Experience extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
const Experience = (props) => {
  return (
    <div>
      <h2>Work Experience</h2>
      <form>
        <div>
          <label htmlFor="position">Position</label>
          <input
            onChange={props.onChange}
            value={props.state.jobTitle}
            type="text"
            id="position"
            placeholder="Software Engineer"
          />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input
            onChange={props.onChange}
            value={props.state.company}
            type="text"
            id="company"
            placeholder="Best Company Ever"
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            onChange={props.onChange}
            value={props.state.jobLocation}
            type="text"
            id="location"
            placeholder="Austin, TX"
          />
        </div>
        <div>
          <label htmlFor="startDate">From</label>
          <input
            onChange={props.onChange}
            value={props.state.jobStartDate}
            type="date"
            id="startDate"
          />
        </div>
        <div>
          <label htmlFor="endDate">To</label>
          <input
            onChange={props.onChange}
            value={props.state.jobEndDate}
            type="date"
            id="endDate"
          />
          <small>(Leave blank if presently employed here.)</small>
        </div>
        <button>Delete Experience</button>
      </form>
    </div>
  );
};
// }

export default Experience;
