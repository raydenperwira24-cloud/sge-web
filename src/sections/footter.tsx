"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f14] text-white pt-24 pb-10">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-semibold tracking-wide">
            PT. Surya Gemilang Engineering
          </h2>

          <p className="text-gray-400 text-sm mt-4 leading-relaxed">
            Precision engineering company delivering high-quality manufacturing
            solutions for industrial needs with international standards.
          </p>

          <p className="text-gray-500 text-xs mt-6">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Company
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="#board">Board of Direction</Link></li>
            <li><Link href="#history">History</Link></li>
            <li><Link href="#experience">Experience</Link></li>
            <li><Link href="#compliance">Compliance</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Services
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="#job-order">Job Order</Link></li>
            <li><Link href="#maspro">Maspro</Link></li>
            <li><Link href="#maintenance">Maintenance Engineering</Link></li>
            <li><Link href="#production">Production</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Contact
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li>📍 Karawang, Indonesia</li>
            <li>📞 +62-267-438-270</li>
            <li>✉ adm.marketing@suryagemilang.co.id</li>
          </ul>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10 mt-16 pt-6 text-center text-gray-500 text-xs">
        Designed with precision & engineering mindset
      </div>

    </footer>
  );
}