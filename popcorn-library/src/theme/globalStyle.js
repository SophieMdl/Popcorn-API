import { injectGlobal } from 'styled-components'
import { theme } from './darkTheme'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,700');
html{
    font-size: 62.5%;
    body {
    background-color : ${theme.bgColor};
    color : ${theme.fontColor};
    font-family : Poppins, sans-serif;
    font-size : 1.4rem;
  }
}
`
