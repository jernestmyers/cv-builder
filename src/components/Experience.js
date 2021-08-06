import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Work Experience</h2>
        <form>
          <div>
            <label htmlFor="position">Position</label>
            <input type="text" id="position" placeholder="Software Engineer" />
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input type="text" id="company" placeholder="Best Company Ever" />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input type="text" id="location" placeholder="Austin, TX" />
          </div>
          <div>
            <label htmlFor="startDate">From</label>
            <input type="date" id="startDate" />
          </div>
          <div>
            <label htmlFor="endDate">To</label>
            <input type="date" id="endDate" />
            <small>(Leave blank if presently employed here.)</small>
          </div>
          <button>Delete Experience</button>
        </form>
      </div>
    );
  }
}

export default Experience;
