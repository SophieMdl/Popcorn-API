import { store } from './../store.js'

const actions = {
  loadMovies: movies => store.dispatch({ type: 'LOAD_MOVIES', movies }),
  changeCurrentMovie: movie => store.dispatch({ type: 'CHANGE_MOVIE', movie }),
  loadCurrentMovieData: (values) => store.dispatch({ type: 'UPDATE_MOVIE', values }),
  changeTextSearch: currentSearchText => store.dispatch({ type: 'CHANGE_TEXT_SEARCH', currentSearchText }),
  searchMovie: searchText => store.dispatch({ type: 'SEARCH_MOVIE', searchText })
}

export default actions
