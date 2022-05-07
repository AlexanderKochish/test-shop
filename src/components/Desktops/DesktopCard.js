import React from 'react'
import { useDispatch } from 'react-redux'
import {TiShoppingCart} from 'react-icons/ti'
import { addDesktop } from '../../store/phoneSlice'
import './DesktopCard.css'

const DesktopCard = ({desktop}) => {
  const dispatch = useDispatch()

  return (
    <div className='desktop__card'>
    <img className='desktop__img' src={desktop.image} alt={desktop.title}/>
      <div className='desktop__title'>
          <h3>{desktop.title}</h3>
          <p>{desktop.overview}</p>
            <div className='desktop__price'>
              <span>{desktop.price}$</span>
              <button onClick={()=>dispatch(addDesktop(desktop))} className='cart'>
                <TiShoppingCart/>
              </button>
            </div>
      </div>
</div>
  )
}

export default DesktopCard