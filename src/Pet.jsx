import React from "react";
import "./Pet.css";

function Pet({ pet }) {
  return (
    <div className="pet">
      <img src={pet.imageUrl} alt={pet.name} />
      <h3>{pet.name}</h3>
      <p>{pet.description}</p>
    </div>
  );
}

export default Pet;
