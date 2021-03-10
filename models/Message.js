const mongoose = require("mongoose");


const MessageSchema = mongoose.Schema({
    name:{
        type:String, 
        default:"Mr Incognito"
    },
    message:{ 
        type:String, 
        required:true 
    },
    sender: { 
        type:mongoose.Schema.Types.ObjectId, 
        ref:'User', 
        required:true
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model("Message", MessageSchema);