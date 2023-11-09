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
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:8,
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
    },
    tokens:[
        {
            token:
            {
                type:String,
                required:true
            },
            expiration: {
                type: Date, // Store the expiration timestamp as a UNIX timestamp
                //required: true
              }
        }
    ],
    imagePath:
    [ {
        url: {
          type: String,
         required: true,
        },
        description: {
          type: String,
        },
      }
    ],
    followlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'collection', // Reference to the 'collection' model (your User model)
      },
    ],


})

const collection = mongoose.model("collection",newSchema)



// // ///////////////////////////post

const postSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true
},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    // ref: 'collection', // Reference to the user who created the post
    required: true,
  },
  text: {
    type: String,
   // required: true,
  },
  images: [
    {
      url: {
        type: String,
        //required: true,
      },
      description: {
        type: String,
      },
    },
  ],
});

 const post = mongoose.model("post", postSchema);

 module.exports.collection = collection;
 module.exports.post = post;


