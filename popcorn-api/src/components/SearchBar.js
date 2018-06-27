import React, { Component } from 'react'

class SearchBar extends Component {
    state = {
      searchText: ''
    }
    handleChange = event => {
      this.setState({ searchText: event.target.value })
    }
    handleOnClick = event => {
      this.props.searchMovie(this.state.searchText)
    }
    render () {
      return (
        <div className="row input-field">
          <input className="validate col s8" placeholder='search' onChange={this.handleChange} />
          <a className="waves-effect waves-light btn-small" onClick={this.handleOnClick}><i className="material-icons left">search</i></a>
        </div>
      )
    }
}

export default SearchBar
