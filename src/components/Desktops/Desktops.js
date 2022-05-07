import React from 'react'
import { useSelector } from 'react-redux'
import DesktopCard from './DesktopCard'
import './Desktops.css'

const Desktops = () => {

  const desktops = useSelector((state)=>state.phones.desktops)
  
  return (
    <div className='desktop__container'>
      {desktops && desktops.map((desktop)=><DesktopCard key={desktop.id} desktop={desktop}/>)}
    </div>
  )
}

export default Desktops