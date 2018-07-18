import React from 'react'

const SearchBar = ({searchText, changeTextSearch, searchMovie}) => {
  return (
    <div className="row input-field">
      <input className="validate col s8" placeholder='search' value = {searchText} onChange={(e) => changeTextSearch(e.target.value)} />
      <a className="waves-effect waves-light btn-small" onClick={() => searchMovie(searchText)}><i className="material-icons left">search</i></a>
    </div>
  )
}

export default SearchBar
