import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {filterPizzas} from '../actions/pizzaActions'
export default function Filter() {

    const dispatch = useDispatch()
    const [searchkey,setSearchKey] = useState('')
    const [category,setCategory] = useState('all')

    return (
        <div className="container">
            <div className="row justify-content-center shadow-lg p-2 mb-5 bg-white rounded">
                <div className="col-md-3 ">
                    <input value={searchkey} onChange={(e)=>{setSearchKey(e.target.value)}} type="text" className="form-control w-100" placeholder="Search pizzas"/>
                </div>
                <div className="col-md-3 ">
                    <select className="form-control w-100 mt-2" value={category} onChange={(e) =>{setCategory(e.target.value)}}>
                        <option value="all">All</option>
                        <option value="veg">Veg</option>
                        <option value="nonveg">Non-Veg</option>
                    </select>
                </div>
                <div className="col-md-3 ">
                    <butto className="btn w-100 mt-2" onClick={() =>{dispatch(filterPizzas(searchkey,category))}}>Filter</butto>
                </div>
            </div>
        </div>
    )
}
