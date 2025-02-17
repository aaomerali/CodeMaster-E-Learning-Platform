export default function CourseCard({ title, duration, image }) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4 flex-grow">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-2">Duration:</span>
            <span className="font-medium">{duration}</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
            Enroll Now
          </button>
        </div>
      </div>
    );
  }