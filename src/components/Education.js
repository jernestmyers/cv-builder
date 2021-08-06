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
          <div>
            <label htmlFor="institution">Institution</label>
            <input
              type="text"
              id="position"
              placeholder="ex: University of Florida or The Odin Project"
            />
          </div>
          <div>
            <label htmlFor="locationOfStudy">Location of Study</label>
            <input
              type="text"
              id="locationOfStudy"
              placeholder="Gainesville, FL or theodinproject.com"
            />
          </div>
          <div>
            <label htmlFor="attainment">Degree/Certification Attained</label>
            <input
              type="text"
              id="attainment"
              placeholder="B.S. Civil Engineering"
            />
          </div>
          <div>
            <label htmlFor="startDateEdu">From</label>
            <input type="date" id="startDateEdu" />
          </div>
          <div>
            <label htmlFor="endDateEdu">To</label>
            <input type="date" id="endDateEdu" />
            <small>(Leave blank if presently enrolled.)</small>
          </div>
          <button>Delete Education</button>
        </form>
      </div>
    );
  }
}

export default Education;
