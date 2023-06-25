import { createGlobalStyle } from 'styled-components'
// import img from './assets/body-bg.png'
//import phageRough from './assets/fonts/phageRough.otf'
import phageRegular from './assets/fonts/phageRegular.otf'

const GlobalStyle = createGlobalStyle`
 @font-face {
  font-family: Phage ;
  src: url(${phageRegular}) format("opentype");
 }
 html{
   scroll-behavior: smooth;
   -webkit-font-smoothing: antialiased;
 }
 *, *::after, *::before{
   padding: 0;
   margin: 0;
   box-sizing: border-box;
 }
  body {
  /* background: #1c1c1c; */
  background:#2b2b2b;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-attachment: fixed;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
 }
  
`

export default GlobalStyle
