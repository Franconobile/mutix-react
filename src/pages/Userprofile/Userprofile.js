import React from "react"
import styled from "styled-components"
import { GlobalStyle } from "../Home"
import UserProfileBanner from "../../components/UserProfileBanner/UserProfileBanner"
import UserProfileFeed from "../../components/UserProfileFeed/UserProfileFeed"
import UserProfileBio from "../../components/UserProfileBio/UserProfileBio"

const UserProfileContent = styled.div`
display: flex;
`

const Userprofile = () => {
  return (
    <>
          <GlobalStyle />
          <UserProfileBanner />
          <UserProfileContent>
            <UserProfileFeed></UserProfileFeed>
            <UserProfileBio></UserProfileBio>
          </UserProfileContent>
    </>
  )
}

export default Userprofile