import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getPizzaById,editPizza } from '../actions/pizzaActions'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Success from '../components/Success'
export default function Editpizza({match}) {

    const [name,setName]=useState('')
    const [smallprice,setSmallprice]=useState('')
    const [mediumprice,setMediumprice]=useState('')
    const [largeprice,setLargeprice]=useState('')
    const [image,setImage]=useState('')
    const [description,setDescription]=useState('')
    const [category,setCategory]=useState('')
    const dispatch=useDispatch()
    
    const getpizzabyidstate=useSelector(state=>state.getPizzaByIdReducer)

    const {pizza,error,loading}=getpizzabyidstate
    const editpizzastate=useSelector(state=>state.editPizzaReducer)
    const {editloading,editsuccess}=editpizzastate
    useEffect(() =>{

        if(pizza){
            if(pizza._id===match.params.pizzaid){
                setName(pizza.name)
                setDescription(pizza.description)
                setCategory(pizza.category)
                setSmallprice(pizza.prices[0]['small'])
                setMediumprice(pizza.prices[0]['medium'])
                setLargeprice(pizza.prices[0]['large'])
                setImage(pizza.image)
            }else{
                dispatch(getPizzaById(match.params.pizzaid))
            }            
        }else{
            dispatch(getPizzaById(match.params.pizzaid))
        }
        
    },[pizza,dispatch,match.params.pizzaid])

    function formHandler(e){
        e.preventDefault();
        const editedpizza={
            _id:match.params.pizzaid,
            name,
            image,
            description,
            category,
            prices:{
                small:smallprice,
                medium:mediumprice,
                large:largeprice
            }
        }
        //console.log(updatedpizza)
       dispatch(editPizza(editedpizza))
    }

    return (
        <div >           
            {/* <h1>Pizza Id={match.params.pizzaid}</h1> */}
            <div className="text-start shadow-lg p-3 mb-5 bg-white rounded">
               <h1>Editpizza</h1>
               {loading && (<Loading/>)}
               {error&& (<Error error='Something went wrong'/>)}             
               {editsuccess&&(<Success success='Pizza Details Edited Succesfully'/>)}
               {editloading&&(<Loading/>)}
               <form onSubmit={formHandler}>
                   <input className="form-control" type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                   <input className="form-control" type="text" placeholder="small varient price" value={smallprice} onChange={(e)=>{setSmallprice(e.target.value)}}/>
                   <input className="form-control" type="text" placeholder="medium varient price" value={mediumprice} onChange={(e)=>{setMediumprice(e.target.value)}}/>
                   <input className="form-control" type="text" placeholder="large varient price" value={largeprice} onChange={(e)=>{setLargeprice(e.target.value)}}/>
                   <input className="form-control" type="text" placeholder="category" value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
                   <input className="form-control" type="text" placeholder="description" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                   <input className="form-control" type="text" placeholder="image url" value={image} onChange={(e)=>{setImage(e.target.value)}}/>
                   <button className="btn mt-3" type="submit">Edit Pizza</button>
               </form>
           </div>
        </div>
    )
}
