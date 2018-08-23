import { injectGlobal } from 'styled-components'
import { darkTheme } from './darkTheme'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,700');
html{
    font-size: 62.5%;
    body {
    background-color : ${darkTheme.bgColor || null};
    color : ${darkTheme.fontColor || '#000000'};
    font-family : Poppins, sans-serif;
    font-size : 1.4rem;
  }
}
`
