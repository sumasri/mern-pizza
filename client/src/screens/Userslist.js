import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import Error from '../components/Error'
import {getAllUsers,deleteUser} from '../actions/userActions'

export default function Userslist() {

    const dispatch = useDispatch()
    const getallusersstate = useSelector(state => state.getAllUsersReducer)
    const { loading, error, users } = getallusersstate
    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    return (
        <div>
            <h1>Userslist</h1>
            {loading && (<Loading />)}
            {error && (<Error error='Something went wrong' />)}
            <table className='table table-striped table-bordered table-responsive-sm  table-scrollable'>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users&& users.map(user=>{
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><i className="fa fa-trash" onClick={()=>{dispatch(deleteUser(user._id))}}></i></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
