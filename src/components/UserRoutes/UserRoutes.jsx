import React from 'react'
import { UserRoutesContent } from './UserRoutesStyles'

const UserRoutes = () => {
  return (
    <UserRoutesContent>
        <div className='shouts'>
            <a href='#'>Shouts</a>
        </div>
        <div>
            <a href='#'>Comentarios</a>
        </div>
    </UserRoutesContent>     
  )
}

export default UserRoutes