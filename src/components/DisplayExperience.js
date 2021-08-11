const DisplayExperience = (props) => {
  console.log(props);
  return (
    <div id="experience-preview-container">
      {props.state.map((job, index) => {
        return (
          <div key={index}>
            <p id="display-position">{job.jobTitle}</p>
            <p id="display-company">{job.company}</p>
            <p id="display-location">{job.jobLocation}</p>
            <p id="display-startDate">{job.jobStartDate}</p>
            <p id="display-endDate">{job.jobEndDate}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayExperience;
