import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'movies',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Movies = require('./containers/MoviesContainer').default
      const reducer = require('./modules/movies').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'movies', reducer })

      /*  Return getComponent   */
      cb(null, Movies)

    /* Webpack named bundle   */
    }, 'movies')
  }
})
