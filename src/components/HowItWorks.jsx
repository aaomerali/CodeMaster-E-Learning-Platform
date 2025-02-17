import { FaUserPlus, FaSearch, FaBookOpen } from 'react-icons/fa';

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaUserPlus className="w-8 h-8" />,
      title: "Sign Up Free",
      description: "Create your free account in less than 2 minutes"
    },
    {
      icon: <FaSearch className="w-8 h-8" />,
      title: "Find Courses",
      description: "Browse our catalog and choose your learning path"
    },
    {
      icon: <FaBookOpen className="w-8 h-8" />,
      title: "Start Learning",
      description: "Begin your journey with hands-on exercises and projects"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <div className="bg-blue-100 p-4 rounded-full">
                  {step.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2">Step {index + 1}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}