import { useParams } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// Mock data - replace with your actual data source
const mockCourse = {
  id: 1,
  title: 'Complete Web Development Bootcamp',
  category: 'Web Development',
  difficulty: 'Beginner',
  duration: '30 hours',
  rating: 4.8,
  reviews: 1245,
  instructor: {
    name: 'John Doe',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    bio: 'Full-stack developer with 10+ years of experience'
  },
  description: 'Master web development with HTML, CSS, JavaScript, and modern frameworks',
  learningOutcomes: [
    'Build responsive websites from scratch',
    'Create full-stack applications',
    'Understand modern JavaScript frameworks',
    'Deploy applications to production'
  ],
  curriculum: [
    {
      module: 'HTML Fundamentals',
      lessons: [
        { title: 'Introduction to HTML', duration: '45 mins', preview: true },
        { title: 'HTML Forms', duration: '1 hour' },
      ]
    },
    {
      module: 'CSS Basics',
      lessons: [
        { title: 'CSS Selectors', duration: '30 mins', preview: true },
        { title: 'Flexbox Layout', duration: '1.5 hours' },
      ]
    }
  ],
  prerequisites: ['Basic computer skills', 'Text editor knowledge'],
  language: 'English',
  enrolled: 2541,
  image: 'https://picsum.photos/1600/900?webdev'
};

export default function CourseDetailsPage() {
  const { courseId } = useParams();
  const course = mockCourse; // Replace with actual data fetching

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Course Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {course.category}
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {course.difficulty} Level
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="ml-2 text-gray-600">({course.rating}/5)</span>
                </div>
                <span className="text-gray-600">{course.reviews} reviews</span>
                <span className="text-gray-600">{course.enrolled} students enrolled</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={course.instructor.photo} 
                  alt={course.instructor.name} 
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{course.instructor.name}</p>
                  <p className="text-gray-600 text-sm">{course.instructor.bio}</p>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Enroll Now
              </button>
            </div>
            <div className="md:w-1/3">
              <img 
                src={course.image} 
                alt={course.title} 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Course Overview */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
            <p className="text-gray-600 mb-8">{course.description}</p>
            
            <h3 className="text-xl font-semibold mb-4">What you'll learn</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.learningOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          {/* Course Details Sidebar */}
          <div className="md:col-span-1 bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Course Details</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{course.duration} of content</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{course.difficulty} Level</span>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Prerequisites</h4>
                <ul className="list-disc list-inside">
                  {course.prerequisites.map((prereq, index) => (
                    <li key={index} className="text-gray-600">{prereq}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span>Language: {course.language}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Course Curriculum</h2>
        <div className="bg-white rounded-lg shadow">
          {course.curriculum.map((module, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between items-center w-full px-6 py-4 border-b">
                    <div className="text-left">
                      <h3 className="font-semibold">Module {index + 1}: {module.module}</h3>
                      <span className="text-sm text-gray-600">
                        {module.lessons.length} lessons
                      </span>
                    </div>
                    <ChevronDownIcon className={`w-6 h-6 transform transition ${open ? 'rotate-180' : ''}`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 py-4">
                    <div className="space-y-4">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="flex justify-between items-center py-2">
                          <div className="flex items-center gap-3">
                            {lesson.preview && (
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                                Free Preview
                              </span>
                            )}
                            <span>{lesson.title}</span>
                          </div>
                          <span className="text-gray-600">{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </section>
    </div>
  );
}