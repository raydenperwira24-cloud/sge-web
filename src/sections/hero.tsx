"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

type Slide = {
  id: string;
  type: "image" | "video";
  src: string;
  title: string;
  subtitle: string;
  duration?: number;
};

const slides: Slide[] = [
  {
    id: "1",
    type: "video",
    src: "/hero/hero5.mp4",
    title: "",
    subtitle: "",
    duration: 11500,
  },
  {
    id: "2",
    type: "video",
    src: "/hero/hero-video.mp4",
    title: "Advanced Technology",
    subtitle: "Efisiensi dan inovasi industri",
    duration: 4000,
  },
  {
    id: "3",
    type: "image",
    src: "/hero/hero1.png",
    title: "Trusted Partner",
    subtitle: "",
    duration: 5000,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const { scrollY } = useScroll();

  // PARALLAX
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  const next = () => setIndex((p) => (p + 1) % slides.length);

  useEffect(() => {
    const slide = slides[index];
    const duration = slide.duration || 5000;

    setProgress(0);

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + 100 / (duration / 50);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [index]);

  // TEXT SPLIT (per huruf)
  const letters = slides[index].title.split("");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* BACKGROUND PARALLAX */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          style={{ y }}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {slides[index].type === "image" ? (
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[index].src})` }}
            />
          ) : (
            <video
              src={slides[index].src}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          )}

          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-semibold text-white flex flex-wrap">
          {letters.map((l, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
            >
              {l}
            </motion.span>
          ))}
        </h1>

        <motion.p
          key={slides[index].subtitle}
          className="text-xl text-gray-300 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {slides[index].subtitle}
        </motion.p>
      </div>

      {/* PROGRESS BAR */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/20">
        <div
          className="h-full bg-white"
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  );
}