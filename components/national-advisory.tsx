'use client'
import React, { useState } from 'react'

export default function NationalAdvisorySection() {
  const [open, setOpen] = useState(false) // toggle expand/collapse

const nationalAdvisoryMembers = [
  { name: 'Dr. Dattatray Jadhav', affiliation: 'Directorate of Technical Education, Pune, Maharashtra' },
  { name: 'Dr. Mukul Sutaone', affiliation: 'IIIT, Allahabad' },
  { name: 'Dr. Aditya S. Abhyankar', affiliation: 'Department of Technology, SPPU, Pune, Maharashtra' },
  { name: 'Dr. Vikram M. Gadre', affiliation: 'IIT Mumbai, Maharashtra' },
  { name: 'Dr. Surbhi Jain', affiliation: 'Dept. of Management Science, SPPU, Pune, Maharashtra' },
  { name: 'Dr. Anupa Kumbhar', affiliation: 'Dept. of Chemistry, SPPU, Pune, Maharashtra' },
  { name: 'Dr. Yogesh Bhalerao', affiliation: 'MIT Academy of Engineering, Pune, Maharashtra' },
  { name: 'Dr. Rakesh Mote', affiliation: 'IIT Bombay, Maharashtra' },
  { name: 'Dr. D. S. Patil', affiliation: 'IIT Bombay, Maharashtra' },
  { name: 'Dr. Yogesh Hote', affiliation: 'IIT Roorkee, Uttarakhand' },
  { name: 'Dr. Amod Umarikar', affiliation: 'IIT Indore, Madhya Pradesh' },
  { name: 'Dr. Ram B. Pachori', affiliation: 'IIT Indore, Madhya Pradesh' },
  { name: 'Dr. Dharmendra Kumar Dheer', affiliation: 'NIT Patna, Bihar' },
  { name: 'Dr. Jitendra V. Tembhurne', affiliation: 'IIIT, Nagpur, Maharashtra' },
  { name: 'Dr. Pramod M. Podoale', affiliation: 'VNIT, Nagpur, Maharashtra' },
  { name: 'Dr. N. V. Suresh', affiliation: 'ASET Institute, Chennai, Tamil Nadu' },
  { name: 'Dr. Kuldeep Saxena', affiliation: 'Galgotias University, Uttar Pradesh' },
  { name: 'Dr. Y. V. Hanumantha Rao', affiliation: 'QIS College of Engineering, Andhra Pradesh' },
  { name: 'Dr. B. Nageshwar Rao', affiliation: 'KL University, Andhra Pradesh' },
  { name: 'Dr. P. Issac Prasad', affiliation: 'Mohan Babu University, Andhra Pradesh' },
  { name: 'Dr. Samarjeet Borah', affiliation: 'Sikkim Manipal Institute of Technology, Sikkim' },
  { name: 'Dr. Preetam Suman', affiliation: 'VIT Bhopal University, Madhya Pradesh' },
  { name: 'Dr. Nilanjan Dey', affiliation: 'Techno International New Town, Kolkata, West Bengal' },
  { name: 'Dr. Chandrahans Chavan', affiliation: 'Jamnalal Bajaj Institute of Management Studies, Mumbai, Maharashtra' },
  { name: 'Dr. Satishchandra Ogale', affiliation: 'IISER, Pune, Maharashtra' },
  { name: 'Dr. D. S. Watvisave', affiliation: 'Cummins College of Engineering, Pune, Maharashtra' },
  { name: 'Dr. Anniruddha Gadhikar', affiliation: 'Govt. College, Karad, Maharashtra' },
  {name: 'Updating.... '},
]


  return (
    <section id="natl-advisory" className="py-16 bg-slate-900">

    <div className="relative z-40">
      

      
    <div className="mx-auto w-full sm:w-3/4 max-w-3xl bg-slate-900 border border-white/20 rounded-xl p-6 shadow-lg transition-all duration-300">
        <h2 className="text-3xl font-semibold text-violet-400 text-center mb-6">
        National Advisory
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {nationalAdvisoryMembers.map((member, idx) => (
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
