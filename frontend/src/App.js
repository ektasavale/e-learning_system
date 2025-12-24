import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    instructor: "",
  });

  // Fetch all courses
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  // Add new course
  const addCourse = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/courses", newCourse)
      .then((res) => {
        setCourses([...courses, res.data]);
        setNewCourse({ title: "", description: "", instructor: "" });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>E-Learning Management System</h1>

      <form onSubmit={addCourse} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={newCourse.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newCourse.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="instructor"
          placeholder="Instructor"
          value={newCourse.instructor}
          onChange={handleChange}
        />
        <button type="submit">Add Course</button>
      </form>

      <h2>Available Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <strong>{course.title}</strong> — {course.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
