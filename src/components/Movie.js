import React from "react";
import "../css/index.css";
import { Link } from "react-router-dom";
const Movie = ({ title, year, poster, id }) => {
  return (
    <>
      <div className="card card-movie m2">
        <Link to={`/Details/${id}`}>
          <img src={poster} className="card-img-top imagen-card" alt={title} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{year}</p>
        </div>
      </div>
    </>
  );
};

export default Movie;
