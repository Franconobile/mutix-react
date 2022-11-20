import React from 'react'
import { createGlobalStyle } from 'styled-components'
import MainPost from '../components/MainPost/MainPost'

const GlobalStyle = createGlobalStyle`
body {
  background: #121416;
}
`

const Home = () => {
  return (
    <>
        <GlobalStyle/>
        <MainPost />
    </>
  )
}

export default Home