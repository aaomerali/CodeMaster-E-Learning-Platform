import CategoryCard from '../components/CategoryCard';

const categories = [
  {
    title: 'Web Development',
    description: 'Master HTML, CSS, JavaScript and modern frameworks',
    image: 'https://picsum.photos/600/400?webdev',
    category: 'web-development'
  },
  {
    title: 'Data Science',
    description: 'Python, R, Machine Learning & Data Visualization',
    image: 'https://picsum.photos/600/400?datascience',
    category: 'data-science'
  },
  {
    title: 'Mobile Development',
    description: 'Build iOS & Android apps with React Native & Flutter',
    image: 'https://picsum.photos/600/400?mobile',
    category: 'mobile-development'
  },
  {
    title: 'Machine Learning',
    description: 'Deep learning, neural networks & AI fundamentals',
    image: 'https://picsum.photos/600/400?ml',
    category: 'machine-learning'
  }
];

export default function CategoriesPage() {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Explore Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <CategoryCard 
              key={index}
              title={cat.title}
              description={cat.description}
              image={cat.image}
              category={cat.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}