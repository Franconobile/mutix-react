import React from 'react'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import CardRightTop from '../components/CardRightTop/CardRightTop'
import MainPost from '../components/MainPost/MainPost'

export const GlobalStyle = createGlobalStyle`
body {
  background: #121416;
}
`
const HomeContainer = styled.div`
display: flex;
`

const Home = () => {
  return (
    <>
        <GlobalStyle/>
        <HomeContainer>
          <MainPost />
          <CardRightTop/>
        </HomeContainer>
    </>
  )
}

export default Home