const Course = require("../models/Course");

// Get all courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Add a new course
const addCourse = async (req, res) => {
  const { title, description, instructor } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  try {
    const course = new Course({ title, description, instructor });
    const savedCourse = await course.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    res.status(500).json({ message: "Error adding course" });
  }
};

module.exports = { getCourses, addCourse };
