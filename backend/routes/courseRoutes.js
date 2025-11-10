const express = require("express");
const router = express.Router();
const { getCourses, addCourse } = require("../Controller/courseController");

router.get("/", getCourses);
router.post("/", addCourse);

module.exports = router;
