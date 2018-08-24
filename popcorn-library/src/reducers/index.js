const initialState = {
  moviesList: [],
  currentMovie: undefined,
  moviesTitle: [],
  searchText: '',
  randomMovies: [],
  highRatedMovies: [],
  recommendedMovies: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_MOVIES':
      const moviesList = action.movies
      const moviesTitle = []
      const randomMovies = []
      const bestSort = (a, b) => {
        return b.vote_average - a.vote_average
      }
      const highRatedMovies = moviesList.sort(bestSort).slice(0, 5)
      for (let i = 0; randomMovies.length < 5; i++) {
        const n = Math.floor(Math.random() * moviesList.length)
        if (!randomMovies.some(m => m.id === moviesList[n].id) && !highRatedMovies.some(m => m.id === moviesList[n].id)) {
          randomMovies.push(moviesList[n])
        }
      }
      for (let movie of action.movies) {
        moviesTitle.push(movie.title)
      }
      return {
        ...state,
        moviesList: action.movies,
        moviesTitle: moviesTitle,
        randomMovies: randomMovies,
        highRatedMovies: highRatedMovies
      }
    case 'CHANGE_MOVIE':
      return {
        ...state,
        currentMovie: action.movie
      }
    case 'UPDATE_MOVIE':
      const youtubeKey = action.values[0].key
      const recommendedMovies = action.values[1].splice(0, 5)
      return {
        ...state,
        currentMovie: { ...state.currentMovie, youtubeKey },
        recommendedMovies: recommendedMovies
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
