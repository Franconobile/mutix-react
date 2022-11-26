import React from 'react'
import { PostContainer, SubPostContainer } from './UserProfileFeedStyle'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import RepeatIcon from '@mui/icons-material/Repeat';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import anyapfp from '../UI/pfp/anyapfp.jpg'
import post1 from '../UI/post/post1.jpg'

const UserProfileFeed = () => {
  return (
    <PostContainer>
    <SubPostContainer>
        <div className='cardHeader'>
            <img src={`${anyapfp}`} className="PostPfp" alt="Profile pic en post" />
                <div className='userAndDate'>
                    <span className='userInfo'>
                        <a href='#'>Sakku</a>
                    </span>
                    <small className='dateInfo'>
                        <a href='#'>Hace 5 minutos</a>
                    </small>
                </div>
        </div>
        <div className='cardBody'>
            <p>
                Hola mundo. Tengo que seguir experimentando más funciones!
            </p>
        </div>
        <div className='cardFooter'>
            <QuestionAnswerIcon className='footerIcons'/>
            <RepeatIcon className='footerIcons'/>
            <div className='reactionsPost'>
                <AddReactionIcon className='footerIcons'/>
            </div>
        </div>
    </SubPostContainer>
    </PostContainer>

  )
}

export default UserProfileFeed