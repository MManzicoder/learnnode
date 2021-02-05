// require("./model/mongodb");
// const express = require('express');
// const userRoutes = require('./routes/userRoute');
// const courseRoutes = require('./routes/courseRoutes');


// const app = express();
// const port = 3001;

// app.use(express.json());

// //user Routes
// app.get("/",(req, res,next)=>{
//     res.send("This is home page");
//     next();
// })
// app.use("/users", userRoutes);
// //products routes
// app.use("/api/products",courseRoutes);
// //listening to our server
// app.listen(port, ()=>console.log(`listening to sever on port ${port}...`))
var express = require('express')
// const bodyParser = require('body-parser')
const config = require("config");
var app = express()
app.use(express.json());
// app.use(bodyParser.json());
//logging middleware
const logger = function (req, res, next) {
  console.log('caught intrusion');
//   res.send("processing ...");
  next();
}
app.use(logger);
//authenticated middleware
function isLoggedIn(req, res, next){
    console.log("value of isAuth:..."+req.isAuthenticated)
    if(req.body.isAuthenticated){
        next();
    }else{
        res.status(401).send({message:"Log in first"});
    }
}
app.get('/', function (req, res) {
    res.send({message:'Express middleware tutorial'});
  });
app.post('/greeting', isLoggedIn, function(req, res){
    res.send({greeting:"Good morning class c"});
});
console.log("current Environment is " + app.get("env"));
console.log("Application name " + config.get("name"))
console.log("Application name " + config.get("application.environment"))
console.log("Database host " + config.get("dbConfig.password"))
console.log("Database name " + config.get("dbConfig.port"))
console.log("App running on port 3000")
app.listen(3000)