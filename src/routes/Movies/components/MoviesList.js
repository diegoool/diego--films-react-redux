import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';

export const MoviesList = ({ movies, results, loadingMovies }) => {
  let moviesList = null

      if(
        // results !== null &&
        loadingMovies !== true
        ){
        moviesList = (
          <div>
            {/* <div>
              Total results:{results}
            </div> */}
          <Container>
          <Row>
              {movies.map(movie => {
                return (
                  <Col xs="6" sm="6" key={movie._id}>
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', width: 'auto' }}>
                      <CardImg src={movie.images.banner} alt={movie.title} />
                      <CardBody>
                        <CardTitle>{movie.title} - {movie.year}</CardTitle>
                        <CardSubtitle>{movie.synopsis}</CardSubtitle>
                        <CardText>{
                          movie.genres.map((genre,i) => <div key={i}>{genre}</div>)
                        }
                        </CardText>
                        {/* <CardLink href={movie.trackViewUrl}>Movie Link</CardLink>
                        <CardLink href={movie.previewUrl}>Preview</CardLink> */}
                      </CardBody>
                    </Card>
                  </Col>
                )}
              )}
          </Row>
        </Container>
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
