import { connect } from 'react-redux'
import { searchMovie } from '../modules/movies'

import Movies from '../components/Movies'

const mapDispatchToProps = {
  searchMovie
}

const mapStateToProps = (state) => ({
  movies : state.movies.movies,
  results : state.movies.results
})


export default connect(mapStateToProps, mapDispatchToProps)(Movies)
