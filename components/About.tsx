// 'use client'
// import {useState} from 'react'

// export default function About(){
//   const [openPune,setOpenPune]=useState(false)
//   const [openInstitute,setOpenInstitute]=useState(false)

//   return(
//     <section
//       id="about"
//       className="scroll-mt-20 py-20 bg-slate-950"
//     >
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-semibold mb-12 text-center">
//           About
//         </h2>


//         {/* ABOUT CONFERENCE – FULL WIDTH */}
//         <div className="mb-12 rounded-2xl bg-slate-900 p-8">
//           <h3 className="text-2xl font-medium mb-4">
//             About the Conference
//           </h3>
//           <p className="text-slate-300 leading-relaxed">
//             ICAI 2026 is an international forum that brings together
//             researchers, academicians, and industry professionals
//             from across the globe to exchange ideas and discuss
//             emerging trends in computing, artificial intelligence,
//             data science, and interdisciplinary technologies.
//           </p>
//         </div>

//         {/* TWO PARALLEL PANELS */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//           {/* PUNE */}
//           <div
//             onClick={()=>setOpenPune(!openPune)}
//             className="cursor-pointer rounded-2xl bg-slate-900 p-6 hover:bg-slate-800 transition"
//           >
//             <h3 className="text-2xl font-medium mb-3">
//               About Pune
//             </h3>

//             <p className="text-slate-300">
//               Pune is known as the educational and cultural capital
//               of Maharashtra.
//             </p>

//             {openPune && (
//               <p className="mt-4 text-slate-400 leading-relaxed">
//                 Pune hosts numerous universities, research centers,
//                 and IT industries. With its pleasant climate,
//                 historical significance, and vibrant academic
//                 ecosystem, Pune is an ideal destination for
//                 international conferences and global collaboration.
//               </p>
//             )}
//           </div>

//           {/* INSTITUTE */}
//           <div
//             onClick={()=>setOpenInstitute(!openInstitute)}
//             className="cursor-pointer rounded-2xl bg-slate-900 p-6 hover:bg-slate-800 transition"
//           >
//             <h3 className="text-2xl font-medium mb-3">
//               About the Institute
//             </h3>

//             <p className="text-slate-300">
//               The organizing institute is committed to excellence
//               in education and research.
//             </p>

//             {openInstitute && (
//               <p className="mt-4 text-slate-400 leading-relaxed">
//                 The institute provides state-of-the-art
//                 infrastructure, experienced faculty, and a strong
//                 emphasis on innovation, interdisciplinary research,
//                 and industry collaboration, fostering an environment
//                 of academic excellence and global engagement.
//               </p>
//             )}
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }



// 'use client'
// import { motion } from 'framer-motion'
// import Image from 'next/image'

// export default function AboutCreative() {
//   return (
//     <section id="about" className="py-16 bg-slate-900">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section heading */}
//         <h2 className="text-5xl font-bold text-center text-white mb-12">
//           About PVG & ICAETM 2026
//         </h2>

//         {/* PVG Overview with image */}
//         <motion.div
//           className="md:flex md:items-center md:gap-12 mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="md:w-1/2 mb-6 md:mb-0">
//             <Image
//               src="/pvgcoet.jpg"
//               alt="PVG Campus"
//               width={600}
//               height={400}
//               className="rounded-2xl shadow-lg"
//             />
//           </div>
//           <div className="md:w-1/2">
//             <h3 className="text-3xl font-semibold text-violet-400 mb-4">Pune Vidyarthi Griha (PVG)</h3>
//             <p className="text-gray-200 mb-2">
//               <a href="https://www.punevidyarthigriha.org/" target="_blank" className="text-sky-400 hover:underline">PVG</a>, established in 1909, provides inclusive, value-based, and quality education across Pune, Mumbai, and Nashik. Over a century, PVG evolved into a comprehensive educational organization with programs from pre-primary to higher education in engineering, technology, management, science, and allied disciplines.
//             </p>
//             <p className="text-gray-200">
//               PVG pioneered technical education, being the first in India to introduce formal Printing Engineering & Communication Technology programs since 1926. Social responsibility is a core value through hostels for needy students and an old-age home in Pune.
//             </p>
//           </div>
//         </motion.div>

//         {/* PVG COETM with reversed layout */}
//         <motion.div
//           className="md:flex md:items-center md:gap-12 mb-16 flex-col-reverse md:flex-row-reverse"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//         >
//           <div className="md:w-1/2 mb-6 md:mb-0">
//             <Image
//               src="/coetm-building.jpg"
//               alt="PVG COETM"
//               width={600}
//               height={400}
//               className="rounded-2xl shadow-lg"
//             />
//           </div>
//           <div className="md:w-1/2">
//             <h3 className="text-3xl font-semibold text-violet-400 mb-4">PVG’s COETM, Pune</h3>
//             <p className="text-gray-200 mb-2">
//               <a href="https://www.pvgcoet.ac.in/" target="_blank" className="text-sky-400 hover:underline">PVG’s COETM</a>, established in 1985, is a premier autonomous institute permanently affiliated to SPPU, approved by AICTE, accredited by NAAC ‘A’ Grade and NBA programs.
//             </p>
//             <p className="text-gray-200">
//               With modern labs, library, research ecosystem, and advanced computing facilities, COETM offers Undergraduate, Postgraduate, and Doctoral programs in Engineering, Technology, & Management — providing a perfect platform for learning, innovation, and interdisciplinary collaboration.
//             </p>
//           </div>
//         </motion.div>

