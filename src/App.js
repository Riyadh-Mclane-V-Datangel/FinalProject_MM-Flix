import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <NavBar />
      <div className="header">
        <h1>MM-Flix</h1>
        <div className="buttons">
          <button onClick={() => handleSearch("")}>Clear Search</button>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
      <MovieList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
