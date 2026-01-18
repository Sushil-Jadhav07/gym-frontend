function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 pt-32  px-4 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(147,51,234,0.18),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_55%)]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4">
            <span className="block mb-1">The gym platform to</span>
            <span className="block">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                grow
              </span>{' '}
              your business.
            </span>
          </h1>
          <p className="text-sm md:text-base text-gray-500 mb-6">
            The reference tool for modern gyms to manage members, payments, and operations.
          </p>
          <div className="flex justify-center mb-10">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm md:text-base font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transform hover:-translate-y-0.5 transition-all">
              Book a Demo
            </button>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <div className="relative w-full max-w-10xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 via-blue-500/40 to-purple-500/50 blur-2xl opacity-70" />
            <div className="relative h-[300px] rounded-t-3xl bg-white border border-white/70 shadow-[0_24px_60px_rgba(15,23,42,0.15)] px-6 py-5 md:px-8 md:py-8">

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

