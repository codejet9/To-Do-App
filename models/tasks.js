const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description:{
        type:String,
        required: true,
    },
    category:{
        type:String,
        required:true,
    },
    deadline:{
        type:Date,
        required:true,
    },
    status:{
        type:Boolean,
        default: false,
        required: true,
    }
})

//collection name
const Tasks = mongoose.model('Tasks',taskSchema);

//exporting the databse/collection
module.exports = Tasks;