const express =require ("express");
const { default: pizzas } = require("./client/src/pizzadata.js");
const db =require("./db.js");
const pizza=require("./models/pizzamodel")


const app=express();
const PORT = process.env.PORT||5000;


app.use(express.json());



app.get("getpizzas",(req,res)=>{
    pizza.find({},(err,docs)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(docs)
        }
    })
})
app.listen(PORT,()=> (console.log("the server is started",PORT)));
