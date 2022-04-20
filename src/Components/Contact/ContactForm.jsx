import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import "./contact.css";

const ContactForm = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [message, setmessage] = useState("");

  const submitForm = () => {
    // e.preventDefault()
    Axios.post("https://pj-project.herokuapp.com/api/insert", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      message: message
    }).then(() => {
      console.log("succesful insert");
    });
  };

  return (
    <>
      <div className="main-con">
        <form onSubmit={submitForm} className="contact-container">
          <div className="firstAndlast">
            <h1 className="title">First Name</h1>
            <input
              required
              className="contact-input"
              type="text"
              name="firstName"
              placeholder="Peter"
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
            />
            <h1 className="title">Last Name</h1>
            <input
              required
              className="contact-input"
              type="text"
              name="lastName"
              placeholder="Parker"
              onChange={(e) => {
                setlastName(e.target.value);
              }}
            />
          </div>
          <h1 className="title">E-mail</h1>
          <input
            required
            className="contact-input"
            type="email"
            name="email"
            placeholder="myemail@gmail.com"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <h1 className="title">Phone Number</h1>
          <input
            required
            className="contact-input"
            type="tel"
            name="phoneNumber"
            placeholder="980-222-4423"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={(e) => {
              setphoneNumber(e.target.value);
            }}
          />
          <h1 className="title">Message</h1>
          <input
            required
            className="contact-input"
            type="text"
            name="message"
            placeholder="Feel Free To Send Us Feedback"
            onChange={(e) => {
              setmessage(e.target.value);
            }}
          />

          <button type="submit" className="Contact-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
