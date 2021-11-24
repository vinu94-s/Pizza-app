const mongoose =require("mongoose");

var mongoURL="mongodb+srv://Vinu:jnFH7PdSKraSdEVQ@cluster0.qmmeq.mongodb.net/Pizza-App";

mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})

var db= mongoose.connection;

db.on('connected',()=>{
    console.log('mongo db success');
})

db.on('error',()=>{
    console.log('mongo error');
})
module.exports=mongoose
