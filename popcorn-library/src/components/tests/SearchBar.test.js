import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import SearchBar from '../SearchBar'

const moviesTitles = [
  'test', 'title2', 'title3'
]

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SearchBar moviesTitles={moviesTitles} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders SearchBar html', () => {
  const tree = renderer
    .create(<SearchBar moviesTitles={moviesTitles} searchText='title2' />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
