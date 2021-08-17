import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Preview from "./components/Preview";
import { HandlePdfState } from "./components/RenderPDF";
import React, { Component } from "react";
import uniqid from "uniqid";
import { compareDesc } from "date-fns";

function createDateObject(dateSelected) {
  const inputDate = dateSelected;
  const year = +inputDate.substring(0, 4);
  const month = +inputDate.substring(5, 7) - 1;
  const day = +inputDate.substring(8, 10);
  return new Date(year, month, day);
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      contact: {
        fullName: "",
        phoneNumber: "",
        address: "",
        email: "",
        portfolio: "",
        linkedIn: "",
        aboutMe: "",
      },
      experience: {
        id: uniqid(),
        jobTitle: "",
        company: "",
        jobLocation: "",
        jobStartDate: "",
        jobEndDate: "",
      },
      userExperience: [],
      education: {
        id: uniqid(),
        institution: "",
        eduLocation: "",
        attainment: "",
        eduStartDate: "",
        eduEndDate: "",
      },
      userEducation: [],
    };
  }

  handleContactChange = (e) => {
    if (e.target.id === `fullName`) {
      this.setState({
        contact: {
          fullName: e.target.value,
          phoneNumber: this.state.contact.phoneNumber,
          address: this.state.contact.address,
          email: this.state.contact.email,
          portfolio: this.state.contact.portfolio,
          linkedIn: this.state.contact.linkedIn,
          aboutMe: this.state.contact.aboutMe,
        },
      });
    } else if (e.target.id === `phoneNumber`) {
      this.setState({
        contact: {
          fullName: this.state.contact.fullName,
          phoneNumber: e.target.value,
          address: this.state.contact.address,
          email: this.state.contact.email,
          portfolio: this.state.contact.portfolio,
          linkedIn: this.state.contact.linkedIn,
          aboutMe: this.state.contact.aboutMe,
        },
      });
    } else if (e.target.id === `address`) {
      this.setState({
        contact: {
          fullName: this.state.contact.fullName,
          phoneNumber: this.state.contact.phoneNumber,
          address: e.target.value,
          email: this.state.contact.email,
          portfolio: this.state.contact.portfolio,
          linkedIn: this.state.contact.linkedIn,
          aboutMe: this.state.contact.aboutMe,
        },
      });
    } else if (e.target.id === `email`) {
      this.setState({
        contact: {
          fullName: this.state.contact.fullName,
          phoneNumber: this.state.contact.phoneNumber,
          address: this.state.contact.address,
          email: e.target.value,
          portfolio: this.state.contact.portfolio,
          linkedIn: this.state.contact.linkedIn,
          aboutMe: this.state.contact.aboutMe,
        },
      });
    } else if (e.target.id === `portfolio`) {
      this.setState({
        contact: {
          fullName: this.state.contact.fullName,
          phoneNumber: this.state.contact.phoneNumber,
          address: this.state.contact.address,
          email: this.state.contact.email,
          portfolio: e.target.value,
          linkedIn: this.state.contact.linkedIn,
          aboutMe: this.state.contact.aboutMe,
        },
      });
    } else if (e.target.id === `linkedIn`) {
      this.setState({
        contact: {
          fullName: this.state.contact.fullName,
          phoneNumber: this.state.contact.phoneNumber,
          address: this.state.contact.address,
          email: this.state.contact.email,
          portfolio: this.state.contact.portfolio,
          linkedIn: e.target.value,
          aboutMe: this.state.contact.aboutMe,
        },
      });
    } else if (e.target.id === `aboutMe`) {
      this.setState({
        contact: {
          fullName: this.state.contact.fullName,
          phoneNumber: this.state.contact.phoneNumber,
          address: this.state.contact.address,
          email: this.state.contact.email,
          portfolio: this.state.contact.portfolio,
          linkedIn: this.state.contact.linkedIn,
          aboutMe: e.target.value,
        },
      });
    }
  };

  handleExperienceChange = (e) => {
    if (e.target.id === `position`) {
      this.setState({
        experience: {
          id: this.state.experience.id,
          jobTitle: e.target.value,
          company: this.state.experience.company,
          jobLocation: this.state.experience.jobLocation,
          jobStartDate: this.state.experience.jobStartDate,
          jobEndDate: this.state.experience.jobEndDate,
        },
      });
    } else if (e.target.id === `company`) {
      this.setState({
        experience: {
          id: this.state.experience.id,
          jobTitle: this.state.experience.jobTitle,
          company: e.target.value,
          jobLocation: this.state.experience.jobLocation,
          jobStartDate: this.state.experience.jobStartDate,
          jobEndDate: this.state.experience.jobEndDate,
        },
      });
    } else if (e.target.id === `location`) {
      this.setState({
        experience: {
          id: this.state.experience.id,
          jobTitle: this.state.experience.jobTitle,
          company: this.state.experience.company,
          jobLocation: e.target.value,
          jobStartDate: this.state.experience.jobStartDate,
          jobEndDate: this.state.experience.jobEndDate,
        },
      });
    } else if (e.target.id === `startDate`) {
      this.setState({
        experience: {
          id: this.state.experience.id,
          jobTitle: this.state.experience.jobTitle,
          company: this.state.experience.company,
          jobLocation: this.state.experience.jobLocation,
          jobStartDate: e.target.value,
          jobEndDate: this.state.experience.jobEndDate,
        },
      });
    } else if (e.target.id === `endDate`) {
      this.setState({
        experience: {
          id: this.state.experience.id,
          jobTitle: this.state.experience.jobTitle,
          company: this.state.experience.company,
          jobLocation: this.state.experience.jobLocation,
          jobStartDate: this.state.experience.jobStartDate,
          jobEndDate: e.target.value,
        },
      });
    }
  };

  handleEducationChange = (e) => {
    if (e.target.id === `institution`) {
      this.setState({
        education: {
          id: this.state.education.id,
          institution: e.target.value,
          eduLocation: this.state.education.eduLocation,
          attainment: this.state.education.attainment,
          eduStartDate: this.state.education.eduStartDate,
          eduEndDate: this.state.education.eduEndDate,
        },
      });
    } else if (e.target.id === `eduLocation`) {
      this.setState({
        education: {
          id: this.state.education.id,
          institution: this.state.education.institution,
          eduLocation: e.target.value,
          attainment: this.state.education.attainment,
          eduStartDate: this.state.education.eduStartDate,
          eduEndDate: this.state.education.eduEndDate,
        },
      });
    } else if (e.target.id === `attainment`) {
      this.setState({
        education: {
          id: this.state.education.id,
          institution: this.state.education.institution,
          eduLocation: this.state.education.eduLocation,
          attainment: e.target.value,
          eduStartDate: this.state.education.eduStartDate,
          eduEndDate: this.state.education.eduEndDate,
        },
      });
    } else if (e.target.id === `eduStartDate`) {
      this.setState({
        education: {
          id: this.state.education.id,
          institution: this.state.education.institution,
          eduLocation: this.state.education.eduLocation,
          attainment: this.state.education.attainment,
          eduStartDate: e.target.value,
          eduEndDate: this.state.education.eduEndDate,
        },
      });
    } else if (e.target.id === `eduEndDate`) {
      this.setState({
        education: {
          id: this.state.education.id,
          institution: this.state.education.institution,
          eduLocation: this.state.education.eduLocation,
          attainment: this.state.education.attainment,
          eduStartDate: this.state.education.eduStartDate,
          eduEndDate: e.target.value,
        },
      });
    }
  };

  handleAddExperience = (e) => {
    e.preventDefault();
    let isValid = true;
    const validateExperienceForm = () => {
      for (const info in this.state.experience) {
        if (!this.state.experience[info]) {
          isValid = false;
        }
      }
    };
    validateExperienceForm();

    if (isValid) {
      this.setState({
        // userExperience: this.state.userExperience.concat(this.state.experience),
        userExperience: this.state.userExperience
          .concat(this.state.experience)
          .map((job) => {
            return job;
          })
          .sort((a, b) => {
            return compareDesc(
              createDateObject(a.jobEndDate),
              createDateObject(b.jobEndDate)
            );
          }),
      });
      // console.log(this.state.userExperience);

      this.setState({
        experience: {
          id: uniqid(),
          jobTitle: "",
          company: "",
          jobLocation: "",
          jobStartDate: "",
          jobEndDate: "",
        },
      });
      document.querySelector(`#add-exp-btn`).textContent = `Add Experience`;
    }
  };

  handleAddEducation = (e) => {
    e.preventDefault();
    let isValid = true;
    const validateForm = () => {
      for (const info in this.state.education) {
        if (!this.state.education[info]) {
          isValid = false;
        }
      }
    };
    validateForm();
    if (isValid) {
      this.setState({
        // userEducation: this.state.userEducation.concat(this.state.education),
        userEducation: this.state.userEducation
          .concat(this.state.education)
          .map((edu) => {
            return edu;
          })
          .sort((a, b) => {
            return compareDesc(
              createDateObject(a.eduEndDate),
              createDateObject(b.eduEndDate)
            );
          }),
      });

      this.setState({
        education: {
          id: uniqid(),
          institution: "",
          eduLocation: "",
          attainment: "",
          eduStartDate: "",
          eduEndDate: "",
        },
      });
      document.querySelector(`#add-edu-btn`).textContent = `Add Education`;
    }
  };

  handleModifications = (e) => {
    e.preventDefault();
    const selectedBtnClassNames = e.target.closest(`button`).className;
    const selectedID = e.target.closest(`button`).dataset.id;
    // handles editing and deleting experience objects in CV
    if (selectedBtnClassNames.includes(`experience`)) {
      if (selectedBtnClassNames.includes(`edit`)) {
        document.querySelector(`#add-exp-btn`).textContent = `Confirm Edits`;
        // eslint-disable-next-line
        this.state.userExperience.filter((job) => {
          if (job.id === selectedID) {
            this.setState({
              experience: {
                id: job.id,
                jobTitle: job.jobTitle,
                company: job.company,
                jobLocation: job.jobLocation,
                jobStartDate: job.jobStartDate,
                jobEndDate: job.jobEndDate,
              },
            });
          }
        });
      }
      this.setState({
        // eslint-disable-next-line
        userExperience: this.state.userExperience.filter((job) => {
          if (job.id !== selectedID) {
            return job;
          }
        }),
      });
    }
    // handles editing and deleting education objects in CV
    if (selectedBtnClassNames.includes(`education`)) {
      if (selectedBtnClassNames.includes(`edit`)) {
        document.querySelector(`#add-edu-btn`).textContent = `Confirm Edits`;
        // eslint-disable-next-line
        this.state.userEducation.filter((edu) => {
          if (edu.id === selectedID) {
            this.setState({
              education: {
                id: edu.id,
                institution: edu.institution,
                eduLocation: edu.eduLocation,
                attainment: edu.attainment,
                eduStartDate: edu.eduStartDate,
                eduEndDate: edu.eduEndDate,
              },
            });
          }
        });
      }
      this.setState({
        // eslint-disable-next-line
        userEducation: this.state.userEducation.filter((edu) => {
          if (edu.id !== selectedID) {
            return edu;
          }
        }),
      });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <div className="mainDisplay">
          <div className="inputFields">
            <Contact
              state={this.state.contact}
              onChange={this.handleContactChange}
            />
            <div id="experience-container">
              <Experience
                state={this.state.experience}
                onChange={this.handleExperienceChange}
              />
              <button id="add-exp-btn" onClick={this.handleAddExperience}>
                Add Experience
              </button>
            </div>
            <div>
              <Education
                state={this.state.education}
                onChange={this.handleEducationChange}
              />
              <button id="add-edu-btn" onClick={this.handleAddEducation}>
                Add Education
              </button>
            </div>
          </div>
          <div>
            <h2>Live Preview</h2>
            <div className="previewOfCV">
              <Preview
                contact={this.state.contact}
                experience={this.state.experience}
                education={this.state.education}
                userExperience={this.state.userExperience}
                userEducation={this.state.userEducation}
                handleModifications={this.handleModifications}
              />
              <HandlePdfState state={this.state}></HandlePdfState>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
