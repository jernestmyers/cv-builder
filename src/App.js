import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Preview from "./components/Preview";
import DisplayExperience from "./components/DisplayExperience";
import { Component } from "react";
import uniqid from "uniqid";

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
    // console.log(this.state.contact);
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
    // console.log(this.state.experience);
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
        userExperience: this.state.userExperience.concat(this.state.experience),
      });
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
    console.log(this.state.userExperience);
    // console.log(this.state.userExperience.length);
  };

  handleModifications = (e) => {
    e.preventDefault();
    const selectedBtnClassNames = e.target.closest(`button`).className;
    const selectedID = e.target.closest(`button`).dataset.id;
    console.log(selectedBtnClassNames);
    if (selectedBtnClassNames.includes(`experience`)) {
      // handles editing items in CV
      if (selectedBtnClassNames.includes(`edit`)) {
        document.querySelector(`#add-exp-btn`).textContent = `Confirm Edits`;
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
      // handles deleting items from CV
      this.setState({
        userExperience: this.state.userExperience.filter((job) => {
          if (job.id !== selectedID) {
            return job;
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
              <Education />
              <button>Add Education</button>
            </div>
          </div>
          <div>
            <h2>Live Preview</h2>
            <div className="previewOfCV">
              <Preview
                contact={this.state.contact}
                experience={this.state.experience}
              />
              <DisplayExperience
                state={this.state.userExperience}
                handleModifications={this.handleModifications}
              />
              <button>Generate PDF</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
