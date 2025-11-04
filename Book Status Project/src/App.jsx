import { Routes, Route } from "react-router-dom";

import Home from "./pages/student/Home.jsx";
import CoursesList from "./pages/student/CoursesList.jsx";
import CourseDetails from "./pages/student/CourseDetails.jsx";
import MyEnrollments from "./pages/student/MyEnrollements.jsx";
import Player from "./pages/student/Player.jsx";
import Loading from "./Components/student/Loading.jsx";

import Educator from "./pages/educator/Educator.jsx";
import Dashboard from "./pages/educator/Dashboard.jsx";
import AddCourse from "./pages/educator/AddCourse.jsx";
import MyCourses from "./pages/educator/MyCourses.jsx";
import StudentEnrolled from "./pages/educator/StudentEnrolled.jsx";

function App() {
  return (
    <Routes>
      {/* Student Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/course-list" element={<CoursesList />} />
      <Route path="/course-list/:input" element={<CoursesList />} />
      <Route path="/loading/:path" element={<Loading />} />
      <Route path="/my-enrollments" element={<MyEnrollments />} />
      <Route path="/player/:courseId" element={<Player />} />
      <Route path="/course/:id" element={<CourseDetails />} />

      {/* ✅ Educator Routes with Layout and Nested Pages */}
      <Route path="/educator" element={<Educator />}>
        <Route index element={<Dashboard />} /> {/* /educator */}
        <Route path="add-course" element={<AddCourse />} /> {/* /educator/add-course */}
        <Route path="my-courses" element={<MyCourses />} /> {/* /educator/my-courses */}
        <Route path="student-enrolled" element={<StudentEnrolled />} /> {/* /educator/student-enrolled */}
      </Route>
    </Routes>
  );
}

export default App;
