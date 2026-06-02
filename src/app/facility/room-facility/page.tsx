export default function RoomFacilityPage() {
  return (
    <main className="pt-40 px-10 max-w-7xl mx-auto">

      <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3">
        Facility
      </p>

      <h1 className="text-5xl font-semibold mb-6">
        Room Facility
      </h1>

      <p className="text-gray-600 max-w-3xl leading-relaxed mb-16">
        Area kantor, meeting room, engineering room,
        dan fasilitas pendukung operasional perusahaan.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="border rounded-3xl h-72"></div>
        <div className="border rounded-3xl h-72"></div>
        <div className="border rounded-3xl h-72"></div>

      </div>

    </main>
  );
}