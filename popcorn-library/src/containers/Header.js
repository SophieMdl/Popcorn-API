import React from 'react'
import { HeaderStyled, LogoStyled, H1Styled, ImgStyled } from '../style/headerStyle.js'
import SearchBar from '../components/SearchBar.js'
import actions from '../actions/actions.js'
import logoImg from '../images/popcorn2.svg'

const Header = (props) => {
  return (
    <HeaderStyled>
      <LogoStyled>
        <ImgStyled src={logoImg} alt='popcorn-library' />
        <H1Styled>Popcorn Libary</H1Styled>
      </LogoStyled>
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
