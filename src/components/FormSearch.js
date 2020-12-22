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
            setMessage(result.Error)
            setMovie('')
            setMovieApi(null)
            clearMessage()
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

  const clearMessage=()=>{
    setTimeout( ()=>{
      setMessage('')

    }, 2000)
  }

  return (
    <>
      <div className="col-12 section1">
        <div className="box-1">
          <h1 className="title">Buscador de Peliculas</h1>
          <div className="active-pink-3 active-pink-4 mb-4 buscar">
            <input
              className="form-control mr-3"
              type="text"
              placeholder="Buscar Pelicula"
              aria-label="Search"
              value={movie}
              onChange={(e) => setMovie(([e.target.name] = e.target.value))}
            />
            <button
              type="submit"
              className="btn btn-outline-info button-search my-sm-0"
              onClick={handlerClick}
            >
              Buscar
            </button>
          </div>
        </div>


        <div className="box-2">
          {
            (!movieApi? (message? <div className="div-mensaje-error text-center"><p className="mensaje-error">Pelicula no encontrada</p> </div>
            : <p className="text-form text-center">use el formulario para buscar su pelicula?</p>) : '' )
          }
        </div> 


      </div>

      <div className="col-12 section2">
             {
                 movieApi ? <MovieList movieApi={movieApi} /> : ''
           }
      </div>
    </>
  );
};

export default FormSearch;
