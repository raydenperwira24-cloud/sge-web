"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTo = (id: string) => {
    const el = document.getElementById(id);

    if (!el) return;

    const yOffset = -90;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-md py-2"
          : "bg-white/30 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-[1550px] mx-auto px-10 h-[88px] flex justify-between items-center overflow-visible">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-6"
        >
          <Image
            src="/logo3.png"
            alt="logo"
            width={155}
            height={155}
            className="object-contain scale-125 drop-shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
          />

          <div className="leading-none -ml-1">

            <h1 className="text-sm md:text-base font-medium tracking-[0.25em] text-black whitespace-nowrap">
              PT. SURYA GEMILANG
            </h1>

            <div className="flex justify-center ms-2">
              <p className="text-[10px] uppercase tracking-[0.40em] text-black-500">
                Engineering
              </p>
            </div>

          </div>
        </Link>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-14 text-sm font-medium ml-auto">

          {/* LANGUAGE */}
          <button
  onClick={() =>
    setLang(lang === "id" ? "en" : "id")
  }
  className="relative overflow-hidden border border-white/20 px-4 py-2 rounded-full text-sm backdrop-blur-md transition group"
>
            <span className="relative z-10">
              {lang === "id" ? "EN" : "ID"}
            </span>

            <div className="absolute inset-0 bg-green-700 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>
          </button>

          {/* PRODUCT & SERVICES */}
          <div
            onMouseEnter={() => setActive("mega")}
            onMouseLeave={() => setActive(null)}
            className="relative"
          >
            <button className="flex items-center gap-1 relative group">

              Product & Services

              <ChevronDown size={14} />

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-700 group-hover:w-full transition-all"></span>

            </button>

            <AnimatePresence>
  {active === "mega" && (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="absolute left-1/2 -translate-x-1/2 top-12 w-[980px] bg-white/95 backdrop-blur-xl shadow-2xl rounded-[30px] p-10"
    >

      {/* PRODUCT */}
      <div className="mb-10">

        <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-4">
          Product
        </p>

        <h2 className="text-4xl font-semibold mb-8">
          Job Order
        </h2>

        <div className="grid grid-cols-5 gap-4">

          <MegaProductItem
            title="SPM"
            desc="Special Purpose Machine"
            image="/menu/spmm.png"
            href="/job-order/spm"
          />

          <MegaProductItem
            title="Industrial Parts"
            desc="Industrial Components"
            image="/menu/industrial-parts.png"
            href="/job-order/industrial-parts"
          />

          <MegaProductItem
            title="Precision"
            desc="High Precision Machining"
            image="/menu/precision.png"
            href="/job-order/precision"
          />

          <MegaProductItem
            title="OEM"
            desc="Original Equipment Manufacturer"
            image="/menu/oem.png"
            href="/job-order/oem-parts"
          />

          <MegaProductItem
            title="Maintenance"
            desc="Maintenance Engineering"
            image="/menu/Picture4.png"
            href="/job-order/maintenance"
          />

        </div>
      </div>

      {/* LINE */}
      <div className="border-t border-gray-200 my-8"></div>

      {/* SERVICES */}
      <div>

        <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-4">
          Services
        </p>

        <h2 className="text-4xl font-semibold mb-8">
          MassPro
        </h2>

        <div className="grid grid-cols-3 gap-4 max-w-[620px]">

          <MegaProductItem
            title="SUBCONT PRODUCT"
            desc="Massive Production harus mengisi Formulir pendaftaran barang"
            image="/menu/Picture5.png"
            href="/masspro/table-lift"
          />

        </div>
      </div>

    </motion.div>
  )}
</AnimatePresence>
          </div>

          {/* FACILITY */}
         <NavItem label="Facility" active={active} setActive={setActive}>

  <DropdownLink
    label="Production"
    href="/facility/production"
  />

  <DropdownLink
    label="Quality Control"
    href="/facility/quality-control"
  />

  <DropdownLink
    label="Room Facility"
    href="/facility/room-facility"
  />

</NavItem>
          {/* CLIENT */}
          <Link
  href="/client"
  className="relative group"
>
  Client

  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-700 group-hover:w-full transition-all"></span>
</Link>

          {/* TABLE LIFT */}
          <Link
            href="/table-lift"
            className="relative group"
          >
            Table Lift

            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-700 group-hover:w-full transition-all"></span>
          </Link>

          {/* CONTACT */}
          <Link
  href="/contact"
  className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-full transition-all"
>
  Contact
</Link>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white p-6 space-y-4 shadow-lg"
          >

            <p onClick={() => goTo("production")}>
              Production
            </p>

            <p onClick={() => goTo("quality-control")}>
              Quality Control
            </p>

            <p onClick={() => goTo("client")}>
              Client
            </p>

            <p onClick={() => goTo("contact")}>
              Contact
            </p>

          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}

////////////////////////////////////////////////////////
// NAV ITEM
////////////////////////////////////////////////////////

function DropdownLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block w-full text-left p-3 rounded-lg hover:bg-gray-100 transition-all"
    >
      {label}
    </Link>
  );
}

function NavItem({
  label,
  children,
  active,
  setActive,
}: any) {
  return (
    <div
      onMouseEnter={() => setActive(label)}
      onMouseLeave={() => setActive(null)}
      className="relative"
    >

      <button className="flex items-center gap-1 relative group">

        {label}

        <ChevronDown size={14} />

        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-700 group-hover:w-full transition-all"></span>

      </button>

      <AnimatePresence>
        {active === label && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-10 left-0 bg-white shadow-xl rounded-2xl p-3 w-56"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

////////////////////////////////////////////////////////
// DROPDOWN BTN
////////////////////////////////////////////////////////

function DropdownBtn({
  label,
  onClick,
}: any) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left p-3 rounded-xl hover:bg-gray-100 transition-all"
    >
      {label}
    </button>
  );
}

////////////////////////////////////////////////////////
// NAV LINK
////////////////////////////////////////////////////////

function NavLink({
  label,
  onClick,
}: any) {
  return (
    <button
      onClick={onClick}
      className="relative group"
    >

      {label}

      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-700 group-hover:w-full transition-all"></span>

    </button>
  );
}

////////////////////////////////////////////////////////
// PRODUCT CARD
////////////////////////////////////////////////////////

function MegaProductItem({
  title,
  desc,
  image,
  href,
}: {
  title: string;
  desc: string;
  image: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="grid grid-cols-5 gap-3"></div>

      {/* IMAGE */}
      <div className="h-24 bg-gray-100 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-105
            transition-transform
            duration-500
          "
        />

      </div>

      {/* CONTENT */}
      <div className="p-3">

        <h4 className="
          text-sm
          font-semibold
          text-gray-900
          mb-1
          group-hover:text-green-700
          transition-colors
        ">
          {title}
        </h4>

        <p className="text-[12px] text-gray-500 leading-relaxed">
          {desc}
        </p>

      </div>

    </Link>
  );
}