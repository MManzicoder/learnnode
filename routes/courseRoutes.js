const { Router } = require('express');
const {getCourses, createCourse, deleteCourse, updateCourse } = require('../controllers/courseController');

const router = Router();
router.get("/", getCourses);
router.post("/", createCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);


module.exports= router;