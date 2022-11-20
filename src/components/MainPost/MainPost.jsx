import React from 'react'
import Share from '../Share/Share'
import Post from '../Posts/Post'
import { MainPostContainer } from './MainPostStyle'




const MainPost = () => {
  return (
    <MainPostContainer>
        <Share />
        <Post />
    </MainPostContainer>
  )
}

export default MainPost