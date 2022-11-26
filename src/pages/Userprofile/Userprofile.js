import React from "react"
import styled from "styled-components"
import { GlobalStyle } from "../Home"
import UserProfileBanner from "../../components/UserProfileBanner/UserProfileBanner"
import UserProfileFeed from "../../components/UserProfileFeed/UserProfileFeed"
import UserProfileBio from "../../components/UserProfileBio/UserProfileBio"
import UserRoutes from "../../components/UserRoutes/UserRoutes"
import UserFollowers from "../../components/UserFollowers/UserFollowers"
import UserProfileRightCard from "../../components/UserProfileRightCard/UserProfileRightCard"
import UserProfileContent from "../../components/UserProfileContent/UserProfileContent"

const UserProfileContainer = styled.div`
display: flex;
`

const Userprofile = () => {
  return (
    <>
          <GlobalStyle />
          <UserProfileBanner />
          <UserProfileBio />
          <UserProfileContainer>
            <UserProfileContent />
            <UserProfileRightCard />
          </UserProfileContainer>
    </>
  )
}

export default Userprofile