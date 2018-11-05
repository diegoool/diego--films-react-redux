import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Badge, Media } from 'reactstrap';
import YouTube from 'react-youtube';

import NoImage from '../assets/noImage.png'


export const MoviesList = ({ movies, results, loadingMovies }) => {
  let moviesList = null

  const opts = {
    height: '200',
    width: '270',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

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
                  <Col sm='12' xs='12' key={movie._id}  style={{ textAlign: 'left' }}>
                    <Media style={{ backgroundColor: '#333', borderColor: '#333', width: 'auto', padding:'25px' }}>
                    <Media left>
                      { Object.keys(movie.images).length !== 0 &&
                        <Media object src={movie.images.banner} alt={movie.title} style={{ width: '180px' }} />
                        ||
                        <Media object src={NoImage} alt={movie.title} style={{ width: '180px' }} />
                      }
                      </Media>
                      <Media body style={{ marginLeft:'20px', marginRight:'20px' }}>
                        <Media left heading>
                        {movie.title} - {movie.year}

                        </Media>
                        {movie.synopsis}
                        <br />
                          {
                            movie.genres.map((genre,i) => <Badge style={{ marginTop:'20px', marginLeft:'5px' }} color="success" key={i}>{genre}</Badge>)
                          }
                        </Media>
                        { movie.trailer !== null &&
                        <Media right>
                          <h5>Trailer</h5>
                          <YouTube videoId={movie.trailer.split('=')[1]} opts={opts}/>
                        </Media>
                         }
                    </Media>
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
