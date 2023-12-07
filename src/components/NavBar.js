import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#popular">Popular Movies</a></li>
        <li><a href="#top-rated">Top Rated Movies</a></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default NavBar;
