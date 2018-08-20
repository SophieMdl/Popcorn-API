const initialState = {
  moviesList: [],
  currentMovie: undefined,
  moviesTitle: [],
  searchText: '',
  randomMovies: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_MOVIES':
      const moviesTitle = []
      const randomMovies = []
      for (let i = 0; randomMovies.length < 10; i++) {
        const n = Math.floor(Math.random() * action.movies.length)
        if (!randomMovies.some(m => m.id === action.movies[n].id)) {
          randomMovies.push(action.movies[n])
        }
      }
      for (let movie of action.movies) {
        moviesTitle.push(movie.title)
      }
      return {
        // moviesList: action.movies,
        // currentMovie: action.movies[0],
        moviesTitle: moviesTitle,
        randomMovies: randomMovies
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
      console.log(action.e)
      return {
        ...state,
        currentMovie: searchedMovie
      }
    default:
      return state
  }
}

export default reducer
