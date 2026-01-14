export default function Speakers(){
  const speakers=['Dr. A. Kumar','Prof. J. Smith','Dr. L. Chen','Dr. M. Rao']
  return(
    <section id="speakers" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-10">Keynote Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {speakers.map((s,i)=>(
            <div key={i} className="p-6 rounded-2xl bg-slate-800 hover:bg-slate-700 transition">
              <div className="h-40 bg-slate-700 rounded-xl mb-4" />
              <h3 className="text-xl font-medium">{s}</h3>
              <p className="text-sm text-slate-400">International Speaker</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}