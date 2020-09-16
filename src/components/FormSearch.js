import React, { useState} from "react";
import { apiSearchMovie } from "../api/api";
import MovieList from "./MovieList";

import "../css/index.css";

const FormSearch = () => {
  //state
  const [movie, setMovie] = useState("");
  const [movieApi, setMovieApi] = useState(null);
  const [message, setMessage]= useState('')
  


  const handlerClick = (e) => {
    e.preventDefault();
    if(movie===''){
      
    }else{
    apiSearchMovie(movie)
      .then((result) => {
          if(result.Error){
            console.log(result.Error)
            setMessage(result.Error)
            setMovieApi(null)
          }
          else{
              if(result.Response ==='True'){
                setMovieApi(result.Search)
                setMessage('')
              }
          }
        
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <div className="active-pink-3 active-pink-4 mb-4 buscar">
            <input
              className="form-control mr-3"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={movie}
              onChange={(e) => setMovie(([e.target.name] = e.target.value))}
            />
            <button
              type="submit"
              className="btn btn-outline-info button-search my-sm-0"
              onClick={handlerClick}
            >
              Search
            </button>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center">
        
          {
            (!movieApi? (message? <div className="div-mensaje-error text-center"><p className="mensaje-error">{message}</p> </div>
            : <p className="text-form text-center">use the form to search for a movie?</p>) : '' )

          }
       
       
        </div> 
      </div>

      <div className="row">
        <div className="col-12 caja2">
             {
                 movieApi ? <MovieList movieApi={movieApi} /> : ''
             }
        </div>
      </div>
    </>
  );
};

export default FormSearch;
