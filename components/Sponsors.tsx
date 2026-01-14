export default function Sponsors(){
  return(
    <section className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-semibold mb-6">Sponsors & Partners</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[1,2,3,4].map(i=> (
          <div key={i} className="h-20 bg-slate-800 rounded-xl" />
        ))}
      </div>
    </section>
  )
}