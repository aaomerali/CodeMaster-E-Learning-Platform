export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">CodeMaster</h4>
              <p className="text-gray-400">
                Empowering developers through free education since 2023
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Courses</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>Mobile Development</li>
                <li>Data Science</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            © 2023 CodeMaster. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }