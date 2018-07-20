import React from 'react'
import ReactDOM from 'react-dom'
import MovieListItem from '../MovieListItem'
import renderer from 'react-test-renderer'

const movie = {
  title: 'movie Title',
  poster_path: '/dACJtXkABwEBdX3FUrpHgJdlu9r.jpg'
}

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MovieListItem movie = {movie} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders MovieListItem html correctly', () => {
  const tree = renderer
    .create(<MovieListItem movie = {movie} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
