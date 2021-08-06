import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Contact Information</h2>
        <form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="Ada" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Lovelace" />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id="phoneNumber" placeholder="123-456-7890" />
          </div>
          <div>
            <label htmlFor="address">Mailing Address</label>
            <input
              type="text"
              id="address"
              placeholder="1234 Main St, Austin, TX 76543"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="me@email.com" />
          </div>
          <div>
            <label htmlFor="portfolio">Portfolio</label>
            <input
              type="email"
              id="portfolio"
              placeholder="github.com/awesome-work"
            />
          </div>
          <div>
            <label htmlFor="linkedIn">LinkedIn</label>
            <input
              type="url"
              id="linkedIn"
              placeholder="linkedin.com/in/adalovelace"
            />
          </div>
          <div>
            <label htmlFor="aboutMe">Brief Description</label>
            <textarea
              id="aboutMe"
              rows="5"
              cols="50"
              placeholder="Ada Lovelace published the first algorithm intended to be carried out by a
              machine. As a result, she is often regarded as the first computer programmer."
            ></textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
