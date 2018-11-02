import React from 'react'
import PropTypes from 'prop-types'

export const MoviesList = ({ movies, results, loadingMovies }) => {
  let moviesList = null

      if(results !== null && loadingMovies !== true){
        moviesList = (
          <div>
            <div>
              Total results:{results}
            </div>
            <ul>
              {movies.map(movie => {
                return (
                  <li key={movie.trackId}>
                    {movie.trackName}
                  </li>
                )}
              )}
            </ul>
          </div>
        )
      } else if(loadingMovies !== false){
        moviesList = (
        <div>
          Loading...
        </div>
        )
      }

    return (
      <div>
        {moviesList}
      </div>
    )
}

MoviesList.propTypes = {
  movies: PropTypes.array,
  results: PropTypes.number,
  loadingMovies: PropTypes.bool
}

export default MoviesList
