import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import MyButton from '../UI/button/MyButton'
import './Navbar.css'
import {addLogout} from '../../store/authSlice'

const Navbar = () => {
  let setActive = ({isActive})=>isActive? 'active_link':'link'
  const menu = useSelector((state)=>state.phones.menu)
  const dispatch = useDispatch()

  const logout = () =>{
    dispatch(addLogout(false))
  }
  
  return (
    <div className='nav'>
      <ul className={!menu?'nav__menu active':'nav__menu'}>
        <li><NavLink to='/' className={setActive}>Home</NavLink></li>
        <li><NavLink to='/phones' className={setActive}>Phones</NavLink></li>
        <li><NavLink to='/desktop'className={setActive}>Desktops</NavLink></li>
        <li><NavLink to='/login'className={setActive}>Login</NavLink></li>
        <div className='nav__mobile'>
        <li><NavLink to='/basket' className={setActive}>MyCart</NavLink></li>
        <MyButton logout={logout}/>
        </div>
      </ul>
    </div>
  )
}

export default Navbar