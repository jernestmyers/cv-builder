// import React, { Component } from "react";

const Contact = (props) => {
  return (
    <div>
      <h2>Contact Information</h2>
      <form>
        <div>
          <label htmlFor="fullName">Name</label>
          <input
            onChange={props.onChange}
            value={props.state.fullName}
            type="text"
            id="fullName"
            placeholder="Ada Lovelace"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            onChange={props.onChange}
            value={props.state.phoneNumber}
            type="tel"
            id="phoneNumber"
            placeholder="123-456-7890"
          />
        </div>
        <div>
          <label htmlFor="address">Mailing Address</label>
          <input
            onChange={props.onChange}
            value={props.state.address}
            type="text"
            id="address"
            placeholder="123 Main St, Austin, TX 76543"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={props.onChange}
            value={props.state.email}
            type="email"
            id="email"
            placeholder="me@email.com"
          />
        </div>
        <div>
          <label htmlFor="portfolio">Portfolio</label>
          <input
            onChange={props.onChange}
            value={props.state.portfolio}
            type="email"
            id="portfolio"
            placeholder="github.com/awesome-work"
          />
        </div>
        <div>
          <label htmlFor="linkedIn">LinkedIn</label>
          <input
            onChange={props.onChange}
            value={props.state.linkedIn}
            type="url"
            id="linkedIn"
            placeholder="linkedin.com/in/adalovelace"
          />
        </div>
        <div>
          <label htmlFor="aboutMe">Brief Description</label>
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

// class Contact extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       contact: {
//         firstName: "",
//         lastName: "",
//         phoneNumber: "",
//         address: "",
//         email: "",
//         portfolio: "",
//         linkedIn: "",
//         aboutMe: "",
//       },
//       userInfo: [],
//     };

//     this.handleChange = this.handleChange.bind(this);
//     // this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e) {
//     // const targetInput = e.target.id;
//     // console.log(targetInput);
//     if (e.target.id === `firstName`) {
//       this.setState({
//         contact: {
//           firstName: e.target.value,
//           lastName: this.state.contact.lastName,
//           phoneNumber: this.state.contact.phoneNumber,
//           address: this.state.contact.address,
//           email: this.state.contact.email,
//           portfolio: this.state.contact.portfolio,
//           linkedIn: this.state.contact.linkedIn,
//           aboutMe: this.state.contact.aboutMe,
//         },
//       });
//     } else if (e.target.id === `lastName`) {
//       this.setState({
//         contact: {
//           firstName: this.state.contact.firstName,
//           lastName: e.target.value,
//           phoneNumber: this.state.contact.phoneNumber,
//           address: this.state.contact.address,
//           email: this.state.contact.email,
//           portfolio: this.state.contact.portfolio,
//           linkedIn: this.state.contact.linkedIn,
//           aboutMe: this.state.contact.aboutMe,
//         },
//       });
//     } else if (e.target.id === `phoneNumber`) {
//       this.setState({
//         contact: {
//           firstName: this.state.contact.firstName,
//           lastName: this.state.contact.lastName,
//           phoneNumber: e.target.value,
//           address: this.state.contact.address,
//           email: this.state.contact.email,
//           portfolio: this.state.contact.portfolio,
//           linkedIn: this.state.contact.linkedIn,
//           aboutMe: this.state.contact.aboutMe,
//         },
//       });
//     } else if (e.target.id === `address`) {
//       this.setState({
//         contact: {
//           firstName: this.state.contact.firstName,
//           lastName: this.state.contact.lastName,
//           phoneNumber: this.state.contact.phoneNumber,
//           address: e.target.value,
//           email: this.state.contact.email,
//           portfolio: this.state.contact.portfolio,
//           linkedIn: this.state.contact.linkedIn,
//           aboutMe: this.state.contact.aboutMe,
//         },
//       });
//     } else if (e.target.id === `email`) {
//       this.setState({
//         contact: {
//           firstName: this.state.contact.firstName,
//           lastName: this.state.contact.lastName,
//           phoneNumber: this.state.contact.phoneNumber,
//           address: this.state.contact.address,
//           email: e.target.value,
//           portfolio: this.state.contact.portfolio,
//           linkedIn: this.state.contact.linkedIn,
//           aboutMe: this.state.contact.aboutMe,
//         },
//       });
//     } else if (e.target.id === `portfolio`) {
//       this.setState({
//         contact: {
//           firstName: this.state.contact.firstName,
//           lastName: this.state.contact.lastName,
//           phoneNumber: this.state.contact.phoneNumber,
//           address: this.state.contact.address,
//           email: this.state.contact.email,
//           portfolio: e.target.value,
//           linkedIn: this.state.contact.linkedIn,
//           aboutMe: this.state.contact.aboutMe,
//         },
//       });
//     } else if (e.target.id === `linkedIn`) {
//       this.setState({
//         contact: {
//           firstName: this.state.contact.firstName,
//           lastName: this.state.contact.lastName,
//           phoneNumber: this.state.contact.phoneNumber,
//           address: this.state.contact.address,
//           email: this.state.contact.email,
//           portfolio: this.state.contact.portfolio,
//           linkedIn: e.target.value,
//           aboutMe: this.state.contact.aboutMe,
//         },
//       });
//     } else if (e.target.id === `aboutMe`) {
//       this.setState({
//         contact: {
//           firstName: this.state.contact.firstName,
//           lastName: this.state.contact.lastName,
//           phoneNumber: this.state.contact.phoneNumber,
//           address: this.state.contact.address,
//           email: this.state.contact.email,
//           portfolio: this.state.contact.portfolio,
//           linkedIn: this.state.contact.linkedIn,
//           aboutMe: e.target.value,
//         },
//       });
//     }
//     console.log(this.state.contact);
//   }

//   render() {
//     return (
//       <div>
//         <h2>Contact Information</h2>
//         <form>
//           <div>
//             <label htmlFor="firstName">First Name</label>
//             <input
//               onChange={this.handleChange}
//               value={this.state.contact.firstName}
//               type="text"
//               id="firstName"
//               placeholder="Ada"
//             />
//           </div>
//           <div>
//             <label htmlFor="lastName">Last Name</label>
//             <input
//               onChange={this.handleChange}
//               value={this.state.contact.lastName}
//               type="text"
//               id="lastName"
//               placeholder="Lovelace"
//             />
//           </div>
//           <div>
//             <label htmlFor="phoneNumber">Phone Number</label>
//             <input
//               onChange={this.handleChange}
//               value={this.state.contact.phoneNumber}
//               type="tel"
//               id="phoneNumber"
//               placeholder="123-456-7890"
//             />
//           </div>
//           <div>
//             <label htmlFor="address">Mailing Address</label>
//             <input
//               onChange={this.handleChange}
//               value={this.state.contact.address}
//               type="text"
//               id="address"
//               placeholder="123 Main St, Austin, TX 76543"
//             />
//           </div>
//           <div>
//             <label htmlFor="email">Email</label>
//             <input
//               onChange={this.handleChange}
//               value={this.state.contact.email}
//               type="email"
//               id="email"
//               placeholder="me@email.com"
//             />
//           </div>
//           <div>
//             <label htmlFor="portfolio">Portfolio</label>
//             <input
//               onChange={this.handleChange}
//               value={this.state.contact.portfolio}
//               type="email"
//               id="portfolio"
//               placeholder="github.com/awesome-work"
//             />
//           </div>
//           <div>
//             <label htmlFor="linkedIn">LinkedIn</label>
//             <input
//               onChange={this.handleChange}
//               value={this.state.contact.linkedIn}
//               type="url"
//               id="linkedIn"
//               placeholder="linkedin.com/in/adalovelace"
//             />
//           </div>
//           <div>
//             <label htmlFor="aboutMe">Brief Description</label>
//             <textarea
//               onChange={this.handleChange}
//               value={this.state.contact.aboutMe}
//               id="aboutMe"
//               rows="5"
//               cols="50"
//               placeholder="Ada Lovelace published the first algorithm intended to be carried out by a
//               machine. As a result, she is often regarded as the first computer programmer."
//             ></textarea>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default Contact;
