
import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------
const GET_MOVIES = 'GET_MOVIES'

// ------------------------------------
// Actions
// ------------------------------------
function getMovies(data) {
  return {
    type: GET_MOVIES,
    payload: data
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const searchMovie = (text) => {
  return (dispatch, getState) => {
    axios({
      method: 'GET',
      url: `https://itunes.apple.com/search?term=${text}&media=movie&country=MX`,
      headers: {
      }
    }).then((response) => {
      let moviesDTO = response.data
      dispatch(getMovies(moviesDTO))
    }).catch((error) => {
      console.log(error);
    })
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_MOVIES]: (state, action) => {
    return {
      movies: action.payload.results,
      results: action.payload.resultCount
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  movies: [],
  results: null
}
export default function movies (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
