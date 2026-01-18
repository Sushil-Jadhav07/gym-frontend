function AboutSoftware() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About GAMA
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The all-in-one solution for modern gym management
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Revolutionizing Gym Management
            </h3>
            <p className="text-gray-600 mb-4 text-lg">
              GAMA (Gym Admin Management by Asynk) is a comprehensive platform designed to 
              simplify and automate every aspect of gym administration. From member management 
              to class scheduling, payment processing to attendance tracking, GAMA provides 
              everything you need to run your fitness facility efficiently.
            </p>
            <p className="text-gray-600 mb-4 text-lg">
              Built with modern technology and user experience in mind, GAMA helps gym owners 
              and administrators save time, reduce errors, and focus on what matters most - 
              growing their business and serving their members.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3"></span>
                Cloud-based solution accessible anywhere
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3"></span>
                Real-time data synchronization
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3"></span>
                Secure and compliant with industry standards
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-4xl text-white font-bold">G</span>
              </div>
              <p className="text-gray-600 text-lg">Your Gym Management Partner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSoftware

