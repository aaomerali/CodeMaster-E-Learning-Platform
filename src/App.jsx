import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import CoursesListing from './components/CoursesListing';
import CoursesPage from './pages/CoursesPage';
import CourseDetailsPage from './components/CourseDetailsPage';


export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/category/:category" element={<CoursesPage />} />
          <Route path="/courses/:courseId" element={<CourseDetailsPage />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}