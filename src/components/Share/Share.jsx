import React from 'react'
import { ContentUploadContainer, ContentUploadContent, Attachments } from './ShareStyle'
import anyapfp from '../UI/pfp/anyapfp.jpg'
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import SendIcon from '@mui/icons-material/Send';


const Share = () => {
  return (
    <ContentUploadContainer>
        <ContentUploadContent>
            <img src={`${anyapfp}`} className='profileImg' alt="Foto de perfil"/>
            {/* <input type="text" className='contentWriting' placeholder='Compartite algo...'/> */}
            <span className='contentWriting' placeholder="Comparte algo..." onInput="if(this.innerHTML.trim()==='<br>')this.innerHTML=''" contentEditable="true" role="textbox" ></span>
        </ContentUploadContent>
        <Attachments>
            <ImageIcon className='icons'/>
            <YouTubeIcon className='icons'/>
            <InsertLinkIcon className='icons'/>
            <div className='btnLast'>
              <button><SendIcon style={{background: 'none'}}/></button>
            </div>
        </Attachments>
    </ContentUploadContainer>
  )
}

export default Share