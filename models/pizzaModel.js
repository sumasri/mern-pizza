const mongoose=require('mongoose');

const pizzaSchema=mongoose.Schema({
    name:{type:String, require},
    varients:[],
    prices:[],
    category:{type:String, require},
    image:{type:String, require},
    description:{type:String, require}
},{
    timestamps:true, //to check when pizza added to db
})

const pizzaModel=mongoose.model('pizzas',pizzaSchema) //pizzas is collection name 

module.exports=pizzaModel