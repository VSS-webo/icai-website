'use client'

import { motion } from 'framer-motion'

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
      "Smart grids, renewable integration, and power electronics",
    ]
  },
  {
    title: "Track 2: Smart Manufacturing, Automation & Intelligent Systems",
    points: [
      "Automation, robotics, drones, and mechatronics",
      "Smart control systems and human–machine interaction",
      "Additive manufacturing and advanced production technologies",
      "Industry 5.0, smart cities, and intelligent manufacturing systems",
    ]
  },
  {
    title: "Track 3: Thermal, Design, Energy, and Agriculture Technologies",
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
      "Computer Networks, cloud & edge computing",
      "Cybersecurity and blockchain",
    ]
  },
  {
    title: "Track 5: Electronics, Embedded & Communication Technologies",
    points: [
      "Embedded systems, VLSI design, and Analog circuits",
      "Optical and next-generation communication systems",
      "IoT, Wireless and sensor networks",
      "Digital health, biomedical systems",
    ]
  },
  {
    title: "Track 6: Printing and Packaging Technology",
    points: [
      "Conventional and Digital Printing Technologies",
      "Innovations in Packaging Technology",
      "Printed Electronics & Functional Printing",
      "Sustainable materials & circular design",
    ]
  },
  {
    title: "Track 7: Management Strategies for Sustainable Development",
    points: [
      "Financial management",
      "Human Resource Management",
      "Operations & Supply Chain Management",
      "Business Analytics",
    ]
  },
  {
    title: "Track 8: Applied Sciences for Engineering & Technology",
    points: [
      "Applied physics",
      "Applied and green chemistry",
      "Mathematical modelling and computational methods",
      "Interdisciplinary applications in engineering",
    ]
  },
]

export default function ConferenceTracks() {
  return (
    
    <section id="conference-track" className="py-16 bg-slate-900">
    
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Conference Tracks
        </h2>

        <p className='text-center text-gray-300 text-base md:text-lg mb-10 max-w-3xl mx-auto'>Papers are called for, but not limited to, the following topic</p>

        {/* Tracks grid: 2 rows x 4 columns */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {tracks.map((track, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            //   className="bg-slate-800 rounded-2xl shadow-md p-5 hover:bg-slate-800 transition-colors duration-300"
              className="bg-slate-800 rounded-2xl shadow-md p-5 
           hover:bg-slate-800 hover:shadow-lg hover:scale-105 
           transition-all duration-300"

            >
                
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-violet-400">{track.title}</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm md:text-base">
                {track.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
