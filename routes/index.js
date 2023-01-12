const express = require('express');
const router = express.Router();

const homeController = require("../controllers/home_controller");
const addTaskController = require("../controllers/add_task_controller");
const delTaskController = require("../controllers/del_task_controller");
const statusController = require("../controllers/status_controller");


router.get('/',homeController.home);
router.post('/add_task',addTaskController.addTask)
router.get('/delete_task',delTaskController.delTask)
router.get('/update_status',statusController.updateStatus)

module.exports = router;