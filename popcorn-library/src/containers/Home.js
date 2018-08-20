import React from 'react'
import RandomMovie from '../components/RandomMovie.js'
import { MoviesGrid, H2Styled } from '../style/homeStyled.js'

const Home = ({ randomMovies }) => {
  return (
    <div>
      <H2Styled>Random Movies</H2Styled>
      <MoviesGrid>
        {randomMovies.map(randomMovie =>
          <RandomMovie key={randomMovie.id} movie={randomMovie} />
        )}
      </MoviesGrid>
    </div>
  )
}

export default Home
