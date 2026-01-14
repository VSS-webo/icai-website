'use client'
import {motion} from 'framer-motion'

export default function Hero(){
  return(
    <section className="min-h-screen pt-16 flex items-center justify-center text-center px-6 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700">
      <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">ICAI 2026</h1>
        <p className="text-xl md:text-2xl mb-4">International Conference on Advanced Innovations</p>
        <p className="mb-8">March 18–20, 2026 · Pune, India</p>
        <div className="flex gap-4 justify-center">
          <a className="px-6 py-3 bg-black/30 rounded-xl hover:bg-black/50" href="#register">Register Now</a>
          <a className="px-6 py-3 border border-white/40 rounded-xl hover:bg-white/10" href="#speakers">View Speakers</a>
        </div>
      </motion.div>
    </section>
  )
}