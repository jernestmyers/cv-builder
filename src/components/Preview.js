import "../styles/contact-style.css";
import DisplayExperience from "./DisplayExperience";
import DisplayEducation from "./DisplayEducation";
import { formatDate } from "../utils/dateHelpers";

const Preview = (props) => {
  const emailHref = `mailto:${props.contact.email}`;

  // formats phone number for use as href
  const reg = /^\d+$/;
  const phoneNumber = [];
  // eslint-disable-next-line
  Array.from(props.contact.phoneNumber).map((character) => {
    if (reg.test(character)) {
      phoneNumber.push(character);
    }
  });
  const formattedPhoneNumber = phoneNumber.toString().replaceAll(`,`, ``);
  const phoneHref = `tel:${formattedPhoneNumber}`;

  return (
    <div>
      <div id="contact-preview-container">
        <p id="display-name">{props.contact.fullName}</p>
        <p id="display-number">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-phone contact-icons"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <a href={phoneHref}>{props.contact.phoneNumber}</a>
        </p>
        <p id="display-address">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-map-pin contact-icons"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          {props.contact.address}
        </p>
        <p id="display-email">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-mail contact-icons"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <a href={emailHref}>{props.contact.email}</a>
        </p>
        <p id="display-portfolio">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-link contact-icons"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
          <a href={props.contact.portfolio} rel="noreferrer" target="_blank">
            {props.contact.portfolio}
          </a>
        </p>
        <p id="display-linkedIn">
          <svg
            className="contact-icons"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>LinkedIn</title>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          <a href={props.contact.linkedIn} rel="noreferrer" target="_blank">
            {props.contact.linkedIn}
          </a>
        </p>
        <div id="display-aboutMe-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-info contact-icons"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <p id="display-aboutMe">{props.contact.aboutMe}</p>
        </div>
      </div>
      <div id="experience-preview-container">
        <h3 id="experience-header">Professional Experience</h3>
        <LivePreviewExperience state={props.experience}></LivePreviewExperience>
        <DisplayExperience
          state={props.userExperience}
          handleModifications={props.handleModifications}
        />
      </div>
      <div id="edu-preview-container">
        <h3 id="edu-header">Education</h3>
        <LivePreviewEducation state={props.education}></LivePreviewEducation>
        <DisplayEducation
          state={props.userEducation}
          handleModifications={props.handleModifications}
        />
      </div>
    </div>
  );
};

const LivePreviewExperience = (props) => {
  if (
    props.state.jobTitle ||
    props.state.company ||
    props.state.jobLocation ||
    props.state.jobStartDate ||
    props.state.jobEndDate
  ) {
    return (
      <div className="display-experience-container">
        <div className="date-container">
          {formatDate(props.state.jobStartDate)} to{" "}
          {formatDate(props.state.jobEndDate)}
        </div>
        <div className="company-info-container">
          <p className="display-position">{props.state.jobTitle}</p>
          <p className="display-company-info">
            {props.state.company} | {props.state.jobLocation}
          </p>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const LivePreviewEducation = (props) => {
  if (
    props.state.eduLocation ||
    props.state.eduStartDate ||
    props.state.eduEndDate ||
    props.state.institution ||
    props.state.attainment
  ) {
    return (
      <div className="display-education-container">
        <div className="date-container">
          {formatDate(props.state.eduStartDate)} to{" "}
          {formatDate(props.state.eduEndDate)}
        </div>
        <div>
          <p className="display-institution-info">
            <span className="display-institution">
              {props.state.institution}
            </span>{" "}
            | {props.state.eduLocation}
          </p>
          <p>{props.state.attainment}</p>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Preview;
