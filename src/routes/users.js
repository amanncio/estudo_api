const router = require('express').Router();
const userController = require('../controllers/user-controller');

router.route("/user").get(userController.getAll);

router.route("/user/:id").get(userController.getUser);

router.route("/user").post(userController.saveUser);


module.exports = router;