//get database connection
const db = require('../config/mongoose');
//get contact collection
const Tasks = require('../models/tasks')

module.exports.addTask = function(req,res){
    Tasks.create(req.body, function(err,newTask){
        if(err){
            console.log("Error in creating a task");

            return res.render('error_page',{
                title: Error,
                err: "Error in Creating Task. Please enter a description and/or a deadline date.",
            })
        }

        // console.log("********** new Task", newTask);
        return res.redirect('back');
    });
}