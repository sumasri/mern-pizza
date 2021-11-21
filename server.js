const express = require('express');
const app=express();
const db=require('./db');
const Pizza=require('./models/pizzaModel')

//used for body parser
app.use(express.json());

const pizzasRoute=require('./routes/pizzasRoute')
const userRoute=require('./routes/userRoute')
const ordersRoute=require('./routes/ordersRoute')
//default route


app.use('/api/pizzas/',pizzasRoute);
app.use('/api/users/',userRoute);
app.use('/api/orders/',ordersRoute);

app.get("/",(req,res)=>{
    res.send("Server is working");
});
const port = process.env.PORT || 8080;
app.listen(port,()=>`Server is working on port ${port}`);

