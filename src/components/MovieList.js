import React from 'react';
import Movie from '../components/Movie'

const MovieList=({movieApi})=>{

    return(
        <div className="MovieList">
         {
            movieApi.map( movie =>{
                return(
                    
                    <Movie
                    key={movie.imdbID}
                      id={movie.imdbID}
                      title={movie.Title}
                      year={movie.Year}
                      poster={movie.Poster}
                    />
                    
                )
            })
         }
        </div>
    )
}

export default MovieList