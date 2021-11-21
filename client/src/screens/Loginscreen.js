import React, { useState, useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Loading from '../components/Loading'
import Error from '../components/Error'
import {loginUser} from '../actions/userActions'
export default function Loginscreen() {

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch =useDispatch()
    const loginstate=useSelector(state=>state.loginUserReducer)
    const {loading,error}=loginstate
    useEffect(()=>{
        if(localStorage.getItem('currentUser')){
            window.location.href='/'
        }
    },[])

    function login(){
        const user={email,password}
        dispatch(loginUser(user))
    }

    return (
        <div data-testid='login-test'>
          <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded">
                    <h2 style={{ fontSize: '30px' }} className="text-center m-2">Login</h2>
                    {loading&&(<Loading/>)}
                    {error&&(<Error error='Invalid Credentials'/>)}
                    <div>
                        
                        <input data-testid='input' required type="email" className="form-control" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input required type="password" className="form-control" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        
                        <button data-testid='loginbtn' onClick={login} className="btn mt-3 mb-3">LOGIN</button><br/>
                        <a style={{color:'black',textDecoration: 'none'}} href="/register">Click here to register</a>
                    </div>
                </div>
            </div>  
        </div>
    )
}
