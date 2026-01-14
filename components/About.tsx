'use client'
import {useState} from 'react'

export default function About(){
  const [openPune,setOpenPune]=useState(false)
  const [openInstitute,setOpenInstitute]=useState(false)

  return(
    <section
      id="about"
      className="scroll-mt-20 py-20 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-12 text-center">
          About
        </h2>

        {/* ABOUT CONFERENCE – FULL WIDTH */}
        <div className="mb-12 rounded-2xl bg-slate-900 p-8">
          <h3 className="text-2xl font-medium mb-4">
            About the Conference
          </h3>
          <p className="text-slate-300 leading-relaxed">
            ICAI 2026 is an international forum that brings together
            researchers, academicians, and industry professionals
            from across the globe to exchange ideas and discuss
            emerging trends in computing, artificial intelligence,
            data science, and interdisciplinary technologies.
          </p>
        </div>

        {/* TWO PARALLEL PANELS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* PUNE */}
          <div
            onClick={()=>setOpenPune(!openPune)}
            className="cursor-pointer rounded-2xl bg-slate-900 p-6 hover:bg-slate-800 transition"
          >
            <h3 className="text-2xl font-medium mb-3">
              About Pune
            </h3>

            <p className="text-slate-300">
              Pune is known as the educational and cultural capital
              of Maharashtra.
            </p>

            {openPune && (
              <p className="mt-4 text-slate-400 leading-relaxed">
                Pune hosts numerous universities, research centers,
                and IT industries. With its pleasant climate,
                historical significance, and vibrant academic
                ecosystem, Pune is an ideal destination for
                international conferences and global collaboration.
              </p>
            )}
          </div>

          {/* INSTITUTE */}
          <div
            onClick={()=>setOpenInstitute(!openInstitute)}
            className="cursor-pointer rounded-2xl bg-slate-900 p-6 hover:bg-slate-800 transition"
          >
            <h3 className="text-2xl font-medium mb-3">
              About the Institute
            </h3>

            <p className="text-slate-300">
              The organizing institute is committed to excellence
              in education and research.
            </p>

            {openInstitute && (
              <p className="mt-4 text-slate-400 leading-relaxed">
                The institute provides state-of-the-art
                infrastructure, experienced faculty, and a strong
                emphasis on innovation, interdisciplinary research,
                and industry collaboration, fostering an environment
                of academic excellence and global engagement.
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
