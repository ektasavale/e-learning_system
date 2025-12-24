const Adminmiddleware = require("../middleware/Adminmiddleware");
const express = require("express");
const router = express.Router();
const { getCourses, addCourse } = require("../Controller/courseController");

router.get("/", getCourses);
router.post("/", addCourse);

module.exports = router;

router.delete("/:id", Adminmiddleware, async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
});

// DELETE a course
router.put("/:id", Adminmiddleware, async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: "Update failed" });
  }
});


// UPDATE a course
