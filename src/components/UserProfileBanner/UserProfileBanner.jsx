import React from 'react'
import { UserProfileHeader } from './UserProfileBannerStyle'
import SettingsIcon from '@mui/icons-material/Settings';

const UserProfileBanner = () => {
  return (
    <UserProfileHeader>
        <div className='userProfileBannerImg'>
            <div className='userProfileInfo'>
                <img src={require('../UI/pfp/anyapfp.jpg')} alt="Pfp de Anya test" id="userBannerPfp" />
            </div>
        </div>
    </UserProfileHeader>
  )
}

export default UserProfileBanner