import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CourseCard from './CourseCard';

// Mock data - you'll replace this with real data later
const mockCourses = [
    {
      id: 1,
      title: 'Complete React Guide',
      category: 'web-development',
      difficulty: 'Intermediate',
      duration: '8 hours',
      enrolledStudents: 1500,
      rating: 4.8,
      dateAdded: '2023-08-15',
      image: 'https://picsum.photos/400/300?random=5'
    },
    {
      id: 2,
      title: 'Python for Data Science',
      category: 'data-science',
      difficulty: 'Beginner',
      duration: '10 hours',
      enrolledStudents: 2500,
      rating: 4.7,
      dateAdded: '2023-07-22',
      image: 'https://picsum.photos/400/300?random=6'
    },
    {
      id: 3,
      title: 'Mastering CSS Grid and Flexbox',
      category: 'web-development',
      difficulty: 'Intermediate',
      duration: '5 hours',
      enrolledStudents: 1800,
      rating: 4.9,
      dateAdded: '2023-09-10',
      image: 'https://picsum.photos/400/300?random=7'
    },
    {
      id: 4,
      title: 'Intro to Machine Learning',
      category: 'data-science',
      difficulty: 'Advanced',
      duration: '12 hours',
      enrolledStudents: 900,
      rating: 4.6,
      dateAdded: '2023-06-05',
      image: 'https://picsum.photos/400/300?random=8'
    },
    {
      id: 5,
      title: 'UI/UX Design Essentials',
      category: 'design',
      difficulty: 'Beginner',
      duration: '6 hours',
      enrolledStudents: 2200,
      rating: 4.7,
      dateAdded: '2023-08-01',
      image: 'https://picsum.photos/400/300?random=9'
    },
    {
      id: 6,
      title: 'Node.js for Backend Development',
      category: 'web-development',
      difficulty: 'Intermediate',
      duration: '7 hours',
      enrolledStudents: 1600,
      rating: 4.5,
      dateAdded: '2023-07-18',
      image: 'https://picsum.photos/400/300?random=10'
    },
    {
      id: 7,
      title: 'Digital Marketing 101',
      category: 'marketing',
      difficulty: 'Beginner',
      duration: '4 hours',
      enrolledStudents: 3000,
      rating: 4.6,
      dateAdded: '2023-10-02',
      image: 'https://picsum.photos/400/300?random=11'
    },
    {
      id: 8,
      title: 'Introduction to DevOps',
      category: 'devops',
      difficulty: 'Intermediate',
      duration: '8 hours',
      enrolledStudents: 1300,
      rating: 4.7,
      dateAdded: '2023-09-20',
      image: 'https://picsum.photos/400/300?random=12'
    },
    {
      id: 9,
      title: 'Cybersecurity Basics',
      category: 'cybersecurity',
      difficulty: 'Beginner',
      duration: '5 hours',
      enrolledStudents: 1700,
      rating: 4.8,
      dateAdded: '2023-08-25',
      image: 'https://picsum.photos/400/300?random=13'
    }
  ];
  

export default function CoursesListing() {
  const { categoryId } = useParams();
  const [filter, setFilter] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Filter and sort logic
    const filteredCourses = mockCourses
      .filter(course => 
        course.category === categoryId &&
        (course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        course.description?.toLowerCase().includes(searchQuery.toLowerCase()))
      .sort((a, b) => {
        switch(filter) {
          case 'difficulty': 
            const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
            return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
          case 'popularity':
            return b.enrolledStudents - a.enrolledStudents;
          default: // newest
            return new Date(b.dateAdded) - new Date(a.dateAdded);
        }
      }));
      
    setCourses(filteredCourses);
  }, [categoryId, filter, searchQuery]);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-start">
          <h2 className="text-3xl font-bold capitalize">
            {categoryId.replace('-', ' ')} Courses
          </h2>
          
          <div className="flex gap-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search courses..."
              className="px-4 py-2 border rounded-lg flex-grow"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            
            <select 
              className="px-4 py-2 border rounded-lg"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="popularity">Popularity</option>
              <option value="difficulty">Difficulty</option>
            </select>
          </div>
        </div>

        {courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <CourseCard 
                key={course.id}
                {...course}
                difficulty={course.difficulty}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-600">
            No courses found in this category
          </div>
        )}
      </div>
    </section>
  );
}