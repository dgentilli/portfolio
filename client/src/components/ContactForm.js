import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSent: false,
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      userMessage: ""
    };
    //Binding form event listeners
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  //HandleInputChange Method
  handleInputChange(e) {
    //console.log("input detected");
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    //Prevent page from refreshing
    e.preventDefault();

    //Create a variable to store the data entered by user
    const data = JSON.stringify({
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      subject: this.state.subject,
      message: this.state.message
    });
    console.log("POST req to /api/send ", data);
    //POST send user data to node-SendGrid endpoint

    fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: data
    }).then(res => {
      const resBody = res.json();
      //console.log("Reponse: ", responseData);
      Promise.resolve(resBody).then(message => {
        let userMessage;
        message.success === true
          ? (userMessage =
              "Thank you for your message! I will get back to you soon.")
          : (userMessage = "Something went wrong. Please try again.");
        //console.log("message: " + userMessage);
        this.setState({ userMessage: userMessage });
      });
    });
  }

  render() {
    return [
      <div className="contact-form-wrapper">
        <form id="contact-form" onSubmit={this.handleSubmit}>
          <h2>Get in touch!</h2>

          <input
            id="cf-name"
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name..."
            required="true"
            onChange={this.handleInputChange}
          />
          <input
            id="cf-email"
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Email Address..."
            required="true"
            onChange={this.handleInputChange}
          />
          <input
            id="cf-phone"
            type="text"
            name="phone"
            value={this.state.phone}
            placeholder="Phone Number..."
            onChange={this.handleInputChange}
          />
          <input
            id="cf-subject"
            type="text"
            name="subject"
            value={this.state.subject}
            placeholder="Subject..."
            onChange={this.handleInputChange}
          />
          <textarea
            id="cf-message"
            type="text"
            name="message"
            placeholder="Message..."
            required="true"
            onChange={this.handleInputChange}
          ></textarea>

          <input id="cf-submit" type="submit" value="Send" />
        </form>
        <p>{this.state.userMessage}</p>
      </div>
    ];
  }
}

export default ContactForm;
