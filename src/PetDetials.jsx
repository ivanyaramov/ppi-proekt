import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "./PetDetails.css"; // import the CSS file

function PetDetails() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await fetch("../pets.json");
        const pets = await response.json();
        const selectedPet = pets.find((pet) => pet.id === parseInt(id));
        setPet(selectedPet);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPet();
  }, [id]);

  if (!pet) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header />

      <div className="pet-details-container">
        <h2>{pet.name}</h2>
        <img src={pet.image} alt={pet.name} className="pet-image" />
        <div className="pet-info">
          <p>Species: {pet.species}</p>
          <p>Age: {pet.age} years old</p>
          <p>Price: ${pet.price}</p>
        </div>
        <p className="pet-description">{pet.description}</p>
      </div>
      <Footer />
    </div>
  );
}

export default PetDetails;
