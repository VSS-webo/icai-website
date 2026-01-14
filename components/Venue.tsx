// export default function Venue(){
//   return(
//     <section id="venue" className="py-20 bg-slate-900">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-semibold mb-6">Venue</h2>
//         <p className="text-slate-300 mb-4">PVG COET, Pune, India</p>
//         <div className="h-64 rounded-2xl bg-slate-800 flex items-center justify-center">
//         <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8610613606843!2d73.84985691076977!3d18.489951582525133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c004bc8e1d8f%3A0x12df641707ea878e!2sPVG%27S%20College%20Of%20Engineering%2C%20Technology%20And%20Management!5e0!3m2!1sen!2sin!4v1768400456078!5m2!1sen!2sin"
//         className="w-full h-full"
//         style={{ border: 0 }}
//         allowFullScreen
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//         title="Conference Venue Map"
//       />
        
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'

export default function VenueContact() {
  return (
    <section id="venue" className="py-16 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
          Venue & Contact
        </h2>
        <p className="text-center text-gray-300 mb-12 text-base md:text-lg max-w-3xl mx-auto">
          ICAETM 2026 will be held at PVG's College of Engineering, Technology and Management, Pune, India.
        </p>

        {/* Venue + Contact grid */}
        <div className="md:flex md:gap-8 items-start">
          
          {/* Map */}
          <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg mb-6 md:mb-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8610613606843!2d73.84985691076977!3d18.489951582525133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c004bc8e1d8f%3A0x12df641707ea878e!2sPVG%27S%20College%20Of%20Engineering%2C%20Technology%20And%20Management!5e0!3m2!1sen!2sin!4v1768400456078!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Conference Venue Map"
            />
          </div>

          {/* Contact details */}
          <div className="w-full md:w-1/2 bg-slate-800 rounded-2xl shadow-lg p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-violet-400 mb-4">Contact Details</h3>
            
            <p className="text-gray-200 mb-2">
              Venue: PVG's College of Engineering, Technology & Management, Pune, India
            </p>
            
            <p className="text-gray-200 mb-2">
              <strong>Email:</strong> <a href="mailto:info@icaetm2026.com" className="text-sky-400 hover:underline">info@icaetm2026.com</a>
            </p>
            
            <p className="text-gray-200 mb-2">
              <strong>Phone:</strong> <a href="tel:+xxxxx" className="text-sky-400 hover:underline">+91 98765 43210</a>
            </p>
            
            <p className="text-gray-200">
              <strong>Website:</strong> <a href="https://icaetm2026.com" target="_blank" className="text-sky-400 hover:underline">www.icaetm2026.com</a>
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
