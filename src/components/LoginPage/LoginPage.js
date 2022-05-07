import React, { useState } from 'react'
import './LoginPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { addLogin } from '../../store/authSlice'
import { useLocation, useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const[login,setLoginInput]=useState('')
    const[password,setPasswordInput]=useState('')
    
    const auth = useSelector(state=>state.auth.user.isAuth)
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const location = useLocation()
    const phonesPage = location.state?.from?.pathname 
   
    const handleLogin = () =>{
        dispatch(addLogin({login,password}))
        if(!auth){
            navigate(phonesPage)
        }
    }
   
  return (
    <div className='login__container'>
        <div className='login'>
        
            <input 
                className='input__login' 
                placeholder='login..' 
                onChange={(e)=>setLoginInput(e.target.value)}/> 

            <input
                className='input__password' 
                placeholder='password...' 
                type='password'
                onChange={(e)=>setPasswordInput(e.target.value)}/>
        
            <button
                disabled={login!=='alex' && password!=='12345'? true:false}
                onClick={handleLogin}
                className='button__login'>
                    login
            </button>

        </div>
    </div>
  )
}

export default LoginPage