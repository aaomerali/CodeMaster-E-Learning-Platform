import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import CoursesListing from './components/CoursesListing';
import CoursesPage from './pages/CoursesPage';



export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:category" element={<CoursesPage />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}