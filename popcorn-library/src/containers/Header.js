import React from 'react'
import SearchBar from '../components/SearchBar.js'
import actions from '../actions/actions.js'
import Logo from '../components/Logo.js'
import { HeaderStyled } from '../style/headerStyle.js'

const Header = (props) => {
  return (
    <HeaderStyled>
      <Logo changeCurrentMovie={actions.changeCurrentMovie} />
      <SearchBar
        moviesTitles={props.moviesTitles}
        searchText={props.searchText}
        searchMovie={actions.searchMovie}
        changeTextSearch={actions.changeTextSearch}
      />
    </HeaderStyled>
  )
}

export default Header
