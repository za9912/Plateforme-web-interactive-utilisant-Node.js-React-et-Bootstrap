const express = require('express')
const app = express()
const port = process.env.PORT || 3001;
const mongoose = require("mongoose");
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

var methodOverride = require('method-override'); // ✅ Déclaration correcte
app.use(methodOverride('_method')); // ✅ Utilisation après import

const bodyParser = require("body-parser");





const path = require("path");
const livereload = require("livereload");

const liveReloadServer = livereload.createServer();

liveReloadServer.watch(path.join(__dirname, 'public'));

const connectLivereload = require("connect-livereload");

app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});


const allRoutes = require('./routes/allRoutes')
const addUser = require('./routes/addUser')







mongoose.connect("mongodb+srv://devzahra:zahrazahrazahra@cluster0.ulchd.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0").then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
}).catch((err) => {
  console.log(err);
});


app.use(allRoutes)
app.use(addUser)