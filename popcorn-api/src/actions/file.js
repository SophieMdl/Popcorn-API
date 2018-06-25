import { store, URL } from './../store.js'

const actions = {
  loadMovies: movies => store.dispatch({ type: 'LOAD_MOVIES', movies }),
  changeCurrentMovie: movie => store.dispatch({ type: 'CHANGE_MOVIE', movie }),
  applyVideoToCurrentMovie: youtubeKey => store.dispatch({ type: 'APPLY_VIDEO', youtubeKey }),
  searchMovie: searchText => store.dispatch({ type: 'SEARCH_MOVIE', searchText }),
  getVideoKey: (currentMovie) => {
    fetch(`${URL.API_BASE}movie/${currentMovie.id}?language=fr&include_adult=false&${URL.API_KEY}&append_to_response=videos`)
      .then(res => res.json())
      .then(data => {
        if (data.videos.results[0]) {
          const youtubeKey = data.videos.results[0].key
          actions.applyVideoToCurrentMovie(youtubeKey)
        }
      })
  }
}

export default actions
