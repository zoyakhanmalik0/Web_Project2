"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RotatingTextProps {
  texts: string[];
  fontSize?: string;
}

export default function RotatingText({ texts, fontSize = "1.75rem" }: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const currentText = texts[index].split("");

  return (
    <div className="relative flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {currentText.map((char, i) => (
            <motion.span
              key={i}
              className="text-red-500 font-bold"
              style={{ fontSize, display: "inline-block" }}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: i * 0.05, // stagger effect
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
