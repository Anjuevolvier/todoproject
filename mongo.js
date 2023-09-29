const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/react-login")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    ConfirmPassword:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }


})

const collection = mongoose.model("collection",newSchema)

module.exports=collection