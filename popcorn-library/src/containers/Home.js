import React from 'react'
import HomeMovie from '../components/HomeMovie.js'
import { MoviesGrid, H2Styled, ContentHome } from '../style/homeStyle.js'

const Home = ({ randomMovies, highRatedMovies }) => {
  return (
    <ContentHome>
      <H2Styled>Les mieux notés</H2Styled>
      <MoviesGrid>
        {highRatedMovies.map(movie => (
          <HomeMovie key={movie.id} movie={movie} />
        ))}
      </MoviesGrid>
      <H2Styled>Découvrez le catalogue</H2Styled>
      <MoviesGrid>
        {randomMovies.map(randomMovie => (
          <HomeMovie key={randomMovie.id} movie={randomMovie} />
        ))}
      </MoviesGrid>
    </ContentHome>
  )
}

export default Home
