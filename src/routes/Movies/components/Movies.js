import React from 'react'
import FilmsImage from '../assets/Filmstext.png'
import './Movies.scss'
import MoviesList from './MoviesList'


import PropTypes from 'prop-types'

import { Col, Row, Button, Form, FormGroup, Input } from 'reactstrap';

class Movies extends React.Component {

  static propTypes = {
    // Functions
    searchMovie: PropTypes.func.isRequired,
    clearMoviesState: PropTypes.func.isRequired,

    movies: PropTypes.array,
    results: PropTypes.number,
    loadingMovies: PropTypes.bool
  }

  constructor (props) {
    super(props)
    this.onSearchMovie = this.onSearchMovie.bind(this)
  }

  componentWillUnmount(){
    this.props.clearMoviesState()
  }

  onSearchMovie (event) {
    event.preventDefault()
    let movieText = event.currentTarget['movie-text'].value
    console.log(movieText);
    if(movieText === ''){
      alert("Escribe pelicula a buscar");
     return false;
     }else{
       this.props.searchMovie(movieText)
       event.currentTarget['movie-text'].value = ""
     }
  }

  render() {
    return (
      <div>
      <img alt='This is all films!' className='title-films' src={FilmsImage} />
      <Form onSubmit={this.onSearchMovie} >
        <Row form>
          <Col md={12}>
            <FormGroup>
              <h3>Search movie...</h3>
            </FormGroup>
          </Col>
          <Col md={10}>
            <FormGroup>
              <Input type="text" name="movie-text" id="movie-text" placeholder="Movie..." />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Button color="secondary" type='submit' >Search</Button>{''}
            </FormGroup>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col md={12}>
        <MoviesList results={this.props.results} loadingMovies={this.props.loadingMovies} movies={this.props.movies}/>
        </Col>
      </Row>
    </div>
    )
  }
}

export default Movies