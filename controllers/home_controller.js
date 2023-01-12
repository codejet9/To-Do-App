//get database connection
const db = require('../config/mongoose');
//get contact collection
const Tasks = require('../models/tasks')

module.exports.home = function(req,res){
    //fetching the contact
    Tasks.find({}, function(err, tasks){
        if(err){
            console.log("error in fetching tasks from DB");
            
            return res.render('error_page',{
                title: "Error",
                err: "Error in fetching data from the Database.",
            })
        }

        return res.render('home',{
            title:'To Do App',
            task_list:tasks
        });
    })
}
