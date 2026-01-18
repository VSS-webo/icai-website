// 'use client'

// import { motion } from 'framer-motion'

// interface Track {
//   title: string
//   points: string[]
// }

// const tracks: Track[] = [
//   {
//     title: "Track 1: Electric Mobility, Power & Sustainable Energy Systems",
//     points: [
//       "Electric, hybrid, and autonomous mobility solutions",
//       "EV powertrains, batteries, charging infrastructure, and V2X",
//       "Energy storage systems and management",
//       "Smart grids, renewable integration, and power electronics",
//     ]
//   },
//   {
//     title: "Track 2: Smart Manufacturing, Automation & Intelligent Systems",
//     points: [
//       "Automation, robotics, drones, and mechatronics",
//       "Smart control systems and human–machine interaction",
//       "Additive manufacturing and advanced production technologies",
//       "Industry 5.0, smart cities, and intelligent manufacturing systems",
//     ]
//   },
//   {
//     title: "Track 3: Thermal, Design, Energy, and Agriculture Technologies",
//     points: [
//       "Thermal Sciences & Fluid Engineering",
//       "Engineering Design & Product Development",
//       "Energy Systems & Sustainable Renewable Technologies",
//       "Agricultural & Rural Engineering",
//     ]
//   },
//   {
//     title: "Track 4: Computing, AI, Data & Cyber Technologies",
//     points: [
//       "Artificial intelligence, ML & emerging algorithms",
//       "Big data and analytics",
//       "Computer Networks, cloud & edge computing",
//       "Cybersecurity and blockchain",
//     ]
//   },
//   {
//     title: "Track 5: Electronics, Embedded & Communication Technologies",
//     points: [
//       "Embedded systems, VLSI design, and Analog circuits",
//       "Optical and next-generation communication systems",
//       "IoT, Wireless and sensor networks",
//       "Digital health, biomedical systems",
//     ]
//   },
//   {
//     title: "Track 6: Printing and Packaging Technology",
//     points: [
//       "Conventional and Digital Printing Technologies",
//       "Innovations in Packaging Technology",
//       "Printed Electronics & Functional Printing",
//       "Sustainable materials & circular design",
//     ]
//   },
//   {
//     title: "Track 7: Management Strategies for Sustainable Development",
//     points: [
//       "Financial management",
//       "Human Resource Management",
//       "Operations & Supply Chain Management",
//       "Business Analytics",
//     ]
//   },
//   {
//     title: "Track 8: Applied Sciences for Engineering & Technology",
//     points: [
//       "Applied physics",
//       "Applied and green chemistry",
//       "Mathematical modelling and computational methods",
//       "Interdisciplinary applications in engineering",
//     ]
//   },
// ]

// export default function ConferenceTracks() {
//   return (
    
//     <section id="conference-track" className="py-16 bg-slate-900">
    
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section heading */}
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
//           Conference Tracks
//         </h2>

//         <p className='text-center text-gray-300 text-base md:text-lg mb-10 max-w-3xl mx-auto'>Papers are called for, but not limited to, the following topic</p>

//         {/* Tracks grid: 2 rows x 4 columns */}
//         <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
//           {tracks.map((track, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//             //   className="bg-slate-800 rounded-2xl shadow-md p-5 hover:bg-slate-800 transition-colors duration-300"
//               className="bg-slate-800 rounded-2xl shadow-md p-5 
//            hover:bg-slate-800 hover:shadow-lg hover:scale-105 
//            transition-all duration-300"

//             >

//               <h3 className="text-lg md:text-xl font-semibold mb-3 text-violet-400">{track.title}</h3>
//               <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm md:text-base">
//                 {track.points.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Track {
  title: string
  points: string[]
}

