
import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------
const GET_MOVIES = 'GET_MOVIES'
const ON_LOADING_MOVIES = 'ON_LOADING_MOVIES'
const OFF_LOADING_MOVIES = 'OFF_LOADING_MOVIES'
const MOVIES_INITIAL_STATE = 'MOVIES_INITIAL_STATE'

// ------------------------------------
// Actions
// ------------------------------------

export const clearMoviesState = () => {
  return {
    type: MOVIES_INITIAL_STATE
  }
}

function getMovies(data) {
  return {
    type: GET_MOVIES,
    payload: data
  }
}

function onLoadingMovies() {
  return {
    type: ON_LOADING_MOVIES
  }
}

function offLoadingMovies() {
  return {
    type: OFF_LOADING_MOVIES
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const searchMovie = (text) => {
  return (dispatch, getState) => {

    dispatch(onLoadingMovies())
    
    axios({
      method: 'GET',
      //url: `https://itunes.apple.com/search?term=${text}&media=movie&country=MX`,
      url: `https://cors-anywhere.herokuapp.com/https://tv-v2.api-fetch.website/movies/1?sort=last%20added&order=1&keywords=${text}`,
      headers: {
      }
    }).then((response) => {
      // let moviesDTO = response.data
      let moviesArray = response.data
      console.log(moviesArray)
      dispatch(getMovies(moviesArray))
      dispatch(offLoadingMovies())
    }).catch((error) => {
      console.log(error);
      dispatch(offLoadingMovies())
    })
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_MOVIES]: (state, action) => {
    return {
      ...state,
      movies: action.payload
      // ,      results: action.payload.resultCount
    }
  },
  [ON_LOADING_MOVIES]: (state, action) => {
    return {
      ...state,
      loadingMovies: true
    }
  },
  [OFF_LOADING_MOVIES]: (state, action) => {
    return {
      ...state,
      loadingMovies: false
    }
  },
  [MOVIES_INITIAL_STATE]: (state, action) => {
    return {
      ...initialState
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  movies: [],
  results: null,
  loadingMovies: false
}
export default function movies (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
