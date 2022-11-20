import React from 'react'
import { TopbarWrapper } from './Topbarstyle'
import HelpIcon from '@mui/icons-material/Help';

const Topbar = () => {
  return (
    <TopbarWrapper>
        <span>#Home</span>
        <HelpIcon style={{color:'#B5B4C3', background: 'none', fontSize: '25px'}}></HelpIcon>
    </TopbarWrapper>
  )
}

export default Topbar