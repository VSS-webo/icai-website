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

        {/* ===== Mode of Payment ===== */}
        <div className="mt-12 border border-gray-700 rounded-xl p-6 md:p-8">

          <h3 className="text-2xl font-medium text-white mb-6 text-center">
            Mode of Payment
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-gray-300 text-sm md:text-base">

            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Bank Name</span>
              <span className="text-white font-medium">Bank of India</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Branch</span>
              <span className="text-white font-medium">Swargate, Pune</span>
            </div>

            
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Account Number</span>
              <span className="text-white font-medium">050810110003595</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">IFSC Code</span>
              <span className="text-white font-medium">BKID0000508</span>
            </div>

            <div className="flex justify-between border-b sm:col-span-2 border-b border-gray-700 pb-2">
              <span className="text-gray-400">Account Name</span>
              <span className="text-white font-medium">
                PVGCOET ALLIED ACTIVITES CENTER
              </span>
            </div>

          </div>

          {/* Optional note */}
          <p className="text-gray-400 text-xs md:text-sm mt-6 text-center">
            * Transaction charges, if any, shall be borne by the participant.
            Please retain the payment receipt for verification during registration.
          </p>

        </div>


        {/* ===== Notes ===== */}
        <div className="mt-10 max-w-5xl mx-auto 
        border border-gray-700 
        border-t-2 border-t-indigo-500 
        rounded-xl p-8 md:p-10">


          <h3 className="text-2xl font-medium text-white mb-4">
            Note
          </h3>

          <ul className="list-disc pl-5 space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">

            <li>
              Uploading of articles will be done through <span className="text-white font-medium">Microsoft CMT</span>.
            </li>

            <li>
              The paper should be submitted with a plagiarism report of up to 15%.
            </li>

            <li>
              The conference registration fees do not include the journal publication charges.
            </li>

            <li>
              Papers should be written in <span className="text-white font-medium">English</span>, and page limits shall be
              followed as per the respective journal policy.
            </li>

            <li>
              Conference registration is mandatory for at least <span className="text-white font-medium">one author</span> and
              must be completed before the registration deadline.
            </li>

            <li>
              Participants across the globe may present their work in
              <span className="text-white font-medium"> online or offline mode</span> as per their preference.
            </li>

            <li>
              High-quality accepted and presented papers will be considered for recommendation to
              <span className="text-white font-medium"> Scopus-indexed journals</span> after an additional peer-review process.
            </li>

            <li>
              Awards will be presented for the <span className="text-white font-medium">best papers</span>.
            </li>

            <li>
              All updates will be communicated via the conference email ID:
              <span className="text-white font-medium"> icaetm2026@pvgcoet.ac.in</span>
            </li>

          </ul>
      </div>



      </div>
    </section>
  )
}
