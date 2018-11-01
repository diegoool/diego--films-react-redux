import React from 'react'
import FilmsImage from '../assets/Filmstext.png'
import './Movies.scss'


import PropTypes from 'prop-types'

import { Col, Row, Button, Form, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';

class Movies extends React.Component {

  static propTypes = {
    // Functions searchMovie
    searchMovie: PropTypes.func.isRequired,

    movies: PropTypes.array,
    results: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.onSearchMovie = this.onSearchMovie.bind(this)
  }

  onSearchMovie (event) {
    event.preventDefault()
    let movieText = event.currentTarget['movie-text'].value
    console.log(movieText);
    this.props.searchMovie(movieText)
    // .then(() => {
    //   this.props.errorClear()
    // })
    // .catch(() => {
    //   console.log('Catch')
    // })
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
        {this.props.results !== null  &&
        <div>
          <div>
          Total results:{this.props.results}
          </div>
          <div>
          {this.props.movies.map(movie => {
            return (
              <div key={movie.trackId}>
                {movie.trackName}
              </div>
            )}
          )}
          </div>
        </div>
        }
        </Col>
      </Row>
    </div>
    )
  }
}

export default Movies