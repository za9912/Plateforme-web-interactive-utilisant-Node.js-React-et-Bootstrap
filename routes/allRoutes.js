const express = require('express')
const router = express.Router()

var moment = require('moment');
const customer = require("../models/customerSchema")
const controllerUser = require('../controllers/controllerUser')


router.get('/', controllerUser.user_index_get)






router.get('/edit/:id',controllerUser.user_edit_get);

router.get('/view/:id', controllerUser.user_view_get);




router.post('/search', controllerUser.user_post);






router.put("/edit/:id", controllerUser.user_put);

router.delete("/delete/:id",controllerUser.user_delete);





module.exports = router