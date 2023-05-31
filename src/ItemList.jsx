import React, { useState, useEffect } from "react";
import "./ItemList.css"; // import the CSS file for styling
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function PetList({ history }) {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState("None");
  const [selectedSortOrder, setSelectedSortOrder] = useState("Ascending");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const speciesOptions = [
    "None",
    "Dog",
    "Cat",
    "Hamster",
    "Rabbit",
    "Fish",
    "Turtle",
  ];
  const sortOptions = ["Price"];
  const sortOrderOptions = ["Ascending", "Descending"];

  useEffect(() => {
    fetch("items.json")
      .then((response) => response.json())
      .then((data) => {
        setPets(data);
        setFilteredPets(data);
      });
  }, []);

  const handleFilter = () => {
    if (selectedSpecies === "None") {
      setFilteredPets(pets);
    } else {
      const filteredPets = pets.filter(
        (pet) => pet.species === selectedSpecies
      );
      setFilteredPets(filteredPets);
      setCurrentPage(1);
    }
  };

  const handleSpeciesChange = (event) => {
    setSelectedSpecies(event.target.value);
  };

  const handleSort = () => {
    let sortedPets = [...filteredPets];
    sortedPets.sort((a, b) =>
      selectedSortOrder === "Ascending" ? a.price - b.price : b.price - a.price
    );

    setFilteredPets(sortedPets);
  };

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSelectedSortOrder(event.target.value);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleClick = (id) => {
    let url = `/item/${id}`;
    window.location.href = url;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPets.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <Header />

      <div className="pet-list">
        <h2>Our Available Items:</h2>

        <div className="filter">
          <div>
            <select value={selectedSpecies} onChange={handleSpeciesChange}>
              {speciesOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button className="filterButton" onClick={handleFilter}>
              Filter
            </button>
          </div>
          <div>
            <select value={selectedSortOrder} onChange={handleSortOrderChange}>
              {sortOrderOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button className="filterButton" onClick={handleSort}>
              Sort by price
            </button>
          </div>
        </div>

        <ul>
          {currentItems.map((pet) => (
            <div className="pet" key={pet.id}>
              <li onClick={() => handleClick(pet.id)}>
                <img src={pet.image} alt={pet.name} />
                <h3>Name: {pet.name}</h3>
                <p>Brand: {pet.Brand}</p>
                <p>Price: {pet.price}$</p>
              </li>
            </div>
          ))}
        </ul>

        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Prev
          </button>
          <button
            onClick={handleNextPage}
            disabled={indexOfLastItem >= filteredPets.length}
          >
            Next
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PetList;
