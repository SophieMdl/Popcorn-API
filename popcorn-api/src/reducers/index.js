import actions from './../actions/file.js'

const initialState = {
  moviesList: [],
  currentMovie: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_MOVIES':
      return {
        moviesList: action.movies,
        currentMovie: action.movies[0]
      }
    case 'CHANGE_MOVIE':
      actions.getVideoKey(action.movie)
      return {
        ...state,
        currentMovie: action.movie
      }
    case 'APPLY_VIDEO':
      const youtubeKey = action.youtubeKey
      return {
        ...state,
        currentMovie: { ...state.currentMovie, youtubeKey }
      }
    case 'SEARCH_MOVIE':
      const searchedMovie = state.moviesList.find(m =>
        m.title === action.searchText
      )
      actions.getVideoKey(searchedMovie)
      return {
        ...state,
        currentMovie: searchedMovie
      }
    default:
      return state
  }
}

export default reducer
