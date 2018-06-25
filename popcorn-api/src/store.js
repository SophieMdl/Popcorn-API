import { createStore } from 'redux'
import reducer from './reducers/index.js'

export const URL = {
  API_BASE: 'https://api.themoviedb.org/3/',
  API_KEY: 'api_key=5593440f574aba2b8f69c3e5d8ecd2fb',
  IMAGE_BASE: 'http://image.tmdb.org/t/p/w500/',
  YOUTUBE_BASE: 'https://www.youtube.com/embed/'
}

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
