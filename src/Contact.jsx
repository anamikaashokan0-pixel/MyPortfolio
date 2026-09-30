import React from 'react'


function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Contact
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Get In Touch
        </h2>

        <div className="max-w-2xl">

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I'm currently looking for opportunities to start my career
            as a Python Django Developer. Feel free to get in touch with me.
          </p>

          <div className="space-y-5">

            <a
              href="mailto:anamikaashokan0@gmail.com"
              className="block text-gray-300 hover:text-cyan-400 transition"
            >
              <span className="text-cyan-400 font-semibold">Email:</span>{" "}
              anamikaashokan0@gmail.com
            </a>

            <a
              href="tel:+918590479979"
              className="block text-gray-300 hover:text-cyan-400 transition"
            >
              <span className="text-cyan-400 font-semibold">Phone:</span>{" "}
              +91 8590479979
            </a>

            <a
              href="https://github.com/anamikaashokan0-pixel"
              target="_blank"
              rel="noreferrer"
              className="block text-gray-300 hover:text-cyan-400 transition"
            >
              <span className="text-cyan-400 font-semibold">GitHub:</span>{" "}
              anamikaashokan0-pixel
            </a>

            <a
              href="www.linkedin.com/in/anamikav25"
              target="_blank"
              rel="noreferrer"
              className="block text-gray-300 hover:text-cyan-400 transition"
            >
              <span className="text-cyan-400 font-semibold">LinkedIn:</span>{" "}
              anamikav25
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;