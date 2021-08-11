import "../styles/experience-style.css";

const DisplayExperience = (props) => {
  console.log(props);
  return (
    <div id="experience-static-container">
      {props.state.map((job, index) => {
        return (
          <div className="display-experience-container" key={index}>
            <div className="date-container">
              {job.jobStartDate} to {job.jobEndDate}
            </div>
            <div className="company-info-container">
              <p className="display-position">{job.jobTitle}</p>
              <p className="display-company-info">
                {job.company} | {job.jobLocation}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayExperience;
