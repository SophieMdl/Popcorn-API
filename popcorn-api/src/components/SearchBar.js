import React, { Component } from 'react'
import actions from '../actions/file'

class SearchBar extends Component {
    state = {
      searchText: '',
      placeHolder: 'Search'
    }
    handleChange = event => {
      this.setState({ searchText: event.target.value })
    }
    handleOnClick = event => {
      actions.searchMovie(this.state.searchText)
    }
    render () {
      return (
        <div className="row input-field">
          <input className="validate col s8" placeholder={this.state.placeHolder} onChange={this.handleChange} />
          <a className="waves-effect waves-light btn-small" onClick={this.handleOnClick}><i className="material-icons left">search</i></a>
        </div>
      )
    }
}

export default SearchBar
