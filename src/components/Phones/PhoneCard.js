import React from 'react'
import './PhoneCard.css'
import {TiShoppingCart} from 'react-icons/ti'
import {addPhones} from '../../store/phoneSlice'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'

const PhoneCard = ({phone}) => {
  const dispatch = useDispatch()
  
  return (
    <div className='phone__card'>
        <img className='phone__img' src={phone.image} alt={phone.title}/>
          <div className='card__title'>
              <h3>{phone.title}</h3>
              <p>{phone.overview}</p>
                <div className='card__price'>
                  <span>{phone.price}$</span>
                  <button onClick={()=>dispatch(addPhones(phone))} className='cart'>
                    <TiShoppingCart className='cart__icon'/>
                  </button>
                </div>
          </div>
    </div>
  )
}

export default PhoneCard