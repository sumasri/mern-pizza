import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {logoutUser} from '../actions/userActions'
export default function Navbar() {

    const cartstate=useSelector(state=>state.cartReducer)
    const userstate=useSelector(state=>state.loginUserReducer)
    const {currentUser} = userstate
    const dispatch=useDispatch()
    return (
        <div data-testid='navbar-test'>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="/">PIZZA PARADISE</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i style={{color: 'black'}} className="fas fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse ml-5" id="navbarNav">
                    <ul className="navbar-nav ms-auto ">

                        {currentUser?(
                        <div className="dropdown mt-2"style={{marginRight:'35px'}}>
                        <a className=" dropdown-toggle "  style={{color:'black',textDecoration: 'none'}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          {currentUser.name}
                        </a>
                        <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
                        <a className="nav-link" style={{marginLeft:'10px'}} href="/cart">Cart {cartstate.cartItems.length}</a>
                          <a className="dropdown-item" href="/orders">Orders</a>
                          <a className="dropdown-item" href="/" onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></a>
                        </div>
                      </div>
                        ):(<li className="nav-item active">
                            <a className="nav-link" href="/login">Login </a>
                        </li>)}
                        
                        {/* <li className="nav-item">
                           
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    )
}
