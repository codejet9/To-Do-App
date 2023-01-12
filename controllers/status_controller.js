//get database connection
const db = require('../config/mongoose');
//get contact collection
const Tasks = require('../models/tasks')

module.exports.updateStatus = function(req,res){
    let id = req.query.id;
    Tasks.findOne({ _id: id }, function(err, task) {
        if(err){
            console.log("Error in finding element");
            return;
        }

        task.status = !task.status;
        task.save(function(err, updatedTask) {
            if(err){
                console.log("Error in updating the task");
                
                return res.render('error_page',{
                    title: Error,
                    err: "Error in updating the status of the task.",
                })
            }
            // console.log(updatedTask);
        });
        
    });
    res.redirect('back');
}