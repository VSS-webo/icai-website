'use client'
import React, { useState } from 'react'

export default function AdvisorySection() {
  const [open, setOpen] = useState(false) // toggle expand/collapse

  const advisoryMembers = [
    { name: 'Dr. Manoj Mugale', affiliation: 'Eastern Kentucky University, Richmond, Kentucky, US' },
    { name: 'Dr. Manoj A Joshi', affiliation: 'Advanced CMOS Technology Developments, TSMC, California US' },
    { name: 'Dr. Ajay P. Singh', affiliation: 'Ames National Laboratory, Iowa, US' },
    { name: 'Dr. Vinod Kumar Shukla', affiliation: 'Amity University Dubai, UAE' },
    { name: 'Dr. Vijay Varade', affiliation: 'Amity University, Dubai, UAE' },
    { name: 'Dr. Bhajan L Rahanu', affiliation:'Universiti Teknologi Petronas, Malaysia'},
    {name : 'Dr. Norhashila Hashim',affiliation:'Universiti Putra Malaysi'},
   
    { name: 'Dr. Chan Mieow Kee', affiliation: 'SEGi University, Malaysia' },
    { name: 'Dr. Apurav Koyande', affiliation: 'Universiti Teknologi Petronas, Malaysia' },
    { name: 'Dr. Zuhaina Zakaria', affiliation: 'MARA University of Technology, Malaysia' },
    { name: 'Dr. Arvind R. Singh', affiliation: 'Hanjiang Normal University, Hubei Shiyan, China' },
    { name: 'Dr. Palanivel Rathinasabapathi Velmurugan', affiliation: 'Berlin School of Business and Innovation, Berlin, Germany' },
    { name: 'Dr. Juntakan Taweekun', affiliation: 'Prince of Songkla University (PSU), Thailand' },
    { name: 'Dr. Parmal Singh Solanki', affiliation: 'University of Technology and Applied Sciences, Suhar, Sultanate of Oman' },
    { name: 'Dr. Nitin S. Goje', affiliation: 'Webster University, Tashkent, Uzbekistan' },
    { name: 'Dr. Mebrahtom Gabresemati', affiliation: 'Gachon University, South Korea' },
    { name: 'Dr. Nishith B. Desai', affiliation: 'Technical University of Denmark, Denmark' },
    { name: 'Updating ....'},
]     
  

  return (
    <section id="intl-advisory" className="py-16 bg-slate-900">

    <div className="relative z-40">
      

      
    <div className="mx-auto w-full sm:w-3/4 max-w-3xl bg-slate-900 border border-white/20 rounded-xl p-6 shadow-lg transition-all duration-300">
        <h2 className="text-3xl font-semibold text-violet-400 text-center mb-6">
        International Advisory
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {advisoryMembers.map((member, idx) => (
            <div
            key={idx}
            className="bg-slate-800/70 border border-white/20 rounded-lg p-3 hover:shadow-md transition-shadow"
            >
            <p className="text-white font-medium">{member.name}</p>
            <p className="text-gray-300 text-sm mt-1">{member.affiliation}</p>
            </div>
        ))}
        </div>
    </div>

      
    </div>
    </section>
  )
}
