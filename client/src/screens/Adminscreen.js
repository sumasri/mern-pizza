import React,{useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Link,Route,Switch} from 'react-router-dom'
import Userslist from './Userslist'
import Orderslist from './Orderslist'
import Pizzaslist from './Pizzaslist'
import Addpizza from './Addpizza'
import Editpizza from './Editpizza'
export default function Adminscreen() {

    const userstate=useSelector(state=>state.loginUserReducer)
    const {currentUser} = userstate
    

    useEffect(() => {
        if(!currentUser.isAdmin){
            window.location.href='/'
        }
    }, [currentUser.isAdmin])
    return (
        <div>
            <div className="row justify-content-center p-3">
                <div className="col-md-9">
                <h2 fontSize="30px">Adminscreen</h2>
                 <ul className="adminfunctions">
                
                    <li><Link to={"/admin/userslist"}>UsersList</Link> </li>
                    <li><Link to={"/admin/pizzaslist"}>Pizzas List</Link> </li>
                    <li><Link to={"/admin/addpizza"}>Add New Pizza</Link> </li>
                    <li><Link to={"/admin/orderslist"}>Orderslist</Link> </li>
               
                 </ul>
                
                    <Switch>
                         <Route path='/admin' component={Userslist} exact/>
                        <Route path='/admin/userslist' component={Userslist} exact/>
                        <Route path='/admin/orderslist' component={Orderslist} exact/>
                        <Route path='/admin/pizzaslist' component={Pizzaslist} exact/>
                        <Route path='/admin/addpizza' component={Addpizza} exact/>
                        <Route path='/admin/editpizza/:pizzaid' component={Editpizza} exact/>
                    </Switch>
                   
                </div>
            </div>
            
        </div>
    )
}
