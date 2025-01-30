
var moment = require('moment');
const customer = require("../models/customerSchema")






const user_index_get=(req, res) => {
    customer.find().then((result) => {
        //console.log(result)
        res.render("index", { arr: result, moment: moment })
    }).catch((e) => { console.log("error") })

}
const user_edit_get= (req, res) => {
    customer.findById(req.params.id)
        .then((result) => {
            if (!result) {
                return res.status(404).send("Utilisateur non trouvé");
            }
            res.render("user/edit", { obj: result, moment: moment });
        })
        .catch((e) => {
            console.error(e);
            res.status(500).send("Erreur serveur");
        });
}

const user_view_get = (req, res) => {
    console.log("========================");
    //console.log(req.params.id);

    customer.findById(req.params.id)
        .then((result) => {
            // console.log(result);
            res.render("user/view", { obj: result, moment: moment })
        })
        .catch((e) => {
            console.log(e);

        });
}

const user_post =(req, res) => {
    console.log(req.body);

    customer.find({
        $or: [
            { firstname: req.body.searchtext },
            { lastname: req.body.searchtext }
        ]
    })
        .then((result) => {
            res.render("user/search", { arr: result });
        })
        .catch((e) => {
            console.log(e);
        });
}

const user_put = (req, res) => {

    customer.updateOne({ _id: req.params.id }, req.body)
        .then((params) => {
            res.redirect("/");

        })
        .catch((err) => {
            console.log(err)
        });
}


const user_delete=(req, res) => {
    console.log("********************")
    customer.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.redirect("/");
        })
        .catch((err) => {
            console.log(err)
        });
}


module.exports = {user_index_get,user_edit_get,user_view_get,user_post,user_put,user_delete}