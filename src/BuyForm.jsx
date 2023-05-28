import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [showValidation, setShowValidation] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (firstName.trim() === "" || lastName.trim() === "") {
      setShowValidation(true);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setShowValidation(true);
      return;
    }
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Age:", age);
    // Send form data to server or do something else
  }

  function handleBuyNow() {
    setShowValidation(true);
  }

  const firstNameStyle =
    showValidation && firstName.trim() === "" ? { borderColor: "red" } : {};
  const lastNameStyle =
    showValidation && lastName.trim() === "" ? { borderColor: "red" } : {};

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          style={firstNameStyle}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          style={lastNameStyle}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          style={emailStyle}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
      <button type="button" onClick={handleBuyNow}>
        Buy Now!
      </button>
    </form>
  );
}
