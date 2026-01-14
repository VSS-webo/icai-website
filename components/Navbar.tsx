'use client'

export default function Navbar(){
  return(
    <nav className="fixed top-1 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold text-lg">ICAI 2026</span>
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-indigo-400">About</a>
          <a href="#speakers" className="hover:text-indigo-400">Speakers</a>
          <a href="#schedule" className="hover:text-indigo-400">Schedule</a>
          <a href="#venue" className="hover:text-indigo-400">Venue</a>
          <a href="#register" className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500">Register</a>
        </div>
      </div>
    </nav>
  )
}