//         {/* About Conference */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="mb-16 text-center"
//         >
//           <h3 className="text-3xl font-semibold text-violet-400 mb-4">About ICAETM 2026</h3>
//           <p className="text-gray-200 mb-4">
//             ICAETM 2026 brings together academicians, researchers, industry experts, and students on a global platform to explore innovations, interdisciplinary research, and sustainable engineering solutions.
//           </p>
//           <p className="text-gray-200">
//             The conference features keynote talks, technical sessions, and peer-reviewed paper presentations, with selected papers published in reputed Scopus-indexed journals/proceedings.
//           </p>
//         </motion.div>

//         {/* Objectives as cards */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-6"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//         >
//           {[
//             "Provide a premier international platform for researchers, academics, and industry professionals.",
//             "Exchange cutting-edge knowledge and present innovative research findings.",
//             "Foster collaborations across Engineering, Technology & Management domains."
//           ].map((obj, i) => (
//             <div key={i} className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
//               <p className="text-gray-200">{obj}</p>
//             </div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   )
// }




'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'


const punePlaces = [
{ src: '/pune/dagduseth-bappa.jpg', name: 'Dagdusheth Halwai Ganpati' },
{ src: '/pune/shaniwarwada.jpg', name: 'Shaniwar Wada' },
{ src: '/pune/sinhagad.jpg', name: 'Sinhagad Fort' },
{ src: '/pune/torna.jpg', name: 'Torna Fort' },
{ src: '/pune/lohagad.jpg', name: 'Lohagad Fort' },
{ src: '/pune/shivneri.jpg', name: 'Shivneri Fort' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 space-y-24">

        {/* ===== About Conference ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            About ICAETM 2026
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            The International Conference on Advances in Engineering, Technology
            and Management (ICAETM-2026) aims to bring together academicians,
            researchers, industry experts, and students on a global platform
            to exchange innovative ideas, present cutting-edge research, and
            discuss sustainable engineering solutions.
          </p>
        </motion.div>

        
        {/* ===== About PVG ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
        <div className="grid md:grid-cols-2 gap-12 items-center
                        rounded-[2.75rem]
                        border border-white/15
                        p-12 md:p-16">

          {/* Image */}
          <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/about/pvg.jpg"
              alt="Pune Vidyarthi Griha"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-3xl font-semibold text-violet-400 mb-3">
              Pune Vidyarthi Griha (PVG)
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Established in 1909, Pune Vidyarthi Griha (PVG) is a premier
              charitable educational institution committed to inclusive,
              value-based, and quality education. With institutions across
              Pune, Mumbai, and Nashik, PVG has played a pioneering role in
              technical and professional education in India.
            </p>
          </div>

        </div>
        </motion.div>

        {/* PVG COET*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
        <div className="grid md:grid-cols-2 gap-12 items-center
                        rounded-[2.75rem]
                        border border-white/15
                        p-12 md:p-16">

          {/* Image */}
          <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/about/pvgcoet.jpg"
              alt="PVG COET"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-3xl font-semibold text-violet-400 mb-3 text-center">
              PVG’s COETM, Pune-09

            </h3>
            <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12 text-base md:text-s">
              Pune Vidyarthi Griha’s College of Engineering, Technology and Management (PVG’s COETM),
              Pune, India, <a href="https://www.pvgcoet.ac.in/" target='_blank' className="text-sky-400 hover:underline">PVGCOET</a>,  established in 1985, is a premier autonomous institute
              permanently affiliated to Savitribai Phule Pune University (SPPU) and approved by AICTE. The
              institute is accredited with NAAC ‘A’ Grade (Third Cycle) under the revised ICT framework, and
              almost all programs are NBA accredited, reflecting its strong commitment to academic excellence
              and quality education.
              The institute offers a wide range of Undergraduate, Postgraduate, and Doctoral programs
              in Engineering, Technology, & Management. With state-of-the-art infrastructure, advanced
              laboratories, modern computing facilities, a well-equipped library, and a strong research ecosystem,
              PVG’s COETM provides an ideal platform for learning, innovation, and interdisciplinary collaboration.
            </p>
          </div>

        </div>
        </motion.div>


                {/* ===== About Pune ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl font-semibold text-violet-400 mb-3 text-center">
            About Pune
          </h3>

          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12 text-base md:text-s">
            Pune, a major city in the state of Maharashtra, is situated at the confluence of the Mula and Mutha rivers and is
            known for its rich cultural heritage and academic excellence. Often called the “Oxford of the East,” Pune hosts
            several renowned universities, research institutions, and centers of higher learning. The city’s historical legacy
            is reflected in historic landmarks such as Shaniwar Wada, Sinhagad, Purandar, Lohagad, Torna, and
            Shivneri, which stand as symbols of the region’s glorious past. Along with its historical significance, Pune has
            emerged as a leading industrial and technological hub with a strong presence in automobile manufacturing,
            information technology, electronics, and engineering industries, making it an ideal destination for international
            conferences and academic collaboration.
          </p>

          

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {punePlaces.map((place, idx) => (
              <div
                key={idx}
                className="relative h-56 rounded-2xl overflow-hidden shadow-lg group"
              >
                {/* Image */}
                <Image
                  src={place.src}
                  alt={place.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Bottom overlay (¼ height) */}
                <div className="absolute bottom-0 left-0 w-full h-1/4 
                                bg-gradient-to-t from-black/80 to-black/20
                                flex items-center px-4
                                translate-y-full group-hover:translate-y-0
                                transition-transform duration-300">
                  <p className="text-white text-sm font-medium tracking-wide">
                    {place.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  )
}

