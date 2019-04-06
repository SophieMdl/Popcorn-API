import { store } from './../store.js'

const actions = {
  loadMovies: movies => store.dispatch({ type: 'LOAD_MOVIES', movies }),
  changeCurrentMovie: movie => store.dispatch({ type: 'CHANGE_MOVIE', movie }),
  loadCurrentMovieData: values => store.dispatch({ type: 'UPDATE_MOVIE', values })
}

export default actions
