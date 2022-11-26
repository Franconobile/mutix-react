import React from 'react'
import { UserFollowersContent } from './UserFollowersStyle'

const UserFollowers = () => {
  return (
    <UserFollowersContent>
        <div className='userFollowersCardHeader'>
            <h3>Seguidores</h3>
            <span>(6)</span>
        </div>
        <div className='userFollowersBody'>
            <img src={require('../UI/pfp/kobenipfp.jpg')} className='userFollowerPfp' />
            <img src={require('../UI/pfp/pfp2.jpg')} className='userFollowerPfp' />
            <img src={require('../UI/pfp/superidolpfp.jpg')} className='userFollowerPfp' />
            <img src={require('../UI/pfp/ayudantesantapfp.jpg')} className='userFollowerPfp' />
            <img src={require('../UI/pfp/melodypfp.jpg')} className='userFollowerPfp' />
            <img src={require('../UI/pfp/ayudantesantapfp.jpg')} className='userFollowerPfp' />
            <div className='viewMoreFollowers'>
                <a href="">Ver más</a>
                <a href="">Ver seguidos</a>
            </div>
        </div>
    </UserFollowersContent>
  )
}

export default UserFollowers