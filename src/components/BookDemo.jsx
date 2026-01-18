function BookDemo() {
  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ready to Transform Your Gym Management?
        </h2>
        <p className="text-xl text-purple-100 mb-8">
          Book a free demo and see how GAMA can revolutionize your operations
        </p>
        <form className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="text"
              placeholder="Gym Name"
              className="px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <textarea
            placeholder="Tell us about your requirements"
            rows="4"
            className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white mb-6"
          ></textarea>
          <button
            type="submit"
            className="px-8 py-3 bg-white text-purple-600 rounded-lg text-lg font-semibold hover:bg-purple-50 transform hover:scale-105 transition-all shadow-lg"
          >
            Book Your Free Demo
          </button>
        </form>
      </div>
    </section>
  )
}

export default BookDemo

