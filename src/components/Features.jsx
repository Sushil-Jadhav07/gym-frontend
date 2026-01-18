function Features() {
  const features = [
    {
      title: "Member Management",
      description: "Complete member profiles, membership tracking, and communication tools all in one place.",
      icon: "👥"
    },
    {
      title: "Class Scheduling",
      description: "Easily schedule classes, manage instructors, and track attendance with our intuitive calendar system.",
      icon: "📅"
    },
    {
      title: "Payment Processing",
      description: "Secure payment processing with automated billing, invoicing, and financial reporting.",
      icon: "💳"
    },
    {
      title: "Attendance Tracking",
      description: "Real-time attendance monitoring with check-in/check-out functionality and detailed analytics.",
      icon: "✅"
    },
    {
      title: "Equipment Management",
      description: "Track equipment maintenance, usage, and inventory to keep your facility running smoothly.",
      icon: "🏋️"
    },
    {
      title: "Analytics & Reports",
      description: "Comprehensive dashboards and reports to make data-driven decisions for your business.",
      icon: "📊"
    }
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your gym efficiently
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

