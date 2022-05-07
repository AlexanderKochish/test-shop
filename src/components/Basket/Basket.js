import React from 'react'
import './Basket.css'
import {deletePhones} from '../../store/phoneSlice'
import { useSelector,useDispatch } from 'react-redux'
import {MdDelete} from 'react-icons/md'

const Basket = () => {
  const phoneCart = useSelector((state)=>state.phones.phonesCard)
  const dispatch = useDispatch()
  
  return (
    
    <div className='cart__wrapper'>
     {phoneCart.length<=0? <div className='cart__text'><h1>Cart is empty</h1></div>
     :
      phoneCart.map((cart) =><div className='cart__container' key={cart.id}>
        <img className='cart__img' src={cart.image} alt={cart.title}/>
          <div className='cart__title'>
            <h3>{cart.title}</h3>
            <p>{cart.overview}</p>
          </div>
          <div className='cart__price'>
            <span>{cart.price}$</span>
            <button className='md__delete' onClick={()=>dispatch(deletePhones(cart.id))}>
              <MdDelete />
            </button>
          </div>
      </div>)}
    </div>
  )
}

export default Basket