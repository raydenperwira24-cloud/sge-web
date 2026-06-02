"use client";

import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";

type Slide = {
  id: string;
  type: "image" | "video";
  src: string;

  title: {
    id: string;
    en: string;
  };

  subtitle: {
    id: string;
    en: string;
  };

  duration?: number;
};

const slides: Slide[] = [
  {
    id: "1",
    type: "video",
    src: "/hero/hero6.mp4",

    title: {
      id: "",
      en: "",
    },

    subtitle: {
      id: "",
      en: "",
    },

    duration: 8000,
  },

  {
    id: "2",
    type: "video",
    src: "/hero/hero-video.mp4",

    title: {
      id: "Teknologi Industri",
      en: "Advanced Technology",
    },

    subtitle: {
      id: "Efisiensi dan inovasi industri",
      en: "Industrial efficiency and innovation",
    },

    duration: 3500,
  },

  {
    id: "3",
    type: "image",
    src: "/hero/hero1.png",

    title: {
      id: "Mitra Terpercaya",
      en: "Trusted Partner",
    },

    subtitle: {
      id: "Dipercaya perusahaan global",
      en: "Trusted by global industries",
    },

    duration: 5000,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  const { lang } = useLanguage();

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const slide = slides[index];
    const duration = slide.duration || 5000;

    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          next();
          return 0;
        }

        return prev + 100 / (duration / 50);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* BACKGROUND */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          style={{ y }}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >

          {/* IMAGE / VIDEO */}
          {slides[index].type === "image" ? (
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slides[index].src})`,
              }}
            />
          ) : (
            <video
              src={slides[index].src}
              autoPlay
              muted
              loop
              preload="auto"
              playsInline
              className="w-full h-full object-cover"
            />
          )}

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/55" />
        </motion.div>
      </AnimatePresence>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        {/* TITLE */}
        <motion.h1
          key={slides[index].id + lang}
          className="text-5xl md:text-8xl font-semibold text-white flex flex-wrap leading-tight max-w-5xl"
        >
          {slides[index].title[lang]
            .split("")
            .map((letter: string, i: number) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.03,
                  duration: 0.5,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          key={slides[index].id + "-subtitle-" + lang}
          className="text-lg md:text-2xl text-gray-300 mt-8 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {slides[index].subtitle[lang]}
        </motion.p>

        {/* SLIDE INDICATOR */}
        <div className="flex gap-3 mt-14">

          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-[4px] rounded-full transition-all duration-500 ${
                i === index
                  ? "w-20 bg-white"
                  : "w-10 bg-white/30"
              }`}
            />
          ))}

        </div>
      </div>

      {/* PROGRESS BAR */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/10 z-20">

        <motion.div
          className="h-full bg-white"
          animate={{
            width: `${progress}%`,
          }}
          transition={{
            ease: "linear",
          }}
        />

      </div>
    </section>
  );
}