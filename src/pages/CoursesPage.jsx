import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CourseCard from '../components/CourseCard';

const allCourses = [
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

export default function CoursesPage() {
  const { category } = useParams();
  const [filters, setFilters] = useState({
    searchQuery: '',
    difficulty: 'all',
    sortBy: 'newest',
    category: category || 'all'
  });

  const [filteredCourses, setFilteredCourses] = useState(allCourses);

  useEffect(() => {
    let results = [...allCourses];
    
    if (category && category !== 'all') {
      results = results.filter(course => 
        course.category === category
      );
    }

    // Category filter
    if (filters.category !== 'all') {
      results = results.filter(course => 
        course.category === filters.category
      );
    }

    // Difficulty filter
    if (filters.difficulty !== 'all') {
      results = results.filter(course => 
        course.difficulty.toLowerCase() === filters.difficulty
      );
    }

    // Search filter
    if (filters.searchQuery) {
      results = results.filter(course =>
        course.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
      );
    }

    // Sorting
    switch(filters.sortBy) {
      case 'newest':
        results.sort((a, b) => b.id - a.id);
        break;
      case 'popular':
        results.sort((a, b) => b.enrolled - a.enrolled);
        break;
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredCourses(results);
  }, [filters, category]);

  const categories = [
    'all',
    'web-development',
    'data-science',
    'mobile-development',
    'machine-learning'
  ];

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        <h2 className="text-3xl font-bold capitalize mb-8">
          {category ? `${category.replace('-', ' ')} Courses` : 'All Courses'}
        </h2>
        
        {/* Filters Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search courses..."
              className="p-2 border rounded"
              value={filters.searchQuery}
              onChange={(e) => setFilters({...filters, searchQuery: e.target.value})}
            />
            
            <select
              className="p-2 border rounded"
              value={filters.category}
              onChange={(e) => setFilters({...filters, category: e.target.value})}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.replace('-', ' ').toUpperCase()}
                </option>
              ))}
            </select>

            <select
              className="p-2 border rounded"
              value={filters.difficulty}
              onChange={(e) => setFilters({...filters, difficulty: e.target.value})}
            >
              <option value="all">All Difficulties</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>

            <select
              className="p-2 border rounded"
              value={filters.sortBy}
              onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
            >
              <option value="newest">Newest First</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard 
              key={course.id}
              {...course}
              difficulty={course.difficulty}
            />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12 text-gray-600">
            No courses found matching your filters
          </div>
        )}
      </div>
    </section>
  );
}