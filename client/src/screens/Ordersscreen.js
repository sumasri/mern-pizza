import React, {  useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Loading from '../components/Loading'
import Error from '../components/Error'
import {getUserOrders} from '../actions/orderActions'
import AOS from 'aos'
import 'aos/dist/aos.css';
export default function Ordersscreen() {
    AOS.init()
    const dispatch = useDispatch()
    const ordersstate=useSelector(state=>state.getUserOrdersReducer)
    const {orders,error,loading}=ordersstate
    useEffect(() => {
        dispatch(getUserOrders())       
    },[dispatch])
    return (
        <div>
           <h2 style={{fontSize:'30px'}}>My Orders</h2>  <hr/>
           <div className="row justify-content-center"data-aos='fade-down'>
               {loading && (<Loading/>)} 
               {error && (<Error error='Something went wrong'/>)}
               {orders && orders.map(order=>{
                   return <div className='col-md-8 m-2 p-1' style={{backgroundColor:'red',color:'white'}}>
                       <div className='flex-container'>
                           <div className="text-start w-100 m-1">
                               <h2 style={{fontSize:'20px'}}>Items</h2><hr/>
                                {order.orderItems.map(item=>{
                                    return <div className=''>
                                        <p>{item.name} [{item.varient}*{item.quantity}={item.price}]</p>
                                    </div>
                                })}
                           </div>
                           <div className="text-start w-100 m-1">
                                <h2 style={{fontSize:'20px'}}>Address</h2><hr/>
                                <p>Street : {order.shippingAddress.street}</p>
                                <p>City : {order.shippingAddress.city}</p>
                                <p>Country : {order.shippingAddress.country}</p>
                                <p>Pincode : {order.shippingAddress.pincode}</p>
                           </div>
                           <div className="text-start w-100 m-1">
                           <h2 style={{fontSize:'20px'}}>Order Info</h2><hr/>
                           <p>Order Amount : {order.orderAmount}</p>
                           <p>Date : {order.createdAt.substring(0,10)}</p>
                           <p>Transacation Id : {order.transactionId}</p>
                           <p>Order Id : {order._id}</p>
                           </div>
                       </div>
                   </div>
               })}
           </div>
        </div>
    )
}
