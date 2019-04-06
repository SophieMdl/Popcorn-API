import React from 'react'
import { SearchBarStyled } from '../style/searchBarStyled.js'
import { URL } from './../url'

class SearchBar extends React.Component {
  state = {
    searchText: ''
  }

  changeTextSearch = e => {
    this.setState({
      searchText: e.target.value
    })
  }

  searchMovie = () => {
    const { searchText } = this.state
    const { currentMovie } = this.props
    const searchUrl = `${URL.API_BASE}search/movie?${
      URL.API_KEY
    }&language=fr-FR&query=${searchText}`
    console.log('searchUrl', searchUrl)
    fetch(searchUrl)
      .then(res => res.json())
      .then(data => {
        if (data.total_results === 0) return
        const searchResult = data.results[0]
        if (currentMovie && searchResult.title === currentMovie.title) return
        this.props.changeCurrentMovie(searchResult)
      })
  }

  render() {
    return (
      <SearchBarStyled className="row input-field">
        <form
          onSubmit={e => {
            e.preventDefault()
            this.searchMovie()
          }}
        >
          <input
            list="title-movie"
            placeholder="search"
            value={this.state.searchText || ''}
            className="col s8"
            onChange={e => this.changeTextSearch(e)}
          />
          <button className="waves-effect waves-light btn-small">
            <i className="material-icons left">search</i>
          </button>
        </form>
      </SearchBarStyled>
    )
  }
}

export default SearchBar
