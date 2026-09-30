import React from 'react'


function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 pt-24"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>

          <p className="text-cyan-400 text-lg mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Anamika V
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            Python Django Developer
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
            I build web applications and backend solutions using
            Python, Django, and Django REST Framework.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-gray-600 text-white font-semibold hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* Right Developer Card */}
        <div className="flex justify-center md:justify-end">

          <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl border border-cyan-400/20 bg-white/[0.03] flex items-center justify-center">

            <div className="text-center">

              <div className="text-6xl mb-5">
                &lt;/&gt;
              </div>

              <p className="text-white text-xl font-semibold">
                Python & Django
              </p>

              <p className="text-gray-500 mt-2">
                Backend Developer
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;