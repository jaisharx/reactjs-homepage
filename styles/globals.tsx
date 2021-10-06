import { Global, css } from '@emotion/react'

const CSS = css` 
  // removing ugly chakra outlines
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    box-shadow: none;
    outline-color: transparent;
  }
  
`
export default function GlobalCSS() {
  return <Global styles={CSS} />
}
