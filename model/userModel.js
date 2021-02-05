const mongoose =require('mongoose');

const usermodel = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    }
},{
    timestamps: true
})


exports.User = mongoose.model("users", usermodel);