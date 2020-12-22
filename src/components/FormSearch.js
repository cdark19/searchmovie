import React, { useState, useEffect } from "react";
import { apiSearchMovie } from "../api/api";
import MovieList from "./MovieList";

import "../css/index.css";

const FormSearch = () => {
  //state
  const [movie, setMovie] = useState("");
  const [movieApi, setMovieApi] = useState(null);
  const [page, setPage] = useState(1);
  const [message, setMessage] = useState("");


  const handlerClick = (e) => {
    e.preventDefault();
    if (movie === "") {
    } else {
      apiSearchMovie(movie, page)
        .then((result) => {
          if (result.Error) {
            setMessage(result.Error);
            setMovie("");
            setMovieApi(null);
            clearMessage();
          } else {
            if (result.Response === "True") {
              setMovieApi(result.Search);
              setPage(1)
              setMessage("");
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
     if(movie){
      apiSearchMovie(movie, page)
      .then((result) => {
        if (result.Error) {
          setMessage(result.Error);
          setMovie("");
          setMovieApi(null);
          clearMessage();
        } else {
          if (result.Response === "True") {
            setMovieApi(result.Search);
            setMessage("");
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
     }
    // eslint-disable-next-line
  }, [page]);

  const clearMessage = () => {
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  //siguiente pagina
  const NextPage = () => {
    setPage(page + 1);
  };

  const PrevPage = () => {
    setPage(page - 1);
  };

  return (
    <>
      <div className="col-12 section1">
        <div className="box-1">
          <h1 className="title">Buscador de Peliculas</h1>
          <form onSubmit={handlerClick}>
          <div className="active-pink-3 active-pink-4 mb-4 buscar form-group">
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
            >
              Buscar
            </button>
          </div>
          </form>
        </div>

        <div className="box-2">
          {!movieApi ? (
            message ? (
              <div className="div-mensaje-error text-center">
                <p className="mensaje-error">Pelicula no encontrada</p>{" "}
              </div>
            ) : (
              <p className="text-form text-center">
                use el formulario para buscar su pelicula?
              </p>
            )
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="col-12 section2">
        {movieApi ? (
          <p className="badge bg-primary text-wrap font-weight-bold Page p2">Pagina: {page}</p>
        ) : null}
        {movieApi ? <MovieList movieApi={movieApi} /> : ""}
        <div className="d-flex justify-content-end pt-3">
        {movieApi ? (
          <p className="badge bg-primary text-wrap font-weight-bold Page p2">Pagina: {page}</p>
        ) : null}
        </div>

        {movieApi ? (
        <section className="container-button">
           {
             page>1? <button className="btn btn-primary m2" onClick={PrevPage}>
            prev
          </button> : null
           }
          <button className="btn btn-primary m-6" onClick={NextPage}>
            next
          </button>
        </section>
      ) : null}
      </div>

    </>
  );
};

export default FormSearch;
