const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/availableusers",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(()=>console.log("... Connected to DB ..."))
.catch(err=>console.log(err.message));

require("./devmodel");
require("./userModel");


