export default function ProductionPage() {
  return (
    <main className="pt-40 px-10 max-w-7xl mx-auto">

      <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3">
        Facility
      </p>

      <h1 className="text-5xl font-semibold mb-6">
        Production Facility
      </h1>

      <p className="text-gray-600 max-w-3xl leading-relaxed mb-16">
        Fasilitas produksi modern dengan dukungan mesin machining,
        fabrication, welding dan automation untuk memenuhi kebutuhan industri.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="border rounded-3xl h-72"></div>
        <div className="border rounded-3xl h-72"></div>
        <div className="border rounded-3xl h-72"></div>

      </div>

    </main>
  );
}