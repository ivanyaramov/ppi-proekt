import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <div>
          <button onClick={() => (window.location.href = "/")}>Pets</button>
        </div>
        <div>
          <button onClick={() => (window.location.href = "/items")}>
            Items
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
