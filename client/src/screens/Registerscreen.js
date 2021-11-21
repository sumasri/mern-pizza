import React, { useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {registerUser} from '../actions/userActions'
import Loading from '../components/Loading'
import Success from '../components/Success'
import Error from '../components/Error'
export default function Registerscreen() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const registerstate = useSelector(state=>state.registerUserReducer)
    const {error,loading,success}=registerstate
    const dispatch =useDispatch()
    function register() {
        if(password!==cpassword){
            alert("passwords not matched")
        }
        else{
            const user={
                name,
                email,
                password
            }
            console.log(user);
            dispatch(registerUser(user))
        }
    }
    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded">
                    {loading && (<Loading/>)}
                    {success&& (<Success success='User Registered Successfully'/>)}
                    {error&& (<Error error='Email already registered'/>)}
                    <h2 style={{ fontSize: '30px' }} className="text-center m-2">Register</h2>
                    <div>
                        <input required type="text" className="form-control" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        <input required type="email" className="form-control" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input required type="password" className="form-control" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        <input required type="password" className="form-control" placeholder="confirm password" value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}} />
                        <button onClick={register} className="btn mt-3 mb-3">Register</button><br/>
                        <a href="/login" style={{color:'black',textDecoration: 'none'}}>Click here to login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

