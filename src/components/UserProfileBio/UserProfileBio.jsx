import React from 'react'
import { UserProfileBioContainer } from './UserProfileBioStyle'



const UserProfileBio = () => {
  return (
    <UserProfileBioContainer>
        <div className='userBioUsername'>
            <h3>@Sakku</h3>
        </div>
        <div className='userBioContent'>
            <p>Fundador de Mutix y adicto a la pepsi
            <br/>
            24 años, y tambien dibujo CUANDO ME PINTA 🤫
            <br/>
            También escribo biografías largas al pedo para testear
            </p>
        </div>
    </UserProfileBioContainer>
  )
}

export default UserProfileBio