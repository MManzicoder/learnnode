const { course } = require('../model/devmodel');
const { ValidateCourse }  = require("../controllers/validate");

const getCourses = async (req, res, next)=>{
    try {
        await course.find({}, (err, courses)=>{
            if(err) throw err;
            return res.status(200).json({courses});
        })
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}
 const createCourse = async (req, res, next)=>{
    const {courseId, courseName, instructor}= req.body;
 
    const { error} = ValidateCourse(req.body);
    if(error) return res.status(400).json({msg: error.details[0].message});
     await new course({
        courseId,
        courseName,
        instructor
    }).save();

 return res.status(201).json({msg: "Created a course"});

}

const updateCourse = async (req, res, next)=>{
    // const {courseId, courseName, instructor} = req.body;
try {
   const {error} = ValidateCourse(req.body);
   if(error) return res.status(400).json({msg: error.details[0].message});
   await course.findOneAndUpdate({_id: req.params.id}, req.body,{new: true} );
   return res.json({msg: "Updated the course"});

} catch (err) {
    return res.status(500).json({msg: err.message});
}
}

const deleteCourse = async (req, res, next)=>{
    const { id } = req.params;
  try {
    await course.findOneAndDelete({_id: id}, (err, course)=>{
        if(err) throw err;
        return res.status(200).json({course});
    })
  } catch (err) {
      return res.status(500).json({msg: err.message});
  }
}

module.exports={
    createCourse,
    getCourses,
    deleteCourse,
    updateCourse
}