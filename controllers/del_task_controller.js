//get database connection
const db = require('../config/mongoose');
//get contact collection
const Tasks = require('../models/tasks')

module.exports.delTask = function(req,res){
    let id = req.query.id;

    Tasks.findByIdAndDelete(id, function(err){
        if(err){
            console.log("error in deleting");

            return res.render('error_page',{
                title: "Error",
                err: "There has been an error in deleting the specified task.",
            })
        }

        return res.redirect('back');
    })
}
