import React, { useState } from "react";

const MovieCard = ({ movie }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>

      <div>
        <button onClick={handlePlayToggle}>
          {isPlaying ? "Pause Trailer" : "Play Trailer"}
        </button>
        {isPlaying && (
          <video
            controls
            width="100%"
            height="100%"
            src={movie.trailer} // Provide the URL to the movie trailer
            type="video/mp4"
          />
        )}
      </div>
    </div>
  );
};

export default MovieCard;
