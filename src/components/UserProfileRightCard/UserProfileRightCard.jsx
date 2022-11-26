import React from 'react'
import styled from 'styled-components'
import UserFollowers from '../UserFollowers/UserFollowers'
import UserSharedPics from '../UserSharedPics/UserSharedPics'

const UserProfileRightCardContainer = styled.div`
display: flex;
flex-direction: column;
position: relative;
left: 60px;
`

const UserProfileRightCard = () => {
  return (
    <UserProfileRightCardContainer>
        <UserFollowers></UserFollowers>
        <UserSharedPics></UserSharedPics>
    </UserProfileRightCardContainer>
  )
}

export default UserProfileRightCard