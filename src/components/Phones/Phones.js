import React from 'react'
import { useSelector } from 'react-redux'
import PhoneCard from './PhoneCard'
import './Phones.css'

const Phones = () => {
 
  const phones = useSelector((state)=>state.phones.phones)
  
  return (
    <div className='phone__container'>
      {phones && phones.map((phone)=><PhoneCard key={phone.id} phone={phone}/>)}
    </div>
  )
}

export default Phones