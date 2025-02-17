import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import CourseCard from '../components/CourseCard';
import CategoryCard from '../components/CategoryCard';
import HowItWorks from '../components/HowItWorks';
import CTABanner from '../components/CTABanner';


const courses = [
  {
    title: 'React Fundamentals',
    duration: '6 hours',
    image: 'https://picsum.photos/400/300?random=1'
  },
  {
    title: 'Python for Beginners',
    duration: '8 hours',
    image: 'https://picsum.photos/400/300?random=2'
  },
  {
    title: 'JavaScript Masterclass',
    duration: '10 hours',
    image: 'https://picsum.photos/400/300?random=3'
  },
  {
    title: 'Web Development Basics',
    duration: '12 hours',
    image: 'https://picsum.photos/400/300?random=4'
  }
];

const categories = [
    {
      title: "Web Development",
      icon: "web",
      description: "Master HTML, CSS, JavaScript and modern frameworks"
    },
    {
      title: "Data Science",
      icon: "data",
      description: "Python, R, Machine Learning & Data Visualization"
    },
    {
      title: "Mobile Development",
      icon: "mobile",
      description: "Build iOS & Android apps with React Native & Flutter"
    },
    {
      title: "Machine Learning",
      icon: "ml",
      description: "Deep learning, neural networks & AI fundamentals"
    }
  ];

export default function Home() {
  return (
    <div>
      <Hero />
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose CodeMaster?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon="video"
              title="Video Lessons"
              description="High-quality video courses with practical examples"
            />
            <FeatureCard
                icon="progress"
                title="Progress Tracking"
                description="Track your learning progress and resume where you left off"
            />
            <FeatureCard
              icon="clock"
              title="Flexible Learning"
              description="Learn at your own pace anytime, anywhere"
            />
            <FeatureCard
              icon="graduate"
              title="Expert Teachers"
              description="Learn from industry professionals"
            />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

    {/* CTABanner Section */}
      <CTABanner />

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />



    </div>
  );
}