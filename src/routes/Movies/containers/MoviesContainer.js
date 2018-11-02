import { connect } from 'react-redux'
import { searchMovie, clearMoviesState } from '../modules/movies'

import Movies from '../components/Movies'

const mapDispatchToProps = {
  searchMovie,
  clearMoviesState
}

const mapStateToProps = (state) => ({
  movies : state.movies.movies,
  results : state.movies.results,
  loadingMovies : state.movies.loadingMovies
})


export default connect(mapStateToProps, mapDispatchToProps)(Movies)
