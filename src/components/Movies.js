import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
      <h1>Movies Page</h1>
      {
        movies.map((movie, index)=>(
          <div key={index}>
            <h3>{movie.title} | <small>{movie.time} mins</small></h3>
            <ul>
              {
                movie.genres.map((genre,index)=>(<li key={index} >{genre}</li>))
              }
            </ul>
          </div>
        ))
      }
    </div>;
}

export default Movies;
