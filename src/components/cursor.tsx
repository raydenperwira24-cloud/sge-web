"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: any) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed w-6 h-6 border border-black rounded-full pointer-events-none z-[999] transition-transform duration-150"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`
      }}
    />
  );
}