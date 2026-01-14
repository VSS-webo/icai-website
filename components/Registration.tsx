'use client'

export default function Registration() {
  return (
    <section id="Registration" className="py-16 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">

        {/* Section heading */}
        <h2 className="text-4xl md:text-5xl font-normal  text-center mb-4 text-white">
          Registration Details
        </h2>

        {/* Description */}
        <p className="text-center text-gray-300 mb-10 text-base md:text-lg max-w-3xl mx-auto">
          Registration fees for ICAETM 2026 participants. Early bird rates apply before the specified date.
        </p>

        {/* Table wrapper with border */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-700 rounded-xl text-left">
            <thead>
              <tr className="bg-slate-800 text-gray-200">
                <th className="py-3 px-4 rounded-tl-lg border-r border-gray-700">Participant</th>
                <th className="py-3 px-4 border-r border-gray-700">Early Bird (Before DD/MM/2026)</th>
                <th className="py-3 px-4 rounded-tr-lg">Registration (After DD/MM/2026)</th>
              </tr>
            
            
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr className="hover:bg-slate-700 transition-colors duration-200">
                <td className="py-3 px-4 text-gray-100 border-r border-gray-700">International Delegates</td>
                <td className="py-3 px-4 text-gray-100 border-r border-gray-700">$ 100 USD</td>
                <td className="py-3 px-4 text-gray-100">$ 130 USD</td>
              </tr>
              <tr className="hover:bg-slate-700 transition-colors duration-200">
                <td className="py-3 px-4 text-gray-100 border-r border-gray-700">Industry Professionals</td>
                <td className="py-3 px-4 text-gray-100 border-r border-gray-700">Rs. 8,000/-</td>
                <td className="py-3 px-4 text-gray-100">Rs. 10,000/-</td>
              </tr>
              <tr className="hover:bg-slate-700 transition-colors duration-200">
                <td className="py-3 px-4 text-gray-100 border-r border-gray-700">Academician</td>
                <td className="py-3 px-4 text-gray-100 border-r border-gray-700">Rs. 7,000/-</td>
                <td className="py-3 px-4 text-gray-100">Rs. 8,500/-</td>
              </tr>
              <tr className="hover:bg-slate-700 transition-colors duration-200">
                <td className="py-3 px-4 text-gray-100 border-r border-gray-700">PG & UG Students</td>
                <td className="py-3 px-4 text-gray-100 border-r border-gray-700">Rs. 5,000/-</td>
                <td className="py-3 px-4 text-gray-100">Rs. 6,000/-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
