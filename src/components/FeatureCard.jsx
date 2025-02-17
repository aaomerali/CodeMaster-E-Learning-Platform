import { FaVideo, FaTasks, FaClock, FaUserGraduate } from 'react-icons/fa';

export default function FeatureCard({ icon, title, description }) {
  const icons = {
    video: <FaVideo className="w-8 h-8" />,
    progress: <FaTasks className="w-8 h-8" />, // Changed from certificate
    clock: <FaClock className="w-8 h-8" />,
    graduate: <FaUserGraduate className="w-8 h-8" />,
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-blue-600 mb-4">{icons[icon]}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}