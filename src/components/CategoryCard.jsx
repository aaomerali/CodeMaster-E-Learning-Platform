import { FaCode, FaDatabase, FaMobileAlt, FaRobot } from 'react-icons/fa';

export default function CategoryCard({ title, icon, description }) {
  const icons = {
    web: <FaCode className="w-12 h-12" />,
    data: <FaDatabase className="w-12 h-12" />,
    mobile: <FaMobileAlt className="w-12 h-12" />,
    ml: <FaRobot className="w-12 h-12" />
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group">
      <div className="text-blue-600 mb-4">{icons[icon]}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}