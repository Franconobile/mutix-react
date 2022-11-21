import React from 'react'
import { PostContainer, SubPostContainer, cardFooter } from './Poststyle'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import RepeatIcon from '@mui/icons-material/Repeat';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import pfp2 from '../UI/pfp/pfp2.jpg'
import post1 from '../UI/post/post1.jpg'

const Post = () => {
  return (
    <PostContainer>
        <SubPostContainer>
            <div className='cardHeader'>
                <img src={`${pfp2}`} className="PostPfp" alt="Profile pic en post" />
                    <div className='userAndDate'>
                        <span className='userInfo'>
                            <a href='#'>Usuario1</a>
                        </span>
                        <small className='dateInfo'>
                            <a href='#'>Hace 5 minutos</a>
                        </small>
                    </div>
            </div>
            <div className='cardBody'>
                <p>
                    Hola estoy usando Mutix! y lo comparto con un fanart de Makima (◕‿◕✿)
                </p>
                <img src={`${post1}`} className='postImage' alt="Imagen posteada" />
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

export default Post