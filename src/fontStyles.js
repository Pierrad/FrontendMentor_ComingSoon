import { createGlobalStyle } from "styled-components"
import JosefinSansRegular from './fonts/JosefinSansRegular.woff2'
import JosefinSansBold from './fonts/JosefinSansBold.woff2'

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'JosefinSansRegular';
    src: url(${JosefinSansRegular}) format('woff2')
  }
  @font-face {
    font-family: 'JosefinSansBold';
    src: url(${JosefinSansBold}) format('woff2')
  }
`

export default FontStyles
