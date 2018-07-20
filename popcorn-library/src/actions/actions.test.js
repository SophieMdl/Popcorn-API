const SEARCH_MOVIE = 'SEARCH_MOVIE'

const SearchMovie = searchText => ({
  type: SEARCH_MOVIE,
  searchText
})

describe('search movie', () => {
  it('should return the searchText', () => {
    const expected = {
      type: SEARCH_MOVIE,
      searchText: 'azedd'
    }
    expect(SearchMovie('azedd')).toEqual(expected)
  })
})
