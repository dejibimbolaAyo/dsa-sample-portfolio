export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center bg-[#151e27] overflow-hidden pt-0">
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[500px] h-[500px] bg-gradient-to-br from-[#232c3a] to-[#1a222c] rounded-2xl shadow-2xl flex items-center justify-center">
          <div className="w-64 h-64 bg-gradient-to-tr from-orange-400 to-yellow-300 opacity-80 rounded-2xl rotate-12"></div>
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full pt-32">
        <h1
          className="text-[8vw] md:text-[7vw] lg:text-[6vw] font-extrabold text-white leading-none tracking-tight text-center"
          style={{ letterSpacing: "-0.04em" }}
        >
          Dejibimbola
        </h1>
        <p className="mt-8 text-sm md:text-base tracking-widest text-white font-mono text-center">
          SOFTWARE ENGINEER, FRONT END & APP DEVELOPER.
        </p>
      </div>
      <div className="relative z-10 flex flex-col items-center pb-8 w-full">
        <p className="text-xs text-gray-400 tracking-widest mb-2">
          AS FEATURED IN
        </p>
        <div className="flex flex-row items-center space-x-8 opacity-80">
          <div className="w-24 h-6 bg-gray-700 rounded"></div>
          <div className="w-24 h-6 bg-gray-700 rounded"></div>
          <div className="w-24 h-6 bg-gray-700 rounded"></div>
          <div className="w-24 h-6 bg-gray-700 rounded"></div>
        </div>
      </div>
      <div className="absolute bottom-4 right-8 z-20">
        <div className="w-5 h-5 border-2 border-cyan-300 rounded-full"></div>
      </div>
    </section>
  );
}
