import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Poppins:300,500,700', 'sans-serif']
  }
})

ReactDOM.render(<App />, document.getElementById('root'))
