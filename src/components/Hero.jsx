export default function Hero() {
    return (
      <section className="relative h-[600px] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-[url('https://picsum.photos/1920/1080?learning')] bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://picsum.photos/1920/1080?learning)`
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
  
        {/* Content */}
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Master Programming Skills for Free
          </h1>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Transform your career with our comprehensive collection of free programming courses. 
            Learn at your own pace from industry experts.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Start Learning Now
          </button>
        </div>
      </section>
    );
  }