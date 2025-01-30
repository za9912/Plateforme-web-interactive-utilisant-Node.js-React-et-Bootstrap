const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Définir le schéma (la structure de l'article)
const customersSchema = new Schema({
   firstname:String,
   lastname :String,
   email :String,
   mobilenumber:String,
   age:String,
   country:String,
   gender:String,
},{timestamps: true});



// Créer un modèle basé sur ce schéma
const customer = mongoose.model("customer", customersSchema);
module.exports=customer;