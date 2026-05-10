"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -90;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
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
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex flex-col items-center">
          <Image src="/logo.png" alt="logo" width={220} height={250} />
        </Link>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-14 text-sm font-medium">

          {/* MEGA MENU */}
          <div
            onMouseEnter={() => setActive("mega")}
            onMouseLeave={() => setActive(null)}
            className="relative"
          >
            <button className="flex items-center gap-1 group">
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
                  className="absolute left-1/2 -translate-x-1/2 top-12 w-[720px] bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl p-8 grid grid-cols-3 gap-6"
                >
                  <div>
                    <p className="text-xs text-gray-400 mb-3 uppercase">
                      Services
                    </p>
                    <MegaItem label="Job Order" href="/job-order" />
                    <MegaItem label="Maspro" href="/maspro" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-3 uppercase">
                      Solutions
                    </p>
                    <MegaItem label="Maintenance" href="/maintenance" />
                  </div>

                  <div className="bg-gray-100 rounded-xl overflow-hidden">
                    <img
                      src="/industrial.jpg"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavItem label="Facility" active={active} setActive={setActive}>
            <DropdownBtn label="Production" onClick={() => goTo("production")} />
            <DropdownBtn label="Quality Control" onClick={() => goTo("quality-control")} />
          </NavItem>

          <NavLink label="Client" onClick={() => goTo("client")} />

          <Link
      href="/table-lift"
        className="relative group"
>
      Table Lift

       <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-700 group-hover:w-full transition-all"></span>
      </Link>

          <button
            onClick={() => goTo("contact")}
            className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-full"
          >
            Contact
          </button>
        </div>

        {/* MOBILE */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div className="md:hidden bg-white p-6 space-y-4 shadow-lg">
            <p onClick={() => goTo("production")}>Production</p>
            <p onClick={() => goTo("quality-control")}>Quality Control</p>
            <p onClick={() => goTo("client")}>Client</p>
            <p onClick={() => goTo("contact")}>Contact</p>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function MegaItem({ label, href }: any) {
  return (
    <Link href={href} className="block mb-4 hover:translate-x-1 transition">
      <p className="font-semibold text-sm hover:text-green-700">{label}</p>
    </Link>
  );
}

function NavItem({ label, children, active, setActive }: any) {
  return (
    <div
      onMouseEnter={() => setActive(label)}
      onMouseLeave={() => setActive(null)}
      className="relative"
    >
      <button className="flex items-center gap-1">
        {label}
        <ChevronDown size={14} />
      </button>

      <AnimatePresence>
        {active === label && (
          <motion.div className="absolute top-10 left-0 bg-white shadow-xl rounded-xl p-3 w-56">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DropdownBtn({ label, onClick }: any) {
  return (
    <button onClick={onClick} className="block w-full text-left p-3 hover:bg-gray-100">
      {label}
    </button>
  );
}

function NavLink({ label, onClick }: any) {
  return (
    <button onClick={onClick} className="relative group">
      {label}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-700 group-hover:w-full transition-all"></span>
    </button>
  );
}