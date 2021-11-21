import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import {placeOrder} from '../actions/orderActions'
import Loading from './Loading'
import Success from './Success'
import Error from './Error'
export default function Checkout({subtotal}) {

    const orderstate=useSelector((state) => state.placeOrderReducer)
    const {loading,error,success}=orderstate
    const dispatch=useDispatch()
    function tokenHandler(token){
        console.log(token);
        dispatch(placeOrder(token,subtotal));
    }
    return (
        <div>
            {loading&&<Loading/>}
            {error&&<Error error='Something went wrong'/>}
            {success&&<Success success='Your Order Placed Successfully'/>}

           <StripeCheckout
           amount={subtotal*100}
           shippingAddress
           token={tokenHandler}
           stripeKey={'pk_test_51JwParSDh9OhZQtywwhAuT8v95rYjkALYPTUEwZHdVJKaysdRmdgCTahXlYB14kzH5K3vfSKREJ1gCT7H7Ocws0A00wcM6akYO'}
           currency='INR'
           >

            <button className="btn ">Pay Now</button>

           </StripeCheckout> 
        </div>
    )
}
