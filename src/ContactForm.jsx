import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "./ContactForm.css";

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    telephone: false,
  });
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await fetch("../items.json");
        const pets = await response.json();
        const selectedPet = pets.find((pet) => pet.id === parseInt(id));
        setPet(selectedPet);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPet();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstNameError = firstName.trim() === "";
    const lastNameError = lastName.trim() === "";
    const emailError = !isValidEmail(email);
    const telephoneError = !isValidTelephone(telephone);

    setErrors({
      firstName: firstNameError,
      lastName: lastNameError,
      email: emailError,
      telephone: telephoneError,
    });

    if (!firstNameError && !lastNameError && !emailError && !telephoneError) {
    }
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const isValidTelephone = (value) => {
    const telephoneRegex = /^\d{10}$/;
    return telephoneRegex.test(value);
  };
  if (!pet) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header />
      <div className="formDiv">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className={`form-group ${errors.firstName ? "has-error" : ""}`}>
            <label htmlFor="firstName" className="label">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="input"
            />
            {errors.firstName && (
              <span className="error-message">
                Please enter your first name
              </span>
            )}
          </div>

          <div className={`form-group ${errors.lastName ? "has-error" : ""}`}>
            <label htmlFor="lastName" className="label">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="input"
            />
            {errors.lastName && (
              <span className="error-message">Please enter your last name</span>
            )}
          </div>

          <div className={`form-group ${errors.email ? "has-error" : ""}`}>
            <label htmlFor="email" className="label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
            {errors.email && (
              <span className="error-message">
                Please enter a valid email address
              </span>
            )}
          </div>

          <div className={`form-group ${errors.telephone ? "has-error" : ""}`}>
            <label htmlFor="telephone" className="label">
              Telephone:
            </label>
            <input
              type="tel"
              id="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="input"
            />
            {errors.telephone && (
              <span className="error-message">
                Please enter a valid telephone number (10 digits)
              </span>
            )}
          </div>
          <div className="confirmation-message">
            <strong>
              Are you sure you would like to buy the{" "}
              <strong>{pet.Package}</strong> package of{" "}
              <strong>{pet.Brand}</strong> {pet.name}?
            </strong>
          </div>
          <div className="submitDiv">
            <button type="submit" className="submit-button">
              Buy Now!
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactForm;
