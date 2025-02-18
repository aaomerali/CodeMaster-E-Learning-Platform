import { Link } from 'react-router-dom';

export default function CourseCard({ id, title, duration, difficulty, image, enrolled, rating }) {
  return (
    <Link 
      to={`/courses/${id}`} 
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
      aria-label={`View ${title} course details`}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{title}</h3>
          <span className={`px-2 py-1 text-sm rounded-full ${
            difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
            difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
            'bg-purple-100 text-purple-800'
          }`}>
            {difficulty}
          </span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-4 space-x-4">
          <div className="flex items-center">
            <span className="mr-1">⭐ {rating}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-1">👥 {enrolled}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-1">🕒 {duration}</span>
          </div>
        </div>

        <div className="w-full bg-blue-600 text-white py-2 rounded-md text-center">
          View Course
        </div>
      </div>
    </Link>
  );
}