import React from 'react'
import { CardRightContainer } from './CardRightTopStyle'
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import FavoriteIcon from '@mui/icons-material/Favorite';
import kobenipfp from '../UI/pfp/kobenipfp.jpg'
import superidolpfp from '../UI/pfp/superidolpfp.jpg'
import melodypfp from '../UI/pfp/melodypfp.jpg'

const CardRightTop = () => {
  return (
    <CardRightContainer>
        <div className='cardRightHeader'>
            <h3>Mutuals recomendados</h3>
        </div>
        <div className='cardRightBody'>
            <div className='profile1'>
                <img src={`${kobenipfp}`} className='cardRightPfp' />
                <div className='profileInfo'>
                    <a href="">Scared Kobeni</a>
                    <span>@Usuario2</span>
                </div>
                <div className='btnRightCard'>
                    <button>Seguir</button>
                </div>
            </div>
            <div className='profile2'>
                <img src={`${superidolpfp}`} className='cardRightPfp' />
                <div className='profileInfo'>
                    <a href="">Super Idol</a>
                    <span>@Usuario3</span>
                </div>
                <div className='btnRightCard'>
                    <button>Seguir</button>
                </div>
            </div>
            <div className='profile3'>
                <img src={`${melodypfp}`} className='cardRightPfp' />
                <div className='profileInfo'>
                    <a href="">Miss Anonymous</a>
                    <span>@Usuaria4</span>
                </div>
                <div className='btnRightCard'>
                    <button>Seguir</button>
                </div>
            </div>
            <div className='viewMore'>
                <a href="#">Mostrar más...</a>
            </div>
        </div>
        <div className='cardRightFooter'>
            <div className='cardRightFooterLinks'>
                <a href="">Reglas del sitio</a>
                <a href="">FAQ</a>
            </div>
            <button className='buttonkofi' ><a href="https://ko-fi.com/sakku" target='_blank'><FreeBreakfastIcon/>Buy Me a Coffee</a></button>
            <small>Hecho con mucho <FavoriteIcon style={{fontSize: '16px'}}/></small>
        </div>
    </CardRightContainer>
  )
}

export default CardRightTop