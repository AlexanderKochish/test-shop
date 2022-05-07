import React from 'react'
import './Header.css'
import { searchDesktop, searchPhones,setMenu } from '../../store/phoneSlice'
import {FaBars} from 'react-icons/fa'
import {CgClose} from 'react-icons/cg'
import {ImSearch} from 'react-icons/im'
import {TiShoppingCart} from 'react-icons/ti'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addLogout } from '../../store/authSlice'
import {BsMoon} from 'react-icons/bs'
import {BsSun} from 'react-icons/bs'
import MyButton from '../UI/button/MyButton'
import { addTheme } from '../../store/themeSlice'

const Header = () => {
  const dispatch = useDispatch()
  const phonePrice= useSelector((state)=>state.phones.phonesCard)
  const menu = useSelector((state)=>state.phones.menu)
  const setActive = ({isActive})=>isActive? 'active_link':'link'
  const priceCart = phonePrice.reduce((acc,crr)=>acc += crr.price, 0)

  const handleSearch = (e) =>{
    dispatch(searchPhones(e.target.value))
    dispatch(searchDesktop(e.target.value))
  }
  const logout = () =>{
        dispatch(addLogout(false))
  }   
  const setTheme = (theme) =>{
    document.documentElement.setAttribute('data-theme',theme)
     dispatch(addTheme(theme))
     
  }
  
 return (
    <div className='header'>
    
        <div onClick={()=>dispatch(setMenu(!menu))} className='burger__menu'>
            {menu? <FaBars style={{fontSize:'30px'}}/>:<CgClose style={{fontSize:'30px'}}/>}  
        </div>

        <div className='header__logo'>
            <h1 className='logo'>Logo</h1>
            <button className='button__theme' onClick={()=>setTheme('light')}><BsSun/></button>
            <button className='button__theme' onClick={()=>setTheme('dark')}><BsMoon/></button>
        </div>

        <div className='header__search'>
            <ImSearch style={{fontSize:'20px',marginBottom:'8px'}}/>
        
            <input 
                className='header__input__search'
                placeholder='search...' 
                onChange={handleSearch}/>
        
        </div>
        <div className='header__right__side'>
        <div className='header__cart'>
            <NavLink to='/basket'className={setActive}>
                <span className='total__price'>{priceCart}</span>
                <TiShoppingCart style={{marginTop:'15px',fontSize:'30px'}}/>
            </NavLink>
        </div> 
        <MyButton logout={logout}/>
        </div>
  </div>
  )
}

export default Header