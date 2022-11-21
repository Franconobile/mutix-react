import React from 'react'
import { UserProfileBioContainer } from './UserProfileBioStyle'



const UserProfileBio = () => {
  return (
    <UserProfileBioContainer>
        <div className='userBioAbout'>
            <h2>Acerca de mí</h2>
        </div>
        <div className='userBioContent'>
            <p>Fundador de Mutix y adicto a la pepsi</p>
            <p>24 años, y tambien dibujo CUANDO ME PINTA 🤫</p>
        </div>
    </UserProfileBioContainer>
  )
}

export default UserProfileBio