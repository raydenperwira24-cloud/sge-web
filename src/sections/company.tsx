"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Company() {
  return (
    <section className="py-28 bg-white">

      {/* GREETING */}
      <Greeting />

      <VisionMission />

      {/* BOARD */}
      <Board />

      <Divider />

      <HistoryTimeline />
      <CoreValues />
        

      <Divider />

      <Section
        id="experience"
        title="Experience"
        desc="Decades of experience serving global industries."
      />

      <Divider />

      <Compliance />

    </section>
  );
}

function Compliance() {
  const items = [
    {
      title: "ISO 9001",
      desc: "Quality Management System",
      image: "/compliance/iso9001.png",
    },
    {
      title: "ISO 14001",
      desc: "Environmental Management",
      image: "/compliance/iso14001.png",
    },
    {
      title: "ISO 45001",
      desc: "Occupational Health & Safety",
      image: "/compliance/iso45001.png",
    },
  ];

  return (
    <section id="compliance" className="max-w-6xl mx-auto px-6 py-20">

      <p className="text-sm tracking-widest text-gray-400 uppercase mb-2">
        Company
      </p>

      <h2 className="text-4xl font-semibold mb-12">
        Compliance & Certification
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {items.map((item, i) => (
          <div
            key={i}
            className="p-6 border rounded-4xl hover:shadow-lg transition"
          >
            <div className="relative w-full h-100 mb-5">
              <img
                src={item.image}
                className="object-contain w-full h-full"
              />
            </div>

            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-2">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}



function HistoryTimeline() {
  const timeline = [
    {
      year: "2001",
      title: "Company Founded",
      desc: "Mulai didirikan dengan menyewa workshop dan fasilitas mesin di Balai Pelatihan Kerja.",
    },
    {
      year: "2003",
      title: "Rent an Office",
      desc: "Pindah dan menempati office dan workshop baru dengan menyewa di Jl.Raya Klari no.421 dan penambahan fasilitas mesin yang jauh lebih memadai",
    },
    {
      year: "2004",
      title: "Evolved",
      desc: "Penambahan area Fabrikasi dan Mesin CNC, memulai pembuatan Mesin Penggunaan Khusus (Special Purpose Machine)",
    },
    {
      year: "2005",
      title: "Consistency",
      desc: "Mulai masuk dalam pengerjaan komponen standar industri (OEMM) otomotif, musik dan lainnya. Penambahan area produksi untuk fabrikasi dan material cutting",
    },
    {
      year: "2009",
      title: "Opening Officially",
      desc: "Pembukaan kantor perwakilan di Delta Mas-Cikarang. Membeli lahan dan bangunan seluas 4500m di Jl.Raya Klari no.421. Memulai memasarkan self Brand 'SugLift' untuk Table Lifter pada pasar lokal. Membeli penambahan Machining Centre dan CNC Lathe",
    },
    {
      year: "2012",
      title: "Penambahan Area Assembling"
    },
    {
      year: "2013",
      title: "Penambahan Mesin",
      desc: "Penambahan mesin CNC & Quality Manufacturing Equipment (CMM, Harding Tester, Roughing Tester, Dll.)",
    },
    {
      year: "2014",
      title: "a new one",
      desc: "Dibuka workshop di daerah BTJ",
    },
    {
      year: "2015",
      title: "Upgrade final machine",
      desc: "Pembelian mesin mempunyai teknologi 5-Axis",
    },
  ];

  return (
    <section id="history" className="max-w-6xl mx-auto px-6 py-28">

      {/* HEADER */}
      <div className="mb-20">
        <p className="text-sm tracking-widest text-gray-400 uppercase mb-2">
          Company
        </p>
        <h2 className="text-4xl font-semibold">
          Our Journey
        </h2>
      </div>

      {/* TIMELINE */}
      <div className="relative">

        {/* LINE */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gray-200 -translate-x-1/2"></div>

        <div className="space-y-20">

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >

              {/* DOT */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-green-700 rounded-full -translate-x-1/2"></div>

              {/* CONTENT */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-10">

                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition">

                  <p className="text-sm text-green-700 font-semibold mb-1">
                    {item.year}
                  </p>

                  <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}
//////////////////////////
// 🔥 BOARD SECTION (UPGRADE)
//////////////////////////

function Greeting() {
  return (
    <section
      id="company-intro"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* FOTO DIREKTUR */}
        <div className="relative w-full h-[650px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/board/director1.jpg"
            alt="Director"
            fill
            className="object-cover"
            priority
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* TEXT */}
        <div>

          <p className="text-sm tracking-widest text-gray-400 uppercase mb-3">
            Message from Director
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            Integritas dalam memberikan pelayanan
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Kami telah beroperasi sejak tahun 2001, memberikan solusi dan layanan optimal pada pelanggan berupa layanan engineering dan menghasilkan produk-produk unik yang mendukung produktifitas dan proses manufaktur. Untuk itu, kami secara terus menerus berupaya meningkatkan kemampuan baik dari segi tekhnologi, sumber daya manusia dan sistem manajemen agar selalu bisa menjadi bagian penting pada industri manufaktur yang terus tumbuh dan berkembang dengan pesat.
         Kami akan terus mendukung industri manufaktur dengan berkontribusi aktif menjadi mitra strategis untuk mengembangkan bisnis dan perusahaan Anda.

          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            We have been operating since 2001, by giving the solutions and optimal services to customer as engineering servicer, And producess, So that we are constantly working to improve the ability from technology, human resources and management system so can always be an improtant part of the manufacturing industry that grow and develop so fast. We will support the manufacturing industry by active contributing and become a strategic partner to develop your business and company.
          </p>

          {/* SIGNATURE */}
          <div className="mt-8">
            <p className="font-semibold text-gray-800">
              Muhammad Hasyim
            </p>
            <p className="text-sm text-gray-500">
              President Director
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

function Board() {
  const members = [
    {
      name: "Muhammad Hasyim",
      role: "President Director",
      image: "/board/director.jpg",
    },
    {
      name: "Aceng Suhendi",
      role: "General Manager",
      image: "/board/ops.jpg",
    },
    {
      name: "Yuyun Yuningsih",
      role: "Finance & Human Resources",
      image: "/board/yuyun.png",
    },
  ];

  return (
    <section id="board" className="max-w-6xl mx-auto px-6 py-20">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="text-sm tracking-widest text-gray-400 uppercase mb-2">
          Company
        </p>

        <h2 className="text-4xl font-semibold mb-12">
          Board of Direction
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-8">

          {members.map((m, i) => (
            <motion.div
              key={i}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {/* FOTO */}
              <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-gray-200">

                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {/* overlay subtle */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* INFO */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{m.name}</h3>
                <p className="text-sm text-gray-500">{m.role}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </motion.div>
    </section>
  );
}

//////////////////////////
// SECTION LAIN (TETAP)
//////////////////////////

function Section({ id, title, desc }: any) {
  return (
    <motion.div
      id={id}
      className="max-w-5xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <p className="text-sm tracking-widest text-gray-400 mb-2 uppercase">
        Company
      </p>
      <h2 className="text-4xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600 max-w-2xl">{desc}</p>
    </motion.div>
  );
}

function Divider() {
  return <div className="h-px bg-gray-200 max-w-5xl mx-auto" />;
}

function VisionMission() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      <div className="grid md:grid-cols-2 gap-16">

        {/* VISI */}
        <div>
          <p className="text-sm tracking-widest text-gray-400 uppercase mb-3">
            Vision
          </p>

          <h3 className="text-3xl font-semibold mb-4">
            Perusahaan Manufaktur yang Unggul dan Efisien
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Menjadi yang terdepan dalam layanan engineering dan menghasilkan produk yang berorientasi pada QCDSE (Quality, Cost, Delivery, Safety, Environment) untuk memberikan kontribusi margin dan kepuasan pelanggan.
          </p>

          <p className="text-gray-200 font-italic leading-relaxed">
            Leading company in engineering services and make product with QCDSE (Quality, Cost, Delivery, Safety, Environment) oriented for giving to customer margin contribution satisfaction.
          </p>
        </div>

        {/* MISI */}
        <div>
          <p className="text-sm tracking-widest text-gray-400 uppercase mb-3">
            Mission
          </p>

          <h3 className="text-3xl font-semibold mb-6">
            Our Commitment Mission
          </h3>

          <ul className="space-y-4 text-gray-600">
            <li>• Memberikan layanan pembuatan barang berkualitas sesuai dengan kebutuhan pelanggan</li>
            
          </ul>

          <ul className="space-y-4 text-gray-300">
            <li>• Deliver high-quality products with precision and consistency as client need</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

function CoreValues() {
  const values = [
    {
      title: "Integritas",
      desc: "Kami mengutamakan Transparansi, Kejujuran, dan Prinsip yang dipegang teguh dalam setiap proses.",
    },
    {
      title: "Presisi",
      desc: "Kami fokus dalam konsistensi juga akurasi untuk memberikan hasil yang terbaik.",
    },
    {
      title: "Inovasi",
      desc: "Kami berkembang seiring dengan kemajuan di bidang Teknologi dan menciptakan solusi untuk Industri.",
    },
    {
      title: "Komitmen",
      desc: "Kami ber-dedikasi untuk tetap memberi kepuasan pelanggan dan menjalin hubungan erat.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-28">

      {/* HEADER */}
      <div className="mb-20">
        <p className="text-sm tracking-widest text-gray-400 uppercase mb-2">
          Company
        </p>
        <h2 className="text-4xl font-semibold">
          Core Values
        </h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {values.map((v, i) => (
          <motion.div
            key={i}
            className="group relative border border-gray-100 rounded-xl p-8 bg-white hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >

            {/* NUMBER (JAPAN STYLE MINIMAL) */}
            <span className="absolute top-4 right-6 text-5xl font-bold text-gray-100">
              {`0${i + 1}`}
            </span>

            {/* TITLE */}
            <h3 className="text-xl font-semibold mb-3">
              {v.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {v.desc}
            </p>

            {/* UNDERLINE HOVER */}
            <div className="mt-6 w-0 h-[2px] bg-green-700 group-hover:w-full transition-all duration-300"></div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}