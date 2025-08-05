"use client";
import { useState, useEffect } from "react";

interface FlipNumberProps {
  start: number;
  max: number;
  step?: number;
  suffix?: string;
  speed?: number;
}

export default function FlipNumber({
  start,
  max,
  step = 10000,
  suffix = "",
  speed = 2000,
}: FlipNumberProps) {
  const [number, setNumber] = useState(start);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => {
        let next = prev + step;
        return next > max ? start : next;
      });
      setRotation((prev) => prev + 360); // rotate 360 each time
    }, speed);

    return () => clearInterval(interval);
  }, [start, max, step, speed]);

  return (
    <div
      className="inline-block text-5xl font-bold text-blue-900 transition-transform duration-700"
      style={{
        display: "inline-block",
        transform: `rotateX(${rotation}deg)`,
        transformOrigin: "center",
      }}
    >
      {number >= 1000 ? (number / 1000).toFixed(0) + "K" : number}
      {suffix}
    </div>
  );
}
