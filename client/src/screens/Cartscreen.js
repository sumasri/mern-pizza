import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addToCart} from '../actions/cartActions'
import {deleteFromCart} from '../actions/cartActions'
import Checkout from '../components/Checkout'
import AOS from 'aos'
import 'aos/dist/aos.css';
export default function Cartscreen() {
    AOS.init()
    const dispatch=useDispatch()
    const cartstate=useSelector(state => state.cartReducer)
    const cartItems=cartstate.cartItems
    var subtotal=cartItems.reduce((x,item) => x + item.price,0)
    return (
        <div data-testid='cart-test'>
            <div className="row justify-content-center p-2 " data-aos='fade-down'> 
                <div className="col-md-6">
                    <h2 style={{fontSize:'30px !important'}}>My Cart</h2>
                    {cartItems.map(item=>{
                        return <div className="flex-container">
                        <div className='text-start m-1 w-100'>
                            <h1>{item.name}({item.varient})</h1>
                            <h1>Price : {item.quantity}*{item.prices[0][item.varient]}={item.price}</h1>
                            <h1 style={{display:'inline'}}>Quantity : </h1>
                            <i className="fa fa-plus" aria-hidden="true" onClick={() => {dispatch(addToCart(item,item.quantity+1,item.varient))}}></i>
                            <b>{item.quantity}</b>
                            <i className="fa fa-minus" aria-hidden="true" onClick={() => {dispatch(addToCart(item,item.quantity-1,item.varient))}}></i>
                            <hr />
                        </div>
                        <div className="w-100 m-1">
                            <img src={item.image} alt="pizza" style={{height:'80px', width:'80px'}}/>
                        </div>
                        <div className="w-100 m-1 mt-4">
                        <i className="fa fa-trash" aria-hidden="true" onClick={() =>{dispatch(deleteFromCart(item));}}></i>
                        </div>
                    </div>
                    })}
                    
                </div>  
                <div className="col-md-4 text-end">
                    <h2 style={{fontSize:'35px'}}>SubTotal : {subtotal} /-</h2>
                    <Checkout subtotal={subtotal}/>
                </div> 
             </div>
        </div>
    )
}
