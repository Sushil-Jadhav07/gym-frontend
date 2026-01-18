function WhyChooseUs() {
  const reasons = [
    {
      title: "Easy to Use",
      description: "Intuitive interface designed for users of all technical levels",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Scalable",
      description: "Grows with your business from small studios to large facilities",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you succeed",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      title: "Cost Effective",
      description: "Affordable pricing plans that fit your budget and needs",
      gradient: "from-blue-500 to-purple-500"
    }
  ]

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Why Choose GAMA?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our comprehensive solution
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${reason.gradient} rounded-full flex items-center justify-center`}>
                <span className="text-3xl text-white font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