const tracks: Track[] = [
  {
    title: "Track 1: Electric Mobility, Power & Sustainable Energy Systems",
    points: [
      "Electric, hybrid, and autonomous mobility solutions",
      "EV powertrains, batteries, charging infrastructure, and V2X",
      "Energy storage systems and management",
      "Power system operation, control, and protection",
      "Smart grids, renewable integration, and power electronics",
      "Green energy solutions and net-zero technologies",
    ]
  },
  {
    title: "Track 2: Smart Manufacturing, Automation & Intelligent Systems",
    points: [
      "Automation, robotics, drones, and mechatronics",
    "Smart control systems and human–machine interaction",
    "Additive manufacturing and advanced production technologies",
    "Sustainable materials and process innovation",
    "Industry 5.0, smart cities, and intelligent manufacturing systems",
    ]
  },
  {
    title: "Track 3:  Thermal, Design, Energy, and Agriculture technologies",
    points: [
        "Thermal Sciences & Fluid Engineering",
        "Engineering Design & Product Development",
        "Energy Systems & Sustainable Renewable Technologies",
        "Agricultural & Rural Engineering",
    ]
  },
  {
    title: "Track 4: Computing, AI, Data & Cyber Technologies",
    points: [
        "Artificial intelligence, ML & emerging algorithms",
        "Big data and analytics",
        "Advanced computing architectures & software systems",
        "Computer Networks, cloud & edge computing",
        "Deep learning and computer vision",
        "Cybersecurity and blockchain",
        "Quantum computing",
        "Mobile Computing and Applications",
        "IoT applications",
        "Augmented and Virtual Realities (AR/VR)",
    ]
  },
  {
    title: "Track 5: Electronics, Embedded & Communication Technologies",
    points: [
        "Embedded systems, VLSI design, and Analog circuits",
        "Advanced control systems and signal processing",
        "Optical and next-generation communication systems",
        "IoT, Wireless and sensor networks, and cyber-physical systems",
        "Digital health, biomedical systems",
        "Satellite communication & imagery",
    ]
  },
  {
    title: "Track 6: Printing and Packaging Technology",
    points: [
        "Advances in Conventional and Digital Printing Technologies",
        "Innovations in Packaging Technology",
        "Printed Electronics & Functional Printing",
        "Inks & Materials",
        "Sustainable materials, lifecycle, and circular design",
        "Data Analytics, Process Optimization & Quality Assurance",
    ]
  },
  {
    title: "Track 7: Management Strategies for Sustainable Development",
    points: [
        "Financial management",
        "Human Resource Management",
        "Marketing Management (MM)",
        "Operations & Supply Chain Management",
        "Business Analytics",
        "Rural and Agri Business Management",
    ]
  },
  {
    title : "Track 8: Applied Sciences for Engineering & Technology",
    points: [
        "Applied physics",
        "Applied and green chemistry",
        "Mathematical modelling and computational methods",
        "Applied statistics, data analysis, and optimization",
        "Physical and chemical characterization",
        "Interdisciplinary applications of applied sciences in engineering",
    ]
  },
  
]

export default function ConferenceTracks() {
  const [activeTrack, setActiveTrack] = useState<Track | null>(null)

  return (
    <section id="conference-track" className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Conference Tracks
        </h2>

        <p className="text-center text-gray-300 mb-10 max-w-3xl mx-auto">
          Papers are called for, but not limited to, the following topics
        </p>

        {/* GRID */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr">

          {tracks.map((track, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveTrack(track)}
              className="cursor-pointer bg-slate-800 rounded-2xl p-6
                         border border-white/10 shadow-md
                         hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-violet-400">
                {track.title}
              </h3>

              <p className="mt-4 text-sm text-indigo-300">
                View topics →
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeTrack && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ duration: 0.25 }}
              className="bg-slate-900 rounded-2xl max-w-2xl w-full mx-4 shadow-xl border border-white/10"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <h3 className="text-xl font-semibold text-violet-400">
                  {activeTrack.title}
                </h3>
                <button
                  onClick={() => setActiveTrack(null)}
                  className="text-gray-400 hover:text-white text-xl"
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {activeTrack.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
