import React from 'react'
import { UserProfileHeader } from './UserProfileBannerStyle'
import SettingsIcon from '@mui/icons-material/Settings';

const UserProfileBanner = () => {
  return (
    <UserProfileHeader>
        <div className='userProfileBannerImg'>
            <div className='userProfileInfo'>
                <img src={require('../UI/pfp/anyapfp.jpg')} id="userBannerPfp" alt="Logo"/>
                <p>@Sakku</p>
                <div className='userProfileStats'>
                    <div className='userCounter'>
                        <p>10</p>
                        <span>Shouts</span>
                    </div>
                    <div className='userCounter'>
                        <p>134</p>
                        <span>Seguidores</span>
                    </div>
                    <div className='userCounter'>
                        <p>134</p>
                        <span>Siguiendo</span>
                    </div>
                        <SettingsIcon style={{color: '#929292', position: 'relative', top: '10px', fontSize: '30px'}}/>
                </div>
            </div>
        </div>
    </UserProfileHeader>
  )
}

export default UserProfileBanner