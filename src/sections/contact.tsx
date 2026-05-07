"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-28">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <p className="text-sm tracking-widest text-gray-400 uppercase mb-2">
          Contact
        </p>
        <h2 className="text-4xl font-semibold">
          Get In Touch
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl">
          Let’s discuss your project and create engineering solutions together.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >

          <h3 className="text-2xl font-semibold mb-6">
            PT. Surya Gemilang Engineering
          </h3>

          <div className="space-y-4 text-gray-600">

            <p>
              📍 Address: Jl. Raya Klari No.421, Gintungkerta, Kec. Klari, Karawang, Jawa Barat 41371
            </p>

            <p>
              📞 Phone: +62 267 983270
            </p>

            <p>
              ✉ Email: adm.marketing@suryagemilang.co.id
            </p>

          </div>

          {/* MINI CTA */}
          <div className="mt-10">
            <p className="text-sm text-gray-400 mb-2">
              Business Hours
            </p>
            <p className="text-gray-600">
              Monday - Friday : 08:00 - 17:00
            </p>
          </div>

        </motion.div>

        {/* FORM */}
        <motion.form
          className="space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-200 p-4 rounded-lg focus:outline-none focus:border-green-700"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-200 p-4 rounded-lg focus:outline-none focus:border-green-700"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full border border-gray-200 p-4 rounded-lg focus:outline-none focus:border-green-700"
          />

          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg transition w-full"
          >
            Send Message
          </button>

        </motion.form>

      </div>

      <a
        href="https://wa.me/6282298922278"
         className="inline-block mt-6 text-green-700"
         >
            Chat via WhatsApp
                           </a>

      {/* MAP */}
      <div className="mt-24 w-full h-[400px]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3152237102595!2d107.345682!3d-6.3532226000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69768587c5756b%3A0xc7135cf65ab8cf4!2sPT.%20Surya%20Gemilang%20Engineering!5e0!3m2!1sid!2sid!4v1778040669843!5m2!1sid!2sid"
    className="w-full h-full border-0 rounded-xl"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

    </section>
  );
}
