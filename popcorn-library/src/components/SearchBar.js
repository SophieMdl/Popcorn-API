import React from 'react'
import { SearchBarStyled } from '../style/searchBarStyled.js'

const SearchBar = ({ moviesTitles, searchText, changeTextSearch, searchMovie }) => {
  return (
    <SearchBarStyled className="row input-field">
      <form onSubmit={(e) => { e.preventDefault(); searchMovie(searchText) }}>
        <input list="title-movie"
          placeholder='search'
          value={searchText || ''}
          className='col s8'
          onChange={(e) => changeTextSearch(e.target.value, e)}
        />
        <datalist id="title-movie">
          {moviesTitles.map((title, index) =>
            <option key={index} value={title} />
          )}
        </datalist>
        <button className="waves-effect waves-light btn-small">
          <i className="material-icons left">search</i>
        </button>
      </form>
    </SearchBarStyled>
  )
}

export default SearchBar
