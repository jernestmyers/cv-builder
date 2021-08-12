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
            <div className="btns-container">
              <button
                className="modify-btns edit-btn edit-experience"
                data-id={job.id}
                onClick={props.handleModifications}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-edit-3 modify-icons"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </button>
              <button
                className="modify-btns del-experience"
                data-id={job.id}
                onClick={props.handleModifications}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-trash-2 modify-icons"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayExperience;
