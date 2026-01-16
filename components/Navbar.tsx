// 'use client'

// export default function Navbar(){
//   return(
//     <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-white/10">
//       <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
//         <span className="font-semibold text-lg">ICAI 2026</span>
//         <div className="flex gap-6 text-sm">
//           <a href="#about" className="hover:text-indigo-400">About</a>
//           <a href="#speakers" className="hover:text-indigo-400">Speakers</a>
//           <a href="#schedule" className="hover:text-indigo-400">Schedule</a>
//           <a href="#venue" className="hover:text-indigo-400">Venue</a>
//           <a href="#register" className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500">Register</a>
//         </div>
//       </div>
//     </nav>
//   )
// }


// 'use client'
// import Image from 'next/image'

// export default function Navbar(){
//   return(
//     <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-white/10 font-sans">
//       <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-start gap-8">
        
        


//         {/* Logo / Title */}
//         <span className="font-semibold text-lg text-white mr-6">ICAETM 2026</span>

//         {/* Tabs */}
//         <div className="hidden md:flex gap-4 text-base items-center">

//           <a 
//             href="#about" 
//             className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
//           >
//             About
//           </a>

//           <a 
//             href="#conference-track" 
//             className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
//           >
//             Conference Track
//           </a>
//           <a 
//             href="#important-dates" 
//             className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
//           >
//             Important Dates
//           </a>
//           <a 
//             href="#committee" 
//             className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
//           >
//             Committee
//           </a>
//           <a 

//             href="#Registration" 
//             className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
//           >
//             Registration
//           </a>
          
//           <a 
//             href="#speakers" 
//             className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
//           >
//             Speakers
//           </a>
//           <a 
//             href="#schedule" 
//             className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
//           >
//             Schedule
//           </a>
//           <a 
//             href="#venue" 
//             className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
//           >
//             Venue
//           </a>

//           {/* Register Button */}
//           <a 
//             href="#register" 
//             className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition-colors duration-200"
//           >
//             Register
//           </a>
//         </div>

//         {/* Mobile placeholder */}
//         <div className="md:hidden">
//           {/* Hamburger icon can go here */}
//         </div>
//       </div>
//     </nav>
//   )
// }



// 'use client'
// import { useEffect, useState } from 'react'

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20)
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   return (
//     <nav className="fixed top-0 w-full z-50">
      
//       {/* This NEVER moves */}
//       <div
//         className={`
//           mx-auto
//           backdrop-blur bg-slate-950/80
//           border border-white/10
//           transition-all duration-300
//           ${scrolled
//             ? 'max-w-7xl rounded-full shadow-lg'
//             : 'w-full rounded-none border-b'
//           }
//         `}
//       >
//         <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-8 font-sans">

//           <span className="font-semibold text-lg text-white mr-6">
//             ICAETM 2026
//           </span>

//           <div className="hidden md:flex gap-4 text-base items-center">
//             <a href="#about" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
//               About
//             </a>
//             <a href="#conference-track" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
//               Conference Track
//             </a>
//             <a href="#important-dates" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
//               Important Dates
//             </a>
//             <a href="#committee" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
//               Committee
//             </a>
//             <a href="#Registration" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
//               Registration
//             </a>
//             <a href="#speakers" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
//               Speakers
//             </a>
//             <a href="#schedule" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
//               Schedule
//             </a>
//             <a href="#venue" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
//               Venue
//             </a>
            
//             <a
//             href="https://cmt3.research.microsoft.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition-colors duration-200"
//           >
//             Register
//           </a>
//           </div>
//         </div>
//       </div>

//     </nav>
//   )
// }



'use client'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50">
      <div
        className={`
          mx-auto
          backdrop-blur bg-slate-950/80
          border border-white/10
          transition-all duration-300
          ${scrolled
            ? 'max-w-7xl rounded-full shadow-lg'
            : 'w-full rounded-none border-b'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-sans">

          {/* Logo */}
          <span className="font-semibold text-lg text-white mr-6">
            ICAETM 2026
          </span>

          {/* Navbar Links */}
          <div className="hidden md:flex items-center gap-4 text-base">

            <a href="#about" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
              About
            </a>
            <a href="#conference-track" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
              Conference Track
            </a>
            <a href="#important-dates" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
              Important Dates
            </a>
            <a href="#committee" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
              Committee
            </a>
            <a href="#Registration" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
              Registration
            </a>
            <a href="#speakers" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
              Speakers
            </a>
            <a href="#schedule" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
              Schedule
            </a>
            <a href="#venue" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
              Venue
            </a>

            {/* Register Button */}
            <a
              href="https://cmt3.research.microsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition-colors duration-200"
            >
              Register
            </a>

            {/* Advisory Dropdown (Three horizontal lines) */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex flex-col justify-between w-8 h-6 px-1 py-1 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors duration-200"
              >
                <span className="block h-0.5 w-full bg-white rounded"></span>
                <span className="block h-0.5 w-full bg-white rounded"></span>
                <span className="block h-0.5 w-full bg-white rounded"></span>
              </button>

              {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 rounded-3xl bg-slate-800/80 backdrop-blur border border-white/20 shadow-lg py-2 px-2 z-50 flex flex-col gap-1">

                  
                    <a  href="#intl-advisory" className="block text-gray-100 hover:bg-indigo-600/30 rounded-lg px-4 py-2">
                      International Advisory
                    </a>
                  
                  
                    <a href="#natl-advisory" className="block text-gray-100 hover:bg-indigo-600/30 rounded-lg px-4 py-2">
                      National Advisory
                    </a>
                  
                </div>
              )}
            </div>

          </div>

          {/* Mobile Placeholder */}
          <div className="md:hidden">
            {/* Hamburger menu can go here */}
          </div>

        </div>
      </div>
    </nav>
  )
}
