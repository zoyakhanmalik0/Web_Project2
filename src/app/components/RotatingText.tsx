"use client"; // ✅ Required if using useState/useEffect in Next.js 13 app directory

import { useState, useEffect } from "react";

interface RotatingTextProps {
  texts: string[];
  fontSize?: string;
}

export default function RotatingText({ texts, fontSize }: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"in" | "out">("in");

  useEffect(() => {
    let fadeOut: NodeJS.Timeout;
    let next: NodeJS.Timeout;

    if (direction === "in") {
      fadeOut = setTimeout(() => setDirection("out"), 3000);
    } else {
      next = setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setDirection("in");
      }, 500);
    }

    return () => {
      clearTimeout(fadeOut);
      clearTimeout(next);
    };
  }, [direction, texts.length]);

  return (
    <span
      key={index}
      className={`text-red-500 font-bold w-full h-full p-2 sm:p-3 break-words whitespace-normal transition-all duration-1000 ease-in-out inline-block ${
        direction === "in" ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
      style={{
        display: "inline-block",
        fontSize: fontSize || "1.75rem",
        lineHeight: "1.1",
        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
      }}
    >
      {texts[index]}
    </span>
  );
}
