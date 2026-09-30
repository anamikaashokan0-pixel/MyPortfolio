import React from 'react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
    <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-wide">
            <span className="text-cyan-400">&lt;</span>Portfolio<span className="text-cyan-400">/&gt;</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm text-gray-300 hover:text-cyan-400 transition">Home</a>	
            <a href="#about" className="text-sm text-gray-300 hover:text-cyan-400 transition">About</a>
            <a href="#education" className="text-sm text-gray-300 hover:text-cyan-400 transition">Education</a>
            <a href="#skills" className="text-sm text-gray-300 hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="text-sm text-gray-300 hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="px-4 py-2 rounded-lg border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition duration-300">Contact</a>
        </div>
    </nav>
</header>
  )
}

export default Navbar