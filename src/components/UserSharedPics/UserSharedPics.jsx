import React from 'react'
import { UserSharedPicsContainer } from './UserSharedPicsStyle'

const UserSharedPics = () => {
  return (
    <UserSharedPicsContainer>
        <div className='userSharedPicsHeader'>
            <h3>Contenido multimedia</h3>
        </div>
        <div className='userSharedPicsBody'>
            <img src={require('../UI/UserPics/1.gif')} className='userSharedPic' alt="" />
            <img src={require('../UI/UserPics/2.gif')} className='userSharedPic' alt="" />
            <img src={require('../UI/UserPics/3.png')} className='userSharedPic' alt="" />
            <img src={require('../UI/UserPics/4.jpg')} className='userSharedPic' alt="" />
            <div className='viewMorePics'>
              <button>Ver más</button>
            </div>
        </div>
    </UserSharedPicsContainer>
  )
}

export default UserSharedPics