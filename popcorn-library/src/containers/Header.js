import React from 'react'
import SearchBar from '../components/SearchBar.js'
import actions from '../actions/actions.js'

const Header = (props) => {
  return (
    <div>
      <h1>Popcorn Libary</h1>
      <SearchBar
        moviesTitles={props.moviesTitles}
        searchText={props.searchText}
        searchMovie={actions.searchMovie}
        changeTextSearch={actions.changeTextSearch}
      />
    </div>
  )
}

export default Header
