import "../styles/experience-style.css";
import { format } from "date-fns";

const DisplayExperience = (props) => {
  const formatDate = (dateSelected) => {
    if (dateSelected) {
      const inputDate = dateSelected;
      const today = format(new Date(), "yyyy-MM-dd");
      const year = +inputDate.substring(0, 4);
      const month = +inputDate.substring(5, 7) - 1;
      const day = +inputDate.substring(8, 10);
      if (today !== inputDate) {
        return format(new Date(year, month, day), "MMM yyyy");
      } else {
        return `Present`;
      }
    }
  };

  return (
    <div id="experience-static-container">
      {props.state.map((job, index) => {
        return (
          <div className="display-experience-container" key={index}>
            <div className="date-container">
              {formatDate(job.jobStartDate)} to {formatDate(job.jobEndDate)}
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
