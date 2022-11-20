import React from 'react'
import { UserElements, LeftbarWrapper, TopElements } from './Leftbarstyle';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';


const Leftbar = () => {
  return (
    <LeftbarWrapper>
      <TopElements>
        <Link to="/">
          <HomeIcon style={{color:'#B5B4C3', background: 'none', fontSize: '35px'}}/>
        </Link>
        <Link to="/login">
          <ExploreIcon style={{color:'#B5B4C3', background: 'none', fontSize: '35px'}}/>
        </Link>
      </TopElements>
      <UserElements>
        <Link>
          <NotificationsIcon style={{color:'#B5B4C3', background: 'none', fontSize: '35px'}}/>
        </Link>
        <Link>
          <PersonIcon style={{color:'#B5B4C3', background: 'none', fontSize: '35px'}}/>
        </Link>
          
          <img src={require('../UI/pfp/anyapfp.jpg')} id="pfp" alt="Logo"/>
      </UserElements>
    </LeftbarWrapper>
  )
}

export default Leftbar;