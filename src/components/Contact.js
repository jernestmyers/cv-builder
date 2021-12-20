const Contact = (props) => {
  return (
    <div id="contact-form-container">
      <h2>Personal Information</h2>
      <form id="contact-form">
        <div className="form-field">
          <label htmlFor="fullName">Full Name</label>
          <input
            onChange={props.onChange}
            value={props.state.fullName}
            type="text"
            id="fullName"
            placeholder="Ada Lovelace"
          />
        </div>
        <div className="form-field">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            onChange={props.onChange}
            value={props.state.phoneNumber}
            type="tel"
            id="phoneNumber"
            placeholder="(123) 456-7890"
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            onChange={props.onChange}
            value={props.state.email}
            type="email"
            id="email"
            placeholder="me@email.com"
          />
        </div>
        <div className="form-field">
          <label htmlFor="address">Mailing Address</label>
          <input
            onChange={props.onChange}
            value={props.state.address}
            type="text"
            id="address"
            placeholder="123 Main St, Austin, TX 76543"
          />
        </div>
        <div className="form-field">
          <label htmlFor="portfolio">Portfolio</label>
          <input
            onChange={props.onChange}
            value={props.state.portfolio}
            type="email"
            id="portfolio"
            placeholder="github.com/awesome-work"
          />
        </div>
        <div className="form-field">
          <label htmlFor="linkedIn">LinkedIn</label>
          <input
            onChange={props.onChange}
            value={props.state.linkedIn}
            type="url"
            id="linkedIn"
            placeholder="linkedin.com/in/adalovelace"
          />
        </div>
        <div className="form-field">
          <label id="about-me-label" htmlFor="aboutMe">
            Brief Description
          </label>
          <textarea
            onChange={props.onChange}
            value={props.state.aboutMe}
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
};

export default Contact;
