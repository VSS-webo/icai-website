export default function Venue(){
  return(
    <section id="venue" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-6">Venue</h2>
        <p className="text-slate-300 mb-4">PVG COET, Pune, India</p>
        <div className="h-64 rounded-2xl bg-slate-800 flex items-center justify-center">
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
      </div>
    </section>
  )
}