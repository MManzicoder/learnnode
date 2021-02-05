const Joi = require('joi');

exports.ValidateUser= (req)=>{
    const schema = Joi.object().keys ({
        lastName: Joi.string().min(3).max(11).required(),
        firstName: Joi.string().required(),
        email: Joi.string().min(3).max(20).email().required(),
        phone: Joi.string().min(5).max(12).required(),
        password: Joi.string().min(6).required()
    })
   const result = schema.validate(req);
   return result;
}


exports.ValidateCourse= (req)=>{
    const schema = Joi.object().keys ({
        courseName: Joi.string().min(3).max(11).required(),
        courseId: Joi.string().required(),
        instructor: Joi.string().min(3).max(20).email().required()
    })
   const result = schema.validate(req);
   return result;
}
