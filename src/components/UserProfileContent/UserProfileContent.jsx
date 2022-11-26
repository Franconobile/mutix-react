import React from 'react'
import UserRoutes from '../UserRoutes/UserRoutes'
import UserProfileFeed from '../UserProfileFeed/UserProfileFeed'
import { UserProfileContainerMain } from './UserProfileContentStyle'

const UserProfileContent = () => {
  return (
    <UserProfileContainerMain>
        <UserRoutes />
        <UserProfileFeed />
        <UserProfileFeed />
        <UserProfileFeed />
        <UserProfileFeed />
    </UserProfileContainerMain>
  )
}

export default UserProfileContent;