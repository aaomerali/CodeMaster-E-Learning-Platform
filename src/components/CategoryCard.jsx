import { Link } from 'react-router-dom';

export default function CategoryCard({ title, description, image, category }) {
  return (
    <Link 
      to={`/courses/category/${category}`}
      className="group relative block h-96 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <img 
        src={image} 
        alt={title} 
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-lg opacity-90">{description}</p>
        </div>
      </div>
    </Link>
  );
}