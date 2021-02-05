const mongoose = require('mongoose');

const coursemodel = new mongoose.Schema({
    courseId: {
        type: String,
        required: true
    },
    courseName:{
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    }
},{
    timestamps: true
})


exports.course = mongoose.model("courses", coursemodel);