
const express = require('express')
const router = express.Router()

var moment = require('moment');
const customer = require("../models/customerSchema")







router.get('/user/add.html', (req, res) => {
    res.render("user/add")
})



router.post('/user/add.html', (req, res) => {
    console.log(req.body)
    customer.create(req.body).then(() => { res.redirect("/") }).catch((e) => { console.log("error") })
})


module.exports = router