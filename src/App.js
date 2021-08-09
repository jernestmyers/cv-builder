import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Preview from "./components/Preview";
import { Component } from "react";

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
      userInfo: [],
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
            <div>
              <Experience />
              <button>Add Experience</button>
            </div>
            <div>
              <Education />
              <button>Add Education</button>
            </div>
          </div>
          <div className="previewOfCV">
            {/* <h3>this will be the live preview</h3> */}
            <Preview contact={this.state.contact} />
            <button>Generate PDF</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
