import React from 'react'
import logoImg from '../images/popcorn2.svg'
import { LogoStyled, H1Styled, ImgStyled } from '../style/headerStyle.js'

const Logo = ({ movie, changeCurrentMovie }) => {
  return (
    <LogoStyled onClick={() => changeCurrentMovie(undefined)}>
      <ImgStyled src={logoImg} alt='popcorn-library' />
      <H1Styled>Popcorn Libary</H1Styled>
    </LogoStyled>
  )
}

export default Logo
