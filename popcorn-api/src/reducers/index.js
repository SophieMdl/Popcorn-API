const initialState = {
  moviesList: [],
  currentMovie: {},
  searchText : ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_MOVIES':
      return {
        moviesList: action.movies,
        currentMovie: action.movies[0]
      }
    case 'CHANGE_MOVIE':
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
    case 'CHANGE_TEXT_SEARCH':
      return {
        ...state,
        searchText: action.currentSearchText
      }
    case 'SEARCH_MOVIE':
      const searchedMovie = state.moviesList.find(m =>
        m.title === action.searchText
      )
      if (searchedMovie === undefined) return
      return {
        ...state,
        currentMovie: searchedMovie
      }
    default:
      return state
  }
}

export default reducer
