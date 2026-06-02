
"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

     try {

    await emailjs.send(
      "service_bkvf6cd",
      "template_6grn4zb",
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      "QU3D7rjASBdRv3TkX"
    );

    alert("Message sent successfully!");

    formRef.current?.reset();

  } catch (error) {

    alert("Failed to send message.");

  } finally {

    setLoading(false);

  }
}

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="pt-40 pb-24 border-b border-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <p className="text-l-black-3x1 font-Bold tracking-[1.5em] uppercase text-gray-400 mb-1">
              Contact
            </p>

          </motion.div>

        </div>

      </section>

      {/* CONTENT */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            <h2 className="text-3xl font-semibold mb-8">
              PT. Surya Gemilang Engineering
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">

              <div className="flex items-start gap-4">

                <span className="text-green-700 text-xl">
                  📍
                </span>

                <p>
                  Jl. Raya Klari No.421,
                  Gintungkerta, Kec. Klari,
                  Karawang, Jawa Barat 41371
                </p>

              </div>

              <div className="flex items-center gap-4">

                <span className="text-green-700 text-xl">
                  📞
                </span>

                <p>
                  +62 267 983270
                </p>

              </div>

              <div className="flex items-center gap-4">

                <span className="text-green-700 text-xl">
                  ✉
                </span>

                <p>
                  adm.marketing@suryagemilang.co.id
                </p>

              </div>

            </div>

            {/* BUSINESS HOURS */}
            <div
              className="
                mt-10
                p-8
                rounded-3xl
                bg-gray-50
                border
                border-gray-100
              "
            >

              <p className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4">
                Business Hours
              </p>

              <p className="text-gray-800 font-medium">
                Monday - Friday
              </p>

              <p className="text-gray-500 mt-1">
                08:00 - 17:00
              </p>

            </div>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/6281310843394"
              target="_blank"
              className="
                inline-flex
                items-center
                gap-3
                mt-8
                bg-green-700
                hover:bg-green-800
                text-white
                px-7
                py-4
                rounded-2xl
                transition
                shadow-lg
              "
            >
              Chat via WhatsApp
            </a>

          </motion.div>

          {/* FORM */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="
              bg-white
              border
              border-gray-100
              rounded-[32px]
              p-10
              shadow-sm
              space-y-7
            "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            {/* NAME */}
            <div>

              <label className="block text-sm mb-3 text-gray-600">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="
                  w-full
                  border
                  border-gray-200
                  p-4
                  rounded-2xl
                  focus:outline-none
                  focus:border-green-700
                "
              />

            </div>

            {/* EMAIL */}
            <div>

              <label className="block text-sm mb-3 text-gray-600">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="
                  w-full
                  border
                  border-gray-200
                  p-4
                  rounded-2xl
                  focus:outline-none
                  focus:border-green-700
                "
              />

            </div>

            {/* MESSAGE */}
            <div>

              <label className="block text-sm mb-3 text-gray-600">
                Your Message
              </label>

              <textarea
                name="message"
                required
                rows={6}
                placeholder="Write your message..."
                className="
                  w-full
                  border
                  border-gray-200
                  p-4
                  rounded-2xl
                  focus:outline-none
                  focus:border-green-700
                "
              />

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-green-700
                hover:bg-green-800
                text-white
                py-4
                rounded-2xl
                transition
                font-medium
                shadow-lg
              "
            >
              {loading
                ? "Sending..."
                : "Send Message"}
            </button>

          </motion.form>

        </div>

      </section>

      {/* MAP */}
      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <div
            className="
              overflow-hidden
              rounded-[32px]
              border
              border-gray-100
              shadow-sm
            "
          >

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3152237102595!2d107.345682!3d-6.3532226000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69768587c5756b%3A0xc7135cf65ab8cf4!2sPT.%20Surya%20Gemilang%20Engineering!5e0!3m2!1sid!2sid!4v1778040669843!5m2!1sid!2sid"
              className="w-full h-[500px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </section>

    </main>
  );
}


